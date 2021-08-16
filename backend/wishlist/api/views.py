from django.contrib.auth import settings
from django.shortcuts import get_object_or_404

from rest_framework import status, response, views, generics, permissions

from products.models import Products

from wishlist.api.serializers import WishListSerializer
from wishlist.models import WishList

User = settings.AUTH_USER_MODEL


class WishListApiView(generics.ListAPIView):
    serializer_class = WishListSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        wishlist_qs = WishList.objects.filter(
            user=user
        ).order_by('-timestamp')
        return wishlist_qs


class CreateWishListApiView(views.APIView):
    def post(self, request, *args, **kwargs):
        user = self.request.user
        slug = request.data.get('slug', None)
        qs = generics.get_object_or_404(Products, slug=slug)
        new_wishlist = WishList.objects.get_or_create(
            user=user,
            products=qs
        )
        if new_wishlist:
            return response.Response({
                'msg': 'success'
            }, status=status.HTTP_200_OK)
        else:
            return response.Response({
                'msg': 'err'
            }, status=status.HTTP_400_BAD_REQUEST)
