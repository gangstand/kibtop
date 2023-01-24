from djoser.serializers import UserSerializer, UserCreateSerializer, UserCreatePasswordRetypeSerializer


class UserRegistrationSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        fields = (
            'username', 'email', 'phone', 'password', 'first_name', 'addres', 'upload_user'
        )


class UserAPISerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        fields = (
            'id', 'username', 'phone', 'email', 'first_name', 'addres', 'upload_user'
        )


class UserAPICreatePasswordRetypeSerializer(UserCreatePasswordRetypeSerializer):
    class Meta(UserCreatePasswordRetypeSerializer.Meta):
        fields = (
            'username', 'email', 'phone', 'first_name', 'addres', 'upload_user', 'password'
        )
