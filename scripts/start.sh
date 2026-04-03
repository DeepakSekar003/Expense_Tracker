#!/bin/bash

echo "Stopping old backend..."
pkill -f expense-tracker || true

echo "Starting backend..."

cd /home/ubuntu/app/backend/target

nohup java -jar *.jar > /home/ubuntu/app/backend/app.log 2>&1 &

echo "Restarting nginx..."
sudo systemctl restart nginx

echo "Done"