from modeltranslation.translator import TranslationOptions, translator

from sections.models import ChildrenFullUpload, ChildrenFull
from django.contrib import admin


class ChildrenTranslationOptions(TranslationOptions):
    fields = ('title',)


translator.register(ChildrenFull, ChildrenTranslationOptions)


class ChildrenFullImageAdmin(admin.StackedInline):
    model = ChildrenFullUpload


@admin.register(ChildrenFull)
class CUAdmin(admin.ModelAdmin):
    inlines = [ChildrenFullImageAdmin]

    class Meta:
        model = ChildrenFull

