from django.contrib import admin
from .models import Product, ProductImage

# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = (
                    'title',
                    'description',
                    'rating',
                    'numReviews',
                    'price',
                    'is_active',
                    )
    list_filter = ('is_active', 'created_at', 'updated_at',)
    search_fields = ('title', 'price', 'is_active')


class ProductImageAdmin(admin.ModelAdmin):
    list_display = ('product', 'image')

    search_fields = ['product__title']

admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage, ProductImageAdmin)

