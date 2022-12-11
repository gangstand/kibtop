from modeltranslation.translator import TranslationOptions, translator

from sections.models import RealtyFullUpload, RealtyFull
from django.contrib import admin


class RealtyTranslationOptions(TranslationOptions):
    fields = ('title',)


translator.register(RealtyFull, RealtyTranslationOptions)


class RealtyFullImageAdmin(admin.StackedInline):
    model = RealtyFullUpload


@admin.register(RealtyFull)
class RUAdmin(admin.ModelAdmin):
    inlines = [RealtyFullImageAdmin]

    class Meta:
        model = RealtyFull

