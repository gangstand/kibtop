from rest_framework import generics
from api.models import Product
from api.permissions import IsAdminOrReadOnly, IsOwnerOrReadOnly
from api.serializer import ProductSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class ProductAPIList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, )


class ProductAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (IsAdminOrReadOnly, IsOwnerOrReadOnly, )
