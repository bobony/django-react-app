from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=250)
    slug= models.SlugField(max_length=250)
    description = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)
    timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __str__(self):
        return str(self.title)
