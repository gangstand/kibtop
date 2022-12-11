from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from accounts.models import CustomUser


class CreateUserSerializer(RegisterSerializer, serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'first_name', 'last_name', 'middle_name', 'upload_user')

    def custom_signup(self, request, user) -> None:
        for f in self.Meta.fields:
            if hasattr(user, f) and not getattr(user, f):
                setattr(user, f, self.initial_data[f])

        user.save()
