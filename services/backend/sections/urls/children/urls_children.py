from django.urls import path
from sections.views import ChildrenFullAPIUpdateDestroy, ChildrenFullAPIListCreate, ChildrenFullAPIList

urlpatterns = [
    path('children/', ChildrenFullAPIList.as_view()),
    path('children/create/', ChildrenFullAPIListCreate.as_view()),
    path('children/<int:pk>/', ChildrenFullAPIUpdateDestroy.as_view()),
]
