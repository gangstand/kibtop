from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from rest_framework import generics
from sections.models import Money, City
from sections.serializer import MoneySerializer, CitySerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class MoneyAPIList(generics.ListCreateAPIView):
    queryset = Money.objects.all()
    serializer_class = MoneySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class MoneyAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Money.objects.all()
    serializer_class = MoneySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class CityAPIList(generics.ListAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
