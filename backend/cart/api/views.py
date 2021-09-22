from sslcommerz_lib import SSLCOMMERZ
from .serializers import CartSerailizers, FinalCartSerializers
from orders.models import Order
from cart.models import Cart, RecentlyView, FinalCart
from products.models import Products
from address.models import Address
from address.api.serializers import AddressSerializer
from rest_framework.response import Response
from rest_framework import response
from rest_framework import generics, views, permissions, status
from django.utils import timezone
from django.shortcuts import get_object_or_404
from django.http.response import JsonResponse
from coupon.models import Coupon

from rest_framework.authentication import TokenAuthentication


class UserCartListApiView(generics.ListAPIView):
    serializer_class = CartSerailizers
    # permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            print('working')
            final_qs = FinalCart.objects.filter(
                user=user, expires=False).first()
            if final_qs:
                cart_qs = final_qs.cart.all()
                return cart_qs
            else:
                return None
        else:
            print('workingworking')
            return None


class AddProductToCart(views.APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        if user.is_authenticated:
            slug = request.data.get('slug', None)
            quantity = request.data.get('quantity', None)
            size = request.data.get('size', None)

            if size is None:
                return Response({"msg": "Please specify size"}, status=status.HTTP_400_BAD_REQUEST)
            if slug is None:
                return Response({"msg": "Something went wrong"}, status=status.HTTP_404_NOT_FOUND)

            item = get_object_or_404(Products, slug=slug)
            if item.discount_price:
                total_price = quantity * item.discount_price
            else:
                total_price = quantity * item.price

            order_item = Cart.objects.create(
                product=item, user=user, quantity=quantity, size=size, expires=False, buy_one_get_one=item.buy_one_get_one)

            serializer = CartSerailizers(order_item)
            order_item.save()

            order_qs = FinalCart.objects.filter(
                user=request.user, expires=False)
            print(order_qs)
            if order_qs.exists():
                order = order_qs[0]
                if not order.cart.filter(product__id=order_item.id).exists():
                    order.cart.add(order_item)
                    order.sub_total += total_price
                    if order.sub_total >= 1000:
                        order.free_delivery = True
                        order.save()
                    order.save()

                    return Response({'item':  serializer.data}, status=status.HTTP_200_OK)
                else:
                    return Response({"msg": "something went wrong"}, status=status.HTTP_400_BAD_REQUEST)

            else:
                ordered_date = timezone.now()
                order = FinalCart.objects.create(
                    user=request.user, ordered_date=ordered_date, sub_total=total_price, expires=False)
                order.cart.add(order_item)
                return Response({'item':  serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'msg': 'auth-err'}, status=status.HTTP_400_BAD_REQUEST)


class ItemDeleteFromCart(views.APIView):
    def post(self, request, *args, **kwargs):
        item = request.data.get('id', None)
        quantity = request.data.get('quantity', None)
        user = request.user
        if item is None:
            return Response({'msg': 'Something went wrong'}, status=status.HTTP_404_NOT_FOUND)
        item_qs = get_object_or_404(Cart, id=item)
        if item_qs:
            user_qs = Cart.objects.filter(id=item).first()
            price_to_reduce = 0
            quantity = user_qs.quantity

            price_to_reduce = quantity * user_qs.product.discount_price

            if user_qs.user == request.user:
                user_qs.delete()
                order_qs = FinalCart.objects.filter(
                    user=user, expires=False).first()
                order_qs.sub_total = order_qs.sub_total - price_to_reduce
                if order_qs.sub_total <= 1000:
                    order_qs.free_delivery = False
                    order_qs.save()
                order_qs.save()
            else:
                return Response({'msg': 'Invalid Token'})
            return Response({'msg': 'item removed from cart', 'id': item_qs.id}, status=status.HTTP_200_OK)
        return Response({'msg': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)


class PlusQuantity(views.APIView):
    def post(self, request, *args, **kwargs):
        cart = request.data.get('id', None)
        user = request.user
        if user.is_authenticated:
            cart_qs = get_object_or_404(Cart, id=cart)
            print(cart_qs.quantity)
            cart_qs.quantity += 1
            cart_qs.save()
            final_cart = FinalCart.objects.filter(
                user=user, expires=False).first()
            final_cart.sub_total += cart_qs.product.discount_price
            print(final_cart)
            final_cart.save()
            return Response({'msg': 'cart quantity updated', 'qty': cart_qs.quantity})


class MinusQuantity(views.APIView):
    def post(self, request, *args, **kwargs):
        cart = request.data.get('id', None)
        user = request.user
        if user.is_authenticated:
            cart_qs = get_object_or_404(Cart, id=cart)
            print(cart_qs.quantity)
            cart_qs.quantity -= 1
            cart_qs.save()
            final_cart = FinalCart.objects.filter(
                user=user, expires=False).first()
            final_cart.sub_total -= cart_qs.product.discount_price
            print(final_cart)
            final_cart.save()
            return Response({'msg': 'cart quantity updated', 'qty': cart_qs.quantity})


class FinalCartPricingInfo(views.APIView):
    def get(self, request, *args, **kwargs):
        user = request.user
        if user.is_authenticated:
            order_qs = FinalCart.objects.filter(
                user=user, expires=False).first()
            if order_qs:
                coupon_qs = order_qs.coupon
                print(coupon_qs)
                savings = 0

                if coupon_qs is not None:
                    discount_amount = Coupon.objects.get(
                        code__iexact=coupon_qs)
                    if discount_amount:
                        savings = savings + discount_amount.discount_amount
                cart_total = 0
                actual_total = 0
                if order_qs.free_delivery:
                    print('free_delivery')
                    savings = savings + 60

                cart_qs = Cart.objects.filter(user=user, expires=False)

                for product in cart_qs:
                    actual_total += product.product.price * product.quantity
                if actual_total != 0:
                    savings = actual_total - order_qs.get_total_product_price()
                order_qs = order_qs
                return Response({'cart_total': order_qs.get_total_product_price(), 'savings': savings, 'actual_total': actual_total}, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_200_OK)

        else:
            return Response({'msg': 'auth-err'})
