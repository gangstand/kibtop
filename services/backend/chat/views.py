import django_filters
from django.http import HttpResponseForbidden
from django.shortcuts import render, get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Group, Message, Event
from django.contrib.auth.decorators import login_required

from .serializer import GroupSerializer, MessageSerializer, EventSerializer
from .utils import get_online_user


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

    print(context)

    return render(request, template_name="chat/groupchat.html", context=context)


class GroupAPIList(generics.ListCreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class FilterMessageAPIList(django_filters.FilterSet):
    group = django_filters.NumberFilter()
    author = django_filters.NumberFilter()

    class Meta:
        model = Message
        fields = ['group', 'author']


class MessageAPIList(generics.ListCreateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterMessageAPIList
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class MessageAPIUpdate(generics.UpdateAPIView):
    filter_backends = (DjangoFilterBackend,)
    filterset_class = FilterMessageAPIList
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


class EventAPIList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
