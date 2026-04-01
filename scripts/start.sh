#!/bin/bash

cd /home/ec2-user/app

echo "Current files:"
ls -l

# kill old app
pkill -f expense-tracker || true

# find jar dynamically (BEST PRACTICE)
JAR_FILE=$(ls *.jar)

echo "Running $JAR_FILE"

nohup java -jar $JAR_FILE > app.log 2>&1 &