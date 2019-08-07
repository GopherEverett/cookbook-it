from django.db import models

class Cookbook(models.Model):
    title = models.CharField(max_length=255)


    def __str__(self):
        return self.title
    


class Recipe(models.Model):
    name = models.CharField(max_length=255)
    cookbook = models.ForeignKey(Cookbook, on_delete=models.CASCADE, related_name='recipes')

    def __str__(self):
        return self.name
    

class Ingredient(models.Model):
    name = models.CharField(max_lemgth=255)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='ingredients')

    def __str__(self):
        return self.name
    