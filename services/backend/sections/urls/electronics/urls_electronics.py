from django.urls import path
from sections.views import ElectronicsFullAPIUpdateDestroy, ElectronicsFullAPIListCreate, ElectronicsFullAPIList

urlpatterns = [
    path('electronics/', ElectronicsFullAPIList.as_view()),
    path('electronics/create/', ElectronicsFullAPIListCreate.as_view()),
    path('electronics/<int:pk>/', ElectronicsFullAPIUpdateDestroy.as_view()),
]
