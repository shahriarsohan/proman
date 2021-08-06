from sslcommerz_lib import SSLCOMMERZ
from .serializers import CartSerailizers
from orders.models import Order
from cart.models import Cart, RecentlyView
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


class UserCartListApiView(generics.ListAPIView):
    serializer_class = CartSerailizers
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset = Cart.objects.filter(
            user=user, expires=False).order_by('-timestamp')
        return queryset


class CartDeleteApi(generics.DestroyAPIView):
    serializer_class = CartSerailizers
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request, id, *args, **kwargs):
        user = request.user
        qs = Cart.objects.get(id=id, user=user).delete()
        return response.Response(status=status.HTTP_200_OK)


class GET_CART_PRICING_DETAILS(views.APIView):
    def get(self, request, *args, **kwargs):
        user = request.user
        order_qs = Order.objects.filter(user=user, ordered=False).first()
        coupon_qs = order_qs.coupon
        savings = 0
        print(coupon_qs)

        if coupon_qs:
            discount_amount = Coupon.objects.get(code__iexact=coupon_qs)
            if discount_amount:
                savings = savings + discount_amount.discount_amount
        cart_total = 0

        if order_qs.free_delivery:
            print('free_delivery')
            savings = savings + 60

        cart_qs = Cart.objects.filter(user=user, expires=False)
        for product in cart_qs:
            total = product.product.price
            cart_total += total
            if product.product.discount_price:
                save = product.product.price - product.product.discount_price
                savings += save
        print(order_qs)
        order_qs = order_qs

        return Response({'cart_total': cart_total, 'order_total': order_qs.get_total_product_price(), 'savings': savings}, status=status.HTTP_200_OK)


class AddProductToCart(views.APIView):

    def post(self, request, *args, **kwargs):
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
        if item.buy_one_get_one == True:
            print('quantity 1')
            bogo_cart = Cart.objects.filter(
                user=request.user, buy_one_get_one=True)
            length = 1 + len(bogo_cart)
            print('length', length)
            if length == 2:
                print('length / 2', length / 2)
                print('blaaaaaaaaaaa')
                total_price = 0
            elif length == 4:
                print('length / 2', length / 2)
                print('blaaaaaaaaaaa')
                total_price = 0
            elif length == 6:
                print('length / 2', length / 2)
                print('blaaaaaaaaaaa')
                total_price = 0
            elif length == 8:
                print('length / 2', length / 2)
                print('blaaaaaaaaaaa')
                total_price = 0
            elif length == 10:
                print('length / 2', length / 2)
                print('blaaaaaaaaaaa')
                total_price = 0
            elif length == 12:
                print('length / 2', length / 2)
                print('blaaaaaaaaaaa')
                total_price = 0
            elif length == 14:
                print('length / 2', length / 2)
                print('blaaaaaaaaaaa')
                total_price = 0
            else:
                total_price = item.discount_price

        print('total_price', total_price)
        order_item = Cart.objects.create(
            product=item, user=request.user, quantity=quantity, size=size, expires=False, buy_one_get_one=item.buy_one_get_one)
        serializer = CartSerailizers(order_item)
        order_item.save()
        order_qs = Order.objects.filter(user=request.user, ordered=False)
        if order_qs.exists():
            order = order_qs[0]
            if not order.products.filter(product__id=order_item.id).exists():
                order.products.add(order_item)
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
            order = Order.objects.create(
                user=request.user, ordered_date=ordered_date, sub_total=total_price)
            order.products.add(order_item)
            return Response({'item':  serializer.data}, status=status.HTTP_200_OK)


