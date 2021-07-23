from rest_framework import views
from rest_framework import status
from rest_framework import generics
from rest_framework.response import Response
from django.utils.decorators import method_decorator  # NEW
from django.views.decorators.cache import cache_page  # NEW
from django.shortcuts import get_object_or_404
from rest_framework.serializers import Serializer

from products.models import Products, ProductImages
from .serializers import ProductsSerializer, ProductImageSerializer


class ProductsListApiView(views.APIView):
    # @method_decorator(cache_page(60*60*2))
    def get(self, request, *args, **kwargs):
        hair_care_qs = Products.objects.filter(category="hair_care")
        skin_care_qs = Products.objects.filter(category="skin_care")
        hair_oil_qs = Products.objects.filter(category="hair_oil")
        face_oil_qs = Products.objects.filter(category="face_oil")
        hair_care_qs_serializer = ProductsSerializer(hair_care_qs, many=True)
        skin_care_qs_serializer = ProductsSerializer(skin_care_qs, many=True)
        hair_oil_qs_serializer = ProductsSerializer(hair_oil_qs, many=True)
        face_oil_qs_serializer = ProductsSerializer(face_oil_qs, many=True)
        return Response({
            'hair_care_qs': hair_care_qs_serializer.data,
            'skin_care_qs': skin_care_qs_serializer.data,
            'face_oil_qs': face_oil_qs_serializer.data,
            'hair_oil_qs': hair_oil_qs_serializer.data
        }, status=status.HTTP_200_OK)


class GetTrendingProducts(views.APIView):
    # @method_decorator(cache_page(60*60*2))
    def get(self, request, *args, **kwargs):
        trending_queryset = Products.objects.filter(
            trending=True).order_by('-timestamp')
        print(trending_queryset)
        trending_queryset_serializer = ProductsSerializer(
            trending_queryset, many=True)
        return Response({'trending_qs': trending_queryset_serializer.data}, status=status.HTTP_200_OK)


class GetBestSellingProducts(views.APIView):
    def get(self, request, *args, **kwargs):
        best_selling_queryset = Products.objects.filter(
            best_selling=True).order_by('-timestamp')
        best_selling_queryset_serializer = ProductsSerializer(
            best_selling_queryset, many=True)
        return Response({'bestSelling_qs': best_selling_queryset_serializer.data}, status=status.HTTP_200_OK)


class FeaturedProducts(views.APIView):
    def get(self, request, *args, **kwargs):
        featured_queryset = Products.objects.filter(
            featured=True).order_by('-timestamp')
        featured_queryset_serializer = ProductsSerializer(
            featured_queryset, many=True)
        return Response({'featured_qs': featured_queryset_serializer.data}, status=status.HTTP_200_OK)


class ProductsDetailsApiView(views.APIView):
    def get(self, request, *args, **kwargs):
        slug = self.kwargs['slug']
        queryset = Products.objects.all()
        product = get_object_or_404(queryset, slug=slug)
        image_associated_with_image = ProductImages.objects.filter(
            product=product)
        serializer = ProductsSerializer(product)
        images = ProductImageSerializer(image_associated_with_image, many=True)

        return Response({'products': serializer.data, 'images': images.data}, status=status.HTTP_200_OK)


# infinte scroll
def is_there_more(request):
    offset = request.GET.get('offset')
    if int(offset) > Products.objects.all().count():
        return False
    return True


def infinte_scroll(request):
    limit = request.GET.get('limit')
    offset = request.GET.get('offset')
    return Products.objects.all()[int(offset): int(offset) + int(limit)]


class ProductsInfiniteScrollView(generics.ListAPIView):
    serializer_class = ProductsSerializer

    def get_queryset(self, **kwargs):
        qs = infinte_scroll(self.request)
        return qs

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        serializer = ProductsSerializer(qs, many=True)
        return Response({
            'products': serializer.data,
            'hasMore': is_there_more(request)
        })


def infinte_scroll_query(request):
    limit = request.GET.get('limit')
    offset = request.GET.get('offset')
    query = request.query_params.get('query')
    filter_kwargs = {query: True}
    return Products.objects.filter(**filter_kwargs)[int(offset): int(offset) + int(limit)]


def is_there_more_query(request):
    offset = request.GET.get('offset')
    query = request.query_params.get('query')
    filter_kwargs = {query: True}
    if int(offset) > Products.objects.filter(**filter_kwargs).count():
        return False
    return True


class GetProductsBasedOnQuery(generics.ListAPIView):
    serializer_class = ProductsSerializer

    def get_queryset(self, **kwargs):
        qs = infinte_scroll_query(self.request)
        return qs

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        serializer = ProductsSerializer(qs, many=True)
        return Response({
            'products': serializer.data,
            'hasMore': is_there_more_query(request)
        })
