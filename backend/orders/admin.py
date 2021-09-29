from django.contrib import admin

from .models import Order, DeliveryCharge, PaymentInfo


@admin.register(Order)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'order_id',
        'ordered_date',
        'sub_total',
        'total',
        'ordered',
        'order_status',
        'free_delivery',
        'being_delivered',
    )
    list_filter = (
        'ordered',
        'order_status',
        'free_delivery',
        'being_delivered',
    )
    search_fields = (
        'order_id',
    )
    raw_id_fields = ('user', 'products', 'payment_info')
    list_per_page = 50
