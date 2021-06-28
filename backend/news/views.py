from django.http import JsonResponse
from urllib.request import urlopen
import json

url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0ce2fd42661c428e98fd97b1ff4c4372"

response = urlopen(url)
data = json.loads(response.read())
# Create your views here.

def news(request):
    marketnews = data["articles"]
    return JsonResponse(marketnews, safe=False)
