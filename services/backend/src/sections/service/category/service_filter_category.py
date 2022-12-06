import django_filters

from sections.models import BaseModelFull


class FilterCategory(django_filters.FilterSet):
    category_en = django_filters.CharFilter()
    category_ru = django_filters.CharFilter()
    category_tr = django_filters.CharFilter()

    class Meta:
        model = BaseModelFull
        fields = ['category_en', 'category_ru', 'category_tr',]
