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

REALTY_CATEGORY_TYPE_USE = [
    ('Secondary', 'Secondary'),
    ('New Building', 'New Building'),
    ('For a long time', 'For a long time'),
    ('Daily', 'Daily'),
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

FLOOR = ((i, i) for i in range(1, 100))
FLOOR_HOUSE = ((i, i) for i in range(1, 100))

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


class RealtyCategory(models.Model):
    realty_category = models.CharField(choices=REALTY_CATEGORY, max_length=255)
    realty_category_type = models.CharField(choices=REALTY_CATEGORY_TYPE, max_length=255)
    realty_category_type_use = models.CharField(choices=REALTY_CATEGORY_TYPE_USE, max_length=255, null=True, blank=True)

    def __str__(self):
        return f"{self.realty_category} {self.realty_category_type}"


upload_to = 'realty/%Y-%m-%d/'


def user_directory_path(instance, filename):
    return 'user_{0}/{1}'.format(instance.user.id, filename)


class Realty(models.Model):
    user_realty = models.ForeignKey(CustomUser, verbose_name='User', on_delete=models.CASCADE)
    realty_category_use = models.ForeignKey(
        'RealtyCategory', on_delete=models.PROTECT,
        null=True, max_length=255,
        verbose_name='Category'
    )
    address = models.CharField(max_length=1024, verbose_name='The address is')
    apartment_number = models.CharField(max_length=255, verbose_name='Apartment number')
    place_ad = models.CharField(choices=PLACES_AD, max_length=255, verbose_name='Places an ad')
    phone = models.CharField(max_length=255, verbose_name='Phone')
    com_method = models.CharField(choices=COM_METHOD, max_length=255, verbose_name='Communication method')
    onl_screening = models.CharField(choices=ONLINE_SCREENING, max_length=255, verbose_name='Online-Screening')
    int_floor = models.CharField(choices=[*FLOOR], verbose_name='Floor of the house', max_length=3)
    numbers_rooms = models.CharField(choices=NUMBER_ROOMS, verbose_name='Number of rooms', max_length=255)
    balcony = models.BooleanField(verbose_name='Balcony')
    loggia = models.BooleanField(verbose_name='Loggia')
    wardrobe = models.BooleanField(verbose_name="The Wardrobe")
    panoramic_windows = models.BooleanField(verbose_name="Panoramic windows")
    total_area = models.IntegerField(verbose_name='Total Area')
    kitchen_area = models.IntegerField(verbose_name='Kitchen Area')
    live_area = models.IntegerField(verbose_name='Live Area')
    ceiling_height = models.IntegerField(verbose_name='Ceiling height')
    combined = models.BooleanField(verbose_name='Combined')
    divided = models.BooleanField(verbose_name='Divided')
    windows = models.BooleanField(verbose_name='Windows')
    courtyard = models.BooleanField(verbose_name='In the courtyard')
    outside = models.BooleanField(verbose_name='On the street')
    sunny_side = models.BooleanField(verbose_name='Sunny side')
    repair = models.CharField(choices=REPAIR, verbose_name='Repair', max_length=255)
    underfloor_heating = models.BooleanField(verbose_name='Underfloor heating')
    furniture = models.BooleanField(verbose_name='Furniture')
    kitchen = models.BooleanField(verbose_name='Kitchen')
    storing_clothes = models.BooleanField(verbose_name='Storing clothes')
    sleeping_places = models.BooleanField(verbose_name='Sleeping places')
    air_conditioner = models.BooleanField(verbose_name='Air conditioner')
    refrigerator = models.BooleanField(verbose_name='Refrigerator')
    washing_machine = models.BooleanField(verbose_name='Washing machine')
    dishwasher = models.BooleanField(verbose_name='Dishwasher')
    water_heater = models.BooleanField(verbose_name='Water heater')
    type_house = models.CharField(choices=TYPE_HOUSE, verbose_name='Type House', max_length=255)
    year_construction = models.IntegerField(verbose_name='Year of construction')
    concierge = models.BooleanField(verbose_name='Concierge')
    garbage_chute = models.BooleanField(verbose_name='Garbage chute')
    gas = models.BooleanField(verbose_name='Gas')
    floors_house = models.CharField(choices=[*FLOOR_HOUSE], verbose_name='Floors in the house', max_length=3)
    planned_demolition = models.BooleanField(verbose_name='Planned demolition')
    finishing = models.CharField(choices=FINISHING, verbose_name='Finishing')
    elevator_passenger = models.CharField(choices=ELEVATOR, verbose_name='Elevator Passenger', max_length=255)
    elevator_cargo = models.CharField(choices=ELEVATOR, verbose_name='Elevator Cargo', max_length=255)
    closed_area = models.BooleanField(verbose_name='Closed area')
    playground = models.BooleanField(verbose_name='Playground')
    sports_field = models.BooleanField(verbose_name='Sports field')
    underground = models.BooleanField(verbose_name='Underground')
    ground_multilevel = models.BooleanField(verbose_name='Ground multilevel')
    open_yard = models.BooleanField(verbose_name='Open in the yard')
    behind_barrier_yard = models.BooleanField(verbose_name='Behind the barrier in the yard')
    upload = models.FileField(blank=True)
    url_video = models.URLField()
    description = models.TextField()
    selling_method = models.CharField(choices=SELLING_METHOD, max_length=255)
    can_be_mortgaged = models.BooleanField(verbose_name='Can be mortgaged')
    sale_share = models.BooleanField(verbose_name='Sale of a share')
    auction = models.BooleanField(verbose_name='Auction')
    starting_price = models.IntegerField(verbose_name='Starting price')

    def __str__(self):
        return f"{self.user_realty} {self.apartment_number}"


class RealtyUpload(models.Model):
    realtys = models.ForeignKey(Realty, default=None, on_delete=models.CASCADE)
    uploads = models.FileField(upload_to=user_directory_path)
