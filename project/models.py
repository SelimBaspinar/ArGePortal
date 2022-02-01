from django.db import models
from datetime import date, datetime

# Create your models here.
class Project(models.Model):
    Code = models.CharField(max_length=120)
    Name = models.CharField(max_length=120)
    Description = models.TextField()
    Language = models.CharField(max_length=120)
    Start_Time = models.DateField(default=datetime.now)
    End_Time = models.DateField(default=datetime.now)
    Personal_Count = models.IntegerField()
    Budget = models.IntegerField()

    def _str_(self):
        return self.Name

class ProjectAbilities(models.Model):
    Name = models.CharField(max_length=120)
    Ability_Rating = models.CharField(max_length=120)
    Project = models.ForeignKey(Project,related_name="project",on_delete=models.CASCADE)


    def _str_(self):
        return self.Name         