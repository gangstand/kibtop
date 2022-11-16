from rest_framework import generics
from sections.models import Product, Category, RealtyApartmentsSaleSecondary
from sections.permissions import IsAdminOrReadOnly, IsOwnerOrReadOnly
from sections.serializer import ProductSerializer, CategorySerializer, RealtyApartmentsSaleSecondarySerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class ProductAPIList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class ProductAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (IsAdminOrReadOnly, IsOwnerOrReadOnly,)


class CategoryAPIList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class CategoryAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAdminOrReadOnly, IsOwnerOrReadOnly,)


class RealtyAPIList(generics.ListCreateAPIView):
    queryset = RealtyApartmentsSaleSecondary.objects.all()
    serializer_class = RealtyApartmentsSaleSecondarySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RealtyApartmentsSaleSecondary.objects.all()
    serializer_class = RealtyApartmentsSaleSecondarySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
