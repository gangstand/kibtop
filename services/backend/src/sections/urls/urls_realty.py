from django.urls import path, include
from sections.views import *

urlpatterns = [
    path('apartments_sale_secondary/', RealtyApartmentsSaleSecondaryAPIList.as_view()),
    path('apartments_sale_secondary/<int:pk>/', RealtyApartmentsSaleSecondaryAPIUpdateDestroy.as_view()),
    path('apartments_sale_rent/', RealtyApartmentsSaleRentAPIList.as_view()),
    path('apartments_sale_rent/<int:pk>/', RealtyApartmentsSaleRentAPIUpdateDestroy.as_view()),
    path('home_sale_secondary/', RealtyHomeSaleSecondaryAPIList.as_view()),
    path('home_sale_secondary/<int:pk>/', RealtyHomeSaleSecondaryAPIUpdateDestroy.as_view()),
    path('home_sale_rent/', RealtyHomeSaleRentAPIList.as_view()),
    path('home_sale_rent/<int:pk>/', RealtyHomeSaleRentAPIUpdateDestroy.as_view()),
    path('land_plot_sale_secondary/', RealtyLandPlotSaleSecondaryAPIList.as_view()),
    path('land_plot_sale_secondary/<int:pk>/', RealtyLandPlotSaleSecondaryAPIUpdateDestroy.as_view()),
    path('land_plot_sale_rent/', RealtyLandPlotSaleRentAPIList.as_view()),
    path('land_plot_sale_rent/<int:pk>/', RealtyLandPlotSaleRentAPIUpdateDestroy.as_view()),
]
