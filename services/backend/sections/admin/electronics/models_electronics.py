from sections.models import ElectronicsFullUpload, ElectronicsFull
from django.contrib import admin


class ElectronicsFullImageAdmin(admin.StackedInline):
    model = ElectronicsFullUpload


@admin.register(ElectronicsFull)
class EUAdmin(admin.ModelAdmin):
    inlines = [ElectronicsFullImageAdmin]

    class Meta:
        model = ElectronicsFull

