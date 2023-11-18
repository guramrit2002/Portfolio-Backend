from django.db import models

# Create your models here.


class Skill(models.Model):
    
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=250)
    
    def __str__(self):
        return self.name
    
class Project(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(Skill, related_name='Skill', on_delete=models.CASCADE)
    name = models.CharField(max_length=250)
    contribute = models.CharField(max_length=250)
    about = models.CharField(max_length=100)
    github_link = models.CharField(max_length=20)
    app_demo = models.CharField(max_length=50)
    
    def __str__(self) -> str:
        return self.name
    
class ProjectSKill(models.Model):
    
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return f"{self.skill} in {self.project}"