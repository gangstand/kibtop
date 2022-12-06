from datetime import date

from django.utils import timezone
from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from sections.models import RealtyFull
from sections.serializer import RealtyFullSerializerEN, RealtyFullSerializerRU, RealtyFullSerializerTR
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.service import FilterRealty


class NewAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    querylist = [
        {
            'queryset': RealtyFull.objects.filter(created_at__lte=timezone.now()).order_by('-created_at'),
            'serializer_class': RealtyFullSerializerEN,
            'label': 'en',
        },
        {
            'queryset': RealtyFull.objects.filter(created_at__lte=timezone.now()).order_by('-created_at'),
            'serializer_class': RealtyFullSerializerRU,
            'label': 'ru',
        },
        {
            'queryset': RealtyFull.objects.filter(created_at__lte=timezone.now()).order_by('-created_at'),
            'serializer_class': RealtyFullSerializerTR,
            'label': 'tr',
        },
    ]
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterRealty
