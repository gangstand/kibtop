from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK

from sections.models import (
    AvtoFull, ChildrenFull, FashionFull, RealtyFull, HouseGardenFull, ServicesFull, WorkFull,
    ElectronicsFull
)
from sections.serializer import FullFavouritesUserSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class NewLimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 10


class FullFavouritesUser(generics.ListAPIView):
    serializer_class = FullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    pagination_class = NewLimitPagination

    def get(self, request, *args, **kwargs):
        filters = {
            'avto': AvtoFull.objects.filter(publisher=True),
            'children': ChildrenFull.objects.filter(publisher=True),
            'electronics': ElectronicsFull.objects.filter(publisher=True),
            'fashion': FashionFull.objects.filter(publisher=True),
            'house_garden': HouseGardenFull.objects.filter(publisher=True),
            'realty': RealtyFull.objects.filter(publisher=True),
            'services': ServicesFull.objects.filter(publisher=True),
            'work': WorkFull.objects.filter(publisher=True),
        }

        serializer = FullFavouritesUserSerializer(filters)
        return Response(serializer.data, status=HTTP_200_OK)