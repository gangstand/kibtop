from rest_framework import generics, status
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from translatepy import Translator

from sections.models import (
    ElectronicsFull, ElectronicsFullFavouritesUser, ElectronicsFullViewsUser, ElectronicsFullUpload
)
from sections.serializer import (
    ElectronicsFullSerializer, ElectronicsFullSerializerEN, ElectronicsFullSerializerRU, ElectronicsFullSerializerTR,
    ElectronicsFullSerializerDetail, ElectronicsFullFavouritesUserSerializer, ElectronicsFullViewsUserSerializer,
    ElectronicsFullUploadSerializer
)
from sections.service import (
    FilterElectronics, FilterElectronicsViews, FilterElectronicsFavourites,
)
from sections.utils import query_list_lang

model_electronics = ElectronicsFull.objects.filter(publisher=True)


class ElectronicsLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class ElectronicsFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = ElectronicsFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterElectronics
    pagination_class = ElectronicsLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': model_electronics,
                'serializer_class': ElectronicsFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': model_electronics,
                'serializer_class': ElectronicsFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': model_electronics,
                'serializer_class': ElectronicsFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(model_electronics, ElectronicsFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(model_electronics, ElectronicsFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(model_electronics, ElectronicsFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class ElectronicsFullAPIListCreate(generics.CreateAPIView):
    queryset = model_electronics
    serializer_class = ElectronicsFullSerializerDetail
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
                )
        else:
            return Response({'message': 'bad'})
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class ElectronicsFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_electronics
    serializer_class = ElectronicsFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ElectronicsFullViewsUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterElectronicsViews
    queryset = ElectronicsFullViewsUser.objects.all()
    serializer_class = ElectronicsFullViewsUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ElectronicsFullFavouritesUserAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterElectronicsFavourites
    queryset = ElectronicsFullFavouritesUser.objects.all()
    serializer_class = ElectronicsFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ElectronicsFullFavouritesUserAPIUpdateDestroy(generics.DestroyAPIView):
    queryset = ElectronicsFullFavouritesUser.objects.all()
    serializer_class = ElectronicsFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ElectronicsFullArchiveUserAPIDestroy(generics.DestroyAPIView):
    queryset = ElectronicsFull.objects.all()
    serializer_class = ElectronicsFullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ElectronicsFullUploadsAPIList(generics.ListCreateAPIView):
    queryset = ElectronicsFullUpload.objects.all()
    serializer_class = ElectronicsFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ElectronicsFullUploadsAPIUpdateList(generics.UpdateAPIView):
    queryset = ElectronicsFullUpload.objects.all()
    serializer_class = ElectronicsFullUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
