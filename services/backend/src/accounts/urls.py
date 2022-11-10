from django.urls import path, include

from accounts.serializer import FacebookLogin
from accounts.serializer import GoogleLogin

urlpatterns = [
    path('', include('dj_rest_auth.urls')),
    path('registration/', include('dj_rest_auth.registration.urls')),
    path('google/', GoogleLogin.as_view(), name='google_login'),
    path('facebook/', FacebookLogin.as_view(), name='fb_login'),
]
