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
    avto_full_upload = AvtoFullUploadSerializer(many=True, required=False)
    class Meta:
        model = AvtoFull
        fields = '__all__'


class AvtoFullSerializerEN(serializers.ModelSerializer):
    class Meta:
        model = AvtoFull
        fields = ('id', 'title_en', 'description_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_en', 'brand', 'mileage', 'year', 'category_en', 'recommend',
                  'publisher')


class AvtoFullSerializerRU(serializers.ModelSerializer):
    class Meta:
        model = AvtoFull
        fields = ('id', 'title_ru', 'description_ru',  'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_ru', 'brand', 'mileage', 'year', 'category_ru', 'recommend',
                  'publisher')


class AvtoFullSerializerTR(serializers.ModelSerializer):
    class Meta:
        model = AvtoFull
        fields = ('id', 'title_tr', 'description_tr',  'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_tr', 'brand', 'mileage', 'year', 'category_tr', 'recommend',
                  'publisher')


class AvtoFullSerializer(serializers.Serializer):
    en = AvtoFullSerializerEN(many=True)
    ru = AvtoFullSerializerRU(many=True)
    tr = AvtoFullSerializerTR(many=True)
