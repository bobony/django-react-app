from rest_framework.routers import DefaultRouter
from django.conf.urls import include, url
from .import views

router = DefaultRouter()
router.register(r'posts',views.PostViewSet)
