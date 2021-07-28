from orders.models import Order
from address.models import Address
from rest_framework import generics, views, permissions, status, response


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
        return response.Response({'msg': "Shipping charge updated successfully"}, status=status.HTTP_200_OK)
