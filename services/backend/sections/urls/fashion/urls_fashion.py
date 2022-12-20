from django.urls import path
from sections.views import FashionFullAPIUpdateDestroy, FashionFullAPIListCreate, FashionFullAPIList

urlpatterns = [
    path('fashion/', FashionFullAPIList.as_view()),
    path('fashion/create/', FashionFullAPIListCreate.as_view()),
    path('fashion/<int:pk>/', FashionFullAPIUpdateDestroy.as_view()),
]
