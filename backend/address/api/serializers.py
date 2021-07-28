from rest_framework import serializers

from address.models import Address


class AddressSerializer(serializers.ModelSerializer):
    zip_code = serializers.CharField(
        required=False, allow_null=True, allow_blank=True)
    alternate_phone_number = serializers.CharField(
        required=False, allow_null=True, allow_blank=True)
    user = serializers.CharField(read_only=True)

    class Meta:
        model = Address
        fields = ('__all__')
