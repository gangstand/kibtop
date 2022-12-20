from django.urls import path
from sections.views import HouseGardenFullAPIUpdateDestroy, HouseGardenFullAPIListCreate, HouseGardenFullAPIList

urlpatterns = [
    path('house_garden/', HouseGardenFullAPIList.as_view()),
    path('house_garden/create/', HouseGardenFullAPIListCreate.as_view()),
    path('house_garden/<int:pk>/', HouseGardenFullAPIUpdateDestroy.as_view()),
]
