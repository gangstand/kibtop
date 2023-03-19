from django.urls import path
from .views import MessageAPIList, GroupAPIList, MessageAPIUpdate, HomeView, GroupChatView

from django.contrib.auth import views as auth_views

urlpatterns = [
    path("", HomeView, name="home"),
    path("groups/<uuid:uuid>/", GroupChatView, name="group"),

    path('messages/', MessageAPIList.as_view()),
    path('messages/<int:pk>/', MessageAPIUpdate.as_view()),
    path('group/', GroupAPIList.as_view())
]