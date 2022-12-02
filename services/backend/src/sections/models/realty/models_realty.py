from django.db import models

from .base_realty import *
from .for_realty import *


class RealtyApartmentsSaleSecondary(RealtyBase, AboutApartmentBase):
    sell_type = models.CharField(choices=REALTY_CATEGORY_TYPE_USE, max_length=255,
                                 verbose_name='Realty category type use')


class RASSUpload(models.Model):
    realty = models.ForeignKey(RealtyApartmentsSaleSecondary, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to=upload_to)


class RealtyApartmentsSaleRent(RealtyBase, AboutApartmentBase, CheckRulesBase):
    sell_type = models.CharField(choices=REALTY_CATEGORY_RENT_TYPE_USE, max_length=255,
                                 verbose_name='Realty category type use')


class RASRUpload(models.Model):
    realty = models.ForeignKey(RealtyApartmentsSaleRent, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to=upload_to)


class RealtyHomeSaleSecondary(RealtyBase):
    location = models.CharField(choices=LOCATION, max_length=255, verbose_name='Location')
    type_obj = models.CharField(choices=TYPE_OBJECT, max_length=255, verbose_name='Type of object')


class RHSSUpload(models.Model):
    realty = models.ForeignKey(RealtyHomeSaleSecondary, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to=upload_to)


class RealtyHomeSaleRent(RealtyBase, AboutApartmentBase, CheckRulesBase):
    location = models.CharField(choices=LOCATION, max_length=255, verbose_name='Location')
    type_obj = models.CharField(choices=TYPE_OBJECT, max_length=255, verbose_name='Type of object')
    sell_type = models.CharField(choices=REALTY_CATEGORY_RENT_TYPE_USE, max_length=255,
                                 verbose_name='Realty category type use')


class RHSRUpload(models.Model):
    realty = models.ForeignKey(RealtyHomeSaleRent, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to=upload_to)


class RealtyLandPlotSaleSecondary(RealtyBase):
    square = models.IntegerField(verbose_name='Square footage')
    sell_type = models.CharField(choices=REALTY_CATEGORY_LAND_PLOT_TYPE_USE, max_length=255,
                                 verbose_name='Realty category type use')


class RLPSSUpload(models.Model):
    realty = models.ForeignKey(RealtyLandPlotSaleSecondary, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to=upload_to)


class RealtyLandPlotSaleRent(RealtyBase):
    square = models.IntegerField(verbose_name='Square footage')
    sell_type = models.CharField(choices=REALTY_CATEGORY_LAND_PLOT_TYPE_USE, max_length=255,
                                 verbose_name='Realty category type use')


class RLPSRUpload(models.Model):
    realty = models.ForeignKey(RealtyLandPlotSaleRent, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to=upload_to)
