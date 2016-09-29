FROM vposvistelik/php:base-7.0-dev

MAINTAINER Vladimir Posvistelik <v.posvistelik@gmail.com>

ARG APT_PROXY
RUN if [ "$APT_PROXY" ]; then \
        echo "Acquire::http { Proxy \"$APT_PROXY\"; };" > /etc/apt/apt.conf.d/01proxy; \
    else \
        rm -f /etc/apt/apt.conf.d/01proxy; \
    fi

RUN apt-get update && apt-get install -y --no-install-recommends \
        php7.0-fpm \
    && apt-get clean -y \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

ADD php-fpm.conf /etc/php/7.0/fpm/php-fpm.conf
ADD www.conf /etc/php/7.0/fpm/pool.d/www.conf
ADD xdebug.ini /etc/php/7.0/fpm/conf.d/20-xdebug.ini

EXPOSE 9000

ADD entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

WORKDIR /app