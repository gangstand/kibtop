from rest_framework import serializers

from sections.models import *


class RealtyApartmentsSaleSecondarySerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyApartmentsSaleSecondary
        fields = '__all__'


class RealtyApartmentsSaleRentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyApartmentsSaleRent
        fields = '__all__'


class RealtyHomeSaleSecondarySerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyHomeSaleSecondary
        fields = '__all__'


class RealtyHomeSaleRentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyHomeSaleRent
        fields = '__all__'


class RealtyLandPlotSaleSecondarySerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyLandPlotSaleSecondary
        fields = '__all__'


class RealtyLandPlotSaleRentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyLandPlotSaleRent
        fields = '__all__'
