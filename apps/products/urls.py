from django.urls import path
from .views import (
    AllProducts
)

urlpatterns = [
    path("all/",AllProducts.as_view() ,name="all-products"),
]