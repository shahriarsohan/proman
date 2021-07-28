from rest_framework import serializers

from orders.models import Order


class OrderSerailizers(serializers.ModelSerializer):

    # get_total = serializers.IntegerField()

    class Meta:
        model = Order
        fields = ('__all__')
