from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions
from django.conf import settings
from django.conf.urls.static import static

schema_view = get_schema_view(
    openapi.Info(
        title="API",
        default_version='v1',
        description="API documentation",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
  path('admin/', admin.site.urls),
  path('api/v1/', include([
      path('auth/', include('accounts.urls')),
      path('social_auth/', include(('social_auth.urls', 'social_auth'), namespace="social_auth")),
      path('', include('sections.urls.recommend.urls_recommend')),
      path('', include('sections.urls.base_urls')),
      path('', include('sections.urls.new.urls_new')),
      path('', include('sections.urls.category.urls_category')),
      path('', include('sections.urls.stock.urls_stock')),
      path('', include('sections.urls.realty.urls_realty')),
      path('', include('sections.urls.avto.urls_avto')),
      path('', include('sections.urls.work.urls_work')),
      path('', include('sections.urls.services.urls_services')),
      path('', include('sections.urls.children.urls_children')),
      path('', include('sections.urls.electronics.urls_electronics')),
      path('', include('sections.urls.fashion.urls_fashion')),
      path('', include('sections.urls.house_garden.urls_house_garden')),
      path('docs/', include([
          path('', schema_view.with_ui('swagger', cache_timeout=0), name="swagger-schema"),
          path('api.json/', schema_view.without_ui(cache_timeout=0), name='schema-swagger-ui'),
          path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
      ])),
  ]))
] + static(
    settings.STATIC_URL, document_root=settings.STATIC_ROOT
) + static(
    settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
)
