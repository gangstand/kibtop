from djoser.serializers import UserSerializer, UserCreateSerializer, UserCreatePasswordRetypeSerializer


class UserRegistrationSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        fields = (
            'email', 'phone', 'password', 'first_name',  'addres', 'upload_user', 'deals'
        )


class UserAPISerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        fields = (
            'id', 'username', 'phone', 'email', 'first_name',  'addres', 'deals', 'upload_user'
        )


class UserAPICreatePasswordRetypeSerializer(UserCreatePasswordRetypeSerializer):
    class Meta(UserCreatePasswordRetypeSerializer.Meta):
        fields = (
            'email', 'phone', 'first_name',  'addres', 'upload_user', 'password'
        )
