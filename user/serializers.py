from rest_framework import serializers
from .models import User,Department,Role,GetInvolvedProject,Abilities,Ability_Rating


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = "__all__"  

class RoleSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Role
        fields =  "__all__"   

class Ability_RatingSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Ability_Rating
        fields =  "__all__"  

class RoleSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Role
        fields =  "__all__"  

class UserSerializer(serializers.ModelSerializer):
    departments=serializers.CharField(read_only=True)
    roles=serializers.CharField(read_only=True)
   

    class Meta:
        model = User
        fields =  "__all__"

class GetInvolvedProjectSerializer(serializers.ModelSerializer):
    project=serializers.CharField(read_only=True)
    user=serializers.CharField(read_only=True)

    class Meta:
        model = GetInvolvedProject
        fields =  "__all__"

class AbilitiesSerializer(serializers.ModelSerializer):
    user=serializers.CharField(read_only=True)
    abilityratings=serializers.CharField(read_only=True)  
    
    class Meta:
        model = Abilities
        fields =  "__all__"      