from modeltranslation.translator import TranslationOptions, translator

from sections.models import ElectronicsFullUpload, ElectronicsFull
from django.contrib import admin


class ElectronicsTranslationOptions(TranslationOptions):
    fields = ('title',)


translator.register(ElectronicsFull, ElectronicsTranslationOptions)


class ElectronicsFullImageAdmin(admin.StackedInline):
    model = ElectronicsFullUpload


@admin.register(ElectronicsFull)
class EUAdmin(admin.ModelAdmin):
    inlines = [ElectronicsFullImageAdmin]

    class Meta:
        model = ElectronicsFull

