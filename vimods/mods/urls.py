from django.conf.urls import patterns, include, url

urlpatterns = patterns('vimods.mods.views',                            
    url(r'^(?P<pk>\w+)/$',    'page'),
    url(r'^tags/(?P<slug>\w+)/$',  'tags'),
    url(r'^$',    'home'),       
    )
