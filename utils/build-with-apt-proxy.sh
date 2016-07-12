#!/usr/bin/env bash

# based on assumption that we have running apt-cacher-ng container:
#APT_CACHER_NG_IP=$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' apt-cacher-ng)
docker build --build-arg APT_PROXY=http://172.17.0.3:3142 $@