from rest_framework import serializers
from .models import Product, ProductImage

class ProductSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model  = Product
        fields = '__all__'

    def get_images(self, obj):
        images = obj.images.all()
        serializer = ProductImageSerializer(images, many=True)
        return serializer.data

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'alt_text', 'caption', 'order']