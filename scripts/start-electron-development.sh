#!/bin/sh

wait-on "http://localhost:3000" && NODE_ENV="development" electron .

exit 0
