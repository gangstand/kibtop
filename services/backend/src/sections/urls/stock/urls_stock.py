from django.urls import path

from sections.views import *

urlpatterns = [
    path('stock/', StockAPIList.as_view()),
    path('stock/<int:pk>/', StockAPIUpdateDestroy.as_view()),
]
