#!/bin/sh

react-scripts build

electron-builder build "${1}" --publish never

exit 0
