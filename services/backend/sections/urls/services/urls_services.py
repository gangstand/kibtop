from django.urls import path
from sections.views import ServicesFullAPIUpdateDestroy, ServicesFullAPIListCreate, ServicesFullAPIList

urlpatterns = [
    path('services/', ServicesFullAPIList.as_view()),
    path('services/create/', ServicesFullAPIListCreate.as_view()),
    path('services/<int:pk>/', ServicesFullAPIUpdateDestroy.as_view()),
]
