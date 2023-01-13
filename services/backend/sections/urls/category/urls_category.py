from django.urls import path

from sections.views import CategoryFullAPIList

urlpatterns = [
    path('category/', CategoryFullAPIList.as_view()),
]
