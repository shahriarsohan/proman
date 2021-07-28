from django.urls import path
from .views import (
    UserCartListApiView,
    AddProductToCart,
    GET_CART_PRICING_DETAILS,
    SslCommerzTest,
    SslCommerzTestIPN,
    GetStatus,
    GetInfo,
    PaymentView,
    CartDeleteApi,
    OrdercofirmApiView,
    ItemDeleteFromCart,
    CreateRecentActivity,
    PlusQuantity
)

urlpatterns = [
    path('user-cart', UserCartListApiView.as_view()),
    path('add-to-cart', AddProductToCart.as_view()),
    path('cart-pricing-details', GET_CART_PRICING_DETAILS.as_view()),
    path('item-delete-from-cart', ItemDeleteFromCart.as_view()),
    path('create-recent-activity', ItemDeleteFromCart.as_view()),
    path('delete-from-cart/<id>', CartDeleteApi.as_view()),
    path('payment', PaymentView.as_view()),
    path('order-confirm', OrdercofirmApiView.as_view()),
    path('test', SslCommerzTest.as_view()),
    path('test-ipn', SslCommerzTestIPN.as_view()),
    path('status', GetStatus.as_view()),
    path('info', GetInfo.as_view()),

    path('plus-quantity', PlusQuantity.as_view())

]
