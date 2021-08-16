from rest_framework import serializers

from products.api.serializers import ProductsSerializer
from cart.models import Cart, FinalCart


class CartSerailizers(serializers.ModelSerializer):

    product = serializers.SerializerMethodField()
    # get_total_item_price = serializers.IntegerField()
    # get_total_discount_item_price = serializers.IntegerField()
    # get_amount_saved = serializers.IntegerField()
    # get_final_price = serializers.IntegerField()
    user = serializers.CharField(read_only=True)

    class Meta:
        model = Cart
        fields = ('__all__')

    def get_product(self, obj):
        return ProductsSerializer(obj.product).data


class FinalCartSerializers(serializers.ModelSerializer):
    cart = CartSerailizers(many=True, read_only=True)

    class Meta:
        model = FinalCart
        fields = ('__all__')
