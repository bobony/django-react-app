from django.shortcuts import render
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer
# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class  = PostSerializer
    lookup_field = 'id'
def home(request):
    return render(request, 'index.html')
