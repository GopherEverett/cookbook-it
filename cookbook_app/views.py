from rest_framework import viewsets

from .serializers import CookbookSerializer, RecipeSerializer, IngredientSerializer
from .models import Cookbook, Recipe, Ingredient


class CookbookView(viewsets.ModelViewSet):
    queryset = Cookbook.objects.all()
    serializer_class = CookbookSerializer

class RecipeView(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class IngredientView(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer