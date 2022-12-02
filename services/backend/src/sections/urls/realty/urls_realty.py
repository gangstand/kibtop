from django.urls import path

from sections.views import *

urlpatterns = [
    path('apartments_sale_secondary/', RealtyApartmentsSaleSecondaryAPIList.as_view()),
    path('apartments_sale_secondary/<int:pk>/', RealtyApartmentsSaleSecondaryAPIUpdateDestroy.as_view()),
    path('rass_upload/', RASSUploadAPIList.as_view()),
    path('rass_upload/<int:pk>/', RASSUploadAPIUpdateDestroy.as_view()),

    path('apartments_sale_rent/', RealtyApartmentsSaleRentAPIList.as_view()),
    path('apartments_sale_rent/<int:pk>/', RealtyApartmentsSaleRentAPIUpdateDestroy.as_view()),
    path('rasr_upload/', RASRUploadAPIList.as_view()),
    path('rasr_upload/<int:pk>/', RASRUploadAPIUpdateDestroy.as_view()),

    path('home_sale_secondary/', RealtyHomeSaleSecondaryAPIList.as_view()),
    path('home_sale_secondary/<int:pk>/', RealtyHomeSaleSecondaryAPIUpdateDestroy.as_view()),
    path('rhss_upload/', RHSSUploadAPIList.as_view()),
    path('rhss_upload/<int:pk>/', RHSSUploadAPIUpdateDestroy.as_view()),

    path('home_sale_rent/', RealtyHomeSaleRentAPIList.as_view()),
    path('home_sale_rent/<int:pk>/', RealtyHomeSaleRentAPIUpdateDestroy.as_view()),
    path('rhsr_upload/', RHSRUploadAPIList.as_view()),
    path('rhsr_upload/<int:pk>/', RHSRUploadAPIUpdateDestroy.as_view()),

    path('land_plot_sale_secondary/', RealtyLandPlotSaleSecondaryAPIList.as_view()),
    path('land_plot_sale_secondary/<int:pk>/', RealtyLandPlotSaleSecondaryAPIUpdateDestroy.as_view()),
    path('rlpss_upload/', RLPSSUploadAPIList.as_view()),
    path('rlpss_upload/<int:pk>/', RLPSSUploadAPIUpdateDestroy.as_view()),

    path('land_plot_sale_rent/', RealtyLandPlotSaleRentAPIList.as_view()),
    path('land_plot_sale_rent/<int:pk>/', RealtyLandPlotSaleRentAPIUpdateDestroy.as_view()),
    path('rlpsr_upload/', RLPSRUploadAPIList.as_view()),
    path('rlpsr_upload/<int:pk>/', RLPSRUploadAPIUpdateDestroy.as_view()),
]
