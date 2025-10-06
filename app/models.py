from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save

# Create your models here.

class Users(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, null=True)
    email = models.EmailField(unique=True, null=True)
    password = models.CharField(max_length=100, null=True)
    bio =  models.CharField(blank=True, null=True)
    photo = models.ImageField(upload_to='app/static/users', blank=False, null=False)
    # password = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name
    