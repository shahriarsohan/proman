from django.conf import settings
from django.db import models

User = settings.AUTH_USER_MODEL


class Address(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    phone_number = models.PositiveIntegerField(blank=True, null=True)
    street_address = models.CharField(max_length=100)
    zip = models.CharField(max_length=100)
    district = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name_plural = 'Addresses'
