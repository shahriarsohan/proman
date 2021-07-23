from django.urls import path

from .views import ProductsListApiView, ProductsDetailsApiView, GetTrendingProducts, GetBestSellingProducts, FeaturedProducts, ProductsInfiniteScrollView, GetProductsBasedOnQuery

urlpatterns = [
    path('list', ProductsListApiView.as_view()),
    path('list-infinite/', ProductsInfiniteScrollView.as_view()),
    path('trending', GetTrendingProducts.as_view()),
    path('best-selling', GetBestSellingProducts.as_view()),
    path('featured', FeaturedProducts.as_view()),
    path('details/<slug>', ProductsDetailsApiView.as_view()),
    path('product-filter/', GetProductsBasedOnQuery.as_view())
]
