from sections.utils.translate.utils_translate import transl_for

SERVICES_CATEGORY_EN = [
    ('Cleaning', 'Cleaning'),
    ('Business', 'Business'),
    ('Domestic services', 'Domestic services'),
    ('Beauty / Health', 'Beauty / Health'),
    ('Education', 'Education'),
    ('Transport', 'Transport'),
    ('Construction / Repair', 'Construction / Repair'),
    ('Other', 'Other'),
]
SERVICES_CATEGORY_RU = (transl_for(SERVICES_CATEGORY_EN, "Русский"))
SERVICES_CATEGORY_TR = (transl_for(SERVICES_CATEGORY_EN, "Türk"))
