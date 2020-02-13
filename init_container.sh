#!/bin/sh
set -e

/usr/sbin/sshd

#sh ./scripts/start-service.sh
pm2 start ecosystem.config.js