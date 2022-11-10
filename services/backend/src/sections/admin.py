from django.contrib import admin

from sections.models import Category, Product, RealtyCategory, Realty, RealtyUpload

admin.site.site_header = 'KIBTOP Administration'
admin.site.index_title = 'Panel'
admin.site.site_title = 'KIBTOP'


# admin.site.register(Product)
# admin.site.register(Category)


class PostImageAdmin(admin.StackedInline):
    model = RealtyUpload


admin.site.register(RealtyCategory)


@admin.register(Realty)
class PostAdmin(admin.ModelAdmin):
    inlines = [PostImageAdmin]

    class Meta:
        model = Realty
