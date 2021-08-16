from rest_framework import serializers

from cart.models import Cart, FinalCart
from orders.models import Order
from cart.api.serializers import CartSerailizers, FinalCartSerializers


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class OrderSerailizers(serializers.ModelSerializer):

    # cart = serializers.SerializerMethodField()
    # final_cart = serializers.SerializerMethodField()
    products = FinalCartSerializers(many=False, read_only=True)

    class Meta:
        model = Order
        # depth = 3
        fields = [
            # 'cart',
            # 'final_cart',
            'user',
            'order_id',
            'products',
            'start_date',
            'ordered_date',
            'coupon',
            'sub_total',
            'total',
            'ordered',
            'order_status',
            'address',
            'delivery_charge',
            'shipping',
            'payment_method',
            'payment_number',
            'free_delivery',
            'being_delivered',
            'received',
            'refund_requested',
            'refund_granted',

        ]

    # def get_cart(self, obj):
    #     print('obj', obj.products.cart.all())
    #     qs = FinalCart.objects.get(user=obj.user)
    #     cart_qs = qs.cart.all()
    #     print('qs', qs)
    #     print('cart_qs', cart_qs)
    #     return CartSerailizers(cart_qs).data
