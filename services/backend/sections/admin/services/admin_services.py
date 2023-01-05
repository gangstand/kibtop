from sections.models import ServicesFullUpload, ServicesFull
from django.contrib import admin


class ServicesFullImageAdmin(admin.StackedInline):
    model = ServicesFullUpload


@admin.register(ServicesFull)
class SUAdmin(admin.ModelAdmin):
    inlines = [ServicesFullImageAdmin]

    class Meta:
        model = ServicesFull
