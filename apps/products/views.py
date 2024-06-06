from apps.products.pagination import ProductPagination
from apps.products.renderers import ProductsJSONRenderer
from rest_framework import generics
from .serializers import ProductSerializer
from apps.products.models import Product

# Create your views here.

class AllProducts(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.active()
    pagination_class = ProductPagination
    renderer_classes = [ProductsJSONRenderer]

    ordering_fields = [
        "created_at",
        "updated_at",
    ]
