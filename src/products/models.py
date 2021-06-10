from django.db import models
from django.db.models.signals import pre_save

from cosmetica.utils import unique_slug_generator

CATEGORY_CHOICES = (
    ('hair_care', 'hair_care'),
    ('skin_care', 'skin_care'),
    ('hair_oil', 'hair_oil'),
    ('face_oil', 'face_oil'),
)


class ProductsManager(models.Manager):
    pass


class Products(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(blank=True, null=True, unique=True)

    category = models.CharField(
        max_length=200, blank=True, null=True, choices=CATEGORY_CHOICES)
    thumbnail = models.ImageField(blank=True, null=True, upload_to="thumbnail")
    short_desc = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    manufacturer = models.CharField(max_length=200, blank=True, null=True)
    country_made = models.CharField(max_length=200, blank=True, null=True)
    benifits = models.CharField(max_length=200, blank=True, null=True)

    price = models.PositiveIntegerField(null=True)
    discount_price = models.PositiveIntegerField(null=True)

    timestamp = models.DateTimeField(auto_now_add=True)

    best_selling = models.BooleanField(default=False)
    featured = models.BooleanField(default=False)
    trending = models.BooleanField(default=False)

    quantity_in_stock = models.PositiveIntegerField(null=True, blank=True)
    out_of_stock = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return self.name


class ProductImages(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    image = models.ImageField(
        upload_to='product-details', blank=True, null=True)

    def __str__(self):
        return self.product.name


def product_unique_slug_generator(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(product_unique_slug_generator, sender=Products)
