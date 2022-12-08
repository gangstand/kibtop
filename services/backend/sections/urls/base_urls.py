from django.urls import path

from sections.views import MoneyAPIList, CityAPIList, MoneyAPIUpdateDestroy

urlpatterns = [
    path('city/', CityAPIList.as_view()),
    path('money/', MoneyAPIList.as_view()),
    path('money/<int:pk>', MoneyAPIUpdateDestroy.as_view()),
]
