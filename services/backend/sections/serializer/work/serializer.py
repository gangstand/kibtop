from rest_framework import serializers

from sections.models import WorkFull, WorkFullUpload


class WorkFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkFullUpload
        fields = ('uploads',)


class WorkFullSerializerDetail(serializers.ModelSerializer):
    realty_full_upload = WorkFullUploadSerializer(many=True)

    class Meta:
        model = WorkFull
        fields = '__all__'


class WorkFullSerializerEN(serializers.ModelSerializer):
    class Meta:
        model = WorkFull
        fields = ('id', 'title_en', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_en', 'for_work_type_en', 'employment_en', 'category_en', 'recommend', 'publisher')


class WorkFullSerializerRU(serializers.ModelSerializer):
    class Meta:
        model = WorkFull
        fields = ('id', 'title_ru', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_ru', 'for_work_type_ru', 'employment_ru', 'category_ru', 'recommend', 'publisher')


class WorkFullSerializerTR(serializers.ModelSerializer):
    class Meta:
        model = WorkFull
        fields = ('id', 'title_tr', 'created_at', 'updated_at', 'address',
                  'price', 'upload', 'sub_category_tr', 'for_work_type_tr', 'employment_tr', 'category_tr', 'recommend', 'publisher')


class WorkFullSerializer(serializers.Serializer):
    en = WorkFullSerializerEN(many=True)
    ru = WorkFullSerializerRU(many=True)
    tr = WorkFullSerializerTR(many=True)
