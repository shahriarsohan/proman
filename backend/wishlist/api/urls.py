from django.urls import path

from .views import WishListApiView, CreateWishListApiView

urlpatterns = [
    path('list', WishListApiView.as_view()),
    path('add', CreateWishListApiView.as_view()),
]
