from rest_framework import views, generics, status, response, permissions

from django.conf import settings


from address.models import Address
from .serializers import AddressSerializer

User = settings.AUTH_USER_MODEL


class GetUserAddress(views.APIView):
    def get(self, request, *args, **kwargs):
        user = request.user
        try:
            address_qs = Address.objects.get(user=user)
            serializer = AddressSerializer(address_qs)
            return response.Response({'user_address': serializer.data, 'user_have_address': True})
        except:
            return response.Response({'user_have_address': False})


class AddressEditView(generics.UpdateAPIView):
    queryset = Address.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = AddressSerializer
    lookup_field = 'id'


class MakeAddressApiView(generics.ListCreateAPIView):
    serializer_class = AddressSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        address_qs = Address.objects.filter(user=user)
        if address_qs:
            serializer = AddressSerializer(address_qs, many=True)
            return response.Response(serializer.data)
        return response.Response({"msg": "Not found"})

    def create(self, request, *args, **kwargs):
        print(request.data)
        user = request.user
        serializer = AddressSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save(user=user)
            print(serializer.data)
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response({"msg": "error"}, status=status.HTTP_400_BAD_REQUEST)
