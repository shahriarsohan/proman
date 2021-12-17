from rest_framework import response, status, generics, views

from contact.models import Contact
from contact.api.serializers import ContactSerializer
from django_redis import get_redis_connection


class CreateContact(generics.CreateAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()


class tearDown(views.APIView):
    def get(self, request):
        get_redis_connection("default").flushall()
        return response.Response({'msg': 'cache working'})
