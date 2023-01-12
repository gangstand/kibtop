from django.urls import path
from sections.views import (
    WorkFullAPIUpdateDestroy, WorkFullAPIListCreate, WorkFullAPIList, WorkFullViewsUserAPIList,
    WorkFullFavouritesUserAPIList, WorkFullFavouritesUserAPIUpdateDestroy, WorkFullArchiveUserAPIDestroy
)

urlpatterns = [
    path('work/', WorkFullAPIList.as_view()),
    path('work/create/', WorkFullAPIListCreate.as_view()),
    path('work/views/', WorkFullViewsUserAPIList.as_view()),
    path('work/favourites/', WorkFullFavouritesUserAPIList.as_view()),
    path('work/favourites/<int:pk>/', WorkFullFavouritesUserAPIUpdateDestroy.as_view()),
    path('work/<int:pk>/', WorkFullAPIUpdateDestroy.as_view()),
    path('work/archive/<int:pk>/', WorkFullArchiveUserAPIDestroy.as_view()),

]
