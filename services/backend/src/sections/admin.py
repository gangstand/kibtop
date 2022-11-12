from django.contrib import admin

from sections.models import RASSUpload, RealtyApartmentsSaleSecondary, RASRUpload, RealtyApartmentsSaleRent, RHSSUpload, \
    RealtyHomeSaleSecondary, RealtyHomeSaleRent, RHSRUpload, RealtyLandPlotSaleSecondary, RLPSSUpload, \
    RealtyLandPlotSaleRent, RLPSRUpload

admin.site.site_header = 'KIBTOP Administration'
admin.site.index_title = 'Panel'
admin.site.site_title = 'KIBTOP'


class RASSImageAdmin(admin.StackedInline):
    model = RASSUpload


@admin.register(RealtyApartmentsSaleSecondary)
class RASSIAdmin(admin.ModelAdmin):
    inlines = [RASSImageAdmin]

    class Meta:
        model = RealtyApartmentsSaleSecondary


class RASRImageAdmin(admin.StackedInline):
    model = RASRUpload


@admin.register(RealtyApartmentsSaleRent)
class RASRAdmin(admin.ModelAdmin):
    inlines = [RASRImageAdmin]

    class Meta:
        model = RealtyApartmentsSaleRent


class RHSSImageAdmin(admin.StackedInline):
    model = RHSSUpload


@admin.register(RealtyHomeSaleSecondary)
class RHSSAdmin(admin.ModelAdmin):
    inlines = [RHSSImageAdmin]

    class Meta:
        model = RealtyHomeSaleSecondary


class RHSRImageAdmin(admin.StackedInline):
    model = RHSRUpload


@admin.register(RealtyHomeSaleRent)
class RHSSAdmin(admin.ModelAdmin):
    inlines = [RHSRImageAdmin]

    class Meta:
        model = RealtyHomeSaleRent


class RLPSSImageAdmin(admin.StackedInline):
    model = RLPSSUpload


@admin.register(RealtyLandPlotSaleSecondary)
class RLPSSAdmin(admin.ModelAdmin):
    inlines = [RLPSSImageAdmin]

    class Meta:
        model = RealtyLandPlotSaleSecondary


class RLPSRImageAdmin(admin.StackedInline):
    model = RLPSRUpload


@admin.register(RealtyLandPlotSaleRent)
class RHSRAdmin(admin.ModelAdmin):
    inlines = [RLPSRImageAdmin]

    class Meta:
        model = RealtyLandPlotSaleRent
