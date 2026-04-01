#!/bin/bash

cd /home/ec2-user/app

# kill old app
pkill -f expense-tracker || true

# start new app
nohup java -jar expense-tracker-0.0.1-SNAPSHOT.jar > app.log 2>&1 &