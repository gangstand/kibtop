import django_filters

from sections.models import RealtyFull


class FilterCategory(django_filters.FilterSet):
    category = django_filters.CharFilter()

    class Meta:
        model = RealtyFull
        fields = ['category', ]
