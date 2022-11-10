from rest_framework import serializers

from sections.models import Product, Category


class ProductSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source="user.username")
    category_name = serializers.CharField(source='cat.name', read_only=True)

    class Meta:
        model = Product
        fields = ('id', 'title', 'content', 'is_published', 'category_name', 'user')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
