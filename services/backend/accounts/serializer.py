from djoser.serializers import UserSerializer, UserCreateSerializer, UserCreatePasswordRetypeSerializer
from rest_framework import serializers


class UserRegistrationSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        fields = (
            'username', 'email', 'first_name', 'addres', 'upload_user', 'password',
        )


class UserAPISerializer(UserSerializer, serializers.Serializer):
    class Meta(UserSerializer.Meta):
        fields = (
            'id', 'username', 'phone', 'first_name', 'addres', 'upload_user', 'deals'
        )


class UserAPICreatePasswordRetypeSerializer(UserCreatePasswordRetypeSerializer):
    class Meta(UserCreatePasswordRetypeSerializer.Meta):
        fields = (
            'username', 'email', 'first_name', 'addres', 'upload_user', 'password',
        )
