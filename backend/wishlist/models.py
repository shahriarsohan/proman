from django.db import models
from django.conf import settings
import products

from products.models import Products

User = settings.AUTH_USER_MODEL

class WishList(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE)
    products = models.ForeignKey(Products , on_delete=models.CASCADE)
    