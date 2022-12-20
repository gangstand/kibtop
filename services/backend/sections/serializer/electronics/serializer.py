from rest_framework import serializers

from sections.models import ElectronicsFull, ElectronicsFullUpload


class ElectronicsFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElectronicsFullUpload
        fields = ('uploads',)


class ElectronicsFullSerializerDetail(serializers.ModelSerializer):
    realty_full_upload = ElectronicsFullUploadSerializer(many=True)

    class Meta:
        model = ElectronicsFull
        fields = '__all__'


class ElectronicsFullSerializerEN(serializers.ModelSerializer):
    class Meta:
        model = ElectronicsFull
        fields = ('id', 'title_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_en', 'category_en')


class ElectronicsFullSerializerRU(serializers.ModelSerializer):
    class Meta:
        model = ElectronicsFull
        fields = ('id', 'title_ru', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_ru', 'category_ru')


class ElectronicsFullSerializerTR(serializers.ModelSerializer):
    class Meta:
        model = ElectronicsFull
        fields = ('id', 'title_tr', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_tr', 'category_tr')


class ElectronicsFullSerializer(serializers.Serializer):
    en = ElectronicsFullSerializerEN(many=True)
    ru = ElectronicsFullSerializerRU(many=True)
    tr = ElectronicsFullSerializerTR(many=True)
