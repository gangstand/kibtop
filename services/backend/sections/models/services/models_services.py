from django.db import models

from sections.models import BaseModelFull
from .for_services import *


class ServicesFull(BaseModelFull):
    sub_category_en = models.CharField(choices=SERVICES_CATEGORY_EN, max_length=255)
    sub_category_ru = models.CharField(choices=SERVICES_CATEGORY_RU, max_length=255)
    sub_category_tr = models.CharField(choices=SERVICES_CATEGORY_TR, max_length=255)


class ServicesFullUpload(models.Model):
    services_full_upload = models.ForeignKey(ServicesFull, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to='')
