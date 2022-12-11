from django.db import models

from sections.models import BaseModelFull
from .for_children import *


class ChildrenFull(BaseModelFull):
    sub_category_en = models.CharField(choices=CHILDREN_CATEGORY_EN, max_length=255)
    sub_category_ru = models.CharField(choices=CHILDREN_CATEGORY_RU, max_length=255)
    sub_category_tr = models.CharField(choices=CHILDREN_CATEGORY_TR, max_length=255)


class ChildrenFullUpload(models.Model):
    services_full_upload = models.ForeignKey(ChildrenFull, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to='')
