#!/bin/bash

cd /var/app
export PYTHONPATH=/var/app;$PYTHONPATH
echo "Apply database migrations"
python manage.py migrate --noinput
echo "Starting server"
python manage.py runserver 0.0.0.0:8000