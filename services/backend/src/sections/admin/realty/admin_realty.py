from modeltranslation.admin import TabbedTranslationAdmin
from modeltranslation.translator import TranslationOptions, translator

from sections.models import RealtyFullUpload, RealtyFull
from django.contrib import admin


class PageTranslationOptions(TranslationOptions):
    fields = ('title',)


translator.register(RealtyFull, PageTranslationOptions)


class RealtyFullImageAdmin(admin.StackedInline):
    model = RealtyFullUpload


@admin.register(RealtyFull)
class RASSIAdmin(admin.ModelAdmin):
    inlines = [RealtyFullImageAdmin]

    class Meta:
        model = RealtyFull
