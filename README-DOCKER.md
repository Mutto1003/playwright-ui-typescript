# Docker

## Build Docker Image
- docker build -t playwright-ui-typescript .
- docker build -t <your-docker-hub-username>/playwright-ui-typescript .

## Run Docker Image
- docker run -it playwright-ui-typescript
- docker run -it <your-docker-hub-username>/playwright-ui-typescript

## Build Docker compose
- docker-compose build
- docker-compose build --no-cache

## Run Docker compose
- docker-compose up
- docker-compose up -d --build
- docker-compose up -d
- docker-compose up --abort-on-container-exit
- docker-compose up --scale chrome=3
- docker-compose up --scale chrome=3 --scale firefox=2
- docker-compose up --scale chrome=3 --scale firefox=2 --scale webkit=1
- docker-compose down