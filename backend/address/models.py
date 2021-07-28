from django.conf import settings
from django.db import models

User = settings.AUTH_USER_MODEL


class Address(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    f_name = models.CharField(max_length=50, blank=True, null=True)
    l_name = models.CharField(max_length=50, blank=True, null=True)

    alternate_phone_number = models.CharField(
        max_length=60, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    region = models.CharField(max_length=50, blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    area = models.CharField(max_length=50, blank=True, null=True)
    street_address = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=100, blank=True, null=True)

    # def __str__(self):
    #     return self.inside_dahaka_or_outside_dhaka

    class Meta:
        verbose_name_plural = 'Addresses'
