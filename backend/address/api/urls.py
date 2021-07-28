from django.urls import path

from .views import MakeAddressApiView, GetUserAddress, AddressEditView

urlpatterns = [
    path('user-address', GetUserAddress.as_view()),
    path('create', MakeAddressApiView.as_view()),
    path('edit/<id>', AddressEditView.as_view())
]
