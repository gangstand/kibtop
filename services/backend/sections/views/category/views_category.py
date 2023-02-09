from itertools import chain

from django.core import serializers
from django.db.models import Q

import requests
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
from rest_framework.parsers import JSONParser
from rest_framework import filters
from sections.serializer.base_serializer import FullCategoryFieldsSerializer
from fuzzywuzzy import fuzz
from fuzzywuzzy import process

from sections.models import (
    AvtoFull,
    ChildrenFull,
    ElectronicsFull,
    FashionFull,
    HouseGardenFull,
    RealtyFull,
    ServicesFull,
    WorkFull
)
from sections.serializer import (
    CategoryFullSerializer

)
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from settings.settings import BASE_URL


class CategoryLimitPagination(PageNumberPagination):
    default_limit = 10


class CategoryFullAPIList(generics.ListAPIView):
    serializer_class = CategoryFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = AvtoFull
    filter_backends = (DjangoFilterBackend,)
    pagination_class = CategoryLimitPagination

    def get(self, request, *args, **kwargs):
        query = self.request.query_params
        category = ['avto', 'children', 'electronics', 'fashion', 'house_garden', 'realty', 'services', 'work']
        urls = [f'{BASE_URL}/v1/{i}/?lang=en' for i in category]
        responses = [requests.get(u) for u in urls]
        res = []
        for response in responses:
            res.append(response.json()['results']['en'])
        res = [*res[0], *res[1], *res[2], *res[3], *res[4], *res[5], *res[6], *res[7]]
        int_len = len(res)

        limit = int(query['limit'])
        page = int(query['page'])
        if limit <= int_len:
            first = page * limit
            last = first + limit
            res = res[first:last]
        try:
            if query['lang'] == 'en':

                urls = [f'{BASE_URL}/v1/{i}/?lang=en' for i in category]
                responses = [requests.get(u) for u in urls]
                res = []
                for response in responses:
                    res.append(response.json()['results']['en'])
                res = [*res[0], *res[1], *res[2], *res[3], *res[4], *res[5], *res[6], *res[7]]
                int_len = len(res)

                limit = int(query['limit'])
                page = int(query['page'])
                if limit <= int_len:
                    first = page * limit
                    last = first + limit
                    res = res[first:last]
                return Response(res, status=HTTP_200_OK)
            if query['lang'] == 'ru':

                urls = [f'{BASE_URL}/v1/{i}/?lang=ru' for i in category]
                responses = [requests.get(u) for u in urls]
                res = []
                for response in responses:
                    res.append(response.json()['results']['ru'])
                res = [*res[0], *res[1], *res[2], *res[3], *res[4], *res[5], *res[6], *res[7]]
                int_len = len(res)

                limit = int(query['limit'])
                page = int(query['page'])

                if limit <= int_len:
                    first = page * limit
                    last = first + limit
                    res = res[first:last]
                return Response(res, status=HTTP_200_OK)
            if query['lang'] == 'tr':

                urls = [f'{BASE_URL}/v1/{i}/?lang=tr' for i in category]
                responses = [requests.get(u) for u in urls]
                res = []
                for response in responses:
                    res.append(response.json()['results']['tr'])
                res = [*res[0], *res[1], *res[2], *res[3], *res[4], *res[5], *res[6], *res[7]]
                int_len = len(res)

                limit = int(query['limit'])
                page = int(query['page'])

                if limit <= int_len:
                    first = page * limit
                    last = first + limit
                    res = res[first:last]
                return Response(res, status=HTTP_200_OK)
            return Response(res, status=HTTP_200_OK)
        except Exception:
            return Response(res, status=HTTP_200_OK)

def create_filter_expression(fields, search, table_name):
    return " ".join([f"LOWER('{table_name}.{field}') LIKE LOWER('%%{search}%%') OR" for field in fields])[:-3]

class CategorySearchAPI(generics.ListAPIView):
    serializer_class = FullCategoryFieldsSerializer
    queryset = AvtoFull

    def get(self, request, *args, **kwargs):
        search = self.request.query_params['search']

        avto = self.search_models( list(chain(AvtoFull.objects.all().values())), search )
        children = self.search_models( list(chain(ChildrenFull.objects.all().values())), search )
        electronics = self.search_models( list(chain(ElectronicsFull.objects.all().values())), search )
        fashion = self.search_models( list(chain(FashionFull.objects.all().values())), search )
        house_garden = self.search_models( list(chain(HouseGardenFull.objects.all().values())), search )
        realty = self.search_models( list(chain(RealtyFull.objects.all().values())), search )
        services = self.search_models( list(chain(ServicesFull.objects.all().values())), search )
        work = self.search_models( list(chain(WorkFull.objects.all().values())), search )

        return Response({
            'avto': avto,
            'children': children,
            'electronics': electronics,
            'fashion': fashion,
            'house_garden': house_garden,
            'realty': realty,
            'services': services,
            'work': work,
        }, status=HTTP_200_OK)

    @staticmethod
    def search_models(model, search):
        def generate_expression(advert):
            search_fields = ['title_en', 'title_ru', 'title_tr']

            similarity = any([fuzz.token_set_ratio(advert[field], search) > 70 for field in search_fields])
            entry = any([any(word in advert[field] for word in search.split(' ')) for field in search_fields])

            return similarity or entry

        return [advert for advert in model if generate_expression(advert)]

