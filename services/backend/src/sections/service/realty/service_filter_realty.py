from sections.models import RealtyFull

import django_filters


def filter_by_ids(queryset, name, value):
    values = value.split(',')
    return queryset.filter(id__in=values)


class FilterRealty(django_filters.FilterSet):
    price = django_filters.NumberFilter()
    price__gt = django_filters.NumberFilter(field_name='price', lookup_expr='gt')
    price__lt = django_filters.NumberFilter(field_name='price', lookup_expr='lt')
    sub_apartment_en = django_filters.CharFilter()
    sell_type_en = django_filters.CharFilter()
    all_old_new_en = django_filters.CharFilter()
    number_rooms_en = django_filters.CharFilter()
    id = django_filters.RangeFilter()
    ids = django_filters.CharFilter(method=filter_by_ids)

    class Meta:
        model = RealtyFull
        fields = ['price', 'sub_apartment_en', 'sell_type_en', 'all_old_new_en', 'number_rooms_en', 'id', 'ids']
