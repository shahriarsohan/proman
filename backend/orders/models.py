from passwordless.utils import unique_order_id_generator
from django.conf import settings
from django.db import models
from django.db.models.signals import pre_save, post_save

from address.models import Address
from cart.models import FinalCart
from coupon.models import Coupon

User = settings.AUTH_USER_MODEL

order_status = (
    ('created', 'Created'),
    ('failed', 'Failed'),
    ('cash_on_delivery', 'Cash on delivery'),
    ('online_payment', 'Online payment'),
    ('shipped', 'Shipped'),
    ('refund', 'Refund'),
    ('confirm', 'Confirm'),
)


class DeliveryCharge(models.Model):
    location = models.CharField(max_length=64)
    delivery_charge = models.IntegerField(default=60)

    def __str__(self):
        return self.location


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    order_id = models.CharField(max_length=64, blank=True, null=True)
    products = models.ForeignKey(
        FinalCart, on_delete=models.CASCADE, blank=True, null=True)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()
    coupon = models.CharField(max_length=20, blank=True, null=True)
    sub_total = models.IntegerField(default=0, blank=True, null=True)
    total = models.IntegerField(blank=True, null=True)
    ordered = models.BooleanField(default=False)
    order_status = models.CharField(
        max_length=64, blank=True, null=True, choices=order_status)
    address = models.ForeignKey(
        Address, on_delete=models.SET_NULL, blank=True, null=True)
    delivery_charge = models.ForeignKey(
        DeliveryCharge, on_delete=models.CASCADE, blank=True, null=True)
    shipping = models.IntegerField(default=60)
    payment_method = models.CharField(max_length=50, blank=True, null=True)
    payment_number = models.CharField(max_length=100, blank=True, null=True)
    free_delivery = models.BooleanField(default=False)
    being_delivered = models.BooleanField(default=False)
    received = models.BooleanField(default=False)
    refund_requested = models.BooleanField(default=False)
    refund_granted = models.BooleanField(default=False)

    def get_total_product_price(self):
        total = 0
        for order_item in self.products.all():
            total += order_item.get_final_price()
            self.sub_total = total
            self.save()
        if self.coupon:
            coupon_qs = Coupon.objects.get(code__iexact=self.coupon)
            if coupon_qs:
                coupon_amount = coupon_qs.discount_amount
                discount = self.sub_total - coupon_amount
                self.sub_total = discount
                self.save()
            return self.sub_total
        return total

    def get_total(self):
        total = 2000
        # if self.address:
        # region = self.address.region
        # print(region)
        # if region is not None:
        #     if region == 'dhaka':
        #         self.shipping = 60
        #         self.save()
        #     elif region == 'rajshahi':
        #         self.shipping = 120
        #         self.save()
        #     elif region == 'rangpur':
        #         self.shipping = 120
        #         self.save()
        #     elif region == 'chattogram':
        #         self.shipping = 120
        #         self.save()
        #     elif region == 'khulna':
        #         self.shipping = 120
        #         self.save()
        #     elif region == 'shylhet':
        #         self.shipping = 120
        #         self.save()
        #     elif region == 'barishal':
        #         self.shipping = 120
        #         self.save()
        #     else:
        #         self.shipping = 60
        #         self.save()
        # total = total + self.shipping
        return total

    def update_total(self):
        a = self.products.get_final_price()
        print('total', a)
        b = 800
        c = a + b
        self.total = c
        self.save()
        return c


def pre_save_create_order_id(sender, instance, *args, **kwargs):
    if not instance.order_id:
        instance.order_id = unique_order_id_generator(instance)


pre_save.connect(pre_save_create_order_id, sender=Order)

# def pre_save_address_signal(sender, instance, *args, **kwargs):
#     if not instance.address:
#         return None
#     else:
#         address_qs = Address.objects.get(user=instance.user)
#         if not address_qs:
#             instance.address = address_qs


# pre_save.connect(pre_save_address_signal, sender=Order)

# def post_save_subtotal_signal(sender, instance, created, *args, **kwargs):

#     if not created:
#         sub_total = instance.get_total()
#         instance.sub_total = sub_total
#         instance.save()


# post_save.connect(post_save_subtotal_signal, sender=Order)


# def pre_save_subtotal_signal_two(sender, instance, *args, **kwargs):

#     user = instance.user
#     sub_total = 0
#     cart_qs = Cart.objects.filter(user=user, expires=False)
#     for q in cart_qs:
#         if q.product.discount_price:
#             sub_total += q.product.discount_price
#         else:
#             sub_total += q.product.price
#     # if not instance.sub_total:
#     instance.sub_total = sub_total
#     # instance.save()


# pre_save.connect(pre_save_subtotal_signal_two, sender=Order)


# def post_save_order(sender, instance, created, *args, **kwargs):
#     # print("running")
#     if created:
#         print("Updating... first")
#         instance.update_total()


# post_save.connect(post_save_order, sender=Order)
