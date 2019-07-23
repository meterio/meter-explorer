#! /bin/bash
PROJECT_NAME=explorer
VERSION=0.1.0

DOCKER_TAG=dfinlab/${PROJECT_NAME}:$VERSION
LATEST_TAG=dfinlab/${PROJECT_NAME}:latest

npm run build
docker build -t $LATEST_TAG .
docker tag $DOCKER_TAG $LATEST_TAG
docker push $LATEST_TAG
docker push $DOCKER_TAG
