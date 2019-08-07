from django.db import models
import datetime

class Cookbook(models.Model):
    title = models.CharField(blank=True,max_length=255)
    editor = models.CharField(blank=True,max_length=255)
    year_published = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.title
    


class Recipe(models.Model):
    name = models.CharField(blank=True, max_length=255)
    chef = models.CharField(blank=True, max_length=255)
    directions = models.TextField(blank=True)
    cookbook = models.ForeignKey(Cookbook, on_delete=models.CASCADE, related_name='recipes')

    def __str__(self):
        return self.name
    

class Ingredient(models.Model):
    name = models.CharField(blank=True, max_length=255)
    retailer = models.CharField(blank=True, max_length=255)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='ingredients')

    def __str__(self):
        return self.name
    