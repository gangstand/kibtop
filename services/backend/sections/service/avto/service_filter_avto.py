from sections.models import AvtoFull

import django_filters


class FilterAvto(django_filters.FilterSet):
    price = django_filters.NumberFilter()
    price__gt = django_filters.NumberFilter(field_name='price', lookup_expr='gt')
    price__lt = django_filters.NumberFilter(field_name='price', lookup_expr='lt')
    sub_apartment_en = django_filters.CharFilter()
    sub_apartment_ru = django_filters.CharFilter()
    sub_apartment_tr = django_filters.CharFilter()
    mileage = django_filters.NumberFilter()
    mileage__gt = django_filters.NumberFilter(field_name='mileage', lookup_expr='gt')
    mileage__lt = django_filters.NumberFilter(field_name='mileage', lookup_expr='lt')
    year = django_filters.NumberFilter()
    year__gt = django_filters.NumberFilter(field_name='year', lookup_expr='gt')
    year__lt = django_filters.NumberFilter(field_name='year', lookup_expr='lt')

    class Meta:
        model = AvtoFull
        fields = ['price', 'sub_apartment_en', 'sub_apartment_ru', 'sub_apartment_tr', 'mileage', 'year', ]
