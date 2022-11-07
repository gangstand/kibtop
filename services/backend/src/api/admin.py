from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from api.models import Product, Category, CustomUser
from django.contrib.auth.models import Group

admin.site.unregister(Group)
admin.site.register(Product)
admin.site.register(Category)


class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['username', 'email', 'last_name', 'is_active', 'is_superuser']
    fieldsets = (
        (None, {
            'fields': ('username', 'password', 'first_name', 'last_name', 'middle_name', 'email',)
        }),
    )


admin.site.register(CustomUser, CustomUserAdmin)
