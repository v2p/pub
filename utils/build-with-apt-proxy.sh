#!/usr/bin/env bash

CACHER_CONTAINER=apt-cacher-ng

if [ -z "$(docker ps -f=\"name=${CACHER_CONTAINER}\" -q -a)" ]; then
    docker run --name="${CACHER_CONTAINER}" -d -p 3142:3142 vposvistelik/${CACHER_CONTAINER}
fi

APT_CACHER_NG_IP=$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' ${CACHER_CONTAINER})

docker build --build-arg APT_PROXY=http://${APT_CACHER_NG_IP}:3142 $@