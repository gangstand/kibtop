from django.urls import path

from api.views import *
from rest_framework import routers
#
# router = routers.DefaultRouter()
# router.register(r'product', ProductViewSet)

urlpatterns = [
    path('product/', ProductAPIList.as_view()),
    path('product/<int:pk>/', ProductAPIUpdateDestroy.as_view())
]