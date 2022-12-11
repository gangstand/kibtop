from django.db import models

from sections.models import BaseModelFull
from .for_avto import *


class AvtoFull(BaseModelFull):
    sub_apartment_en = models.CharField(choices=AVTO_CATEGORY_EN, max_length=255)
    sub_apartment_ru = models.CharField(choices=REALTY_CATEGORY_RU, max_length=255)
    sub_apartment_tr = models.CharField(choices=REALTY_CATEGORY_TR, max_length=255)
    brand = models.CharField(max_length=255)
    mileage = models.IntegerField()
    year = models.IntegerField()

    def __str__(self):
        return f'{self.title} {self.user} {self.address}'


class AvtoFullUpload(models.Model):
    avto_full_upload = models.ForeignKey(AvtoFull, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to='')
