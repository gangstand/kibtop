from django.urls import path
from sections.views import (
    ChildrenFullAPIUpdateDestroy, ChildrenFullAPIListCreate, ChildrenFullAPIList,
    ChildrenFullFavouritesUserAPIUpdateDestroy, ChildrenFullViewsUserAPIList,
    ChildrenFullFavouritesUserAPIList
)

urlpatterns = [
    path('children/', ChildrenFullAPIList.as_view()),
    path('children/create/', ChildrenFullAPIListCreate.as_view()),
    path('children/views/', ChildrenFullViewsUserAPIList.as_view()),
    path('children/favourites/', ChildrenFullFavouritesUserAPIList.as_view()),
    path('children/favourites/<int:pk>/', ChildrenFullFavouritesUserAPIUpdateDestroy.as_view()),
    path('children/<int:pk>/', ChildrenFullAPIUpdateDestroy.as_view()),
]
