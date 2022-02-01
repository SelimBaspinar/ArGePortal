from user.models import User
from django.contrib import admin
from .models import User,Department

# Register your models here.
admin.register(User)
admin.register(Department)