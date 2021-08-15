from rest_framework import serializers
from userprofile.models import UserProfile


class UserProfileSerializers(serializers.ModelSerializer):
    user = serializers.CharField(read_only=True)

    class Meta:
        model = UserProfile
        fields = ('__all__')
