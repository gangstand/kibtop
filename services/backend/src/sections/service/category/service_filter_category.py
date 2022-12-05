import django_filters

from sections.models import BaseModelFull


class FilterCategory(django_filters.FilterSet):
    category = django_filters.CharFilter()

    class Meta:
        model = BaseModelFull
        fields = ['category', ]
