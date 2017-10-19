#!/bin/ash
while true; do
  curl $1>&1
  date>&1
  sleep 1
done
