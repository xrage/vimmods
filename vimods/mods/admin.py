'''
Created on 05-Jul-2013

@author: Dharmendra
'''
from django.contrib import admin
from vimods.mods.models import Module, Tag

class ModuleAdmin(admin.ModelAdmin):
    date_hierarchy = 'date'
    list_display = ('title', 'description', 'date', 'command', 'base_url','link')
    
class TagAdmin(admin.ModelAdmin):
    list_display = ('tag', )
    
admin.site.register(Module, ModuleAdmin )
admin.site.register(Tag, TagAdmin )