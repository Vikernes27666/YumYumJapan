from django.db import models
from apps.common.models import TimeStampedModel
from django.contrib.auth import get_user_model
# Create your models here.

User = get_user_model()

class Product(TimeStampedModel):
    title = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)

    is_active = models.BooleanField(default=True)

    # user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    # brand = models.CharField(max_length=200, null=True, blank=True)
    # category = models.CharField(max_length=100, null=True, blank=True)
    # subCategory = models.CharField(max_length=100, null=True, blank=True)
    def __str__(self):
        return self.title
    
    # @property
    # def images(self):
    #     return self.images.all()
    
class ProductImage(models.Model):
    product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(null=True, blank=True)
    alt_text = models.CharField(max_length=255, null=True, blank=True)
    caption = models.TextField(null=True, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.product.title} - {self.order}"
