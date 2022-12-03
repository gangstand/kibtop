from rest_framework import generics
from sections.models import *
from sections.serializer import *
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class StockAPIList(generics.ListCreateAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class StockAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
