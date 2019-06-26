#!/bin/bash

set -ex

npm install

node_modules/.bin/knex migrate:latest --env test

exec "$@"
