from django.http import JsonResponse
from nsetools import Nse


# Create your views here.

nse = Nse()

def nseTopGainers(request):
    topGainers = nse.get_top_gainers()
    return JsonResponse(topGainers, safe=False)

def nseTopLosers(request):
    topLosers = nse.get_top_losers()
    return JsonResponse(topLosers, safe=False) 
