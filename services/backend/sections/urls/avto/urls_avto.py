from django.urls import path
from sections.views import AvtoFullAPIUpdateDestroy, AvtoFullAPIListCreate, AvtoFullAPIList

urlpatterns = [
    path('avto/', AvtoFullAPIList.as_view()),
    path('avto/create/', AvtoFullAPIListCreate.as_view()),
    path('avto/<int:pk>/', AvtoFullAPIUpdateDestroy.as_view()),
]
