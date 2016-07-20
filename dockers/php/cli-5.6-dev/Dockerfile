FROM vposvistelik/php:base-5.6-dev

MAINTAINER Vladimir Posvistelik <v.posvistelik@gmail.com>

ARG APT_PROXY
RUN if [ "$APT_PROXY" ]; then \
        echo "Acquire::http { Proxy \"$APT_PROXY\"; };" > /etc/apt/apt.conf.d/01proxy; \
    else \
        rm -f /etc/apt/apt.conf.d/01proxy; \
    fi

RUN apt-get update && apt-get install -y --no-install-recommends \
        git \
        gosu \
    && apt-get clean -y \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/* \
    && gosu nobody true

# change entrypoint to use gosu-based script:
ADD run-with-user.sh /usr/local/bin/run-with-user.sh
RUN chmod +x /usr/local/bin/run-with-user.sh

ENTRYPOINT ["/usr/local/bin/run-with-user.sh"]

WORKDIR /app