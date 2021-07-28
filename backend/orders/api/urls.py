from .views import SavePricingDetails, SaveShippingCharge
from django.urls import path


urlpatterns = [
    path('pricing-details', SavePricingDetails.as_view()),
    path('update-shipping', SaveShippingCharge.as_view())
]
