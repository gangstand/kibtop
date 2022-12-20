from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK

from sections.models import (
    AvtoFull, ChildrenFull, FashionFull, RealtyFull, HouseGardenFull, ServicesFull, WorkFull,
    ElectronicsFull
)
from sections.serializer import (
    CategoryFullSerializerEN, CategoryFullSerializerRU, CategoryFullSerializerTR,
    CategoryFullSerializer
)
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.service import FilterCategory


class CategoryLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class CategoryFullAPIList(generics.ListAPIView):
    serializer_class = CategoryFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filterset_class = FilterCategory
    pagination_class = CategoryLimitPagination

    def get(self, request, *args, **kwargs):
        query = self.request.query_params
        filters = {
            'avto': AvtoFull.objects.all(),
            'children': ChildrenFull.objects.all(),
            'electronics': ElectronicsFull.objects.all(),
            'fashion': FashionFull.objects.all(),
            'house_garden': HouseGardenFull.objects.all(),
            'realty': RealtyFull.objects.all(),
            'services': ServicesFull.objects.all(),
            'work': WorkFull.objects.all(),
        }
        serializer_en = CategoryFullSerializerEN(filters)
        serializer_ru = CategoryFullSerializerRU(filters)
        serializer_tr = CategoryFullSerializerTR(filters)

        try:
            if query['lang'] == 'en':
                return Response(serializer_en.data, status=HTTP_200_OK)
            elif query['lang'] == 'ru':
                return Response(serializer_ru.data, status=HTTP_200_OK)
            elif query['lang'] == 'tr':
                return Response(serializer_tr.data, status=HTTP_200_OK)
            return Response(serializer_en.data, status=HTTP_200_OK)
        except Exception:
            return Response(serializer_en.data, status=HTTP_200_OK)
