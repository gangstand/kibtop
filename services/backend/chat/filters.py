import django_filters

from chat.models import Message, Group, User


class FilterMessageAPIList(django_filters.FilterSet):
    group = django_filters.NumberFilter()
    author = django_filters.NumberFilter()

    class Meta:
        model = Message
        fields = ['group', 'author']


class FilterGroup(django_filters.FilterSet):
    user = django_filters.Filter(field_name='members', lookup_expr='in')

    class Meta:
        model = Group
        fields = ('user', 'members')