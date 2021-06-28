import re
from django.http import JsonResponse
from bsedata.bse import BSE

bse = BSE()


# Create your views here.

def bseTopGainers(request):
    topGainers = bse.topGainers()
    return JsonResponse(topGainers, safe=False)

def bseTopLosers(request):
    topLosers = bse.topLosers()
    return JsonResponse(topLosers, safe=False)
