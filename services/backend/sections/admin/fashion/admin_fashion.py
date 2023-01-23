from sections.models import FashionFullUpload, FashionFull
from django.contrib import admin


class FashionFullImageAdmin(admin.StackedInline):
    model = FashionFullUpload


@admin.register(FashionFull)
class FUAdmin(admin.ModelAdmin):
    inlines = [FashionFullImageAdmin]

    class Meta:
        model = FashionFull

