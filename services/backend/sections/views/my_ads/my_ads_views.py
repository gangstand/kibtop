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


class MyAdsLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class MyAdsAPIList(generics.ListAPIView):
    serializer_class = CategoryFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filterset_class = FilterCategory
    pagination_class = MyAdsLimitPagination

    def get(self, request, *args, **kwargs):
        query = self.request.query_params
        try:
            if type(int(query['id'])) == int:
                id = query["id"]
            else:
                return Response({"message": "not query id"})
        except:
            return Response({"message": "not query id"})
        filters = {
            'avto': AvtoFull.objects.filter(user=id, publisher=True),
            'children': ChildrenFull.objects.filter(user=id, publisher=True),
            'electronics': ElectronicsFull.objects.filter(user=id, publisher=True),
            'fashion': FashionFull.objects.filter(user=id, publisher=True),
            'house_garden': HouseGardenFull.objects.filter(user=id, publisher=True),
            'realty': RealtyFull.objects.filter(user=id, publisher=True),
            'services': ServicesFull.objects.filter(user=id, publisher=True),
            'work': WorkFull.objects.filter(user=id, publisher=True),
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
