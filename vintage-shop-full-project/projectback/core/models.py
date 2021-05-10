from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=200)
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
    def __str__(self):
        return f'{self.id}: {self.name}'

class Gender(models.Model):
    name = models.CharField(max_length=200)
    class Meta:
        verbose_name = 'Gender'
        verbose_name_plural = 'Genders'
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
    def __str__(self):
        return f'{self.id}: {self.name}'

class Product(models.Model):
    name = models.CharField(max_length=200)
    brand = models.TextField(max_length=200)
    price = models.FloatField(default=0)
    image = models.ImageField(blank=True)
    description = models.CharField(max_length=1000)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, related_name='products')
    gender = models.ForeignKey(Gender, on_delete=models.CASCADE, null=True, related_name='products')
    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
    def __str__(self):
        return f'{self.id}: {self.name} | {self.brand} | {self.price} | {self.image} | {self.description} '
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'brand': self.brand,
            'price': self.price,
            'image': self.image,
            'description': self.description,
            'category': self.category,
            'gender': self.gender
        }

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    age = models.IntegerField(blank=True, null=True)
    def __str__(self):
        return f'{self.first_name}: {self.last_name}'
    def to_json(self):
        return {
            'id': self.id,
            'user': self.user,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'age': self.age
        }

