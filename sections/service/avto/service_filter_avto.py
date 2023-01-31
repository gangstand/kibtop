from sections.models import AvtoFull, AvtoFullViewsUser, AvtoFullFavouritesUser

import django_filters


class FilterAvto(django_filters.FilterSet):
    price = django_filters.NumberFilter()
    price__gt = django_filters.NumberFilter(field_name='price', lookup_expr='gt')
    price__lt = django_filters.NumberFilter(field_name='price', lookup_expr='lt')
    sub_category_en = django_filters.CharFilter()
    sub_category_ru = django_filters.CharFilter()
    sub_category_tr = django_filters.CharFilter()
    mileage = django_filters.NumberFilter()
    mileage__gt = django_filters.NumberFilter(field_name='mileage', lookup_expr='gt')
    mileage__lt = django_filters.NumberFilter(field_name='mileage', lookup_expr='lt')
    year = django_filters.NumberFilter()
    year__gt = django_filters.NumberFilter(field_name='year', lookup_expr='gt')
    year__lt = django_filters.NumberFilter(field_name='year', lookup_expr='lt')
    currency = django_filters.CharFilter()

    class Meta:
        model = AvtoFull
        fields = ['price', 'sub_category_en', 'sub_category_ru', 'sub_category_tr', 'mileage', 'year', 'currency']


class FilterAvtoViews(django_filters.FilterSet):
    avto_full = django_filters.NumberFilter()
    user = django_filters.NumberFilter()

    class Meta:
        model = AvtoFullViewsUser
        fields = ['avto_full', 'user']


class FilterAvtoFavourites(django_filters.FilterSet):
    avto_full = django_filters.NumberFilter()
    user = django_filters.NumberFilter()

    class Meta:
        model = AvtoFullFavouritesUser
        fields = ['avto_full', 'user']
