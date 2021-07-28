from django.db import models

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
    expires = models.BooleanField(blank=True, null=True)
    size = models.CharField(max_length=200, blank=True, null=True)
    color = models.CharField(max_length=200, blank=True, null=True)
    quantity = models.IntegerField(default=1)
    timestamp = models.DateTimeField(auto_now_add=True)

    # def __str__(self):
    #     return f"{self.user.email} ordered {self.product}"

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


class OrderItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Cart)


class RecentlyView(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
