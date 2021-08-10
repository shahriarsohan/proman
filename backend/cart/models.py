from coupon.models import Coupon
from django.db import models
from django.db.models.signals import pre_save, post_save, m2m_changed

from django.conf import settings
from products.models import Products

User = settings.AUTH_USER_MODEL


class CartManager(models.Manager):
    def new_or_get(self, request, id):
        print(request.data)
        cart_id = id
        print(cart_id)
        qs = self.get_queryset().filter(id=cart_id)
        if qs.count() == 1:
            new_obj = False
            cart_obj = qs.first()
            if request.user.is_authenticated and cart_obj.user is None:
                cart_obj.user = request.user
                cart_obj.save()
        else:
            print('hello')
            cart_obj = Cart.objects.new(user=request.user)
            print('id', cart_obj.id)
            print('cart-object', cart_obj)
            new_obj = True
            return cart_obj
        print('new_or_get running')
        return cart_obj, new_obj

    def new(self, user=None):
        user_obj = None
        print('new running')
        if user is not None:
            if user.is_authenticated:
                user_obj = user
        return self.model.objects.create(user=user_obj)


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(
        Products, on_delete=models.CASCADE, blank=True, null=True)
    size = models.CharField(max_length=200, blank=True, null=True)
    color = models.CharField(max_length=200, blank=True, null=True)
    quantity = models.IntegerField(default=1)
    timestamp = models.DateTimeField(auto_now_add=True)
    expires = models.BooleanField(blank=True, null=True)
    buy_one_get_one = models.BooleanField(default=False)

    def get_total_item_price(self):
        return self.quantity * self.product.price

    def get_total_discount_item_price(self):
        return self.quantity * self.product.discount_price

    def get_amount_saved(self):
        return self.get_total_item_price() - self.get_total_discount_item_price()

    def get_final_price(self):
        if self.product.discount_price:
            return self.get_total_discount_item_price()
        return self.get_total_item_price()


class FinalCart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cart = models.ManyToManyField(Cart)
    created = models.DateTimeField(auto_now_add=True)
    expires = models.BooleanField(blank=True, null=True)
    coupon = models.CharField(max_length=20, blank=True, null=True)
    sub_total = models.IntegerField(default=0, blank=True, null=True)
    free_delivery = models.BooleanField(default=False)
    being_delivered = models.BooleanField(default=False)

    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()

    def __str__(self):
        return str(self.id)

    def get_total_product_price(self):
        total = 0
        for order_item in self.cart.all():
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


class OrderItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Cart)


class RecentlyView(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)


# def m2m_changed_cart_receiver(sender, instance, action, *args, **kwargs):
#     if action == 'post_add' or action == 'post_remove' or action == 'post_clear':
#         products = instance.cart.all()

#         total = 0
#         for item in products:
#             if item.product.discount_price:
#                 print('dicount')
#                 total += item.quantity * item.product.discount_price
#                 print(total)
#             else:
#                 print('nodicount')
#                 total += item.quantity * item.product.price
#             print('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk', total)

#             instance.sub_total = total
#             instance.save()


# m2m_changed.connect(m2m_changed_cart_receiver, sender=FinalCart.cart.through)
