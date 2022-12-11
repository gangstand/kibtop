from modeltranslation.translator import TranslationOptions, translator

from sections.models import HouseGardenFullUpload, HouseGardenFull
from django.contrib import admin


class HouseGardenTranslationOptions(TranslationOptions):
    fields = ('title',)


translator.register(HouseGardenFull, HouseGardenTranslationOptions)


class HouseGardenFullImageAdmin(admin.StackedInline):
    model = HouseGardenFullUpload


@admin.register(HouseGardenFull)
class HGUAdmin(admin.ModelAdmin):
    inlines = [HouseGardenFullImageAdmin]

    class Meta:
        model = HouseGardenFull

