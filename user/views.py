from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer,DepartmentSerializer, RoleSerializer, GetInvolvedProjectSerializer,AbilitiesSerializer,Ability_RatingSerializer
from .models import User,Department,Role,GetInvolvedProject,Ability_Rating,Abilities

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class AbilitiesView(viewsets.ModelViewSet):
    serializer_class = AbilitiesSerializer
    queryset = Abilities.objects.all()

class AbilityRatingView(viewsets.ModelViewSet):
    serializer_class = Ability_RatingSerializer
    queryset = Ability_Rating.objects.all()    

class DepartmentView(viewsets.ModelViewSet):
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()    

class RoleView(viewsets.ModelViewSet):
    serializer_class = RoleSerializer
    queryset = Role.objects.all()        

class GetInvolvedProjectView(viewsets.ModelViewSet):
    serializer_class = GetInvolvedProjectSerializer
    queryset = GetInvolvedProject.objects.all()           