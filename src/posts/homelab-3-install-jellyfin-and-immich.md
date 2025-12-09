## Installing Jellyfin

Jellyfin is an open-source, self-hosted streaming platform. It has clients on the web, Android, and iOS to stream content on my other devices.

1. Create persistent volumes for Jellyfin config and cache

   ```sh
   mkdir -p /mnt/data/docker-data/jellyfin/{config,cache}
   ```
2. Create Docker Compose file

   ```sh
   cd ~/docker
   mkdir jellyfin
   cd jellyfin
   vim docker-compose.yml
   ```
3. Enter the contents

   ```yml
   name: jellyfin
   
   services:
     jellyfin:
       image: jellyfin/jellyfin
       container_name: jellyfin
       ports:
         - 8096:8096/tcp
         - 7359:7359/udp
       volumes:
         - /mnt/data/docker-data/jellyfin/config:/config
         - /mnt/data/docker-data/jellyfin/cache:/cache
         # bind external SSD
         # - type: bind
         #  source: /media/ssd1
         #  target: /media
       restart: unless-stopped
       # for hardware accelaration
       # group_add:
       #  - 993
       # devices:
       #  - /dev/dri/renderD128:/dev/dri/renderD129
   ```
4. Start up the Jellyfin container

   ```sh
   docker compose up -d
   ```
5. Once Jellyfin is started, the UI can be accessed from `http://localhost:8096`
6. Set up an admin account. Create libraries of Movies, Shows, Books, etc., Jellyfin will generate respective metadata and create a browsable library of contents.

## Installing Immich

Immich is a self-hosted, open-source solution for photos/videos and backing up. Immich provides a Google Photos-like UI on Web, Android and iOS clients. It also provides features like auto sync and backup photos, organising, face recognition, search by face or text (OCR) and many more.

1. Create the PostgreSQL DB directory for Immich

   ```sh
   mkdir -p /mnt/data/docker-data/immich/postgres
   ```
2. Create the Immich new photos upload directory

   ```sh
   mkdir -p /mnt/extern-hdd1/immich-library
   ```
3. Enter the contents

   ```yml
   name: immich
   
   services:
     immich-server:
       container_name: immich_server
       image: ghcr.io/immich-app/immich-server:${IMMICH_VERSION:-release}
       # Enable hardware accelaration
       # extends:
       #  file: hwaccel.transcoding.yml
       #  service: quicksync # set to one of [nvenc, quicksync, rkmpp, vaapi, vaapi-wsl] for accelerated transcoding
       volumes:
         # Do not edit the next line. If you want to change the media storage location on your system, edit the value of UPLOAD_LOCATION in the .env file
         - ${UPLOAD_LOCATION}:/data
         - /etc/localtime:/etc/localtime:ro
         # mount external storage photos directory
         - /media/ssd1/Gallery:/media/external-ssd-photos:ro
       env_file:
         - .env
       ports:
         - 2283:2283
       depends_on:
         - redis
         - database
       restart: always
       healthcheck:
         disable: false
   
     immich-machine-learning:
       container_name: immich_machine_learning
       # For hardware acceleration, add one of -[armnn, cuda, rocm, openvino, rknn] to the image tag.
       # Example tag: ${IMMICH_VERSION:-release}-cuda
       image: ghcr.io/immich-app/immich-machine-learning:${IMMICH_VERSION:-release}
       # extends: # uncomment this section for hardware acceleration - see https://docs.immich.app/features/ml-hardware-acceleration
       #   file: hwaccel.ml.yml
       #   service: cpu # set to one of [armnn, cuda, rocm, openvino, openvino-wsl, rknn] for accelerated inference - use the `-wsl` version for WSL2 where applicable
       volumes:
         - model-cache:/cache
       env_file:
         - .env
       restart: always
       healthcheck:
         disable: false
   
     redis:
       container_name: immich_redis
       image: docker.io/valkey/valkey:8@sha256:81db6d39e1bba3b3ff32bd3a1b19a6d69690f94a3954ec131277b9a26b95b3aa
       healthcheck:
         test: redis-cli ping || exit 1
       restart: always
   
     database:
       container_name: immich_postgres
       image: ghcr.io/immich-app/postgres:14-vectorchord0.4.3-pgvectors0.2.0@sha256:bcf63357191b76a916ae5eb93464d65c07511da41e3bf7a8416db519b40b1c23
       environment:
         POSTGRES_PASSWORD: ${DB_PASSWORD}
         POSTGRES_USER: ${DB_USERNAME}
         POSTGRES_DB: ${DB_DATABASE_NAME}
         POSTGRES_INITDB_ARGS: '--data-checksums'
         # Uncomment the DB_STORAGE_TYPE: 'HDD' var if your database isn't stored on SSDs
         # DB_STORAGE_TYPE: 'HDD'
       volumes:
         # Do not edit the next line. If you want to change the database storage location on your system, edit the value of DB_DATA_LOCATION in the .env file
         - ${DB_DATA_LOCATION}:/var/lib/postgresql/data
       shm_size: 128mb
       restart: always
   
   volumes:
     model-cache:
   ```
