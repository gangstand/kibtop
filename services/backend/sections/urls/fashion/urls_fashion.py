from django.urls import path
from sections.views import (
    FashionFullAPIUpdateDestroy, FashionFullAPIListCreate, FashionFullAPIList, FashionFullViewsUserAPIList,
    FashionFullFavouritesUserAPIList, FashionFullFavouritesUserAPIUpdateDestroy
)

urlpatterns = [
    path('fashion/', FashionFullAPIList.as_view()),
    path('fashion/create/', FashionFullAPIListCreate.as_view()),
    path('fashion/views/', FashionFullViewsUserAPIList.as_view()),
    path('fashion/favourites/', FashionFullFavouritesUserAPIList.as_view()),
    path('fashion/favourites/<int:pk>/', FashionFullFavouritesUserAPIUpdateDestroy.as_view()),
    path('fashion/<int:pk>/', FashionFullAPIUpdateDestroy.as_view()),
]
