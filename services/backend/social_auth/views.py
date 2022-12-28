import environ
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from .serializers import GoogleSocialAuthSerializer, FacebookSocialAuthSerializer

env = environ.Env()
environ.Env.read_env('.env')


class GoogleSocialAuthView(GenericAPIView):
    serializer_class = GoogleSocialAuthSerializer

    def get(self, request):
        auth_google = f"https://accounts.google.com/o/oauth2/v2/auth?redirect_uri={env('URL')}/api/v1/auth/accounts/profile/&prompt=consent&response_type=code&client_id={env('GOOGLE_CLIENT_ID')}&scope=openid+email+profile"
        return Response({"auth_google": auth_google})

    def post(self, request):
        """

        POST with "auth_token"

        Send an idtoken as from google to get user information

        """

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = ((serializer.validated_data)['auth_token'])
        return Response(data, status=status.HTTP_200_OK)


class FacebookSocialAuthView(GenericAPIView):
    serializer_class = FacebookSocialAuthSerializer

    def post(self, request):
        """

        POST with "auth_token"

        Send an access token as from facebook to get user information

        """

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = ((serializer.validated_data)['auth_token'])
        return Response(data, status=status.HTTP_200_OK)
