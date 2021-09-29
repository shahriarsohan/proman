from .views import (
    CreateOrderApiView,
    GetTotalPricing,
    GetUserOrder,
    SavePricingDetails,
    SaveShippingCharge,
    AssosiateOrderWithOrder,
    UpdateDeliveryCharge,
    UpdateTotal,
    SslCommerzTest,
    OrdercofirmApiView,
    SslCommerzTestIPN,
    OnlinePaymentCartExpires,
    TrackOrder
)
from django.urls import path


urlpatterns = [
    path('create-new-order', CreateOrderApiView.as_view()),
    path('pricing-details', SavePricingDetails.as_view()),
    path('update-shipping', SaveShippingCharge.as_view()),
    path('assosiate-to-order', AssosiateOrderWithOrder.as_view()),
    path('update-shipping-charge', UpdateDeliveryCharge.as_view()),
    path('update-order-total', UpdateTotal.as_view()),
    path('order-pricing-details', GetTotalPricing.as_view()),
    path('ssl-payment', SslCommerzTest.as_view()),
    path('order-confirm', OrdercofirmApiView.as_view()),
    path('user-order', GetUserOrder.as_view()),
    path('user-track-order', TrackOrder.as_view()),
    path('ipn-confirm-order', SslCommerzTestIPN.as_view()),
    path('online-payment-order-confirm', OnlinePaymentCartExpires.as_view())
]
