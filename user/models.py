from django.db import models
from project.models import Project
# Create your models here.
class Department(models.Model):
    Name = models.CharField(max_length=120)
    
    def _str_(self):
        return self.Name   

class Role(models.Model):
    Edit=models.BooleanField()
    Delete=models.BooleanField()
    Add=models.BooleanField()

    def _str_(self):
        return self.Name 

class Ability_Rating(models.Model):
    Name=models.CharField(max_length=120)
   

    def _str_(self):
        return self.Name  

          

class User(models.Model):
    Name = models.CharField(max_length=120)
    Surname = models.CharField(max_length=120)
    Username = models.CharField(max_length=120)
    Gender = models.CharField(max_length=120)
    Birthday = models.DateField()
    Branch = models.CharField(max_length=120)
    Role = models.ForeignKey(Role,related_name="roles",on_delete=models.CASCADE)
    Salary = models.IntegerField()
    Department=models.ForeignKey(Department,related_name="departments",on_delete=models.CASCADE)
    Phone = models.IntegerField()
    Graduate = models.CharField(max_length=120)
    Employee_Type = models.CharField(max_length=120)
    Group = models.CharField(max_length=120)
    Email = models.CharField(max_length=120)
    ImageUrl = models.CharField(max_length=500)
    Password = models.CharField(max_length=500)


    def _str_(self):
        return self.Name

class GetInvolvedProject(models.Model):
    Project = models.ForeignKey(Project,related_name="projects",on_delete=models.CASCADE)
    User= models.ForeignKey(User,related_name="users",on_delete=models.CASCADE)


    def _str_(self):
        return self.Name

class Abilities(models.Model):
    Name=models.CharField(max_length=120)
    Ability_Rating = models.ForeignKey(Ability_Rating,related_name="abilityratings",on_delete=models.CASCADE)
    User= models.ForeignKey(User,related_name="user",on_delete=models.CASCADE)


    def _str_(self):
        return self.Name 