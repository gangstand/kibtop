from django.db import models
from django.utils import timezone

from accounts.models import CustomUser
from sections.models import BaseModelFull
from .for_house_garden import *


class HouseGardenFull(BaseModelFull):
    sub_category_en = models.CharField(choices=HOUSE_GARDEN_CATEGORY_EN, max_length=255)
    sub_category_ru = models.CharField(choices=HOUSE_GARDEN_CATEGORY_RU, max_length=255)
    sub_category_tr = models.CharField(choices=HOUSE_GARDEN_CATEGORY_TR, max_length=255)


class HouseGardenFullViewsUser(models.Model):
    avto_full = models.ForeignKey(HouseGardenFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)


class HouseGardenFullFavouritesUser(models.Model):
    avto_full = models.ForeignKey(HouseGardenFull, default=None, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, default=None, on_delete=models.CASCADE)

class HouseGardenFullUpload(models.Model):
    house_garden_full_upload = models.ForeignKey(HouseGardenFull, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to='')
