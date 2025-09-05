from django.db import models
from tkinter import CASCADE
from django.db.models.deletion import CASCADE

class emailTraffic(models.Model):
    name = models.CharField(default="",max_length=100,null=True, blank=True)
    email = models.CharField(default="",max_length=100,null=True, blank=True)
    subject = models.CharField(default="",max_length=100,null=True, blank=True)
    message = models.TextField(null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.CharField(null=False,max_length=50,default='No')
    updated_by = models.CharField(null=False,max_length=50,default='No')
    isDelete = models.CharField(default="No",max_length=10)