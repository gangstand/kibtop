from rest_framework import generics, status
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from translatepy import Translator

from sections.models import (
    RealtyFull, RealtyFullFavouritesUser, RealtyFullViewsUser, RealtyFullUpload
)
from sections.serializer import (
    RealtyFullSerializerDetail, RealtyFullSerializerEN, RealtyFullSerializerRU, RealtyFullUploadSerializer,
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
        request_data_set_no_lang = [i[:-3] for i in request_data_set]
        request_data = [request_data[i] for i in request_data_set]
        lang = request_data_set[0][-2:]

        if lang == "tr":
            lang_ru = dict(zip(
                request_data_set_no_lang,
                [Translator().translate(i, 'ru', 'tr').result for i in request_data]
            ))
            lang_en = dict(zip(
                request_data_set_no_lang,
                [Translator().translate(i, 'en', 'tr').result for i in request_data]
            ))
            print(lang_en, lang_ru)
            if serializer.is_valid():
                serializer.save(
                    title_en=lang_en['title'],
                    title_ru=lang_ru['title'],
                    description_en=lang_en['description'],
                    description_ru=lang_ru['description'],
                    category_en=lang_en['category'],
                    category_ru=lang_ru['category'],
                    sub_category_en=lang_en['sub_category'],
                    sub_category_ru=lang_ru['sub_category'],
                    all_old_new_en=lang_en['all_old_new'],
                    all_old_new_ru=lang_ru['all_old_new'],
                    number_rooms_en=lang_en['number_rooms'],
                    number_rooms_ru=lang_ru['number_rooms'],
                )
        elif lang == "en":
            lang_ru = dict(zip(
                request_data_set_no_lang,
                [Translator().translate(i, 'ru', 'en').result for i in request_data]
            ))
            lang_tr = dict(zip(
                request_data_set_no_lang,
                [Translator().translate(i, 'tr', 'en').result for i in request_data]
            ))
            print(lang_tr, lang_ru)
            if serializer.is_valid():
                serializer.save(
                    title_tr=lang_tr['title'],
                    title_ru=lang_ru['title'],
                    description_tr=lang_tr['description'],
                    description_ru=lang_ru['description'],
                    category_tr=lang_tr['category'],
                    category_ru=lang_ru['category'],
                    sub_category_tr=lang_tr['sub_category'],
                    sub_category_ru=lang_ru['sub_category'],
                    all_old_new_tr=lang_tr['all_old_new'],
                    all_old_new_ru=lang_ru['all_old_new'],
                    number_rooms_tr=lang_tr['number_rooms'],
                    number_rooms_ru=lang_ru['number_rooms'],
                )
        elif lang == "ru":
            lang_en = dict(zip(
                request_data_set_no_lang,
                [Translator().translate(i, 'en', 'ru').result for i in request_data]
            ))
            lang_tr = dict(zip(
                request_data_set_no_lang,
                [Translator().translate(i, 'tr', 'ru').result for i in request_data]
            ))
            print(lang_tr, lang_en)
            if serializer.is_valid():
                serializer.save(
                    title_tr=lang_tr['title'],
                    title_en=lang_en['title'],
                    description_tr=lang_tr['description'],
                    description_en=lang_en['description'],
                    category_tr=lang_tr['category'],
                    category_en=lang_en['category'],
                    sub_category_tr=lang_tr['sub_category'],
                    sub_category_en=lang_en['sub_category'],
                    all_old_new_en=lang_en['all_old_new'],
                    all_old_new_tr=lang_tr['all_old_new'],
                    number_rooms_en=lang_en['number_rooms'],
                    number_rooms_tr=lang_tr['number_rooms'],
                )
        else:
            return Response({'message': 'bad'})
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


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


class RealtyFullArchiveUserAPIDestroy(generics.DestroyAPIView):
    queryset = RealtyFull.objects.all()
    serializer_class = RealtyFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyFullUploadsAPIList(generics.ListCreateAPIView):
    queryset = RealtyFullUpload.objects.all()
    serializer_class = RealtyFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyFullUploadsAPIUpdateList(generics.UpdateAPIView):
    queryset = RealtyFullUpload.objects.all()
    serializer_class = RealtyFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)