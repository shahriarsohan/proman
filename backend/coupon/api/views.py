from django.utils import timezone

from rest_framework import views, response, status

from cart.models import FinalCart
from orders.models import Order
from coupon.models import Coupon

now = timezone.now()


class ValidateCoupon(views.APIView):
    def post(self, request, *args, **kwargs):
        user = request.user
        coupone_code = request.data.get('coupon', None)
        print('coupon', coupone_code)
        if coupone_code is None:
            return response.Response({'msg': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            coupon_qs = Coupon.objects.get(
                code=coupone_code, active=True, valid_from__lte=now, valid_to__gte=now)
            if coupon_qs:
                coupon_used_before = False
                order_qs = FinalCart.objects.filter(
                    user=user, expires=False).first()

                if order_qs.coupon == coupone_code:
                    coupon_used_before = True
                if coupon_used_before:
                    return response.Response({'msg': 'coupon_used_before'}, status=status.HTTP_400_BAD_REQUEST)
                apply_coupon = FinalCart.objects.filter(
                    user=user, expires=False).first()
                if apply_coupon:
                    print('workinmgggggggg')
                    apply_coupon.coupon = coupon_qs.code
                    apply_coupon.save()

                else:
                    pass
                print(order_qs)
            return response.Response({'msg': 'OK'}, status=status.HTTP_200_OK)
