from rest_framework import serializers
from djoser.serializers import UserCreateSerializer, UserSerializer, SetUsernameSerializer
from api.models import Product, CustomUser


class ProductSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Product
        fields = "__all__"


class UserRegistrationSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = CustomUser
        fields = ('username', 'password', 'first_name', 'last_name', 'middle_name', 'email',)


class SpecialUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = CustomUser
        fields = ('username', 'first_name', 'last_name', 'middle_name', 'email',)


class SetUsernameSerializerCustom(SetUsernameSerializer):
    class Meta(SetUsernameSerializer.Meta):
        model = CustomUser
        fields = ('username', 'first_name', 'last_name', 'middle_name', 'email',)
