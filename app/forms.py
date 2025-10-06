from . models import Users
from django import forms

class SignupForm(forms.ModelForm):
    class Meta:
        model = Users
        fields = '__all__'
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['name'].widget.attrs['placeholder'] = 'Enter your full name'
        self.fields['email'].widget.attrs['placeholder'] = 'Enter your email'
        self.fields['username'].widget.attrs['placeholder'] = 'Choose a username'
        self.fields['password'].widget.attrs['placeholder'] = 'Create a password'
        self.fields['bio'].widget.attrs['placeholder'] = 'Say something about yourself'
        
class LoginForm(forms.ModelForm):
    class Meta:
        model = Users
        fields = ['username', 'password',]
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs['placeholder'] = 'Enter username'
        self.fields['password'].widget.attrs['placeholder'] = 'Enter password'