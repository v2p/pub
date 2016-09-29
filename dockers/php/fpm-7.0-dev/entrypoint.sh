#!/usr/bin/env bash

USER_ID=${LOCAL_USER_ID:-9001}

echo "Create user with UID : $USER_ID"
useradd --shell /bin/bash -u ${USER_ID} -o -c "" -m user

/usr/sbin/php-fpm7.0