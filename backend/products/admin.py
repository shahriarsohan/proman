from django.contrib import admin

from .models import Products, ProductImages


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
                 'product_delivery_time'
             ),
             'classes': ('collapse',),
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
             'fields':  ('quantity_in_stock', 'out_of_stock'),
         },
         ),
    )
    list_display = ('name', 'best_selling', 'featured',
                    'category', 'discount_price', 'country_made')
    list_editable = ('best_selling', 'featured')
    list_filter = ('best_selling', 'featured')
    search_fields = ('name', 'category')

    class Meta:
        model = Products


@admin.register(ProductImages)
class ProductsImageAdmin(admin.ModelAdmin):
    pass
