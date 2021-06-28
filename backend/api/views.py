from rest_framework import permissions
from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.http import JsonResponse
from .models import AllStockes
from .serializers import AllStockesSerializer
from nsetools import Nse
from bsedata.bse import BSE
from urllib.request import urlopen
import json
# Create your views here

nse = Nse()
bse = BSE()


def home(request):
    his = bse.getPeriodTrend('534976','1M')
    return JsonResponse(his, safe=False)

def nseindex(request):
    p = nse.get_index_quote('NIFTY 50')
    q = nse.get_index_quote('NIFTY 100')

    return JsonResponse([p,q], safe=False)

class AllStockesListView(ListAPIView):
    queryset = AllStockes.objects.order_by('id')
    serializer_class = AllStockesSerializer
    lookup_field = 'symbol'
    permissions_classes = (permissions.AllowAny)

class AllStockesDetailView(RetrieveAPIView):
    queryset = AllStockes.objects.order_by('id')
    serializer_class = AllStockesSerializer
    lookup_field = 'symbol'
    permissions_classes = (permissions.AllowAny)
