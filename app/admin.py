from django.contrib import admin
from django.contrib.auth.models import Group, User
from .models import Users

# admin.site.unregister(Group)

admin.site.unregister(Group)
admin.site.unregister(User)

@admin.register(Users)
class UsersAdmin(admin.ModelAdmin):
    list_display = ['name', 'id',]