class ItemDeleteFromCart(views.APIView):
    def post(self, request, *args, **kwargs):
        item = request.data.get('id', None)
        quantity = request.data.get('quantity', None)
        user = request.user
        print(item)

        if item is None:
            return Response({'msg': 'Something went wrong'}, status=status.HTTP_404_NOT_FOUND)
        item_qs = get_object_or_404(Cart, id=item)
        if item_qs:
            user_qs = Cart.objects.filter(id=item).first()
            price_to_reduce = 0
            quantity = user_qs.quantity
            if item_qs.buy_one_get_one:
                bogo_cart = Cart.objects.filter(
                    user=request.user, buy_one_get_one=True
                )
                length = 1 + len(bogo_cart)
                if length == 1:
                    print('length / 2', length / 2)
                    print('blaaaaaaaaaaa')
                    price_to_reduce = 0
                elif length == 3:
                    print('length / 2', length / 2)
                    print('blaaaaaaaaaaa')
                    price_to_reduce = 0
                elif length == 5:
                    print('length / 2', length / 2)
                    print('blaaaaaaaaaaa')
                    price_to_reduce = 0
                elif length == 7:
                    print('length / 2', length / 2)
                    print('blaaaaaaaaaaa')
                    price_to_reduce = 0
                elif length == 9:
                    print('length / 2', length / 2)
                    print('blaaaaaaaaaaa')
                    price_to_reduce = 0
                elif length == 11:
                    print('length / 2', length / 2)
                    print('blaaaaaaaaaaa')
                    price_to_reduce = 0
                elif length == 13:
                    print('length / 2', length / 2)
                    print('blaaaaaaaaaaa')
                    price_to_reduce = 0
                else:
                    price_to_reduce = quantity * user_qs.product.discount_price
            else:
                price_to_reduce = quantity * user_qs.product.discount_price

            if user_qs.user == request.user:
                user_qs.delete()
                order_qs = Order.objects.filter(
                    user=user, ordered=False).first()
                order_qs.sub_total = order_qs.sub_total - price_to_reduce
                if order_qs.sub_total <= 1000:
                    order_qs.free_delivery = False
                    order_qs.save()
                order_qs.save()
            else:
                return Response({'msg': 'Invalid Token'})
            return Response({'msg': 'item removed from cart'}, status=status.HTTP_200_OK)
        print('nothing')
        return Response({'msg': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)


class PlusQuantity(views.APIView):
    def post(self, request, *args, **kwargs):
        id = request.data.get('id', None)
        if id is not None:
            cart_qs = get_object_or_404(Cart, id=id)
            if cart_qs.exists():
                cart = cart_qs.quantity + 1
                cart.save()
                return Response({'msg': 'cart quantity updated'}, status=status.HTTP_200_OK)


class PaymentView(views.APIView):
    def get(self, request, *args, **kwargs):
        order_qs = Order.objects.get(user=request.user, ordered=False)
        address_qs = Address.objects.get(user=request.user)
        if address_qs:
            serializer = AddressSerializer(address_qs)
            return response.Response({'address_qs': serializer.data, "sub_total_amount": order_qs.get_total_product_price(), "total_amount": order_qs.get_total()})
        return response.Response({"sub_total_amount": order_qs.get_total_product_price(), "total_amount": order_qs.get_total()})


class ApplyCoupon(views.APIView):
    def post(self, request, *args, **kwargs):
        coupon = request.data.get('coupon_code')


class CreateRecentActivity(views.APIView):
    def post(self, request, *args, **kwargs):
        user = self.request.user.user
        slug = request.data.get('slug', None)
        if slug is not None:
            item_qs = get_object_or_404(Products, slug=slug)
            activity = RecentlyView.objects.create(
                user=user,
                product=item_qs
            )
            return response.Response(status=status.HTTP_200_OK)
        else:
            return response.Response(status=status.HTTP_400_BAD_REQUEST)


class OrdercofirmApiView(views.APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        order_qs = Order.objects.filter(user=user, ordered=False).first()
        print(order_qs)
        payment_method = request.data.get('payment_method', None)
        # address_qs = Address.objects.filter(user=request.user).first()
        # if not address_qs:
        #     return response.Response({'error': 'Please Enter A valid Address'}, status=status.HTTP_400_BAD_REQUEST)
        cart_qs = Cart.objects.filter(user=request.user)
        if cart_qs:
            for q in cart_qs:
                q.expires = True
                q.save()

        if payment_method is not None:
            print('ok')
            order_qs.ordered = True
            order_qs.payment_method = payment_method
            # order_qs.address = address_qs
            order_qs.save()
        print(order_qs)
        return response.Response(status=status.HTTP_200_OK)


class SslCommerzTest(views.APIView):

    def post(self, request, *args, **kwargs):

        user = request.user
        print(user)
        order_qs = Order.objects.filter(user=user, ordered=False).first()

        order_total = order_qs.total
        print(order_total)

        settings = {'store_id': 'cosme607fe49547c5b',
                    'store_pass': 'cosme607fe49547c5b@ssl', 'issandbox': True}
        sslcz = SSLCOMMERZ(settings)
        post_body = {}
        post_body['total_amount'] = order_total
        post_body['currency'] = "BDT"
        post_body['tran_id'] = "12345"
        post_body['success_url'] = "https://www.youtube.com/results?search_query=sslcommerz+python"
        post_body['fail_url'] = "your fail url"
        post_body['cancel_url'] = "your cancel url"
        post_body['emi_option'] = 0
        post_body['cus_name'] = "test"
        post_body['cus_email'] = "test@test.com"
        post_body['cus_phone'] = "01700000000"
        post_body['cus_add1'] = "customer address"
        post_body['cus_city'] = "Dhaka"
        post_body['cus_country'] = "Bangladesh"
        post_body['shipping_method'] = "NO"
        post_body['multi_card_name'] = ""
        post_body['num_of_item'] = 1
        post_body['product_name'] = "Test"
        post_body['product_category'] = "Test Category"
        post_body['product_profile'] = "general"
        print(post_body)
        response = sslcz.createSession(post_body)
        print(response)
        return Response(response)


class SslCommerzTestIPN(views.APIView):
    def post(self, request, *args, **kwargs):

        settings = {'store_id': 'test_testemi',
                    'store_pass': 'test_testemi@ssl', 'issandbox': True}

        sslcz = SSLCOMMERZ(settings)
        post_body = {}
        post_body['tran_id'] = '5E121A0D01F92'
        post_body['val_id'] = '200105225826116qFnATY9sHIwo'
        post_body['amount'] = "10.00"
        post_body['card_type'] = "VISA-Dutch Bangla"
        post_body['store_amount'] = "9.75"
        post_body['card_no'] = "418117XXXXXX6675"
        post_body['bank_tran_id'] = "200105225825DBgSoRGLvczhFjj"
        post_body['status'] = "VALID"
        post_body['tran_date'] = "2020-01-05 22:58:21"
        post_body['currency'] = "BDT"
        post_body['card_issuer'] = "TRUST BANK, LTD."
        post_body['card_brand'] = "VISA"
        post_body['card_issuer_country'] = "Bangladesh"
        post_body['card_issuer_country_code'] = "BD"
        post_body['store_id'] = "test_testemi"
        post_body['verify_sign'] = "d42fab70ae0bcbda5280e7baffef60b0"
        post_body['verify_key'] = "amount,bank_tran_id,base_fair,card_brand,card_issuer,card_issuer_country,card_issuer_country_code,card_no,card_type,currency,currency_amount,currency_rate,currency_type,risk_level,risk_title,status,store_amount,store_id,tran_date,tran_id,val_id,value_a,value_b,value_c,value_d"
        post_body['verify_sign_sha2'] = "02c0417ff467c109006382d56eedccecd68382e47245266e7b47abbb3d43976e"
        post_body['currency_type'] = "BDT"
        post_body['currency_amount'] = "10.00"
        post_body['currency_rate'] = "1.0000"
        post_body['base_fair'] = "0.00"
        post_body['value_a'] = ""
        post_body['value_b'] = ""
        post_body['value_c'] = ""
        post_body['value_d'] = ""
        post_body['risk_level'] = "0"
        post_body['risk_title'] = "Safe"
        if sslcz.hash_validate_ipn(post_body):
            response = sslcz.validationTransactionOrder(post_body['val_id'])
            print(response)
        else:
            print("Hash validation failed")


class GetStatus(views.APIView):
    def get(self, request, *args, **kwargs):
        settings = {'store_id': 'cosme607fe49547c5b',
                    'store_pass': 'cosme607fe49547c5b@ssl', 'issandbox': True}
        sslcz = SSLCOMMERZ(settings)

        sessionkey = 'F5841C5F25BAD5015ED7E863495A1D8F'
        response = sslcz.transaction_query_session(sessionkey)
        print(response)
        return Response(response)


class GetInfo(views.APIView):
    def post(self, *args, **kwargs):
        info = self.request.data
        print(info)
        return Response(info)
