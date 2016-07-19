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

RUN apt-get update && apt-get install -y --no-install-recommends \
        gosu \
        ruby-sequel \
        ruby-mysql \
        ruby-sqlite3 \
    && apt-get clean -y \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/* \
    && gosu nobody true

ADD run-with-user.sh /usr/local/bin/run-with-user.sh
RUN chmod +x /usr/local/bin/run-with-user.sh

ENTRYPOINT ["/usr/local/bin/run-with-user.sh"]

WORKDIR /app