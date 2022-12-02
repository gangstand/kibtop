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
