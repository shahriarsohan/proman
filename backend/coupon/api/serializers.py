from rest_framework import serializers

from coupon.models import Coupon

class CouponSerializers(serializers.ModelSerializer):
    model= Coupon
    fields = ('__all__')

