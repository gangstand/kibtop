from django.db import models

from sections.models import BaseModelFull
from .for_fashion import *


class FashionFull(BaseModelFull):
    sub_category_en = models.CharField(choices=FASHION_CATEGORY_EN, max_length=255)
    sub_category_ru = models.CharField(choices=FASHION_CATEGORY_RU, max_length=255)
    sub_category_tr = models.CharField(choices=FASHION_CATEGORY_TR, max_length=255)


class FashionFullUpload(models.Model):
    fashion_full_upload = models.ForeignKey(FashionFull, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to='')
