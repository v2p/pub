FROM ubuntu:16.04

MAINTAINER Vladimir Posvistelik <v.posvistelik@gmail.com>

ENV DEBIAN_FRONTEND noninteractive

RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# add custom PHP repository and some system tools:
RUN apt-get update && apt-get install -y --no-install-recommends \
        ca-certificates \
        software-properties-common \
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
        php5.6-xml \
        php5.6-zip \
    && apt-get clean -y \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

# install gosu:
RUN apt-get update && apt-get install -y --no-install-recommends wget \
    && wget -O /usr/local/bin/gosu "https://github.com/tianon/gosu/releases/download/1.9/gosu-$(dpkg --print-architecture)" \
    && wget -O /usr/local/bin/gosu.asc "https://github.com/tianon/gosu/releases/download/1.9/gosu-$(dpkg --print-architecture).asc" \
    && export GNUPGHOME="$(mktemp -d)" \
    && gpg --keyserver ha.pool.sks-keyservers.net --recv-keys B42F6819007F00F88E364FD4036A9C25BF357DD4 \
    && gpg --batch --verify /usr/local/bin/gosu.asc /usr/local/bin/gosu \
    && rm -r "$GNUPGHOME" /usr/local/bin/gosu.asc \
    && chmod +x /usr/local/bin/gosu \
    && gosu nobody true \
    && apt-get remove -y wget \
    && apt-get clean -y \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

# change entrypoint to use gosu-based script:
ADD run-with-user.sh /usr/local/bin/run-with-user.sh
RUN chmod +x /usr/local/bin/run-with-user.sh

ENTRYPOINT ["/usr/local/bin/run-with-user.sh"]

WORKDIR /app