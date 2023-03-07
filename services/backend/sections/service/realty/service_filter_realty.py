import django_filters
from django_filters import filters
from django_filters.constants import EMPTY_VALUES
from sections.models import (
    RealtyFull, RealtyFullViewsUser, RealtyFullFavouritesUser
)


class ListFilter(filters.Filter):
    def filter(self, qs, value):
        if value in EMPTY_VALUES:
            return qs
        value_list = value.split(",")
        qs = super().filter(qs, value_list)
        return qs


class FilterRealty(django_filters.FilterSet):
    price = django_filters.NumberFilter()
    price__gt = django_filters.NumberFilter(field_name='price', lookup_expr='gt')
    price__lt = django_filters.NumberFilter(field_name='price', lookup_expr='lt')
    sub_category_en = django_filters.CharFilter()
    sub_category_ru = django_filters.CharFilter()
    sub_category_tr = django_filters.CharFilter()

    sell_type_en = django_filters.CharFilter()
    sell_type_ru = django_filters.CharFilter()
    sell_type_tr = django_filters.CharFilter()

    all_old_new_en = ListFilter(field_name="all_old_new_en", lookup_expr="in")
    all_old_new_ru = ListFilter(field_name="all_old_new_ru", lookup_expr="in")
    all_old_new_tr = ListFilter(field_name="all_old_new_tr", lookup_expr="in")

    number_rooms_en = ListFilter(field_name="number_rooms_en", lookup_expr="in")
    number_rooms_ru = ListFilter(field_name="number_rooms_en", lookup_expr="in")
    number_rooms_tr = ListFilter(field_name="number_rooms_en", lookup_expr="in")
    currency = django_filters.CharFilter()
    city = django_filters.CharFilter()
    full_price = django_filters.CharFilter()
    class Meta:
        model = RealtyFull
        fields = [
            'price', 'sub_category_en', 'sub_category_ru', 'sub_category_tr',
            'sell_type_en', 'all_old_new_en', 'number_rooms_en', 'sell_type_ru',
            'all_old_new_ru', 'number_rooms_ru', 'sell_type_tr', 'all_old_new_tr',
            'number_rooms_tr', 'currency'
        ]


class FilterRealtyViews(django_filters.FilterSet):
    realty_full = django_filters.NumberFilter()
    user = django_filters.NumberFilter()

    class Meta:
        model = RealtyFullViewsUser
        fields = ['realty_full', 'user']


class FilterRealtyFavourites(django_filters.FilterSet):
    realty_full = django_filters.NumberFilter()
    user = django_filters.NumberFilter()

    class Meta:
        model = RealtyFullFavouritesUser
        fields = ['realty_full', 'user']
