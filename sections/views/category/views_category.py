import math
import random

import requests
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK

from sections.models import (
    AvtoFull
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
