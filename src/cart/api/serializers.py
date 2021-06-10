from rest_framework import serializers

from products.api.serializers import ProductsSerializer
from cart.models import Cart


class CartSerailizers(serializers.ModelSerializer):

    product = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        fields = ('__all__')

    def get_product(self, obj):
        return ProductsSerializer(obj.product).data
