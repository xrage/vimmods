from django.db import models
import datetime 
# Create your models here.


class Tag(models.Model):
    tag = models.CharField(max_length=20)
    
    class Meta:
        ordering = ["tag"]
    
    def __unicode__(self):
        return self.tag


class Module(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    link = models.URLField(default=None, blank=True, null=True)
    command = models.CharField(max_length = 30, default=None, null=True, blank=True)
    base_url = models.URLField()
    date = models.DateTimeField(default=datetime.datetime.now())
    gravatar = models.CharField(max_length=50)
    clone_url = models.URLField()
    tag = models.ManyToManyField(Tag)
    
    class Meta:
        ordering = ["title"]
    
    def __unicode__(self):
        return self.title




    
    