from django.conf import settings
from django.db import models
from django.db.models.signals import pre_save, post_save

from address.models import Address
from cart.models import Cart

User = settings.AUTH_USER_MODEL


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Cart)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    ordered = models.BooleanField(default=False)
    address = models.ForeignKey(
        Address, on_delete=models.CASCADE, blank=True, null=True)
    payment_method = models.CharField(max_length=50, blank=True, null=True)
    payment_number = models.CharField(max_length=100, blank=True, null=True)
    being_delivered = models.BooleanField(default=False)
    received = models.BooleanField(default=False)
    refund_requested = models.BooleanField(default=False)
    refund_granted = models.BooleanField(default=False)

    def get_total(self):
        total = 0
        for order_item in self.products.all():
            total += order_item.get_final_price()
        # if self.coupon:
        #     total -= self.coupon.amount
        return total


# def pre_save_address_signal(sender, instance, *args, **kwargs):
#     if not instance.address:
#         return None
#     else:
#         address_qs = Address.objects.get(user=instance.user)
#         if not address_qs:
#             instance.address = address_qs


# pre_save.connect(pre_save_address_signal, sender=Order)
