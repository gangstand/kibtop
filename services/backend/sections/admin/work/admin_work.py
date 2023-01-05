from sections.models import WorkFullUpload, WorkFull
from django.contrib import admin


class WorkFullImageAdmin(admin.StackedInline):
    model = WorkFullUpload


@admin.register(WorkFull)
class WUAdmin(admin.ModelAdmin):
    inlines = [WorkFullImageAdmin]

    class Meta:
        model = WorkFull
