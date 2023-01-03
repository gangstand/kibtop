from rest_framework import generics
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.models import (
    HouseGardenFull, HouseGardenFullViewsUser, HouseGardenFullFavouritesUser
)
from sections.serializer import (
    HouseGardenFullSerializer, HouseGardenFullSerializerEN, HouseGardenFullSerializerRU, HouseGardenFullSerializerTR,
    HouseGardenFullSerializerDetail, HouseGardenFullViewsUserSerializer, HouseGardenFullFavouritesUserSerializer
)
from sections.service import (
    FilterHouseGarden, FilterHouseGardenViews, FilterHouseGardenFavourites
)
from sections.utils import query_list_lang

model_fashion = HouseGardenFull.objects.filter(publisher=True)


class HouseGardenLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class HouseGardenFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = HouseGardenFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterHouseGarden
    pagination_class = HouseGardenLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': model_fashion,
                'serializer_class': HouseGardenFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': model_fashion,
                'serializer_class': HouseGardenFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': model_fashion,
                'serializer_class': HouseGardenFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(model_fashion, HouseGardenFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(model_fashion, HouseGardenFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(model_fashion, HouseGardenFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class HouseGardenFullAPIListCreate(generics.CreateAPIView):
    queryset = model_fashion
    serializer_class = HouseGardenFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class HouseGardenFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_fashion
    serializer_class = HouseGardenFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class HouseGardenFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterHouseGardenViews
    queryset = HouseGardenFullViewsUser.objects.all()
    serializer_class = HouseGardenFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class HouseGardenFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterHouseGardenFavourites
    queryset = HouseGardenFullFavouritesUser.objects.all()
    serializer_class = HouseGardenFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class HouseGardenFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = HouseGardenFullFavouritesUser.objects.all()
    serializer_class = HouseGardenFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
