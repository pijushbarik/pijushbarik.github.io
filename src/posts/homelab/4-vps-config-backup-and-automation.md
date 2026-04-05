---
title: "Homelab/VPS backup and restore automation"
description: "How I back up VPS configs and service data, sync offsite with rsync, and restore quickly when needed."
tags:
  - homelab
  - selfhosted
  - linux
  - ubuntu-server
  - vps
  - shell-scripting
  - backup
  - restore
  - rsync
  - cron
  - disaster-recovery
published: true
publishDate: "05 Apr 2026"
lastModifiedDate: "05 Apr 2026"
---

After setting up my VPS as the public entry point for my homelab, I wanted a repeatable way to back up critical configs and service metadata.

This post documents the simple backup flow I currently use:

1. Collect important VPS configs and app data into a structured folder.
2. Archive that folder as a dated `.tar.gz` file.
3. Keep local retention limited.
4. Sync the backup directory to a second machine over SSH.
5. Restore from the backup directory when needed.

This is not a full disaster recovery system, but it is practical, scriptable, and good enough for my current setup.

All three scripts are available at [pijushbarik/vps-backup-scripts](https://github.com/pijushbarik/vps-backup-scripts).

## What I am backing up

The backup script collects a focused set of files from the VPS:

- Nginx config
  - `/etc/nginx/nginx.conf`
  - `/etc/nginx/sites-available`
  - `/etc/nginx/conf.d`
- WireGuard config
  - `/etc/wireguard/wg0.conf`
- SSH config and keys
  - `/etc/ssh/sshd_config`
  - `~/.ssh/authorized_keys` (if present)
- Sysctl tuning files
  - `/etc/sysctl.d/*.conf`
- Fail2ban config
  - `/etc/fail2ban/jail.local` (if present)
- Pocket ID SQLite data
  - `pocket-id.db`, `pocket-id.db-shm`, `pocket-id.db-wal` (if present)
- System documentation snapshots
  - installed packages (`dpkg --get-selections`)
  - enabled services (`systemctl list-unit-files --type=service --state=enabled`)

I store these under `/opt/vps-backup/data` with subdirectories (`nginx`, `wireguard`, `ssh`, `sysctl`, `fail2ban`, `pocketid`, `docs`) so restore mapping stays predictable.

## Backup script flow

The script is in `backup-scripts/backup.sh` (deployed on VPS at `/opt/vps-backup/backup.sh`).

### 1) Create/refresh backup folders

```sh
mkdir -p /opt/vps-backup/data/{nginx,wireguard,ssh,sysctl,fail2ban,pocketid,docs}
```

### 2) Copy config and data files

Most copies are done with `cp` and guarded with `2>/dev/null || true` where files can be optional.

Example:

```sh
sudo cp /etc/fail2ban/jail.local /opt/vps-backup/data/fail2ban/ 2>/dev/null || true
```

### 3) Generate documentation artifacts

```sh
dpkg --get-selections > /opt/vps-backup/data/docs/packages.list
systemctl list-unit-files --type=service --state=enabled > /opt/vps-backup/data/docs/enabled-services.txt
```

These two files are very useful during rebuilds because they capture package and service state.

### 4) Create versioned archive

The script creates a timestamped archive name:

```sh
vps-backup-YYYY-MM-DD-HH-MM-SS.tar.gz
```

Example command from script:

```sh
tar -czf vps-backup-2026-04-05-21-30-10.tar.gz data
```

### 5) Retention cleanup

Backups older than 7 days are deleted locally:

```sh
find /opt/vps-backup -name "vps-backup-*.tar.gz" -mtime +7 -delete
```

This keeps storage usage under control on a small VPS.

## Remote sync script

The remote sync script is in `backup-scripts/remote-sync.sh`.

It uses `rsync` over SSH to push everything from `/opt/vps-backup` to another machine.

Current behavior:

- source: `/opt/vps-backup`
- destination: remote host path
- SSH key auth (`-e "ssh -i <key-path>"`)
- transfer flags: `-avz --partial --progress`
- mirror mode with `--delete`

`--delete` is intentional here: if I delete old archives locally (7-day retention), the remote side is kept in sync with the same policy.

Example:

```sh
rsync -avz \
  --delete \
  --partial \
  --progress \
  -e "ssh -i /path/to/key/for/remote/server" \
  /opt/vps-backup/ <remote-user>@<remote-host>:/path/to/remote/backup/directory
```

## Restore script flow

The restore script is in `backup-scripts/restore.sh`.

It restores from `/opt/vps-backup/data` back to system locations.

### Restored components

- Nginx files to `/etc/nginx/`
- WireGuard `wg0.conf` to `/etc/wireguard/` with `chmod 600`
- SSH config to `/etc/ssh/` and `authorized_keys` to `~/.ssh/`
- Sysctl files to `/etc/sysctl.d/` then `sysctl --system`
- Fail2ban `jail.local` (if available)
- Pocket ID sqlite files into app data directory

### Service restarts after restore

The script restarts:

- `ssh`
- `fail2ban`
- `nginx`
- `wg-quick@wg0`

Then I validate manually with:

```sh
ss -tulpn
sudo nginx -t
sudo wg show
```

## Automation

I run both scripts chained together in a single cron job on the VPS.

```cron
30 3 * * * nice -n 10 /opt/vps-backup/backup.sh && nice -n 10 /opt/vps-backup/remote-sync.sh >/dev/null 2>&1
```

This runs daily at 03:30. A few things worth noting:

- `nice -n 10` lowers the CPU scheduling priority for both scripts, so they do not compete with other processes running on the VPS.
- `>/dev/null 2>&1` suppresses cron email output. The remote sync script appends its own log to `/opt/vps-backup/remote-sync.log`, so output is still captured there.

## Why this setup works for me

I wanted something lightweight and maintainable:

- no complex tooling
- easy to inspect with plain shell scripts
- low VPS resource usage
- fast restore for common incidents (bad config edits, service misconfiguration, accidental file changes)

## Next step: move VPS management to Ansible

In the next iteration, I plan to manage the VPS with Ansible playbooks and keep this shell-based backup flow as a fallback.

The idea is:

- keep system state in code (Nginx, WireGuard, SSH hardening, Fail2ban)
- use inventory + variables for environment-specific values
- run idempotent playbooks for setup and drift correction
- keep backup/restore scripts for emergency recovery and point-in-time snapshots

A practical model for me is:

1. Provision and configure with Ansible.
2. Continue periodic file/data backups for operational recovery.
3. Test both: `ansible-playbook` for rebuild and `restore.sh` for quick rollback.
