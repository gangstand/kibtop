from drf_multiple_model.views import ObjectMultipleModelAPIView
from rest_framework import generics, views, status
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.response import Response

from sections.models import RealtyFull
from sections.serializer import RealtyFullSerializerDetail, RealtyFullSerializerEN, RealtyFullSerializerRU, \
    RealtyFullSerializerTR
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from sections.service import FilterRealty


class RealtyFullAPIList(ObjectMultipleModelAPIView, generics.ListAPIView):
    querylist = [
        {
            'queryset': RealtyFull.objects.all(),
            'serializer_class': RealtyFullSerializerEN,
            'label': 'en',
        },
        {
            'queryset': RealtyFull.objects.all(),
            'serializer_class': RealtyFullSerializerRU,
            'label': 'ru',
        },
        {
            'queryset': RealtyFull.objects.all(),
            'serializer_class': RealtyFullSerializerTR,
            'label': 'tr',
        },
    ]
    permission_classes = (IsAuthenticatedOrReadOnly,)
    filter_backends = (DjangoFilterBackend, )
    filterset_class = FilterRealty

    # def get_queryset(self):
    #     querysets = RealtyFull.objects.all()
    #     serializer = RealtyFullSerializer(querysets)
    #     return serializer.data


# class RealtyFullAPIList(views.APIView):
#     permission_classes = (IsAuthenticatedOrReadOnly,)
# filter_backends = (DjangoFilterBackend,)
# filterset_class = FilterRealty

# def get(self, request):
#     language_type = self.kwargs.get('type', None)
#     articles = RealtyFull.objects.filter(language=language_type)
#     serializer = RealtyFullSerializer(articles, many=True)
#     if serializer.is_valid():
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     else:
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RealtyFullAPIListCreate(generics.CreateAPIView):
    queryset = RealtyFull.objects.all()
    serializer_class = RealtyFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RealtyFullAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RealtyFull.objects.all()
    serializer_class = RealtyFullSerializerDetail
    permission_classes = (IsAuthenticatedOrReadOnly,)
