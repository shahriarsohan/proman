from django.urls import path

from .views import MakeAddressApiView, GetUserAddress, AddressEditView

urlpatterns = [
    path('list', GetUserAddress.as_view()),
    path('create', MakeAddressApiView.as_view()),
    path('edit/<id>', AddressEditView.as_view())
]
