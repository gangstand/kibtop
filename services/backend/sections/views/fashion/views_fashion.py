from rest_framework import generics
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.models import (
    FashionFull, FashionFullViewsUser, FashionFullFavouritesUser
)
from sections.serializer import (
    FashionFullSerializer, FashionFullSerializerEN, FashionFullSerializerRU, FashionFullSerializerTR,
    FashionFullSerializerDetail, FashionFullFavouritesUserSerializer, FashionFullViewsUserSerializer
)
from sections.service import (
    FilterFashion, FilterFashionViews, FilterFashionFavourites
)
from sections.utils import query_list_lang

model_fashion = FashionFull.objects.filter(publisher=True)


class FashionLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class FashionFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = FashionFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterFashion
    pagination_class = FashionLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': model_fashion,
                'serializer_class': FashionFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': model_fashion,
                'serializer_class': FashionFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': model_fashion,
                'serializer_class': FashionFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(model_fashion, FashionFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(model_fashion, FashionFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(model_fashion, FashionFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class FashionFullAPIListCreate(generics.CreateAPIView):
    queryset = model_fashion
    serializer_class = FashionFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FashionFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_fashion
    serializer_class = FashionFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FashionFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterFashionViews
    queryset = FashionFullViewsUser.objects.all()
    serializer_class = FashionFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FashionFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterFashionFavourites
    queryset = FashionFullFavouritesUser.objects.all()
    serializer_class = FashionFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class FashionFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = FashionFullFavouritesUser.objects.all()
    serializer_class = FashionFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
