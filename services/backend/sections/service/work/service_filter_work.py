import django_filters
from sections.models import (
    WorkFull, WorkFullViewsUser, WorkFullFavouritesUser
)


class FilterWork(django_filters.FilterSet):
    price = django_filters.NumberFilter()
    price__gt = django_filters.NumberFilter(field_name='price', lookup_expr='gt')
    price__lt = django_filters.NumberFilter(field_name='price', lookup_expr='lt')

    sub_category_en = django_filters.CharFilter()
    sub_category_ru = django_filters.CharFilter()
    sub_category_tr = django_filters.CharFilter()

    for_work_type_en = django_filters.CharFilter()
    for_work_type_ru = django_filters.CharFilter()
    for_work_type_tr = django_filters.CharFilter()

    employment_en = django_filters.CharFilter()
    employment_ru = django_filters.CharFilter()
    employment_tr = django_filters.CharFilter()
    currency = django_filters.CharFilter()

    class Meta:
        model = WorkFull
        fields = [
            'price', 'sub_category_en', 'sub_category_ru', 'sub_category_tr', 'for_work_type_en',
            'for_work_type_ru', 'for_work_type_tr', 'employment_en', 'employment_ru', 'employment_tr', 'currency'
        ]


class FilterWorkViews(django_filters.FilterSet):
    work_full = django_filters.NumberFilter()
    user = django_filters.NumberFilter()

    class Meta:
        model = WorkFullViewsUser
        fields = ['work_full', 'user']


class FilterWorkFavourites(django_filters.FilterSet):
    work_full = django_filters.NumberFilter()
    user = django_filters.NumberFilter()

    class Meta:
        model = WorkFullFavouritesUser
        fields = ['work_full', 'user']
