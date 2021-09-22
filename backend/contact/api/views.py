from rest_framework import response, status, generics

from contact.models import Contact
from contact.api.serializers import ContactSerializer


class CreateContact(generics.CreateAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
