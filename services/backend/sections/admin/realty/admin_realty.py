from sections.models import RealtyFullUpload, RealtyFull
from django.contrib import admin


class RealtyFullImageAdmin(admin.StackedInline):
    model = RealtyFullUpload


@admin.register(RealtyFull)
class RUAdmin(admin.ModelAdmin):
    inlines = [RealtyFullImageAdmin]

    class Meta:
        model = RealtyFull
