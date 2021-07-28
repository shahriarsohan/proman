from django.urls import path

from .views import ValidateCoupon

urlpatterns = [
    path('validate-coupon', ValidateCoupon.as_view())
]
