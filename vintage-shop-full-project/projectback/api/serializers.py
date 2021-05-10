from rest_framework import serializers

from core.models import Category, Product, Profile, Gender


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data['name'])
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.save()
        return instance


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description', 'category', 'category_id',)

class ProfileSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(write_only=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    class Meta:
        model = Profile
        fields = ('id', 'user_id', 'first_name', 'last_name', 'age')

class GenderSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        gender = Gender.objects.create(name=validated_data['name'])
        return gender

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.save()
        return instance