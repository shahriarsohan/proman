from django.contrib import admin

from .models import Cart, RecentlyView, FinalCart


admin.site.register(Cart)
admin.site.register(FinalCart)
admin.site.register(RecentlyView)
