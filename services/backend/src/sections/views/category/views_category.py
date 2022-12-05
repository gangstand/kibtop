from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action

from sections.models import RealtyFull
from sections.serializer import RealtyFullSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.service import FilterCategory


class LimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class CategoryFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    querylist = [
        {
            'queryset': RealtyFull.objects.all(),
            'serializer_class': RealtyFullSerializer,
            'label': 'realty_full',
        }, ]
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterCategory
