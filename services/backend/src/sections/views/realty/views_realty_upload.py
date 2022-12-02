from rest_framework import generics
from sections.models import *
from sections.serializer import *
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class RASSUploadAPIList(generics.ListCreateAPIView):
    queryset = RASSUpload.objects.all()
    serializer_class = RASSUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RASSUploadAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RASSUpload.objects.all()
    serializer_class = RASSUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RASRUploadAPIList(generics.ListCreateAPIView):
    queryset = RASRUpload.objects.all()
    serializer_class = RASRUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RASRUploadAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RASRUpload.objects.all()
    serializer_class = RASRUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RHSSUploadAPIList(generics.ListCreateAPIView):
    queryset = RHSSUpload.objects.all()
    serializer_class = RHSSUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RHSSUploadAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RHSSUpload.objects.all()
    serializer_class = RHSSUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RHSRUploadAPIList(generics.ListCreateAPIView):
    queryset = RHSRUpload.objects.all()
    serializer_class = RHSRUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RHSRUploadAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RHSRUpload.objects.all()
    serializer_class = RHSRUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RLPSSUploadAPIList(generics.ListCreateAPIView):
    queryset = RLPSSUpload.objects.all()
    serializer_class = RLPSSUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RLPSSUploadAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RLPSSUpload.objects.all()
    serializer_class = RLPSSUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RLPSRUploadAPIList(generics.ListCreateAPIView):
    queryset = RLPSRUpload.objects.all()
    serializer_class = RLPSRUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class RLPSRUploadAPIUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = RLPSRUpload.objects.all()
    serializer_class = RLPSRUploadSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
