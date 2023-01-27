FROM python:3.10
WORKDIR /app/backend
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["python", "manage.py", "makemigrations"]
CMD ["python", "manage.py", "migrate"]
CMD ["python", "manage.py", "collectstatic", "--noinput"]
CMD ["gunicorn", "settings.wsgi:application", "--bind", "0.0.0.0:8000", "--log-level", "debug", "--workers=2", "--worker-class=gevent", "--worker-connections=100"]