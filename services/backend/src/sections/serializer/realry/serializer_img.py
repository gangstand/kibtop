from rest_framework import serializers

from sections.models import *


class RealtyFullUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = RealtyFullUpload
        fields = ('uploads',)
