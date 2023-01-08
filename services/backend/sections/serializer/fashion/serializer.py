from rest_framework import serializers

from sections.models import (
    FashionFull, FashionFullUpload, FashionFullViewsUser, FashionFullFavouritesUser
)


class FashionFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = FashionFullUpload
        fields = ('uploads',)


class FashionFullViewsUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FashionFullViewsUser
        fields = '__all__'


class FashionFullFavouritesUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FashionFullFavouritesUser
        fields = '__all__'


class FashionFullSerializerDetail(serializers.ModelSerializer):
    realty_full_upload = FashionFullUploadSerializer(many=True)

    class Meta:
        model = FashionFull
        fields = '__all__'


class FashionFullSerializerEN(serializers.ModelSerializer):
    class Meta:
        model = FashionFull
        fields = ('id', 'title_en', 'description_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_en', 'category_en', 'recommend', 'publisher')


class FashionFullSerializerRU(serializers.ModelSerializer):
    class Meta:
        model = FashionFull
        fields = ('id', 'title_ru', 'description_ru', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_ru', 'category_ru', 'recommend', 'publisher')


class FashionFullSerializerTR(serializers.ModelSerializer):
    class Meta:
        model = FashionFull
        fields = ('id', 'title_tr', 'description_tr', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_tr', 'category_tr', 'recommend', 'publisher')


class FashionFullSerializer(serializers.Serializer):
    en = FashionFullSerializerEN(many=True)
    ru = FashionFullSerializerRU(many=True)
    tr = FashionFullSerializerTR(many=True)
