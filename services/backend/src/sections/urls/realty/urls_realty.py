from django.urls import path

from sections.views import *

urlpatterns = [
    path('apartments_sale_secondary/', RealtyFullAPIList.as_view()),
    path('apartments_sale_secondary_create/', RealtyFullAPIListCreate.as_view()),
    path('apartments_sale_secondary/<int:pk>/', RealtyFullAPIUpdateDestroy.as_view()),
]
