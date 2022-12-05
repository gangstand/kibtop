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
        fields = ('id', 'title_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_apartment_en', 'sell_type_en',
                  'all_old_new_en', 'number_rooms_en', 'category_en')

class RealtyFullSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyFull
        fields = ('id', 'title_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_apartment_en', 'sell_type_en',
                  'all_old_new_en', 'number_rooms_en', 'category_en')
