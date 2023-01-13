from sections.utils.translate.utils_translate import transl_for

REALTY_CATEGORY_EN = [
    ('Apartments', 'Apartments'),
    ('House', 'House'),
    ('Land', 'Land'),
    ('Other', 'Other'),
]

REALTY_CATEGORY_RU = (transl_for(REALTY_CATEGORY_EN, "Русский"))
REALTY_CATEGORY_TR = (transl_for(REALTY_CATEGORY_EN, "Türk"))

REALTY_CATEGORY_TYPE_EN = [
    ('Rent', 'Rent'),
    ('Buy', 'Buy'),
]

REALTY_CATEGORY_TYPE_RU = (transl_for(REALTY_CATEGORY_TYPE_EN, "Русский"))
REALTY_CATEGORY_TYPE_TR = (transl_for(REALTY_CATEGORY_TYPE_EN, "Türk"))

ALL_OLD_NEW_EN = [
    ('All', 'All'),
    ('Old', 'Old'),
    ('New', 'New'),
]

ALL_OLD_NEW_RU = (transl_for(ALL_OLD_NEW_EN, "Русский"))
ALL_OLD_NEW_TR = (transl_for(ALL_OLD_NEW_EN, "Türk"))

NUMBER_ROOMS_FOR = ((str(i) + '+1', str(i) + '+1') for i in range(1, 4))

NUMBER_ROOMS_EN = [
    ('Studio', 'Studio'),
    *NUMBER_ROOMS_FOR,
    ('4+1 and more', '4+1 and more'),
]

NUMBER_ROOMS_RU = (transl_for(NUMBER_ROOMS_EN, "Русский"))
NUMBER_ROOMS_TR = (transl_for(NUMBER_ROOMS_EN, "Türk"))
