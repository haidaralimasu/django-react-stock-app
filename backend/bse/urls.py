from django.urls import path, include
from .views import bseTopGainers, bseTopLosers


urlpatterns = [
    path('topgainers/', bseTopGainers, name='bse.bseTopGainers'),
    path('toplosers/', bseTopLosers, name='bse.bseTopLosers')
]
