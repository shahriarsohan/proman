from django.contrib import admin

from .models import Order, DeliveryCharge, PaymentInfo

admin.site.register(Order)
admin.site.register(DeliveryCharge)
admin.site.register(PaymentInfo)
