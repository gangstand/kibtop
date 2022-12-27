from djoser.serializers import UserSerializer, UserCreateSerializer, UserCreatePasswordRetypeSerializer


class UserRegistrationSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        fields = (
            'username', 'email', 'password', 'first_name', 'last_name', 'middle_name', 'addres', 'upload_user'
        )


class UserAPISerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        fields = (
            'username', 'email', 'first_name', 'last_name', 'middle_name', 'addres', 'upload_user'
        )


class UserAPICreatePasswordRetypeSerializer(UserCreatePasswordRetypeSerializer):
    class Meta(UserCreatePasswordRetypeSerializer.Meta):
        fields = (
            'username', 'email', 'first_name', 'last_name', 'middle_name', 'addres', 'upload_user', 'password'
        )
