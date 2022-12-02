from rest_framework import generics
from .models import *
from .serializer import *
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class RealtyApartmentsSaleSecondaryAPIList(generics.ListCreateAPIView):
    queryset = RealtyApartmentsSaleSecondary.objects.all()
    serializer_class = RealtyApartmentsSaleSecondarySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyApartmentsSaleSecondaryAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RealtyApartmentsSaleSecondary.objects.all()
    serializer_class = RealtyApartmentsSaleSecondarySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyApartmentsSaleRentAPIList(generics.ListCreateAPIView):
    queryset = RealtyApartmentsSaleRent.objects.all()
    serializer_class = RealtyApartmentsSaleRentSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyApartmentsSaleRentAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RealtyApartmentsSaleRent.objects.all()
    serializer_class = RealtyApartmentsSaleRentSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyHomeSaleSecondaryAPIList(generics.ListCreateAPIView):
    queryset = RealtyHomeSaleSecondary.objects.all()
    serializer_class = RealtyHomeSaleSecondarySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyHomeSaleSecondaryAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RealtyHomeSaleSecondary.objects.all()
    serializer_class = RealtyHomeSaleSecondarySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyHomeSaleRentAPIList(generics.ListCreateAPIView):
    queryset = RealtyHomeSaleRent.objects.all()
    serializer_class = RealtyHomeSaleRentSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyHomeSaleRentAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RealtyHomeSaleRent.objects.all()
    serializer_class = RealtyHomeSaleRentSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyLandPlotSaleSecondaryAPIList(generics.ListCreateAPIView):
    queryset = RealtyLandPlotSaleSecondary.objects.all()
    serializer_class = RealtyLandPlotSaleSecondarySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyLandPlotSaleSecondaryAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RealtyLandPlotSaleSecondary.objects.all()
    serializer_class = RealtyLandPlotSaleSecondarySerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyLandPlotSaleRentAPIList(generics.ListCreateAPIView):
    queryset = RealtyLandPlotSaleRent.objects.all()
    serializer_class = RealtyLandPlotSaleRentSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyLandPlotSaleRentAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RealtyLandPlotSaleRent.objects.all()
    serializer_class = RealtyLandPlotSaleRentSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
