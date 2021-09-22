from django.urls import path

from .views import WishListApiView, CreateWishListApiView, DestroyWishList

urlpatterns = [
    path('list', WishListApiView.as_view()),
    path('add', CreateWishListApiView.as_view()),
    path('delete', DestroyWishList.as_view()),
]
