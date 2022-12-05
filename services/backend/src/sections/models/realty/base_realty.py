from django.db import models

from .for_realty import *
from sections.models.base_models_full import BaseModelFull


class RealtyBase(BaseModelFull):
    sub_apartment_en = models.CharField(choices=REALTY_CATEGORY_EN, max_length=255, verbose_name='Sub Apartment')
    sub_apartment_ru = models.CharField(choices=REALTY_CATEGORY_RU, max_length=255, verbose_name='Sub Apartment')
    sub_apartment_tr = models.CharField(choices=REALTY_CATEGORY_TR, max_length=255, verbose_name='Sub Apartment')
    apartment_number = models.CharField(max_length=255, verbose_name='Apartment number')
    place_ad = models.CharField(choices=PLACES_AD, max_length=255, verbose_name='Places an ad')
    phone = models.CharField(max_length=255, verbose_name='Phone')
    com_method = models.CharField(choices=COM_METHOD, max_length=255, verbose_name='Communication method')
    onl_screening = models.CharField(choices=ONLINE_SCREENING, max_length=255, verbose_name='Online-Screening')
    url_video = models.URLField()
    description = models.TextField()

    def __str__(self):
        return f'{self.user} {self.address}'

    class Meta:
        abstract = True


class AboutApartmentBase(models.Model):
    balcony = models.BooleanField(verbose_name='Balcony', blank=True, null=True)
    loggia = models.BooleanField(verbose_name='Loggia', blank=True, null=True)
    wardrobe = models.BooleanField(verbose_name="The Wardrobe", blank=True, null=True)
    panoramic_windows = models.BooleanField(verbose_name="Panoramic windows", blank=True, null=True)
    total_area = models.IntegerField(verbose_name='Total Area')
    kitchen_area = models.IntegerField(verbose_name='Kitchen Area')
    live_area = models.IntegerField(verbose_name='Live Area')
    ceiling_height = models.IntegerField(verbose_name='Ceiling height', blank=True, null=True)
    combined = models.BooleanField(verbose_name='Combined', blank=True, null=True)
    divided = models.BooleanField(verbose_name='Divided', blank=True, null=True)
    windows = models.BooleanField(verbose_name='Windows', blank=True, null=True)
    courtyard = models.BooleanField(verbose_name='In the courtyard', blank=True, null=True)
    outside = models.BooleanField(verbose_name='On the street', blank=True, null=True)
    sunny_side = models.BooleanField(verbose_name='Sunny side', blank=True, null=True)
    repair = models.CharField(choices=REPAIR, verbose_name='Repair', max_length=255, blank=True, null=True)
    underfloor_heating = models.BooleanField(verbose_name='Underfloor heating', blank=True, null=True)
    furniture = models.BooleanField(verbose_name='Furniture', blank=True, null=True)
    kitchen = models.BooleanField(verbose_name='Kitchen', blank=True, null=True)
    storing_clothes = models.BooleanField(verbose_name='Storing clothes', blank=True, null=True)
    sleeping_places = models.BooleanField(verbose_name='Sleeping places', blank=True, null=True)
    air_conditioner = models.BooleanField(verbose_name='Air conditioner', blank=True, null=True)
    refrigerator = models.BooleanField(verbose_name='Refrigerator', blank=True, null=True)
    washing_machine = models.BooleanField(verbose_name='Washing machine', blank=True, null=True)
    dishwasher = models.BooleanField(verbose_name='Dishwasher', blank=True, null=True)
    water_heater = models.BooleanField(verbose_name='Water heater', blank=True, null=True)
    type_house = models.CharField(choices=TYPE_HOUSE, verbose_name='Type House', max_length=255)
    year_construction = models.IntegerField(verbose_name='Year of construction', blank=True, null=True)
    concierge = models.BooleanField(verbose_name='Concierge', blank=True, null=True)
    garbage_chute = models.BooleanField(verbose_name='Garbage chute', blank=True, null=True)
    gas = models.BooleanField(verbose_name='Gas', blank=True, null=True)
    floors_house = models.CharField(choices=[*FLOOR_HOUSE], verbose_name='Floors in the house', max_length=255)
    planned_demolition = models.BooleanField(verbose_name='Planned demolition', blank=True, null=True)
    finishing = models.CharField(choices=FINISHING, verbose_name='Finishing', max_length=255, blank=True, null=True)
    elevator_passenger = models.CharField(choices=ELEVATOR, verbose_name='Elevator Passenger', max_length=255,
                                          blank=True, null=True)
    elevator_cargo = models.CharField(choices=ELEVATOR, verbose_name='Elevator Cargo', max_length=255, blank=True,
                                      null=True)
    closed_area = models.BooleanField(verbose_name='Closed area', blank=True, null=True)
    playground = models.BooleanField(verbose_name='Playground', blank=True, null=True)
    sports_field = models.BooleanField(verbose_name='Sports field', blank=True, null=True)
    underground = models.BooleanField(verbose_name='Underground', blank=True, null=True)
    ground_multilevel = models.BooleanField(verbose_name='Ground multilevel', blank=True, null=True)
    open_yard = models.BooleanField(verbose_name='Open in the yard', blank=True, null=True)
    behind_barrier_yard = models.BooleanField(verbose_name='Behind the barrier in the yard', blank=True, null=True)
    selling_method = models.CharField(choices=SELLING_METHOD, max_length=255, blank=True, null=True)

    class Meta:
        abstract = True


class CheckRulesBase(models.Model):
    max_guests = models.CharField(choices=MAX_GUESTS, max_length=255, verbose_name='Maximum guests')
    bring_children = models.CharField(choices=YES_OR_NO, max_length=3, verbose_name='You can bring children')
    possible_animals = models.CharField(choices=YES_OR_NO, max_length=3, verbose_name='It is possible with animals')
    smoking_allowed = models.CharField(choices=YES_OR_NO, max_length=3, verbose_name='Smoking is allowed')

    class Meta:
        abstract = True
