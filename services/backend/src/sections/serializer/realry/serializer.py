from rest_framework import serializers

from sections.models import *
from .serializer_img import *


class RealtyFullSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyFull
        fields = ('title', 'created_at', 'updated_at', 'address', 'price', 'upload',)


class RealtyFullSerializerDetail(serializers.ModelSerializer):
    realty_full_upload = RealtyFullUploadSerializer(many=True)

    class Meta:
        model = RealtyFull
        fields = '__all__'
