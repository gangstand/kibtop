from django.db import models

from .base_realty import *
from .for_realty import *


class RealtyFull(RealtyBase, AboutRealtyBase):
    sub_apartment_en = models.CharField(choices=REALTY_CATEGORY_EN, max_length=255, verbose_name='Sub Apartment')
    sub_apartment_ru = models.CharField(choices=REALTY_CATEGORY_RU, max_length=255, verbose_name='Sub Apartment')
    sub_apartment_tr = models.CharField(choices=REALTY_CATEGORY_TR, max_length=255, verbose_name='Sub Apartment')
    sell_type_en = models.CharField(choices=REALTY_CATEGORY_TYPE_EN, max_length=255)
    sell_type_ru = models.CharField(choices=REALTY_CATEGORY_TYPE_RU, max_length=255)
    sell_type_tr = models.CharField(choices=REALTY_CATEGORY_TYPE_TR, max_length=255)
    all_old_new_en = models.CharField(choices=ALL_OLD_NEW_EN, max_length=255)
    all_old_new_ru = models.CharField(choices=ALL_OLD_NEW_RU, max_length=255)
    all_old_new_tr = models.CharField(choices=ALL_OLD_NEW_TR, max_length=255)
    sell_type_rent = models.CharField(choices=REALTY_CATEGORY_RENT_TYPE_USE, max_length=255,
                                      verbose_name='Realty category type use')
    number_rooms_en = models.CharField(choices=NUMBER_ROOMS_EN, max_length=255)
    number_rooms_ru = models.CharField(choices=NUMBER_ROOMS_RU, max_length=255)
    number_rooms_tr = models.CharField(choices=NUMBER_ROOMS_TR, max_length=255)
    location = models.CharField(choices=LOCATION, max_length=255, verbose_name='Location')
    type_obj = models.CharField(choices=TYPE_OBJECT, max_length=255, verbose_name='Type of object')
    location_rent = models.CharField(choices=LOCATION, max_length=255, verbose_name='Location')
    type_obj_rent = models.CharField(choices=TYPE_OBJECT, max_length=255, verbose_name='Type of object')
    square = models.IntegerField(verbose_name='Square footage')
    sell_type_plot_type = models.CharField(choices=REALTY_CATEGORY_LAND_PLOT_TYPE_USE, max_length=255,
                                           verbose_name='Realty category type use')


class RealtyFullUpload(models.Model):
    realty_full_upload = models.ForeignKey(RealtyFull, default=None, on_delete=models.CASCADE,
                                           related_name='realty_full_upload')
    uploads = models.FileField(upload_to='')
