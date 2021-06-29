cd /var/app
export PYTHONPATH=/var/app;$PYTHONPATH
python manage.py migrate --noinput
gunicorn cosmetica.wsgi --bind 0.0.0.0:8000