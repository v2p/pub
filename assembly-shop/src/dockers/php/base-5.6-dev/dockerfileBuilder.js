import {getDockerfileBuilder} from '../../../dockerfile-presets/ubuntu1604';

export default getDockerfileBuilder()
    .useAptCacher(true)
    .comment('add custom PHP repository and some system tools')
    .install(
        ['ca-certificates', 'software-properties-common'],
        []
    )
    .run('something')
    .runBuilder('apt-get update')
        .andRun('apt-get install -y --no-install-recommends apt-cacher-ng')
        .andRun('apt-get clean -y')
        .andRun('apt-get autoremove -y')
        .andRun('rm -rf /var/lib/apt/lists/*')
    .runBuilderEnd();

/*
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
 php5.6-xdebug \
 php5.6-zip \
 && apt-get clean -y \
 && apt-get autoremove -y \
 && rm -rf /var/lib/apt/lists/*
 */