#!/bin/bash

echo "Stopping old backend..."
pkill -f expense-tracker || true

echo "Starting backend..."
cd /home/ubuntu/backend
nohup java -jar *.jar > app.log 2>&1 &

echo "Deploying frontend..."
sudo rm -rf /var/www/html/*
sudo cp -r /home/ubuntu/app/frontend/build/* /var/www/html/

sudo systemctl restart nginx