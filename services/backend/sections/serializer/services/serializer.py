from rest_framework import serializers
from sections.models import (
    ServicesFull, ServicesFullUpload, ServicesFullViewsUser, ServicesFullFavouritesUser
)


class ServicesFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicesFullUpload
        fields = ('uploads',)


class ServicesFullViewsUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicesFullViewsUser
        fields = '__all__'


class ServicesFullFavouritesUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicesFullFavouritesUser
        fields = '__all__'


class ServicesFullSerializerDetail(serializers.ModelSerializer):
    services_full_upload = ServicesFullUploadSerializer(many=True, required=False)

    class Meta:
        model = ServicesFull
        fields = '__all__'


class ServicesFullSerializerEN(serializers.ModelSerializer):
    class Meta:
        model = ServicesFull
        fields = ('id', 'title_en', 'description_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_en', 'category_en', 'recommend', 'publisher')


class ServicesFullSerializerRU(serializers.ModelSerializer):
    class Meta:
        model = ServicesFull
        fields = ('id', 'title_ru', 'description_ru','created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_ru', 'category_ru', 'recommend', 'publisher')


class ServicesFullSerializerTR(serializers.ModelSerializer):
    class Meta:
        model = ServicesFull
        fields = ('id', 'title_tr','description_tr', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_tr', 'category_tr', 'recommend', 'publisher')


class ServicesFullSerializer(serializers.Serializer):
    en = ServicesFullSerializerEN(many=True)
    ru = ServicesFullSerializerRU(many=True)
    tr = ServicesFullSerializerTR(many=True)
