from django.urls import path

from core.views import product_list, product_detail
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('products/', product_list),
    path('products/<int:product_id>/', product_detail)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)