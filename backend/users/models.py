from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _
from phonenumber_field.modelfields import PhoneNumberField

from userprofile.models import UserProfile
from .managers import CustomUserManager


class User(AbstractUser):
    username = None
    phone_number = PhoneNumberField(
        blank=True, help_text='Contact phone number', unique=True
    )

    username = models.CharField(max_length=40, default='sohan')
    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return str(self.phone_number)
