from rest_framework import generics, pagination
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK
import requests
import ast
from sections.serializer import FullFavouritesUserSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from settings.settings import BASE_URL


class FullFavouritesUser(generics.ListAPIView):
    serializer_class = FullFavouritesUserSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)



    def get(self, request, *args, **kwargs):
        query = self.request.query_params
        try:
            user = query['user']
        except:
            user = False

        params = f'?user={user}' if bool(user) else ''
        category = ['avto', 'children', 'electronics', 'fashion', 'house_garden', 'realty', 'services', 'work']
        urls = [f'{BASE_URL}/v1/{i}/favourites/{params}' for i in category]
        responses = [requests.get(u) for u in urls]
        res = []
        for response in responses:
            if response.text != '[]':
                res = [*res, *response.json()]
        return Response(res, status=HTTP_200_OK)