from modeltranslation.translator import TranslationOptions, translator

from sections.models import ServicesFullUpload, ServicesFull
from django.contrib import admin


class ServicesTranslationOptions(TranslationOptions):
    fields = ('title',)


translator.register(ServicesFull, ServicesTranslationOptions)


class ServicesFullImageAdmin(admin.StackedInline):
    model = ServicesFullUpload


@admin.register(ServicesFull)
class SUAdmin(admin.ModelAdmin):
    inlines = [ServicesFullImageAdmin]

    class Meta:
        model = ServicesFull

