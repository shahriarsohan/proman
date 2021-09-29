from django.contrib import admin

from .models import DailyDeal, Products, ProductImages


class ProductsImages(admin.StackedInline):
    model = ProductImages


@admin.register(Products)
class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductsImages]
    fieldsets = (
        (None,
         {'fields': ('name', 'category', 'slug',)}
         ),
        ('Products Specification',
         {
             'fields':  (
                 'thumbnail',
                 'short_desc',
                 'description',
                 'manufacturer',
                 'country_made',
                 'benifits',
                 's_size',
                 'm_size',
                 'l_size',
                 'xl_size',
                 'xxl_size',
                 'product_delivery_time',
                 'combo_offer',
                 'combo_amount',
                 'few_left',
                 'discount_percentage'
             ),
         },
         ),
        ('Pricing Information',
         {
             'fields':  ('price', 'discount_price'),
         },
         ),
        ('Selling Information',
         {
             'fields':  ('best_selling', 'featured', 'trending'),
         },
         ),
        ('Availability Information',
         {
             'fields':  ('quantity_in_stock', 'out_of_stock', 'buy_one_get_one'),
         },
         ),
    )
    list_display = ('name', 'best_selling', 'featured', 'out_of_stock',
                    'category', 'discount_price')
    list_editable = ('best_selling', 'featured')
    list_filter = ('best_selling', 'featured', 'best_selling',
                   'featured',
                   'trending')
    search_fields = ('name', 'category', 'slug')
    list_per_page = 50

    class Meta:
        model = Products


@admin.register(ProductImages)
class ProductsImageAdmin(admin.ModelAdmin):
    pass


admin.site.register(DailyDeal)
