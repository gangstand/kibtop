import itertools

from rest_framework import generics
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from sections.models import *
from sections.serializer import *
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from sections.serializer import *
from sections.service import *


class CategoryFullAPIList(generics.ListCreateAPIView):
    queryset = BaseCategory.objects.all()
    serializer_class = CategoryFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterCategory


class CategoryFullDestroyAPIList(generics.RetrieveUpdateDestroyAPIView):
    queryset = BaseCategory.objects.all()
    serializer_class = CategoryFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
