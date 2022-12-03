import django_filters

from sections.models import *


class FilterCategory(django_filters.FilterSet):
    category = django_filters.CharFilter()

    class Meta:
        model = BaseCategory
        fields = ['category', ]
