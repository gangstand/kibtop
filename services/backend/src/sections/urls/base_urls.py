from django.urls import path

from sections.views import *

urlpatterns = [
    path('category/', CategoryFullAPIList.as_view()),
    path('category/<int:pk>', CategoryFullDestroyAPIList.as_view())
    # path('apartments_sale_secondary_create/', RealtyFullAPIListCreate.as_view()),
    # path('apartments_sale_secondary/<int:pk>/', RealtyFullAPIUpdateDestroy.as_view()),
]