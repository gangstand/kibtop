from django.urls import path

from sections.views import (
    RealtyFullAPIList, RealtyFullAPIListCreate, RealtyFullAPIUpdateDestroy, RealtyFullViewsUserAPIList,
    RealtyFullFavouritesUserAPIList, RealtyFullFavouritesUserAPIUpdateDestroy, RealtyFullArchiveUserAPIDestroy,
    RealtyFullUploadsAPIList, RealtyFullUploadsAPIUpdateList
)

urlpatterns = [
    path('realty/', RealtyFullAPIList.as_view()),
    path('realty/create/', RealtyFullAPIListCreate.as_view()),
    path('realty/views/', RealtyFullViewsUserAPIList.as_view()),
    path('realty/favourites/', RealtyFullFavouritesUserAPIList.as_view()),
    path('realty/favourites/<int:pk>/', RealtyFullFavouritesUserAPIUpdateDestroy.as_view()),
    path('realty/<int:pk>/', RealtyFullAPIUpdateDestroy.as_view()),
    path('realty/archive/<int:pk>/', RealtyFullArchiveUserAPIDestroy.as_view()),
    path('realty/full_uploads/', RealtyFullUploadsAPIList.as_view()),
    path('realty/full_uploads/<int:pk>/', RealtyFullUploadsAPIUpdateList.as_view()),
]
