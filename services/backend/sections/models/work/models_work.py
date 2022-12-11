from django.db import models

from sections.models import BaseModelFull
from .for_work import *


class WorkFull(BaseModelFull):
    sub_apartment_en = models.CharField(choices=WORK_CATEGORY_EN, max_length=255)
    sub_apartment_ru = models.CharField(choices=WORK_CATEGORY_RU, max_length=255)
    sub_apartment_tr = models.CharField(choices=WORK_CATEGORY_TR, max_length=255)
    for_work_type_en = models.CharField(choices=FOR_WORK_EN, max_length=255)
    for_work_type_ru = models.CharField(choices=FOR_WORK_RU, max_length=255)
    for_work_type_tr = models.CharField(choices=FOR_WORK_TR, max_length=255)
    employment_en = models.CharField(choices=EMPLOYMENT_EN, max_length=255)
    employment_ru = models.CharField(choices=EMPLOYMENT_RU, max_length=255)
    employment_tr = models.CharField(choices=EMPLOYMENT_TR, max_length=255)


class WorkFullUpload(models.Model):
    work_full_upload = models.ForeignKey(WorkFull, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to='')
