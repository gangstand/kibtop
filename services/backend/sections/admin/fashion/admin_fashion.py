from modeltranslation.translator import TranslationOptions, translator

from sections.models import FashionFullUpload, FashionFull
from django.contrib import admin


class FashionTranslationOptions(TranslationOptions):
    fields = ('title',)


translator.register(FashionFull, FashionTranslationOptions)


class FashionFullImageAdmin(admin.StackedInline):
    model = FashionFullUpload


@admin.register(FashionFull)
class FUAdmin(admin.ModelAdmin):
    inlines = [FashionFullImageAdmin]

    class Meta:
        model = FashionFull

