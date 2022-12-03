from django.db import models


class Stock(models.Model):
    title = models.CharField(max_length=255)
    upload_stock = models.FileField(upload_to='stock/')
