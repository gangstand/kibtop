from django.urls import path

from sections.views import CategoryFullAPIList

urlpatterns = [
    path('category/', CategoryFullAPIList.as_view()),
    # path('realty/create/', RealtyFullAPIListCreate.as_view()),
    # path('realty/<int:pk>/', RealtyFullAPIUpdateDestroy.as_view()),
]
