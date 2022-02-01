from rest_framework import serializers
from .models import Project,ProjectAbilities

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"

class ProjectAbilitiesSerializer(serializers.ModelSerializer):
    project=ProjectSerializer(read_only=True)
    
    class Meta:
        model = ProjectAbilities
        fields =  "__all__"            