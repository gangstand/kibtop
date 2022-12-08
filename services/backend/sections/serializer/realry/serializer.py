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


class RealtyFullSerializerEN(serializers.ModelSerializer):
    class Meta:
        model = RealtyFull
        fields = ('id', 'title_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_apartment_en', 'sell_type_en',
                  'all_old_new_en', 'number_rooms_en', 'category_en')


class RealtyFullSerializerRU(serializers.ModelSerializer):
    class Meta:
        model = RealtyFull
        fields = ('id', 'title_ru', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_apartment_ru', 'sell_type_ru',
                  'all_old_new_ru', 'number_rooms_ru', 'category_ru')


class RealtyFullSerializerTR(serializers.ModelSerializer):
    class Meta:
        model = RealtyFull
        fields = ('id', 'title_tr', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_apartment_tr', 'sell_type_tr',
                  'all_old_new_tr', 'number_rooms_tr', 'category_tr')


class RealtyFullSerializer(serializers.Serializer):
    en = RealtyFullSerializerEN(many=True)
    ru = RealtyFullSerializerRU(many=True)
    tr = RealtyFullSerializerTR(many=True)
