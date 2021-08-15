from django.shortcuts import get_object_or_404
from rest_framework import response, status, views, generics


from userprofile.models import UserProfile
from .serializers import UserProfileSerializers


class ProfileEditView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserProfileSerializers

    def get_queryset(self):
        user = self.request.user
        return UserProfile.objects.filter(user=user)

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset)
        self.check_object_permissions(self.request, obj)
        return obj
