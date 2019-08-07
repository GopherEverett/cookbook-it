from rest_framework import serializers

from .models import Cookbook, Recipe, Ingredient

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('id', 'name', 'retailer')

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)
    class Meta:
        model = Recipe
        fields = ('id', 'name', 'chef', 'directions', 'ingredients')

class CookbookSerializer(serializers.ModelSerializer):
    recipes = RecipeSerializer(many=True, read_only=True)
    class Meta:
        model = Cookbook
        fields = ('id',  'title', 'editor', 'year_published', 'recipes')
