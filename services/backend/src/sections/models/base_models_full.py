from django.db import models

from accounts.models import CustomUser

CATEGORY = [
    ('Real estate', 'Real estate'),
    ('Auto', 'Auto'),
    ('Job', 'Job'),
    ('Services', 'Services'),
    ('For kids', 'For kids'),
    ('Electronics', 'Electronics'),
    ('House and garden', 'House and garden'),
    ('Fashion and style', 'Fashion and style')
]


class BaseModelFull(models.Model):
    title = models.CharField(verbose_name='Product name', max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(CustomUser, verbose_name='User', on_delete=models.CASCADE)
    address = models.CharField(max_length=1024, verbose_name='The address is')
    price = models.IntegerField(verbose_name='Starting price')
    upload = models.FileField(upload_to='', blank=False)
    category = models.CharField(choices=CATEGORY, max_length=255, blank=True, null=True, default=None)

    class Meta:
        abstract = True
