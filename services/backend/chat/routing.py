from django.urls import re_path,path

from . import consumers

websocket_urlpatterns = [
    path('<int:user_id>', consumers.GroupConsumer.as_asgi()),
    path('', consumers.JoinAndLeave.as_asgi())
]