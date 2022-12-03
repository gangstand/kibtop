from django.urls import path

from sections.views import *

urlpatterns = [
    path('realty/', RealtyFullAPIList.as_view()),
    path('realty/', RealtyFullAPIListCreate.as_view()),
    path('realty/<int:pk>/', RealtyFullAPIUpdateDestroy.as_view()),
]
