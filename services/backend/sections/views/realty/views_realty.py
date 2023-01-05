from rest_framework import generics
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from translatepy import Translator

from sections.models import (
    RealtyFull, RealtyFullFavouritesUser, RealtyFullViewsUser
)
from sections.serializer import (
    RealtyFullSerializerDetail, RealtyFullSerializerEN, RealtyFullSerializerRU,
    RealtyFullSerializerTR, RealtyFullSerializer, RealtyFullViewsUserSerializer, RealtyFullFavouritesUserSerializer
)
from sections.service import (
    FilterRealty, FilterRealtyFavourites, FilterRealtyViews
)
from sections.utils import query_list_lang

model_realty = RealtyFull.objects.filter(publisher=True, )


class RealtyLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class RealtyFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = RealtyFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterRealty
    pagination_class = RealtyLimitPagination

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


class RealtyFullAPIListCreate(generics.CreateAPIView):
    queryset = model_realty
    serializer_class = RealtyFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def post(self, request, *args, **kwargs):
        request_data = request.data
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(data=request_data, context={'request': request})

        request_data_set = []
        for lang in ['_ru', '_en', '_tr']:
            request_data_set.append([s for s in filter(lambda x: lang in x, [i for i in request_data])])
        request_data_set = [x for x in request_data_set if x != []][0]

        request_data = [request_data[i] for i in request_data_set]

        lang = request_data_set[0][-2:]
        if lang == "tr":
            lang_ru = [Translator().translate(i, 'ru', 'tr').result for i in request_data]
            lang_en = [Translator().translate(i, 'en', 'tr').result for i in request_data]
            if serializer.is_valid():
                serializer.save(
                    title_en=lang_en[0],
                    title_ru=lang_ru[0],
                    category_en=lang_en[1],
                    category_ru=lang_ru[1],
                    sub_category_en=lang_en[2],
                    sub_category_ru=lang_ru[2],
                    all_old_new_en=lang_en[3],
                    all_old_new_ru=lang_ru[3],
                    number_rooms_en=lang_en[4],
                    number_rooms_ru=lang_ru[4],
                )
        elif lang == "en":
            lang_ru = [Translator().translate(i, 'ru', 'en').result for i in request_data]
            lang_tr = [Translator().translate(i, 'tr', 'en').result for i in request_data]
            if serializer.is_valid():
                serializer.save(
                    title_tr=lang_tr[0],
                    title_ru=lang_ru[0],
                    category_tr=lang_tr[1],
                    category_ru=lang_ru[1],
                    sub_category_tr=lang_tr[2],
                    sub_category_ru=lang_ru[2],
                    all_old_new_tr=lang_tr[3],
                    all_old_new_ru=lang_ru[3],
                    number_rooms_tr=lang_tr[4],
                    number_rooms_ru=lang_ru[4],
                )
        elif lang == "ru":
            lang_en = [Translator().translate(i, 'en', 'ru').result for i in request_data]
            lang_tr = [Translator().translate(i, 'tr', 'ru').result for i in request_data]
            if serializer.is_valid():
                serializer.save(
                    title_en=lang_en[0],
                    title_tr=lang_tr[0],
                    category_en=lang_en[1],
                    category_tr=lang_tr[1],
                    sub_category_en=lang_en[2],
                    sub_category_tr=lang_tr[2],
                    all_old_new_en=lang_en[3],
                    all_old_new_tr=lang_tr[3],
                    number_rooms_en=lang_en[4],
                    number_rooms_tr=lang_tr[4],
                )
        else:
            return Response({'message': 'bad'})
        return Response({'message': 'good'})


class RealtyFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_realty
    serializer_class = RealtyFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterRealtyViews
    queryset = RealtyFullViewsUser.objects.all()
    serializer_class = RealtyFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterRealtyFavourites
    queryset = RealtyFullFavouritesUser.objects.all()
    serializer_class = RealtyFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = RealtyFullFavouritesUser.objects.all()
    serializer_class = RealtyFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
