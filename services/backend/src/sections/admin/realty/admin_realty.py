from sections.models import *
from django.contrib import admin


class RealtyFullImageAdmin(admin.StackedInline):
    model = RealtyFullUpload


@admin.register(RealtyFull)
class RASSIAdmin(admin.ModelAdmin):
    inlines = [RealtyFullImageAdmin]

    class Meta:
        model = RealtyFull
