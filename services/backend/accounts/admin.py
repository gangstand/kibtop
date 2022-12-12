from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from django.contrib.auth.models import Group

from accounts.models import CustomUser


class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['username', 'email', 'last_name', 'is_active', 'is_superuser']
    fieldsets = (
        (None, {
            'fields': ('username', 'password', 'first_name', 'last_name', 'middle_name', 'email', 'upload_user')
        }),
    )


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.unregister(Group)
