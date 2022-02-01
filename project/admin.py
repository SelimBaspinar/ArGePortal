from django.contrib import admin
from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('Code','Name','Description','Language','Start_Time','End_Time','Personal_Count','Budget')

# Register your models here.

admin.site.register(Project, ProjectAdmin)
