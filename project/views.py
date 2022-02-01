from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProjectSerializer,ProjectAbilitiesSerializer
from .models import Project,ProjectAbilities

# Create your views here.

class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class ProjectAbilitiesView(viewsets.ModelViewSet):
    serializer_class = ProjectAbilitiesSerializer
    queryset = ProjectAbilities.objects.all()