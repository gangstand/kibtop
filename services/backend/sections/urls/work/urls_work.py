from django.urls import path
from sections.views import WorkFullAPIUpdateDestroy, WorkFullAPIListCreate, WorkFullAPIList

urlpatterns = [
    path('work/', WorkFullAPIList.as_view()),
    path('work/create/', WorkFullAPIListCreate.as_view()),
    path('work/<int:pk>/', WorkFullAPIUpdateDestroy.as_view()),
]
