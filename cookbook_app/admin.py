from django.contrib import admin
from .models import Cookbook, Recipe, Ingredient

admin.site.register([Cookbook, Recipe, Ingredient])
# Register your models here.
