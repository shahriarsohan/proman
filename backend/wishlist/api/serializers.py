from products.api.serializers import ProductsSerializer
from rest_framework import serializers

from wishlist.models import WishList


class WishListSerializer(serializers.ModelSerializer):
    products = ProductsSerializer(many=False, read_only=True)

    class Meta:
        model = WishList
        fields = ('__all__')
