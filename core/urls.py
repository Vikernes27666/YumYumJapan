from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]