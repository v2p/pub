#!/usr/bin/env bash

docker rm -v $(docker ps -aqf status=exited)
docker rmi $(docker images -qf dangling=true)
# docker volume rm $(docker volume ls -qf dangling=true)