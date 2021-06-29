cd /var/app
export PYTHONPATH=/var/app;$PYTHONPATH
python manage.py migrate --noinput
python manage.py runserver 0.0.0.0:8000