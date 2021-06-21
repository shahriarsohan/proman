FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /django


RUN pip3 install --upgrade pip
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .