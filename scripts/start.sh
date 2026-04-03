#!/bin/bash

echo "Stopping old backend..."
pkill -f expense-tracker || true

echo "Starting backend..."
cd /home/ubuntu/app/backend/target

nohup java -jar *.jar > /home/ubuntu/app/backend/app.log 2>&1 &

echo "Deploying frontend..."
sudo rm -rf /var/www/html/*
sudo cp -r /home/ubuntu/app/frontend/build/* /var/www/html/

echo "Restarting nginx..."
sudo systemctl restart nginx

echo "Deployment completed!"