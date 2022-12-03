from django.db import models

from accounts.models import CustomUser
from sections.models.base_for_realty import CATEGORY


class BaseModelFull(models.Model):
    title = models.CharField(verbose_name='Product name', max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(CustomUser, verbose_name='User', on_delete=models.CASCADE, related_name='customuser')
    address = models.CharField(max_length=1024, verbose_name='The address is')
    price = models.IntegerField(verbose_name='Starting price')

    class Meta:
        abstract = True


class BaseCategory(models.Model):
    realty_full = models.ForeignKey('RealtyFull', on_delete=models.CASCADE, related_name='realty_full')
    category = models.CharField(choices=CATEGORY, max_length=255, blank=True, null=True, default=None)
