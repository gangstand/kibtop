from modeltranslation.translator import TranslationOptions, translator

from sections.models import AvtoFullUpload, AvtoFull
from django.contrib import admin


class AvtoTranslationOptions(TranslationOptions):
    fields = ('title', 'brand', )


translator.register(AvtoFull, AvtoTranslationOptions)


class AvtoFullImageAdmin(admin.StackedInline):
    model = AvtoFullUpload


@admin.register(AvtoFull)
class AUAdmin(admin.ModelAdmin):
    inlines = [AvtoFullImageAdmin]

    class Meta:
        model = AvtoFull

