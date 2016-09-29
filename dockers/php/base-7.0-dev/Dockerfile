FROM ubuntu:16.04

MAINTAINER Vladimir Posvistelik <v.posvistelik@gmail.com>

ARG APT_PROXY
RUN if [ "$APT_PROXY" ]; then \
        echo "Acquire::http { Proxy \"$APT_PROXY\"; };" > /etc/apt/apt.conf.d/01proxy; \
    else \
        rm -f /etc/apt/apt.conf.d/01proxy; \
    fi

ENV DEBIAN_FRONTEND noninteractive

RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# add system tools:
RUN apt-get update && apt-get install -y --no-install-recommends \
        ca-certificates \
    && apt-get clean -y \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

# install necessary services:
RUN apt-get update && apt-get install -y --no-install-recommends \
        php7.0-bcmath \
        php7.0-cli \
        php7.0-common \
        php7.0-curl \
        php7.0-gd \
        php7.0-intl \
        php7.0-mcrypt \
        php7.0-mysql \
        php7.0-mbstring \
        php7.0-soap \
        php7.0-sqlite3 \
        php7.0-xml \
        php-xdebug \
        php7.0-zip \
    && apt-get clean -y \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*