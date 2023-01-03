from django.urls import path
from sections.views import (
    ServicesFullAPIUpdateDestroy, ServicesFullAPIListCreate, ServicesFullAPIList, ServicesFullViewsUserAPIList,
    ServicesFullFavouritesUserAPIList, ServicesFullFavouritesUserAPIUpdateDestroy
)

urlpatterns = [
    path('services/', ServicesFullAPIList.as_view()),
    path('services/create/', ServicesFullAPIListCreate.as_view()),
    path('services/views/', ServicesFullViewsUserAPIList.as_view()),
    path('services/favourites/', ServicesFullFavouritesUserAPIList.as_view()),
    path('services/favourites/<int:pk>/', ServicesFullFavouritesUserAPIUpdateDestroy.as_view()),
    path('services/<int:pk>/', ServicesFullAPIUpdateDestroy.as_view()),
]
