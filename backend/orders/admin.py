from django.contrib import admin

from .models import Order, DeliveryCharge

admin.site.register(Order)
admin.site.register(DeliveryCharge)
