from rest_framework import serializers

from sections.models import *


class RASSUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = RASSUpload
        fields = '__all__'


class RASRUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = RASRUpload
        fields = '__all__'


class RHSSUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = RHSSUpload
        fields = '__all__'


class RHSRUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = RHSRUpload
        fields = '__all__'


class RLPSSUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = RLPSSUpload
        fields = '__all__'


class RLPSRUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = RLPSRUpload
        fields = '__all__'
