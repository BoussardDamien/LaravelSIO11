FROM php:8-cli

COPY ./back /usr/src/laravel
WORKDIR /usr/src/laravel

ENTRYPOINT php artisan serve
