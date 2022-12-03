from rest_framework import serializers
from sections.models import *
from sections.serializer import *


class CategoryFullSerializer(serializers.ModelSerializer):
    list_serializer_class = RealtyFullSerializerDetail

    class Meta:
        model = BaseCategory
        fields = '__all__'
