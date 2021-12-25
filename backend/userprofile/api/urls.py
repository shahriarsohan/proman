from django.urls import path
from .views import ProfileEditView, UserWalletAmount

urlpatterns = [
    path('details', ProfileEditView.as_view()),
    path('pro-credit', UserWalletAmount.as_view())
]
