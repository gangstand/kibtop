from django.db import models

from sections.models import BaseModelFull
from .for_house_garden import *


class HouseGardenFull(BaseModelFull):
    sub_category_en = models.CharField(choices=HOUSE_GARDEN_CATEGORY_EN, max_length=255)
    sub_category_ru = models.CharField(choices=HOUSE_GARDEN_CATEGORY_RU, max_length=255)
    sub_category_tr = models.CharField(choices=HOUSE_GARDEN_CATEGORY_TR, max_length=255)


class HouseGardenFullUpload(models.Model):
    house_garden_full_upload = models.ForeignKey(HouseGardenFull, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to='')
