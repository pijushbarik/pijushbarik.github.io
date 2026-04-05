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

After setting up the VPS as the public entry point for my homelab (covered in the [previous post](/blog/homelab/3-access-outside-local-network)), I realized I had no backup of any of the configs on it. One bad edit to the Nginx config or WireGuard config and I'd have to reconfigure everything from scratch. So I wrote a few shell scripts to back up the important configs, archive them, and sync them to another machine.

The flow is simple:

1. Copy important config files and app data into a local folder on the VPS.
2. Archive that folder as a dated `.tar.gz`.
3. Sync it to another machine over SSH.
4. If something breaks, restore from the backup.

Nothing fancy, no third-party tools. Just shell scripts and cron.

All three scripts are available at [pijushbarik/vps-backup-scripts](https://github.com/pijushbarik/vps-backup-scripts).

## What I'm backing up

The backup script picks up these files:

- Nginx config
  - `/etc/nginx/nginx.conf`
  - `/etc/nginx/sites-available`
  - `/etc/nginx/conf.d`
- WireGuard config
  - `/etc/wireguard/wg0.conf`
- SSH config and authorized keys
  - `/etc/ssh/sshd_config`
  - `~/.ssh/authorized_keys`
- Sysctl tuning files
  - `/etc/sysctl.d/*.conf`
- Fail2ban config
  - `/etc/fail2ban/jail.local`
- Pocket ID SQLite database files
  - `pocket-id.db`, `pocket-id.db-shm`, `pocket-id.db-wal`
- A couple of useful system snapshots
  - installed packages (`dpkg --get-selections`)
  - enabled services (`systemctl list-unit-files --type=service --state=enabled`)

All of these end up under `/opt/vps-backup/data`, organized into subdirectories (`nginx`, `wireguard`, `ssh`, `sysctl`, `fail2ban`, `pocketid`, `docs`). That way the restore script can just mirror the same paths back.

## Backup script

The script is `backup.sh` (deployed at `/opt/vps-backup/backup.sh`).

### Create backup directories

```sh
mkdir -p /opt/vps-backup/data/{nginx,wireguard,ssh,sysctl,fail2ban,pocketid,docs}
```

### Copy the files

Most of it is just `cp`. For files that may not exist, I use `2>/dev/null || true` so the script doesn't fail if they're missing.

```sh
sudo cp /etc/fail2ban/jail.local /opt/vps-backup/data/fail2ban/ 2>/dev/null || true
```

### Snapshot packages and services

```sh
dpkg --get-selections > /opt/vps-backup/data/docs/packages.list
systemctl list-unit-files --type=service --state=enabled > /opt/vps-backup/data/docs/enabled-services.txt
```

These come in handy when rebuilding from scratch. Instead of trying to remember what was installed, you have a list to refer to.

### Create a timestamped archive

The script bundles everything into a `.tar.gz` with the date and time in the filename:

```sh
tar -czf vps-backup-2026-04-05-21-30-10.tar.gz data
```

### Clean up old archives

Local backups older than 7 days are removed:

```sh
find /opt/vps-backup -name "vps-backup-*.tar.gz" -mtime +7 -delete
```

The VPS doesn't have a lot of disk space, so this keeps things tidy.

## Remote sync

`remote-sync.sh` uses `rsync` over SSH to push `/opt/vps-backup` to another machine — in my case, my homelab server.

```sh
rsync -avz \
  --delete \
  --partial \
  --progress \
  -e "ssh -i /path/to/key/for/remote/server" \
  /opt/vps-backup/ <remote-user>@<remote-host>:/path/to/remote/backup/directory
```

`--delete` is there on purpose. Since old archives are already cleaned up locally after 7 days, I want the remote copy to reflect that too. `--partial` helps resume interrupted transfers, which is useful over slower connections.

The script appends output to `/opt/vps-backup/remote-sync.log`, so I can check sync history later.

## Restore

`restore.sh` reads from `/opt/vps-backup/data` and puts everything back where it belongs.

It copies:

- Nginx files back to `/etc/nginx/`
- WireGuard config to `/etc/wireguard/` and sets `chmod 600`
- SSH config to `/etc/ssh/` and `authorized_keys` to `~/.ssh/`
- Sysctl files to `/etc/sysctl.d/` and reloads them with `sysctl --system`
- Fail2ban and Pocket ID files to their respective locations

Then restarts the affected services:

```sh
sudo systemctl restart ssh
sudo systemctl restart fail2ban
sudo systemctl restart nginx
sudo systemctl restart wg-quick@wg0
```

After that, I check things manually:

```sh
ss -tulpn
sudo nginx -t
sudo wg show
```

## Automation

Both scripts are chained in a single cron job:

```cron
30 3 * * * nice -n 10 /opt/vps-backup/backup.sh && nice -n 10 /opt/vps-backup/remote-sync.sh >/dev/null 2>&1
```

Runs at 03:30 every night. `&&` means the sync only happens if the backup succeeds. `nice -n 10` keeps the CPU priority low so it doesn't interfere with anything else running on the VPS. Output is suppressed via `>/dev/null 2>&1` since the sync log already captures what matters.

## Why not something heavier?

I considered tools like Restic or BorgBackup, but for a VPS running Nginx and WireGuard, the config files are small and the real risk is misconfiguration, not data loss. A few shell scripts are easier to inspect, easier to debug, and have no dependencies. Good enough for what I need.

## What's next

I plan to move VPS provisioning to Ansible, so the configs are defined in code and the server can be recreated from scratch with a single playbook run. When that's done, the backup scripts become more of a safety net for app data and point-in-time config snapshots rather than the primary recovery method.

The plan would be something like:

1. Use Ansible to provision and configure the VPS from scratch.
2. Keep the backup scripts running for operational recovery and app data.
3. For any incident, use `restore.sh` for a quick rollback or `ansible-playbook` for a full rebuild.
