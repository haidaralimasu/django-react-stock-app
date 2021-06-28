from django.urls import path, include
from .views import home, nseindex, AllStockesListView, AllStockesDetailView

urlpatterns = [
    path('', home, name='api.home'),
    path('allstockes/', AllStockesListView.as_view()),
    path('allstockes/<str:symbol>', AllStockesDetailView.as_view()),
    path('nseindex/', nseindex, name='api.nseindex'),
    path('user/', include('user.urls')),
    path('blog/', include('blog.urls')),
    path('nse/', include('nse.urls')),
    path('bse/', include('bse.urls')),
    path('news/', include('news.urls')),
]