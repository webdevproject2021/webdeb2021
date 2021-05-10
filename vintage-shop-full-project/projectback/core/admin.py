from django.contrib import admin

from core.models import Product, Category, Profile, Gender


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'brand', 'category',)
    search_fields = ('name', 'brand',)
    list_filter = ('category',)

admin.site.register(Category)
admin.site.register(Profile)
admin.site.register(Gender)
