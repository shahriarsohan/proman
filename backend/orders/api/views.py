from django.utils import timezone
from orders.models import Order
from address.models import Address
from rest_framework import generics, views, permissions, status, response
from rest_framework.response import Response
from cart.models import Cart, FinalCart
from sslcommerz_lib import SSLCOMMERZ


class CreateOrderApiView(views.APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        cart_qs = FinalCart.objects.filter(
            user=user, expires=False
        ).first()
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
        if order_qs:
            if address_qs:
                order_qs.address = address_qs
                order_qs.save()
                return response.Response({"msg": "Address associated with the order"}, status=status.HTTP_200_OK)
        return response.Response({"msg": "Something went wrong"})


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
                            order_qs.shipping = 150
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


class GetTotalPricing(views.APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        if(user.is_authenticated):
            order_qs = Order.objects.filter(user=user, ordered=False).first()
            if order_qs:
                order_sub_total = order_qs.sub_total
                shipping_charge = order_qs.shipping
                total_amount = order_sub_total + order_qs.shipping

                return response.Response({"order_sub_total": order_sub_total, "shipping_charge": shipping_charge, "total_amount": total_amount}, status=status.HTTP_200_OK)
            else:
                return response.Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return response.Response({'msg': 'false'}, status=status.HTTP_200_OK)


class OrdercofirmApiView(views.APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        order_qs = Order.objects.filter(user=user, ordered=False).first()
        print(order_qs)
        payment_method = request.data.get('payment_method', None)
        # address_qs = Address.objects.filter(user=request.user).first()
        # if not address_qs:
        #     return response.Response({'error': 'Please Enter A valid Address'}, status=status.HTTP_400_BAD_REQUEST)
        final_cart_qs = FinalCart.objects.filter(user=request.user).first()
        cart_qs = Cart.objects.filter(user=request.user, expires=False)
        if final_cart_qs:
            final_cart_qs.expires = True
            final_cart_qs.save()

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
