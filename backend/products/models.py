from django.db import models
from django.db.models.signals import pre_save

from passwordless.utils import unique_slug_generator

CATEGORY_CHOICES = (
    ('Movie', 'Movie'),
    ('Game', 'Game'),
    ('Life', 'Life'),
    ('Sports', 'Sports'),
    ('Programming', 'Programming'),
    ('Trend', 'Trend'),
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
    discount_percentage = models.IntegerField(blank=True, null=True)
    price = models.PositiveIntegerField(null=True)
    discount_price = models.PositiveIntegerField(null=True)

    timestamp = models.DateTimeField(auto_now_add=True)

    best_selling = models.BooleanField(default=False)
    featured = models.BooleanField(default=False)
    trending = models.BooleanField(default=False)

    quantity_in_stock = models.PositiveIntegerField(null=True, blank=True)
    out_of_stock = models.BooleanField(default=False)
    few_left = models.BooleanField(default=False)

    # size
    s_size = models.BooleanField(default=True)
    m_size = models.BooleanField(default=True)
    l_size = models.BooleanField(default=True)
    xl_size = models.BooleanField(default=True)
    xxl_size = models.BooleanField(default=True)

    buy_one_get_one = models.BooleanField(default=False)

    product_delivery_time = models.IntegerField(default=2)
    combo_offer = models.BooleanField(default=False)
    combo_amount = models.PositiveIntegerField(default=500)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def __str__(self):
        return self.name


class DailyDeal(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    actual_price = models.IntegerField(null=True, blank=True)
    discount_price = models.IntegerField(null=True, blank=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField(blank=True, null=True)

    def __str__(self):
        return self.product.name


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


def discount_percentage_calculator(sender, instance, *args, **kwargs):
    if not instance.discount_percentage:
        actual_price = float(instance.price)
        discount_price = float(instance.discount_price)
        percentage = (1-discount_price / actual_price) * 100
        percentage_round = int(round(percentage))
        print('The discount (in percentage) is', percentage_round, '%')
        instance.discount_percentage = percentage_round


pre_save.connect(discount_percentage_calculator, sender=Products)
