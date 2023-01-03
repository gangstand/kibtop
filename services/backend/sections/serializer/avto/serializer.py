from rest_framework import serializers
from sections.models import (
    AvtoFull, AvtoFullUpload, AvtoFullViewsUser, AvtoFullFavouritesUser
)


class AvtoFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvtoFullUpload
        fields = ('uploads',)


class AvtoFullViewsUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvtoFullViewsUser
        fields = '__all__'


class AvtoFullFavouritesUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvtoFullFavouritesUser
        fields = '__all__'


class AvtoFullSerializerDetail(serializers.ModelSerializer):
    realty_full_upload = AvtoFullUploadSerializer(many=True)

    class Meta:
        model = AvtoFull
        fields = '__all__'


class AvtoFullSerializerEN(serializers.ModelSerializer):
    class Meta:
        model = AvtoFull
        fields = ('id', 'title_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_en', 'brand_en', 'mileage', 'year', 'category_en', 'recommend',
                  'publisher')


class AvtoFullSerializerRU(serializers.ModelSerializer):
    class Meta:
        model = AvtoFull
        fields = ('id', 'title_ru', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_ru', 'brand_ru', 'mileage', 'year', 'category_ru', 'recommend',
                  'publisher')


class AvtoFullSerializerTR(serializers.ModelSerializer):
    class Meta:
        model = AvtoFull
        fields = ('id', 'title_tr', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_tr', 'brand_tr', 'mileage', 'year', 'category_tr', 'recommend',
                  'publisher')


class AvtoFullSerializer(serializers.Serializer):
    en = AvtoFullSerializerEN(many=True)
    ru = AvtoFullSerializerRU(many=True)
    tr = AvtoFullSerializerTR(many=True)
