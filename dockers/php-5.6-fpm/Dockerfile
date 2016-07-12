FROM ubuntu:16.04

MAINTAINER Vladimir Posvistelik <v.posvistelik@gmail.com>

ENV DEBIAN_FRONTEND noninteractive

RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# add custom PHP repository:
RUN apt-get update && apt-get install -y --no-install-recommends software-properties-common \
    && add-apt-repository ppa:ondrej/php \
    && apt-get remove -y software-properties-common \
    && apt-get clean -y \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

# install necessary services:
RUN apt-get update && apt-get install -y --no-install-recommends \
        php5.6-bcmath \
        php5.6-cli \
        php5.6-common \
        php5.6-curl \
        php5.6-gd \
        php5.6-intl \
        php5.6-mcrypt \
        php5.6-mysql \
        php5.6-mbstring \
        php5.6-soap \
        php5.6-sqlite3 \
        php5.6-zip \
    && apt-get clean -y \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

# install FPM in a separate "layer" on top of "base" PHP services
RUN apt-get update && apt-get install -y --no-install-recommends \
        php5.6-fpm \
    && apt-get clean -y \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

ADD php-fpm.conf /etc/php/5.6/fpm/php-fpm.conf
ADD www.conf /etc/php/5.6/fpm/pool.d/www.conf

EXPOSE 9000

ADD entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

WORKDIR /app