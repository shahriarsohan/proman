from django.db.models import fields
from rest_framework import serializers
from products.models import Products, ProductImages


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImages
        fields = [
            'product',
            'image'
        ]


class ProductsSerializer(serializers.ModelSerializer):
    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Products
        fields = [
            'id',
            'name',
            'slug',
            'category',
            'thumbnail',
            'description',
            'short_desc',
            'manufacturer',
            'country_made',
            'benifits',
            'price',
            'discount_price',
            'timestamp',
            'best_selling',
            'featured',
            'trending',
            'quantity_in_stock',
            'out_of_stock',
            'images',

            's_size',
            'm_size',
            'l_size',
            'xl_size',
            'xxl_size',

            'product_delivery_time',
            'buy_one_get_one'

        ]
