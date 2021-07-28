from django.contrib import admin

from .models import Coupon
# Register your models here.


class CouponAdmin(admin.ModelAdmin):
    list_display = ['code', 'discount_amount',
                    'valid_from', 'valid_to', 'active']
    list_filter = ['code', 'discount_amount',
                   'valid_from', 'valid_to', 'active']
    search_fields = ['code', 'discount_amount']


admin.site.register(Coupon, CouponAdmin)
