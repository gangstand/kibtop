import asyncio
import json
from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer
from asgiref.sync import async_to_sync, sync_to_async
from django.contrib.auth.models import User

from accounts.models import CustomUser
from .models import Event, Message, Group
from channels.layers import channel_layers
from channels.db import database_sync_to_async

'''
class JoinAndLeave(WebsocketConsumer):
    def connect(self):
        print("server says connected")
        self.accept()
        

    def receive(self, text_data=None, bytes_data=None):
        print("server says client message received: ", text_data)
        self.send("Server sends Welcome")

    def disconnect(self, code):
        print("server says disconnected")
'''


class JoinAndLeave(WebsocketConsumer):

    def connect(self):
        self.user = self.scope["user"]
        self.accept()

        pass

    def receive(self, text_data=None, bytes_data=None):
        text_data = json.loads(text_data)
        type = text_data.get("type", None)
        if type:
            data = text_data.get("data", None)
            print(text_data)

            if type == "leave_group":
                self.leave_group(data)

            elif type == "join_group":
                self.join_group(data)

    def leave_group(self, group_uuid):
        group = Group.objects.get(uuid=group_uuid)
        group.remove_user_from_group(self.user)
        data = {
            "type": "leave_group",
            "data": group_uuid
        }
        self.send(json.dumps(data))

    def join_group(self, group_uuid):
        group = Group.objects.get(uuid=group_uuid)
        group.add_user_to_group(self.user)
        data = {
            "type": "join_group",
            "data": group_uuid
        }
        self.send(json.dumps(data))

    def disconnect(self, code):
        print("Disconexted")
        pass

    def send(self, text_data=None, bytes_data=None, close=False):
        return super().send(text_data, bytes_data, close)


class GroupConsumer(WebsocketConsumer):
    def connect(self):
        # print(self.scope['user'])
        self.user_id = str(self.scope["url_route"]["kwargs"]["user_id"])
        print(self.user_id)

        self.group = 'chat'

        async_to_sync(self.channel_layer.group_add)(
            'chat', self.channel_name
        )


        # self.user = self.scope["user"]


        self.accept()

    def receive(self, text_data=None, bytes_data=None):
        pass
        # print(self.groups)
        # text_data = json.loads(text_data)
        # print(text_data, 'это то')
        #
        # type = text_data.get("type", None)
        # message = text_data.get("message", None)
        #
        # author = text_data.get("author", None)
        # print(self.channel_name)
        # async_to_sync(self.channel_layer.group_send)('chat', {
        #     "type": "new_message",
        #     "message": message,
        # })
        # if type == "text_message":
        #     pass
            # user = CustomUser.objects.get(username=author)
            # message = Message.objects.create(
            #     author=user,
            #     content=message,
            #     group='bceb623a-468b-40a4-aceb-58a4425be646'
            # )


    def new_message(self, event):
        message = event["message"]

        returned_data = {
            "type": "new_message",
            "group_uuid": message,

        }
        self.send(json.dumps(
            returned_data
        ))

    def event_message(self, event):
        message = event.get("message")
        user = event.get("user", None)

        self.send(
            json.dumps(
                {
                    "type": "event_message",
                    "message": message,
                    "status": event.get("status", None),
                    "user": user
                }
            )
        )

    def disconnect(self, code):
        self.channel_layer.group_discard("chat", self.channel_name)
