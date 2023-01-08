from django.db import models
from django.utils import timezone
from accounts.models import CustomUser
from sections.utils.translate.utils_translate import transl_for

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

CITY_EN = [
    ('Nicosia', 'Nicosia'),
    ('Kyrenia', 'Kyrenia'),
    ('Famagusta', 'Famagusta'),
    ('Iskele', 'Iskele'),
    ('Guzelyurt', 'Guzelyurt'),
    ('Lefke', 'Lefke'),
]
CITY_RU = (transl_for(CITY_EN, "Русский"))
CITY_TR = (transl_for(CITY_EN, "Türk"))


class City(models.Model):
    city_name_en = models.CharField(max_length=255)
    city_name_ru = models.CharField(max_length=255)
    city_name_tr = models.CharField(max_length=255)

    def __str__(self):
        return f"en - {self.city_name_en}, ru - {self.city_name_ru}, tr - {self.city_name_tr}"


class Money(models.Model):
    money_dollar = models.IntegerField()
    monet_rub = models.IntegerField()
    money_tr = models.IntegerField()

    def __str__(self):
        return f"en - {self.money_dollar}$, ru - {self.monet_rub}₽, tr - {self.money_tr}₤"


class BaseModelFull(models.Model):
    title_en = models.CharField(max_length=255, blank=True, null=True)
    title_ru = models.CharField(max_length=255, blank=True, null=True)
    title_tr = models.CharField(max_length=255, blank=True, null=True)
    description_en = models.TextField(blank=True, null=True)
    description_ru = models.TextField(blank=True, null=True)
    description_tr = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(blank=True, null=True)
    user = models.ForeignKey(CustomUser, verbose_name='User', on_delete=models.CASCADE)
    address = models.CharField(max_length=1024, verbose_name='The address is')
    price = models.IntegerField(verbose_name='Starting price')
    upload = models.FileField(upload_to='', blank=False)
    category_en = models.CharField(choices=CATEGORY_EN, max_length=255, blank=True, null=True, default=None)
    category_ru = models.CharField(choices=CATEGORY_RU, max_length=255, blank=True, null=True, default=None)
    category_tr = models.CharField(choices=CATEGORY_TR, max_length=255, blank=True, null=True, default=None)
    recommend = models.BooleanField()
    publisher = models.BooleanField()

    def updated_at(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return f'{self.title_en} {self.user} {self.address}'

    class Meta:
        abstract = True
