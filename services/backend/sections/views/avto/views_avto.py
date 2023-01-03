from rest_framework import generics
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.models import (
    AvtoFull, AvtoFullFavouritesUser, AvtoFullViewsUser
)
from sections.serializer import (
    AvtoFullSerializer, AvtoFullSerializerEN, AvtoFullSerializerRU, AvtoFullSerializerTR,
    AvtoFullSerializerDetail, AvtoFullViewsUserSerializer, AvtoFullFavouritesUserSerializer
)
from sections.service import (
    FilterAvto, FilterAvtoViews, FilterAvtoFavourites)

from sections.utils import query_list_lang

model_avto = AvtoFull.objects.filter(publisher=True)


class AvtoLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class AvtoFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = AvtoFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterAvto
    pagination_class = AvtoLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': model_avto,
                'serializer_class': AvtoFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': model_avto,
                'serializer_class': AvtoFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': model_avto,
                'serializer_class': AvtoFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(model_avto, AvtoFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(model_avto, AvtoFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(model_avto, AvtoFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class AvtoFullAPIListCreate(generics.CreateAPIView):
    queryset = model_avto
    serializer_class = AvtoFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class AvtoFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_avto
    serializer_class = AvtoFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class AvtoFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterAvtoViews
    queryset = AvtoFullViewsUser.objects.all()
    serializer_class = AvtoFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class AvtoFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterAvtoFavourites
    queryset = AvtoFullFavouritesUser.objects.all()
    serializer_class = AvtoFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class AvtoFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = AvtoFullFavouritesUser.objects.all()
    serializer_class = AvtoFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
