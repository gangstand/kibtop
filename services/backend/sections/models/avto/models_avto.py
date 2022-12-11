from django.db import models

from sections.models import BaseModelFull
from .for_avto import *


class AvtoFull(BaseModelFull):
    sub_category_en = models.CharField(choices=AVTO_CATEGORY_EN, max_length=255)
    sub_category_ru = models.CharField(choices=AVTO_CATEGORY_RU, max_length=255)
    sub_category_tr = models.CharField(choices=AVTO_CATEGORY_TR, max_length=255)
    brand = models.CharField(max_length=255)
    mileage = models.IntegerField()
    year = models.IntegerField()


class AvtoFullUpload(models.Model):
    avto_full_upload = models.ForeignKey(AvtoFull, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to='')
