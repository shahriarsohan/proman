

import debug_toolbar
from django.conf import settings
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('social/auth/', include('rest_framework_social_oauth2.urls')),
    path('phone_login/', include('phone_login.urls')),

    path('', include('drfpasswordless.urls')),
    path('v1/products/', include('products.api.urls')),
    path('v1/address/', include('address.api.urls')),
    path('v1/coupon/', include('coupon.api.urls')),
    path('v1/orders/', include('orders.api.urls')),
    path('v1/wishlist/', include('wishlist.api.urls')),
    path('v1/profile/', include('userprofile.api.urls')),
    path('v1/cart/', include('cart.api.urls')),
    path('__debug__/', include(debug_toolbar.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)


if not settings.DEBUG:
    urlpatterns += [re_path(r'.*',
                            TemplateView.as_view(template_name='index.html'))]
