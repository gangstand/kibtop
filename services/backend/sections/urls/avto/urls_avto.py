from django.urls import path
from sections.views import AvtoFullAPIUpdateDestroy, AvtoFullAPIListCreate, AvtoFullAPIList, AvtoFullViewsUserAPIList, \
    AvtoFullFavouritesUserAPIList, AvtoFullFavouritesUserAPIUpdateDestroy

urlpatterns = [
    path('avto/', AvtoFullAPIList.as_view()),
    path('avto/create/', AvtoFullAPIListCreate.as_view()),
    path('avto_views/', AvtoFullViewsUserAPIList.as_view()),
    path('avto_favourites/', AvtoFullFavouritesUserAPIList.as_view()),
    path('avto_favourites/<int:pk>/', AvtoFullFavouritesUserAPIUpdateDestroy.as_view()),
    path('avto/<int:pk>/', AvtoFullAPIUpdateDestroy.as_view()),
]
