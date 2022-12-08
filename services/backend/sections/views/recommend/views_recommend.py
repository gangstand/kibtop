from rest_framework import generics
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from sections.models import RealtyFull
from django_filters.rest_framework import DjangoFilterBackend
from sections.serializer import RealtyFullSerializerEN, RealtyFullSerializerRU, RealtyFullSerializerTR
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from sections.utils import query_list_lang

model_realty = RealtyFull.objects.all()


class RecommendLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class RecommendFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    pagination_class = RecommendLimitPagination

    def get_querylist(self):
        query = self.request.query_params
        querylist_full = [
            {
                'queryset': model_realty,
                'serializer_class': RealtyFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': model_realty,
                'serializer_class': RealtyFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': model_realty,
                'serializer_class': RealtyFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(model_realty, RealtyFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(model_realty, RealtyFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(model_realty, RealtyFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full
