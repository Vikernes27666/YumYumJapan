from django.urls import path
from .views import (
    AllProducts,
    ProductDetail
)

urlpatterns = [
    path("all/",AllProducts.as_view() ,name="all-products"),
    path('<uuid:id>/', ProductDetail.as_view(), name='product-detail'),

]