from rest_framework import serializers

from sections.models import Money, City


class MoneySerializer(serializers.ModelSerializer):
    class Meta:
        model = Money
        fields = '__all__'


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'
