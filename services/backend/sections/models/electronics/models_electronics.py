from django.db import models

from sections.models import BaseModelFull
from .for_electronics import *


class ElectronicsFull(BaseModelFull):
    sub_category_en = models.CharField(choices=ELECTRONICS_CATEGORY_EN, max_length=255)
    sub_category_ru = models.CharField(choices=ELECTRONICS_CATEGORY_RU, max_length=255)
    sub_category_tr = models.CharField(choices=ELECTRONICS_CATEGORY_TR, max_length=255)


class ElectronicsFullUpload(models.Model):
    electronics_full_upload = models.ForeignKey(ElectronicsFull, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to='')
