from django.db import models

from .base_realty import *
from .for_realty import *


class RealtyFull(RealtyBase, AboutApartmentBase):
    sell_type = models.CharField(choices=REALTY_CATEGORY_TYPE, max_length=255,
                                 verbose_name='Category type use')
    all_old_new = models.CharField(choices=ALL_OLD_NEW, max_length=255,
                                   verbose_name='ALL OLD NEW')
    sell_type_rent = models.CharField(choices=REALTY_CATEGORY_RENT_TYPE_USE, max_length=255,
                                      verbose_name='Realty category type use')
    number_rooms = models.CharField(choices=NUMBER_ROOMS, max_length=255, verbose_name="Number Rooms")
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
