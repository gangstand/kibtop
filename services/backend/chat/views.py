import django_filters
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from django.http import HttpResponseForbidden
from django.shortcuts import render, get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from djoser.serializers import UserSerializer
from rest_framework import generics, status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication

from .filters import FilterMessageAPIList, FilterGroup
from .models import Group, Message, Event, ConnectedUsers
from django.contrib.auth.decorators import login_required

from .serializer import GroupSerializer, MessageSerializer, EventSerializer, GroupListSerializer, GroupDetailSerializer
from .utils import get_online_user, get_involved_users
from rest_framework import filters
channel_layer = get_channel_layer()


def HomeView(request):
    '''The home page where all groups are listed'''
    groups = Group.objects.all()
    user = request.user
    context = {
        "groups": groups,
        "user": user
    }
    print(context)
    return render(request, template_name="chat/home.html", context=context)


@login_required
def GroupChatView(request, uuid):
    group = get_object_or_404(Group, uuid=uuid)
    if request.user not in group.members.all():
        return HttpResponseForbidden("You are not a member of this group. Kindly use the join botton")

    messages = group.message_set.all()
    events = group.event_set.all()

    # Combine the events and messages in for a group
    message_and_event_list = [*messages, *events]
    # Sort the combination by the timestamp so that they are listed in order
    sorted_message_event_list = sorted(message_and_event_list, key=lambda x: x.timestamp)

    # get list of all group members
    group_members = group.members.all()

    # get list of all active members
    active_members = get_online_user(group)

    context = {
        "message_and_event_list": sorted_message_event_list,
        "group_members": group_members,
        "active_members": active_members
    }


    return render(request, template_name="chat/groupchat.html", context=context)


class GroupAPIList(generics.ListAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupListSerializer
    filter_backends = (DjangoFilterBackend, )
    filterset_class = FilterGroup


class GroupAPICreate(generics.CreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        members = serializer.data['members']
        group_id = serializer.data['id']

        for member in members:
            async_to_sync(channel_layer.group_send)(str(member), {
                "type": "new_message",
                "message": group_id,
            })

        return Response(serializer.data, status=status.HTTP_201_CREATED)



class GroupDetailView(generics.RetrieveAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupDetailSerializer


class MessageAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterMessageAPIList
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        group_id = serializer.data['group']

        group = GroupSerializer(Group.objects.get(id=group_id)).data

        for member in group['members']:
            async_to_sync(channel_layer.group_send)(str(member), {
                "type": "new_message",
                "message": group_id,
            })

        return self.create(request, *args, **kwargs)

    # def get(self, request, *args, **kwargs):





class MessageAPIUpdate(generics.UpdateAPIView):
    filter_backends = (DjangoFilterBackend)
    filterset_class = FilterMessageAPIList
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        group_id = serializer.data['group']

        group = GroupSerializer(Group.objects.get(id=group_id)).data

        for member in group['members']:
            async_to_sync(channel_layer.group_send)(str(member), {
                "type": "new_message",
                "message": group_id,
            })

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)




class EventAPIList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


@api_view(['GET'])
@authentication_classes([JWTAuthentication])
@permission_classes([IsAuthenticated])
def get_my_connected_users(request, format=None):
    user = UserSerializer(request.user).data
    user_id = user['id']

    involved_users = get_involved_users(user_id)

    connected_users = ConnectedUsers.objects.filter(user_id__in=involved_users).values()

    return Response(connected_users)