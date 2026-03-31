#!/bin/bash
pkill -f java
cd /home/ubuntu/Expense_Tracker/backend
nohup java -jar target/*.jar > app.log 2>&1 &