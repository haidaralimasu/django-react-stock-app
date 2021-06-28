from django.urls import path
from .views import BlogPostListView, BlogPostDetailView, BlogPostFeaturedView

urlpatterns = [
    path('', BlogPostListView.as_view()),
    path('<slug>', BlogPostDetailView.as_view()),
    path('featuredpost/featured', BlogPostFeaturedView.as_view())
]