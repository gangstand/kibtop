from django.db import models
from django.utils import timezone

from accounts.models import CustomUser
from sections.utils import transl_for
from settings import LANGUAGES

CATEGORY_EN = [
    ('Real estate', 'Real estate'),
    ('Auto', 'Auto'),
    ('Job', 'Job'),
    ('Services', 'Services'),
    ('For kids', 'For kids'),
    ('Electronics', 'Electronics'),
    ('House and garden', 'House and garden'),
    ('Fashion and style', 'Fashion and style')
]

CATEGORY_RU = (transl_for(CATEGORY_EN, "Русский"))
CATEGORY_TR = (transl_for(CATEGORY_EN, "Türk"))


class BaseModelFull(models.Model):
    title = models.CharField(verbose_name='Product name', max_length=255)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(blank=True, null=True)
    user = models.ForeignKey(CustomUser, verbose_name='User', on_delete=models.CASCADE)
    address = models.CharField(max_length=1024, verbose_name='The address is')
    price = models.IntegerField(verbose_name='Starting price')
    upload = models.FileField(upload_to='', blank=False)
    category_en = models.CharField(choices=CATEGORY_EN, max_length=255, blank=True, null=True, default=None)
    category_ru = models.CharField(choices=CATEGORY_RU, max_length=255, blank=True, null=True, default=None)
    category_tr = models.CharField(choices=CATEGORY_TR, max_length=255, blank=True, null=True, default=None)

    def updated_at(self):
        self.published_date = timezone.now()
        self.save()

    class Meta:
        abstract = True
