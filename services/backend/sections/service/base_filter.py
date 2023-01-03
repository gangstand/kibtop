import django_filters

from sections.models import AvtoFullViewsUser, AvtoFullFavouritesUser


class FilterViews(django_filters.FilterSet):
    avto_full = django_filters.NumberFilter()
    user = django_filters.NumberFilter()

    class Meta:
        model = AvtoFullViewsUser
        fields = ['avto_full', 'user']


class FilterFavourites(django_filters.FilterSet):
    avto_full = django_filters.NumberFilter()
    user = django_filters.NumberFilter()

    class Meta:
        model = AvtoFullFavouritesUser
        fields = ['avto_full', 'user']