4. If hardware acceleration is enabled, create a `hwaccel.transcoding.yml` file in the same directory as the Docker Compose file, and enter these contents

   ```yml
   services:
     cpu: {}
   
     nvenc:
       deploy:
         resources:
           reservations:
             devices:
               - driver: nvidia
                 count: 1
                 capabilities:
                   - gpu
                   - compute
                   - video
   
     quicksync:
       devices:
         - /dev/dri:/dev/dri
   
     rkmpp:
       security_opt: # enables full access to /sys and /proc, still far better than privileged: true
         - systempaths=unconfined
         - apparmor=unconfined
       group_add:
         - video
       devices:
         - /dev/rga:/dev/rga
         - /dev/dri:/dev/dri
         - /dev/dma_heap:/dev/dma_heap
         - /dev/mpp_service:/dev/mpp_service
         #- /dev/mali0:/dev/mali0 # only required to enable OpenCL-accelerated HDR -> SDR tonemapping
       volumes:
         #- /etc/OpenCL:/etc/OpenCL:ro # only required to enable OpenCL-accelerated HDR -> SDR tonemapping
         #- /usr/lib/aarch64-linux-gnu/libmali.so.1:/usr/lib/aarch64-linux-gnu/libmali.so.1:ro # only required to enable OpenCL-accelerated HDR -> SDR tonemapping
   
     vaapi:
       devices:
         - /dev/dri:/dev/dri
   
     vaapi-wsl: # use this for VAAPI if you're running Immich in WSL2
       devices:
         - /dev/dri:/dev/dri
         - /dev/dxg:/dev/dxg
       volumes:
         - /usr/lib/wsl:/usr/lib/wsl
       environment:
         - LIBVA_DRIVER_NAME=d3d12
   ```
5. Create the `.env` file in the same directory and enter the contents

   ```txt
   # You can find documentation for all the supported env variables at https://docs.immich.app/install/environment-variables
   
   # The location where your uploaded files are stored
   UPLOAD_LOCATION=/mnt/extern-hdd1/immich-library
   
   # The location where your database files are stored. Network shares are not supported for the database
   DB_DATA_LOCATION=/mnt/data/docker-data/immich/postgres
   
   # To set a timezone, uncomment the next line and change Etc/UTC to a TZ identifier from this list: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
   TZ=Asia/Kolkata
   
   # The Immich version to use. You can pin this to a specific version like "v2.1.0"
   IMMICH_VERSION=v2
   
   # Connection secret for postgres. You should change it to a random password
   # Please use only the characters `A-Za-z0-9`, without special characters or spaces
   DB_PASSWORD=postgres
   
   # The values below this line do not need to be changed
   ###################################################################################
   DB_USERNAME=postgres
   DB_DATABASE_NAME=immich
   ```
6. Start Immich

   ```sh
   docker compose up -d
   ```
7. Immich should be up on port 2283, and the web UI can be accessed from `http://192.168.0.153:2283`