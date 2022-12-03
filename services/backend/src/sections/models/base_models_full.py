from django.db import models

from accounts.models import CustomUser


class BaseModelFull(models.Model):
    title = models.CharField(verbose_name='Product name', max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(CustomUser, verbose_name='User', on_delete=models.CASCADE, related_name='customuser')
    address = models.CharField(max_length=1024, verbose_name='The address is')
    price = models.IntegerField(verbose_name='Starting price')
    favourite_user = models.ForeignKey('RealtyFull', default=None, on_delete=models.CASCADE, related_name='favourites')

    class Meta:
        abstract = True
