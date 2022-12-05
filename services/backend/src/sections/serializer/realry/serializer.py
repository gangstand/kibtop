from rest_framework import serializers

from sections.models import RealtyFull, RealtyFullUpload


class RealtyFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyFullUpload
        fields = ('uploads',)


class RealtyFullSerializerDetail(serializers.ModelSerializer):
    realty_full_upload = RealtyFullUploadSerializer(many=True)

    class Meta:
        model = RealtyFull
        fields = '__all__'


class RealtyFullSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyFull
        fields = ('id', 'title', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_apartment', 'sell_type',
                  'all_old_new', 'number_rooms', 'category')
