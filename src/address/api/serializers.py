from rest_framework import serializers

from address.models import Address


class AddressSerializer(serializers.ModelSerializer):

    user = serializers.CharField(read_only=True)

    class Meta:
        model = Address
        fields = [
            'id',
            'user',
            'phone_number',
            'street_address',
            'zip',
            'district',
        ]
