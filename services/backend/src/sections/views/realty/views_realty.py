from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from sections.models import RealtyFull
from sections.serializer import RealtyFullSerializer, RealtyFullSerializerDetail
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.service import FilterRealty


class RealtyFullAPIList(generics.ListAPIView):
    queryset = RealtyFull.objects.all()
    serializer_class = RealtyFullSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterRealty


class RealtyFullAPIListCreate(generics.CreateAPIView):
    queryset = RealtyFull.objects.all()
    serializer_class = RealtyFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RealtyFull.objects.all()
    serializer_class = RealtyFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)
