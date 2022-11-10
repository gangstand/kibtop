from django.urls import path

from sections.views import *

urlpatterns = [
    path('products/', ProductAPIList.as_view()),
    path('products/<int:pk>/', ProductAPIUpdateDestroy.as_view()),
    path('products/category', CategoryAPIList.as_view()),
    path('products/category/<int:pk>/', CategoryAPIUpdateDestroy.as_view()),
]
