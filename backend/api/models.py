from django.db import models

#Create your models here

class AllStockes(models.Model):
    symbol = models.CharField(max_length=100)
    name = models.CharField(max_length=200)