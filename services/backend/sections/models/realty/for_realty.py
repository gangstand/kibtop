REALTY_CATEGORY_EN = [
    ('Apartments', 'Apartments'),
    ('House', 'House'),
    ('Land', 'Land'),
    ('Other', 'Other'),
]

REALTY_CATEGORY_RU = [
    ('Апартаменты', 'Апартаменты'),
    ('Дом', 'House'),
    ('Земля', 'Land'),
    ('Другое', 'Другое'),
]
REALTY_CATEGORY_TR = [
    ('Daireler', 'Daireler'),
    ('Ev', 'Ev'),
    ('Arazi', 'Arazi'),
    ('Diğer', 'Diğer'),
]

REALTY_CATEGORY_TYPE_EN = [
    ('Rent', 'Rent'),
    ('Buy', 'Buy'),
]

REALTY_CATEGORY_TYPE_RU = [
    ('Арендовать', 'Арендовать'),
    ('Купить', 'Купить'),
]
REALTY_CATEGORY_TYPE_TR = [
    ('Kira', 'Kira'),
    ('Satın Al', 'Satın Al'),
]

ALL_OLD_NEW_EN = [
    ('All', 'All'),
    ('Old', 'Old'),
    ('New', 'New'),
]

ALL_OLD_NEW_RU = [
    ('Все', 'Все'),
    ('Старый', 'Старый'),
    ('Новый', 'Новый'),
]
ALL_OLD_NEW_TR = [
    ('Tümü', 'Tümü'),
    ('Eski', 'Eski'),
    ('Yeni', 'Yeni'),
]

NUMBER_ROOMS_FOR = ((str(i) + '+1', str(i) + '+1') for i in range(1, 4))

NUMBER_ROOMS_EN = [
    ('Studio', 'Studio'),
    *NUMBER_ROOMS_FOR,
    ('4+1 and more', '4+1 and more'),
]

NUMBER_ROOMS_RU = [
    ('Студия', 'Студия'),
    *NUMBER_ROOMS_FOR,
    ('4+1 и более', '4+1 и более'),
]
NUMBER_ROOMS_TR = [
    ('Stüdyo', 'Stüdyo'),
    *NUMBER_ROOMS_FOR,
    ('4 + 1 ve daha fazlası', '4 + 1 ve daha fazlası'),
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
