#!/bin/bash

cd /home/ubuntu/app

pkill -f expense-tracker || true

nohup java -jar *.jar > app.log 2>&1 &