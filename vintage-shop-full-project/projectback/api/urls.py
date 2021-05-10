from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token

from api.views import category_list, category_detail, product_list, product_detail, category_products, gender_products, \
    CategoryListAPIView, CategoryDetailAPIView, ProductListAPIView, ProductDetailAPIView, GenderListAPIView, \
    GenderDetailAPIView, ProfileDetailAPIView, ProfileListAPIView

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view()),
    # path('categories/<int:pk>/products/', CategoryProductAPIView.as_view()),
    path('categories/<int:pk>/products/', category_products),
    path('genders/', GenderListAPIView.as_view()),
    path('genders/<int:pk>/', GenderDetailAPIView.as_view()),
    path('genders/<int:pk>/products/', gender_products),
    path('products/', ProductListAPIView.as_view()),
    # path('products/', product_list),
    path('products/<int:pk>/', ProductDetailAPIView.as_view()),
    path('profiles/<int:pk>/', ProfileDetailAPIView.as_view()),
    path('profiles/', ProfileListAPIView.as_view())
]