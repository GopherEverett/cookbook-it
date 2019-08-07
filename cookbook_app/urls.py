# tunr_app/urls.py
from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('cookbooks', views.CookbookView)
router.register('recipes', views.RecipeView)
router.register('ingredients', views.IngredientView)

urlpatterns = [
    path('', include(router.urls))
]