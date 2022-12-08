from django.urls import path

from sections.views import RealtyFullAPIList, RealtyFullAPIListCreate, RealtyFullAPIUpdateDestroy

urlpatterns = [
    path('realty/', RealtyFullAPIList.as_view()),
    path('realty/create/', RealtyFullAPIListCreate.as_view()),
    path('realty/<int:pk>/', RealtyFullAPIUpdateDestroy.as_view()),
]
