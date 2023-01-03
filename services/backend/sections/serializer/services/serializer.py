from rest_framework import serializers

from sections.models import ServicesFull, ServicesFullUpload


class ServicesFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicesFullUpload
        fields = ('uploads',)


class ServicesFullSerializerDetail(serializers.ModelSerializer):
    realty_full_upload = ServicesFullUploadSerializer(many=True)

    class Meta:
        model = ServicesFull
        fields = '__all__'


class ServicesFullSerializerEN(serializers.ModelSerializer):
    class Meta:
        model = ServicesFull
        fields = ('id', 'title_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_en', 'category_en', 'recommend', 'publisher')


class ServicesFullSerializerRU(serializers.ModelSerializer):
    class Meta:
        model = ServicesFull
        fields = ('id', 'title_ru', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_ru', 'category_ru', 'recommend', 'publisher')


class ServicesFullSerializerTR(serializers.ModelSerializer):
    class Meta:
        model = ServicesFull
        fields = ('id', 'title_tr', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_tr', 'category_tr', 'recommend', 'publisher')


class ServicesFullSerializer(serializers.Serializer):
    en = ServicesFullSerializerEN(many=True)
    ru = ServicesFullSerializerRU(many=True)
    tr = ServicesFullSerializerTR(many=True)
