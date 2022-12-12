from sections.utils import transl_for

WORK_CATEGORY_EN = [
    ('Retail / sales /purchasing', 'Retail / sales /purchasing'),
    ('Logistics / Warehouse / Delivery', 'Logistics / Warehouse / Delivery'),
    ('Construction / finishing works', 'Construction / finishing works'),
    ('Construction / finishing works', 'Construction / finishing works'),
    ('Administrative staff / HR / Secretariat', 'Administrative staff / HR / Secretariat'),
    ('Security / security', 'Security / security'),
    ('Cleaning / Home staff', 'Cleaning / Home staff'),
]

WORK_CATEGORY_RU = (transl_for(WORK_CATEGORY_EN, "Русский"))
WORK_CATEGORY_TR = (transl_for(WORK_CATEGORY_EN, "Türk"))

FOR_WORK_EN = [
    ('for work', 'for work'),
    ('for an employee', 'for an employee'),
]

FOR_WORK_RU = (transl_for(FOR_WORK_EN, "Русский"))
FOR_WORK_TR = (transl_for(FOR_WORK_EN, "Türk"))

EMPLOYMENT_EN = [
    ('Full time', 'Full time'),
    ('Partial', 'Partial'),
    ('Remote', 'Remote'),
]

EMPLOYMENT_RU = (transl_for(EMPLOYMENT_EN, "Русский"))
EMPLOYMENT_TR = (transl_for(EMPLOYMENT_EN, "Türk"))