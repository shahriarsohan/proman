FROM python:3
ENV PYTHONUNBUFFERED 1

RUN mkdir /var/app
WORKDIR  /var/app

EXPOSE 8000

RUN pip3 install --upgrade pip
COPY requirements.txt /var/app/requirements.txt
RUN pip3 install -r requirements.txt
COPY . /var/app/.

CMD ["/var/app/runserver.sh"]

