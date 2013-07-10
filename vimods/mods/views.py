# Create your views here.
from django.shortcuts import render_to_response, get_object_or_404
from django.template.context import RequestContext
from vimods.mods.models import Module


def home(request):
    query = Module.objects.order_by('?')[0:15]
    return render_to_response('main/index.html', {'modules':query}, RequestContext(request))
    
def page(request, pk=None):
    mod = get_object_or_404(Module.objects.select_related(), id=pk)
    repo = (mod.clone_url).split('/')[-1].replace('.git', '')
    repo_user = (mod.clone_url).split('/')[-2]
    return render_to_response('main/page.html', {'mod':mod, 'repo':repo, 'repo_user':repo_user}, RequestContext(request))

def tags(request, slug=None):
    mods = Module.objects.filter(tag__tag__icontains=slug)
    mods = list(set(mods))
    return render_to_response('main/modlist.html', {'modules':mods}, RequestContext(request))
    
    
    