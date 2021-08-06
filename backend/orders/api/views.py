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
        order_qs = Order.objects.filter(user=user, ordered=False).first()
        if order_qs:
            order_sub_total = order_qs.sub_total
            shipping_charge = order_qs.shipping
            total_amount = order_sub_total + order_qs.shipping

            return response.Response({"order_sub_total": order_sub_total, "shipping_charge": shipping_charge, "total_amount": total_amount}, status=status.HTTP_200_OK)
        else:
            return response.Response(status=status.HTTP_404_NOT_FOUND)
