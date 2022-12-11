from modeltranslation.translator import TranslationOptions, translator

from sections.models import WorkFullUpload, WorkFull
from django.contrib import admin


class WorkTranslationOptions(TranslationOptions):
    fields = ('title', )


translator.register(WorkFull, WorkTranslationOptions)


class WorkFullImageAdmin(admin.StackedInline):
    model = WorkFullUpload


@admin.register(WorkFull)
class WUAdmin(admin.ModelAdmin):
    inlines = [WorkFullImageAdmin]

    class Meta:
        model = WorkFull

