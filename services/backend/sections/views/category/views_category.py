from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from sections.models import RealtyFull
from sections.serializer import RealtyFullSerializerEN, RealtyFullSerializerRU, RealtyFullSerializerTR
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.service import FilterCategory
from sections.utils import query_list_lang


class CategoryLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class CategoryFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterCategory
    pagination_class = CategoryLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': RealtyFull.objects.all(),
                'serializer_class': RealtyFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': RealtyFull.objects.all(),
                'serializer_class': RealtyFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': RealtyFull.objects.all(),
                'serializer_class': RealtyFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(RealtyFull.objects.all(), RealtyFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(RealtyFull.objects.all(), RealtyFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(RealtyFull.objects.all(), RealtyFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full
