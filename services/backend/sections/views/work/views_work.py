from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from sections.models import WorkFull
from sections.serializer import (
    WorkFullSerializer, WorkFullSerializerEN, WorkFullSerializerRU, WorkFullSerializerTR, WorkFullSerializerDetail
)
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.service import FilterWork
from sections.utils import query_list_lang

model_work = WorkFull.objects.filter(publisher=True,)


class WorkLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class WorkFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    serializer_class = WorkFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterWork
    pagination_class = WorkLimitPagination

    def get_querylist(self):

        query = self.request.query_params

        querylist_full = [
            {
                'queryset': model_work,
                'serializer_class': WorkFullSerializerEN,
                'label': 'en',
            },
            {
                'queryset': model_work,
                'serializer_class': WorkFullSerializerRU,
                'label': 'ru',
            },
            {
                'queryset': model_work,
                'serializer_class': WorkFullSerializerTR,
                'label': 'tr',
            },
        ]

        try:
            if query['lang'] == 'en':
                return query_list_lang(model_work, WorkFullSerializerEN, 'en')
            elif query['lang'] == 'ru':
                return query_list_lang(model_work, WorkFullSerializerRU, 'ru')
            elif query['lang'] == 'tr':
                return query_list_lang(model_work, WorkFullSerializerTR, 'tr')
            return querylist_full
        except Exception:
            return querylist_full


class WorkFullAPIListCreate(generics.CreateAPIView):
    queryset = model_work
    serializer_class = WorkFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class WorkFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = model_work
    serializer_class = WorkFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)
