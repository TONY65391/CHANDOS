from django.shortcuts import render, redirect
from django.template import loader
from django.contrib import messages
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm
from . models import Users
from . forms import SignupForm, LoginForm

# Create your views here.

def home(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render(request = request))

def projects(request):
    template = loader.get_template('project.html')
    return HttpResponse(template.render(request = request))

def login(request):
    context = {'loginform':LoginForm()}
    template = loader.get_template('login.html')
    return HttpResponse(template.render(request = request, context=context))

def signup(request):
    form = SignupForm()
    context = {'signupform':form}
    template = loader.get_template('signup.html')
    return HttpResponse(template.render(request = request, context = context))
    
def formhandler(request):
    if request.POST and request.FILES:
        return HttpResponse("Signup")
    else:
        return HttpResponse("Login")