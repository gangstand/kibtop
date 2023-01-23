from django.urls import path
from sections.views import (
    ElectronicsFullAPIUpdateDestroy, ElectronicsFullAPIListCreate, ElectronicsFullAPIList,
    ElectronicsFullViewsUserAPIList, ElectronicsFullFavouritesUserAPIList,
    ElectronicsFullFavouritesUserAPIUpdateDestroy, ElectronicsFullArchiveUserAPIDestroy
)

urlpatterns = [
    path('electronics/', ElectronicsFullAPIList.as_view()),
    path('electronics/create/', ElectronicsFullAPIListCreate.as_view()),
    path('electronics/views/', ElectronicsFullViewsUserAPIList.as_view()),
    path('electronics/favourites/', ElectronicsFullFavouritesUserAPIList.as_view()),
    path('electronics/favourites/<int:pk>/', ElectronicsFullFavouritesUserAPIUpdateDestroy.as_view()),
    path('electronics/<int:pk>/', ElectronicsFullAPIUpdateDestroy.as_view()),
    path('electronics/archive/<int:pk>/', ElectronicsFullArchiveUserAPIDestroy.as_view()),
]
