FROM ubuntu:16.04

MAINTAINER Vladimir Posvistelik <v.posvistelik@gmail.com>

ENV DEBIAN_FRONTEND noninteractive

RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

RUN apt-get update && apt-get install -y --no-install-recommends \
        apt-cacher-ng \
    && apt-get clean -y \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

ADD acng.conf /etc/apt-cacher-ng/acng.conf

VOLUME ["/var/cache/apt-cacher-ng"]

EXPOSE 3142

ENTRYPOINT /usr/sbin/apt-cacher-ng && tail -f /dev/null
