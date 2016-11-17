#!/usr/bin/env bash

# since UID is not an environment variable, we create DOCKER_COMPOSE_UID environment variable and set its value:
export DOCKER_COMPOSE_UID=${UID}
docker-compose run --rm $@