FROM nginx:stable

MAINTAINER Vladimir Posvistelik <v.posvistelik@gmail.com>

# install gosu:
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates wget \
    && wget -O /usr/local/bin/gosu "https://github.com/tianon/gosu/releases/download/1.9/gosu-$(dpkg --print-architecture)" \
    && wget -O /usr/local/bin/gosu.asc "https://github.com/tianon/gosu/releases/download/1.9/gosu-$(dpkg --print-architecture).asc" \
    && export GNUPGHOME="$(mktemp -d)" \
    && gpg --keyserver ha.pool.sks-keyservers.net --recv-keys B42F6819007F00F88E364FD4036A9C25BF357DD4 \
    && gpg --batch --verify /usr/local/bin/gosu.asc /usr/local/bin/gosu \
    && rm -r "$GNUPGHOME" /usr/local/bin/gosu.asc \
    && chmod +x /usr/local/bin/gosu \
    && gosu nobody true \
    && apt-get remove -y ca-certificates wget \
    && apt-get clean -y \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

# change entrypoint to use gosu-based script:
COPY run-with-user.sh /usr/local/bin/run-with-user.sh
RUN chmod +x /usr/local/bin/run-with-user.sh

ENTRYPOINT ["/usr/local/bin/run-with-user.sh"]

RUN rm /etc/nginx/conf.d/default.conf
