cd /var/app
export PYTHONPATH=/var/app;$PYTHONPATH
echo "asd"
python manage.py migrate --noinput
python manage.py initadmin
gunicorn cosmetica.wsgi --bind 0.0.0.0:8000