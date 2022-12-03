from rest_framework import serializers

from sections.models import *
from .serializer_img import *


class RealtyFullSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyFull
        fields = ('id', 'title', 'created_at', 'updated_at', 'address', 'price', 'upload', 'sub_apartment', 'sell_type',
                  'all_old_new',
                  'number_rooms')


class RealtyFullSerializerDetail(serializers.ModelSerializer):
    realty_full_upload = RealtyFullUploadSerializer(many=True)

    class Meta:
        model = RealtyFull
        fields = '__all__'
