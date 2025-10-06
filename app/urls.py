from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home),
    path('home', views.home),
    path('our-projects', views.projects),
    path('login', views.login),
    path('signup', views.signup),
    path('formhandler', views.formhandler, name="formhandler"),
    # path('create-new-account', views.createAccount, name="createAccount")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    