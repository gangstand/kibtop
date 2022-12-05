from sections.models import RealtyFull

import django_filters


def filter_by_ids(queryset, name, value):
    values = value.split(',')
    return queryset.filter(id__in=values)


class FilterRealty(django_filters.FilterSet):
    price = django_filters.NumberFilter()
    price__gt = django_filters.NumberFilter(field_name='price', lookup_expr='gt')
    price__lt = django_filters.NumberFilter(field_name='price', lookup_expr='lt')
    sub_apartment = django_filters.CharFilter()
    sell_type = django_filters.CharFilter()
    all_old_new = django_filters.CharFilter()
    number_rooms = django_filters.CharFilter()
    id = django_filters.RangeFilter()
    ids = django_filters.CharFilter(method=filter_by_ids)

    class Meta:
        model = RealtyFull
        fields = ['price', 'sub_apartment', 'sell_type', 'all_old_new', 'number_rooms', 'id', 'ids']
