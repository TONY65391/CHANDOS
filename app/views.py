from django.shortcuts import render, redirect
from django.template import loader
from django.contrib import messages
from django.http import HttpResponse

# Create your views here.

def home(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render(request = request))

def projects(request):
    template = loader.get_template('project.html')
    return HttpResponse(template.render(request = request))