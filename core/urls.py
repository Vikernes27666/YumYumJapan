from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

from apps.users.views import CustomUserDetailsView
from dj_rest_auth.views import PasswordResetConfirmView


schema_view = get_schema_view(
    openapi.Info(
        title="YumYum Japan",
        default_version="v1.0",
        description="YumYum Japan endpoints",
        contact=openapi.Contact(email="contacto@yumyumjapan.com"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    # Documentation
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0)),

    # Admin Panel
    path('admin/', admin.site.urls),

    # User
    path("api/v1/auth/registration/", include("dj_rest_auth.registration.urls")),
    path("api/v1/auth/user/", CustomUserDetailsView.as_view(), name="user_details"),
    path("api/v1/auth/", include("dj_rest_auth.urls")),
    path(
        "api/v1/auth/password/reset/confirm/<uidb64>/<token>/",
        PasswordResetConfirmView.as_view(),
        name="password_reset_confirm",
    ),

    # Product
    path("api/v1/products/", include("apps.products.urls")),
]

# urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]