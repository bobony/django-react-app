from rest_framework import serializers
from rest_framework.reverse import reverse

from .models import Post

class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields=['id', 'title','description','updated','timestamp']
