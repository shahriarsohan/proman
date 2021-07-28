from .views import GetTotalPricing, SavePricingDetails, SaveShippingCharge, AssosiateOrderWithOrder, UpdateDeliveryCharge, UpdateTotal
from django.urls import path


urlpatterns = [
    # path('pricing-details', SavePricingDetails.as_view()),
    path('update-shipping', SaveShippingCharge.as_view()),
    path('assosiate-to-order', AssosiateOrderWithOrder.as_view()),
    path('update-shipping-charge', UpdateDeliveryCharge.as_view()),
    path('update-order-total', UpdateTotal.as_view()),
    path('order-pricing-details', GetTotalPricing.as_view())
]
