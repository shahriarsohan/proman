
import string
import random
from orders.api.serializers import OrderSerailizers
from django.utils import timezone
from orders.models import Order, PaymentInfo
from address.models import Address
from rest_framework import generics, views, permissions, status, response
from rest_framework.response import Response
from cart.models import Cart, FinalCart
from sslcommerz_lib import SSLCOMMERZ
from django.shortcuts import get_object_or_404

from django.contrib.auth import get_user_model

User = get_user_model()


class GetUserOrder(views.APIView):
    def get(self, request, *args, **kwargs):
        qs = Order.objects.filter(user=request.user)
        print(qs)
        if qs:
            serializer = OrderSerailizers(qs, many=True)
            print(serializer)
            return Response(serializer.data)
        else:
            return Response({'msg': 'something went wrong'})


class TrackOrder(views.APIView):
    def post(self, request, *args, **kwargs):
        order_id = request.data.get('order_id', None)
        print('order_iddddddddddddddddd', order_id)
        if order_id:
            qs = get_object_or_404(Order, order_id=order_id)
            if qs:
                serializer = OrderSerailizers(qs)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({'msg': 'Order Not Found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'msg': 'Please provide a tracker id'}, status=status.HTTP_404_NOT_FOUND)


class CreateOrderApiView(views.APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        cart_qs = FinalCart.objects.filter(
            user=user, expires=False
        ).first()
        if cart_qs:
            ordered_date = timezone.now()
            order_qs = Order.objects.filter(
                user=user,
                ordered=False,
                products__id=cart_qs.id
            ).first()
            address_qs = Address.objects.filter(
                user=user,
            )
            if order_qs:
                order_qs.sub_total = cart_qs.sub_total
                order_qs.save()
                return response.Response(status=status.HTTP_200_OK)
            else:
                new_order = Order.objects.create(
                    user=user,
                    ordered_date=ordered_date,
                    products=cart_qs,
                    order_status='created',
                    sub_total=cart_qs.sub_total,
                )
                return response.Response(status=status.HTTP_200_OK)
        else:
            return Response({'msg': 'no active cart found'}, status=status.HTTP_400_BAD_REQUEST)


class SavePricingDetails(views.APIView):
    def post(self, *args, **kwargs):
        sub_total = self.request.data.get('total_amount', None)

        print('sub_total', sub_total)
        order_qs = Order.objects.filter(
            user=self.request.user, ordered=False).first()
        order_qs.sub_total = sub_total
        order_qs.save()
        return response.Response(status=status.HTTP_200_OK)


class SaveShippingCharge(views.APIView):
    def post(self, request, *args, **kwargs):
        user = self.request.user
        region = request.data.get('region', None)
        order_qs = Order.objects.filter(user=user, ordered=False).first()
        address_qs = Address.objects.get(user=user)
        if address_qs:
            order_qs.address = address_qs
            order_qs.save()
        if region is not None:
            if order_qs:
                if region == 'dhaka':
                    order_qs.shipping = 60
                    order_qs.total = order_qs.sub_total + 60
                    order_qs.save()
                elif region == 'rajshahi':
                    order_qs.shipping = 150
                    order_qs.total = order_qs.sub_total + 150
                    order_qs.save()
                elif region == 'rangpur':
                    order_qs.shipping = 100
                    order_qs.total = order_qs.sub_total + 100
                    order_qs.save()
                elif region == 'chattogram':
                    order_qs.shipping = 100
                    order_qs.total = order_qs.sub_total + 100
                    order_qs.save()
                elif region == 'khulna':
                    order_qs.shipping = 100
                    order_qs.total = order_qs.sub_total + 100
                    order_qs.save()
                elif region == 'shylhet':
                    order_qs.shipping = 100
                    order_qs.total = order_qs.sub_total + 100
                    order_qs.save()
                elif region == 'barishal':
                    order_qs.shipping = 100
                    order_qs.total = order_qs.sub_total + 100
                    order_qs.save()
                else:
                    order_qs.shipping = 60
                    order_qs.save()

        return response.Response({'msg': "Shipping charge updated successfully"}, status=status.HTTP_200_OK)


class AssosiateOrderWithOrder(views.APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        order_qs = Order.objects.filter(user=user, ordered=False).first()
        address_qs = Address.objects.get(user=user)
        print(address_qs)
        if order_qs:
            if address_qs:
                order_qs.address = address_qs
                order_qs.save()
                return response.Response({"msg": "Address associated with the order"}, status=status.HTTP_200_OK)
        return response.Response({"msg": "Something went wrong"}, status=status.HTTP_400_BAD_REQUEST)


class UpdateDeliveryCharge(views.APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        order_qs = Order.objects.filter(user=user, ordered=False).first()

        address_qs = Address.objects.get(user=user)
        if not order_qs.free_delivery:
            if order_qs:
                if address_qs:
                    region = address_qs.region
                    print(region)
                    if region is not None:
                        if region == 'dhaka':
                            order_qs.shipping = 60
                            order_qs.save()
                        elif region == 'rajshahi':
                            order_qs.shipping = 100
                            order_qs.save()
                        elif region == 'rangpur':
                            order_qs.shipping = 100
                            order_qs.save()
                        elif region == 'chattogram':
                            order_qs.shipping = 100
                            order_qs.save()
                        elif region == 'khulna':
                            order_qs.shipping = 100
                            order_qs.save()
                        elif region == 'shylhet':
                            order_qs.shipping = 100
                            order_qs.save()
                        elif region == 'barishal':
                            order_qs.shipping = 100
                            order_qs.save()
                        else:
                            order_qs.shipping = 60
                            order_qs.save()
                    return response.Response({"msg": "Shipping charge updated"}, status=status.HTTP_200_OK)
        if order_qs.free_delivery:
            order_qs.shipping = 0
            order_qs.save()
        return response.Response({"msg": "Something went wrong"})


class UpdateTotal(views.APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        order_qs = Order.objects.filter(user=user, ordered=False).first()
        if order_qs:
            print(order_qs.sub_total)
            total = order_qs.sub_total + order_qs.shipping
            print('total', total)
            order_qs.total = total
            order_qs.save()
            return response.Response({"msg": "Order total updated"}, status=status.HTTP_200_OK)
        else:
            return Response({'msg': 'no active cart found'}, status=status.HTTP_400_BAD_REQUEST)


class GetTotalPricing(views.APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        if(user.is_authenticated):
            order_qs = Order.objects.filter(user=user, ordered=False).first()
            print(order_qs)
            if order_qs:
                order_sub_total = order_qs.sub_total
                shipping_charge = order_qs.shipping
                total_amount = order_sub_total + order_qs.shipping

                return response.Response({"order_sub_total": order_sub_total, "shipping_charge": shipping_charge, "total_amount": total_amount}, status=status.HTTP_200_OK)
            else:
                return response.Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return response.Response({'msg': 'Authentication error'}, status=status.HTTP_200_OK)


class OrdercofirmApiView(views.APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        print('userrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', user)
        order_qs = Order.objects.filter(user=user, ordered=False).first()
        print('order_qs', order_qs)
        payment_method = request.data.get('payment_method', None)
        # address_qs = Address.objects.filter(user=request.user).first()
        # if not address_qs:
        #     return response.Response({'error': 'Please Enter A valid Address'}, status=status.HTTP_400_BAD_REQUEST)
        final_cart_qs = FinalCart.objects.filter(
            user=request.user, expires=False).first()
        cart_qs = Cart.objects.filter(user=request.user, expires=False)
        print('cart_qs', cart_qs)
        print('final_cart_qs', final_cart_qs)
        if final_cart_qs:
            final_cart_qs.expires = True
            final_cart_qs.save()

        if cart_qs:
            print('cart_qs', cart_qs)
            for q in cart_qs:
                q.expires = True
                q.save()

        print('ok')
        order_qs.ordered = True
        order_qs.payment_method = payment_method
        print('ordered', order_qs.ordered)
        # order_qs.address = address_qs
        order_qs.save()

        print(order_qs)
        serializer = OrderSerailizers(order_qs)
        return response.Response({'order_qs': serializer.data}, status=status.HTTP_200_OK)


class SslCommerzTest(views.APIView):

    def post(self, request, *args, **kwargs):

        user = request.user
        print(user)
        order_qs = Order.objects.filter(user=user, ordered=False).first()

        order_total = order_qs.total
        print(order_total)

        settings = {'store_id': 'proma6135dc6bc8c18',
                    'store_pass': 'proma6135dc6bc8c18@ssl', 'issandbox': True}
        sslcz = SSLCOMMERZ(settings)
        post_body = {}
        # post_body['user'] = user
        post_body['total_amount'] = order_total
        post_body['currency'] = "BDT"
        post_body['tran_id'] = unique_trangection_id_generator()
        post_body['success_url'] = 'https://proman.clothing/user/success'
        post_body['fail_url'] = 'https://proman.clothing/user/failure'
        post_body['cancel_url'] = 'https://proman.clothing/user/cancel'
        post_body['emi_option'] = 0
        post_body['cus_name'] = 'sohan'
        post_body['cus_email'] = 'email@rmail.com'
        post_body['cus_phone'] = '8888'
        post_body['cus_add1'] = 'request.data'
        post_body['cus_city'] = 'request.data'
        post_body['cus_country'] = 'Bangladesh'
        post_body['shipping_method'] = "NO"
        post_body['multi_card_name'] = ""
        post_body['num_of_item'] = 1
        post_body['product_name'] = "Test"
        post_body['product_category'] = "Test Category"
        post_body['product_profile'] = "general"
        post_body['value_b'] = order_qs.id
        print(post_body)
        response = sslcz.createSession(post_body)
        # print(response)
        return Response(response)


class OnlinePaymentCartExpires(views.APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        final_cart_qs = FinalCart.objects.filter(user=user).first()
        cart_qs = Cart.objects.filter(user=user, expires=False)
        if final_cart_qs:
            final_cart_qs.expires = True
            final_cart_qs.save()

        if cart_qs:
            for q in cart_qs:
                q.expires = True
                q.save()
        return Response(status=status.HTTP_200_OK)


def unique_trangection_id_generator(size=10, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


class SslCommerzTestIPN(views.APIView):
    def post(self, request, *args, **kwargs):
        data = self.request.POST
        print('daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaattttttttta', data)

        PaymentInfo.objects.create(
            order_number=data['value_b'],
            tran_id=data['tran_id'],
            val_id=data['val_id'],
            amount=data['amount'],
            card_type=data['card_type'],
            card_no=data['card_no'],
            store_amount=data['store_amount'],
            bank_tran_id=data['bank_tran_id'],
            status=data['status'],
            tran_date=data['tran_date'],
            currency=data['currency'],
            card_issuer=data['card_issuer'],
            card_brand=data['card_brand'],
            card_issuer_country=data['card_issuer_country'],
            card_issuer_country_code=data['card_issuer_country_code'],
            verify_sign=data['verify_sign'],
            verify_sign_sha2=data['verify_sign_sha2'],
            currency_rate=data['currency_rate'],
            risk_title=data['risk_title'],
            risk_level=data['risk_level'],
        )

        return Response(data)
