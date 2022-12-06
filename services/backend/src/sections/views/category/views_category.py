from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from sections.models import RealtyFull
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.serializer import RealtyFullSerializerRU, RealtyFullSerializerTR, RealtyFullSerializerEN
from sections.service import FilterCategory


class LimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class CategoryFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    querylist = [
            {
                'queryset': RealtyFull.objects.all(),
                'serializer_class': RealtyFullSerializerEN,
                'label': 'realty_en',
            },
            {
                'queryset': RealtyFull.objects.all(),
                'serializer_class': RealtyFullSerializerRU,
                'label': 'realty_ru',
            },
            {
                'queryset': RealtyFull.objects.all(),
                'serializer_class': RealtyFullSerializerTR,
                'label': 'realty_tr',
            },
    ]
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterCategory
