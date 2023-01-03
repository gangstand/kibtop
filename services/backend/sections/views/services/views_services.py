from rest_framework import generics
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.models import (
    ServicesFull, ServicesFullFavouritesUser, ServicesFullViewsUser
)
from sections.serializer import (
    ServicesFullSerializer, ServicesFullSerializerEN, ServicesFullSerializerRU, ServicesFullSerializerTR,
    ServicesFullSerializerDetail, ServicesFullFavouritesUserSerializer, ServicesFullViewsUserSerializer
)
from sections.service import (
    FilterServices, FilterServicesViews, FilterServicesFavourites
)
from sections.utils import query_list_lang

model_services = ServicesFull.objects.filter(publisher=True, )


class ServicesLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class ServicesFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = ServicesFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterServices
    pagination_class = ServicesLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': model_services,
                'serializer_class': ServicesFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': model_services,
                'serializer_class': ServicesFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': model_services,
                'serializer_class': ServicesFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(model_services, ServicesFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(model_services, ServicesFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(model_services, ServicesFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class ServicesFullAPIListCreate(generics.CreateAPIView):
    queryset = model_services
    serializer_class = ServicesFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ServicesFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_services
    serializer_class = ServicesFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ServicesFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterServicesViews
    queryset = ServicesFullViewsUser.objects.all()
    serializer_class = ServicesFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ServicesFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterServicesFavourites
    queryset = ServicesFullFavouritesUser.objects.all()
    serializer_class = ServicesFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ServicesFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = ServicesFullFavouritesUser.objects.all()
    serializer_class = ServicesFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
