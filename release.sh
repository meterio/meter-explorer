#! /bin/bash
TEAM_NAME=dfinlab
PROJECT_NAME=meter-scan
VERSION=1.0.1

DOCKER_TAG=${TEAM_NAME}/${PROJECT_NAME}:$VERSION
LATEST_TAG=${TEAM_NAME}/${PROJECT_NAME}:latest

npm run build
docker build -t $LATEST_TAG .
docker tag $LATEST_TAG $DOCKER_TAG
docker push $LATEST_TAG
docker push $DOCKER_TAG
