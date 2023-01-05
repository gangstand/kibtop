from sections.models import (
    HouseGardenFull, HouseGardenFullViewsUser, HouseGardenFullFavouritesUser
)
import django_filters


class FilterHouseGarden(django_filters.FilterSet):
    price = django_filters.NumberFilter()
    price__gt = django_filters.NumberFilter(field_name='price', lookup_expr='gt')
    price__lt = django_filters.NumberFilter(field_name='price', lookup_expr='lt')
    sub_category_en = django_filters.CharFilter()
    sub_category_ru = django_filters.CharFilter()
    sub_category_tr = django_filters.CharFilter()

    class Meta:
        model = HouseGardenFull
        fields = ['price', 'sub_category_en', 'sub_category_ru', 'sub_category_tr']


class FilterHouseGardenViews(django_filters.FilterSet):
    avto_full = django_filters.NumberFilter()
    user = django_filters.NumberFilter()

    class Meta:
        model = HouseGardenFullViewsUser
        fields = ['avto_full', 'user']


class FilterHouseGardenFavourites(django_filters.FilterSet):
    avto_full = django_filters.NumberFilter()
    user = django_filters.NumberFilter()

    class Meta:
        model = HouseGardenFullFavouritesUser
        fields = ['avto_full', 'user']
