from rest_framework import serializers

from sections.models import HouseGardenFull, HouseGardenFullUpload


class HouseGardenFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseGardenFullUpload
        fields = ('uploads',)


class HouseGardenFullSerializerDetail(serializers.ModelSerializer):
    realty_full_upload = HouseGardenFullUploadSerializer(many=True)

    class Meta:
        model = HouseGardenFull
        fields = '__all__'


class HouseGardenFullSerializerEN(serializers.ModelSerializer):
    class Meta:
        model = HouseGardenFull
        fields = ('id', 'title_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_en', 'category_en')


class HouseGardenFullSerializerRU(serializers.ModelSerializer):
    class Meta:
        model = HouseGardenFull
        fields = ('id', 'title_ru', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_ru', 'category_ru')


class HouseGardenFullSerializerTR(serializers.ModelSerializer):
    class Meta:
        model = HouseGardenFull
        fields = ('id', 'title_tr', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_tr', 'category_tr')


class HouseGardenFullSerializer(serializers.Serializer):
    en = HouseGardenFullSerializerEN(many=True)
    ru = HouseGardenFullSerializerRU(many=True)
    tr = HouseGardenFullSerializerTR(many=True)
