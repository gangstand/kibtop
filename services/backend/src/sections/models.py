from django.db import models

from accounts.models import CustomUser


class Product(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=True)
    cat = models.ForeignKey('Category', on_delete=models.PROTECT, null=True)
    user = models.ForeignKey(CustomUser, verbose_name='User', on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name


REALTY_CATEGORY = [
    ('Apartments', 'Apartments'),
    ('Rooms', 'Rooms'),
    ('Houses, Dachas, Cottages', 'Houses, Dachas, Cottages'),
    ('Land', 'Land'),
    ('Garages and Parking spaces', 'Garages and Parking spaces'),
    ('Commercial Real Estate', 'Commercial Real Estate'),
    ('Real Estate Abroad', 'Real Estate Abroad'),
]

REALTY_CATEGORY_TYPE = [
    ('Sale', 'Sale'),
    ('Rent', 'Rent'),
    ('Buying', 'Buying'),
    ('Retrieved', 'Retrieved'),
]

PLACES_AD = [
    ('Owner', 'Owner'),
    ('Mediator', 'Mediator'),
    ('Builder', 'Builder'),
]

COM_METHOD = [
    ('By phone and text message', 'By phone and text message'),
    ('By phone', 'By phone'),
    ('Text message', 'Text message'),
]

ONLINE_SCREENING = [
    ('Conducting', 'Conducting'),
    ('I dont want to.', 'I dont want to.')
]

NUMBER_ROOMS_FOR = ((i, i) for i in range(1, 10))

NUMBER_ROOMS = [
    ('Studio', 'Studio'),
    *NUMBER_ROOMS_FOR,
    ('10 rooms and more', '10 rooms and more'),
    ('Free layout', 'Free layout'),
]

REPAIR = [
    ('Required', 'Required'),
    ('Cosmic', 'Cosmic'),
    ('Euro', 'Euro'),
    ('Design', 'Design'),
]

FINISHING = [
    ('Unfinished', 'Unfinished'),
    ('Prefinishing', 'Prefinishing'),
    ('Finishing', 'Finishing'),
]

TYPE_HOUSE = [
    ('Brick', 'Brick'),
    ('Panel', 'Panel'),
    ('Block', 'Block'),
    ('Monolithic', 'Monolithic'),
    ('Monolithic Brick', 'Monolithic Brick'),
    ('Wooden', 'Wooden'),
]

ELEVATOR_FOR = ((i, i) for i in range(1, 5))

ELEVATOR = [
    ('No', 'No'),
    *ELEVATOR_FOR
]

SELLING_METHOD = [
    ('Free', 'Free'),
    ('Alternative', 'Alternative'),
]

REALTY_CATEGORY_TYPE_USE = [
    ('Secondary', 'Secondary'),
    ('Mediator', 'Mediator'),
    ('Builder', 'Builder'),
]

REALTY_CATEGORY_RENT_TYPE_USE = [
    ('For a long time', 'For a long time'),
    ('Daily', 'Daily'),
]

FLOOR = ((str(i), str(i)) for i in range(1, 100))

FLOOR_HOUSE = ((str(i), str(i)) for i in range(1, 100))

LOCATION = [
    ('Within the city', 'Within the city'),
    ('Out of town', 'Out of town'),
]

TYPE_OBJECT = [
    ('HOUSE', 'HOUSE'),
    ('Cottage', 'Cottage'),
    ('Townhouse', 'Townhouse'),
]

MAX_GUESTS_FOR = ((str(i), str(i)) for i in range(1, 8))

MAX_GUESTS = [
    *MAX_GUESTS_FOR,
    ('8 or more', '8 or more'),
]

YES_OR_NO = [
    ('YES', 'YES'),
    ('NO', 'NO'),
]

REALTY_CATEGORY_LAND_PLOT_TYPE_USE = [
    ('Settlements', 'Settlements'),
    ('Agricultural land', 'Agricultural land'),
    ('Intended use', 'Intended use'),
]


class RealtyBase(models.Model):
    user_realty = models.ForeignKey(CustomUser, verbose_name='User', on_delete=models.CASCADE)
    address = models.CharField(max_length=1024, verbose_name='The address is')
    apartment_number = models.CharField(max_length=255, verbose_name='Apartment number')
    place_ad = models.CharField(choices=PLACES_AD, max_length=255, verbose_name='Places an ad')
    phone = models.CharField(max_length=255, verbose_name='Phone')
    com_method = models.CharField(choices=COM_METHOD, max_length=255, verbose_name='Communication method')
    onl_screening = models.CharField(choices=ONLINE_SCREENING, max_length=255, verbose_name='Online-Screening')
    upload = models.FileField(blank=False)
    url_video = models.URLField()
    description = models.TextField()
    price = models.IntegerField(verbose_name='Starting price')

    def __str__(self):
        return f'{self.user_realty} {self.address}'

    class Meta:
        abstract = True


def upload_to(instance, filename):
    return instance, filename


class BaseAboutApartment(models.Model):
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


class RealtyApartmentsSaleSecondary(RealtyBase, BaseAboutApartment):
    sell_type = models.CharField(choices=REALTY_CATEGORY_TYPE_USE, max_length=255,
                                 verbose_name='Realty category type use')


class RASSUpload(models.Model):
    realty = models.ForeignKey(RealtyApartmentsSaleSecondary, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to=upload_to)


class CheckRules(models.Model):
    max_guests = models.CharField(choices=MAX_GUESTS, max_length=255, verbose_name='Maximum guests')
    bring_children = models.CharField(choices=YES_OR_NO, max_length=3, verbose_name='You can bring children')
    possible_animals = models.CharField(choices=YES_OR_NO, max_length=3, verbose_name='It is possible with animals')
    smoking_allowed = models.CharField(choices=YES_OR_NO, max_length=3, verbose_name='Smoking is allowed')

    class Meta:
        abstract = True


class RealtyApartmentsSaleRent(RealtyBase, BaseAboutApartment, CheckRules):
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


class RealtyHomeSaleRent(RealtyBase, BaseAboutApartment, CheckRules):
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
