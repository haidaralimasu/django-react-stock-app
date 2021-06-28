from django.urls import path
from .views import nseTopGainers, nseTopLosers

urlpatterns = [
    path('topgainers/', nseTopGainers, name='nse.nseTopGainers'),
    path('toplosers/', nseTopLosers, name='nse.nseTopLosers'),
]