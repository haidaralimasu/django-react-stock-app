from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import AllStockes

class AllStockesSerializer(serializers.ModelSerializer):
    class Meta:
        model = AllStockes
        fields = '__all__'
        lookup_field = 'symbol'