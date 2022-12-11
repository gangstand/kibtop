from rest_framework import serializers

from sections.models import AvtoFull, AvtoFullUpload


class AvtoFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvtoFullUpload
        fields = ('uploads',)


class AvtoFullSerializerDetail(serializers.ModelSerializer):
    realty_full_upload = AvtoFullUploadSerializer(many=True)

    class Meta:
        model = AvtoFull
        fields = '__all__'


class AvtoFullSerializerEN(serializers.ModelSerializer):
    class Meta:
        model = AvtoFull
        fields = ('id', 'title_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_en', 'brand_en', 'mileage', 'year', 'category_en')


class AvtoFullSerializerRU(serializers.ModelSerializer):
    class Meta:
        model = AvtoFull
        fields = ('id', 'title_ru', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_ru', 'brand_ru', 'mileage', 'year', 'category_ru')


class AvtoFullSerializerTR(serializers.ModelSerializer):
    class Meta:
        model = AvtoFull
        fields = ('id', 'title_tr', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_tr', 'brand_tr', 'mileage', 'year', 'category_tr')


class AvtoFullSerializer(serializers.Serializer):
    en = AvtoFullSerializerEN(many=True)
    ru = AvtoFullSerializerRU(many=True)
    tr = AvtoFullSerializerTR(many=True)
