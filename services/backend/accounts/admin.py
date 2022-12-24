from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from django.contrib.auth.models import Group

from accounts.models import CustomUser


class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['username', 'phone', 'email', 'last_name', 'is_superuser', 'is_active',]
    fieldsets = (
        (None, {
            'fields': ('username', 'email', 'phone', 'password', 'first_name', 'last_name', 'middle_name', 'addres', 'upload_user')
        }),
    )


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.unregister(Group)
