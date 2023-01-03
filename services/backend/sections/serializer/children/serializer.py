from rest_framework import serializers

from sections.models import (
    ChildrenFull, ChildrenFullUpload, ChildrenFullViewsUser, ChildrenFullFavouritesUser
)


class ChildrenFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChildrenFullUpload
        fields = ('uploads',)


class ChildrenFullViewsUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChildrenFullViewsUser
        fields = '__all__'


class ChildrenFullFavouritesUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChildrenFullFavouritesUser
        fields = '__all__'


class ChildrenFullSerializerDetail(serializers.ModelSerializer):
    realty_full_upload = ChildrenFullUploadSerializer(many=True)

    class Meta:
        model = ChildrenFull
        fields = '__all__'


class ChildrenFullSerializerEN(serializers.ModelSerializer):
    class Meta:
        model = ChildrenFull
        fields = ('id', 'title_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_en', 'category_en', 'recommend', 'publisher')


class ChildrenFullSerializerRU(serializers.ModelSerializer):
    class Meta:
        model = ChildrenFull
        fields = ('id', 'title_ru', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_ru', 'category_ru', 'recommend', 'publisher')


class ChildrenFullSerializerTR(serializers.ModelSerializer):
    class Meta:
        model = ChildrenFull
        fields = ('id', 'title_tr', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_tr', 'category_tr', 'recommend', 'publisher')


class ChildrenFullSerializer(serializers.Serializer):
    en = ChildrenFullSerializerEN(many=True)
    ru = ChildrenFullSerializerRU(many=True)
    tr = ChildrenFullSerializerTR(many=True)
