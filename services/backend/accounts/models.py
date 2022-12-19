from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    middle_name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(blank=False, null=False)
    upload_user = models.FileField(upload_to='user/')
    addres = models.CharField(max_length=255, blank=False, null=False)

    def __str__(self):
        return self.email
