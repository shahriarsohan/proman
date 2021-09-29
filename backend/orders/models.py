import requests
from passwordless.utils import unique_order_id_generator
from django.conf import settings
from django.db import models
from django.db.models.signals import pre_save, post_save

from address.models import Address
from cart.models import FinalCart
from coupon.models import Coupon

greenweburl = "http://api.greenweb.com.bd/api.php"
token = "78357850c4b1950fb49d91adca2e4318"
User = settings.AUTH_USER_MODEL

order_status = (
    ('created', 'Created'),
    ('failed', 'Failed'),
    ('shipped', 'Shipped'),
    ('refund', 'Refund'),
    ('confirm', 'Confirm'),
    ('picked_by_delivery', 'picked_by_delivery'),
    ('delivery_complete', 'delivery_complete'),
)


class DeliveryCharge(models.Model):
    location = models.CharField(max_length=64)
    delivery_charge = models.IntegerField(default=60)

    def __str__(self):
        return self.location


class PaymentInfo(models.Model):
    order_number = models.IntegerField(blank=True, null=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    tran_id = models.CharField(max_length=15)
    val_id = models.CharField(max_length=75)
    card_type = models.CharField(max_length=150)
    store_amount = models.DecimalField(max_digits=10, decimal_places=2)
    card_no = models.CharField(max_length=55, null=True)
    bank_tran_id = models.CharField(max_length=155, null=True)
    status = models.CharField(max_length=55)
    tran_date = models.DateTimeField()
    currency = models.CharField(max_length=10)
    card_issuer = models.CharField(max_length=255)
    card_brand = models.CharField(max_length=15)
    card_issuer_country = models.CharField(max_length=55)
    card_issuer_country_code = models.CharField(max_length=55)
    currency_rate = models.DecimalField(max_digits=10, decimal_places=2)
    verify_sign = models.CharField(max_length=155)
    verify_sign_sha2 = models.CharField(max_length=255)
    risk_level = models.CharField(max_length=15)
    risk_title = models.CharField(max_length=25)


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    order_id = models.CharField(max_length=64, blank=True, null=True)
    products = models.ForeignKey(
        FinalCart, on_delete=models.CASCADE, blank=True, null=True)
    payment_info = models.ForeignKey(
        PaymentInfo, on_delete=models.CASCADE, blank=True, null=True)
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

    def __str__(self):
        return str(self.order_id)

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


def pre_save_order_confirm(sender, instance, *args, **kwargs):
    try:
        if instance.ordered != Order.objects.get(id=instance.id).ordered and instance.ordered == True:
            # qs = User.objects.get(user=instance.user)
            print(instance.user)
            print('send message')
            message = "প্রিয় মার্চেন্ট, আপনার প্রস্তাবিত  অর্ডারটি ডেলিভারি সম্পন্ন হয়েছে। \nধন্যবাদ\nROMEX DELIVERY SERVICE."
            data = {'token': token,
                    'to': instance.user,
                    'message': message}

            responses = requests.post(url=greenweburl, data=data)
            response = responses.text
            print(response)

    except:
        print('not working')


pre_save.connect(pre_save_order_confirm, sender=Order)


def pre_payment_save_to_order(sender, instance, *args, **kwargs):
    if not instance.payment_info:
        payment_qs = PaymentInfo.objects.filter(
            order_number=instance.id).first()
        if payment_qs:
            instance.payment_info = payment_qs
            instance.save()
        else:
            print('not working')


pre_save.connect(pre_payment_save_to_order, sender=Order)
