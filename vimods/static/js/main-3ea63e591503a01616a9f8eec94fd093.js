(function(){var a,b,c,d=this;a=function(a,b){var c,d,e;return e=a==="popular"?"":"/"+a,d=b==="all"?"":"/tags/"+b,c=e+d,c.length===0?"/":c},c=function(b,c,d,e){var f,g,h,i,j;g=$("body").data("type"),f=$("body").data("tag");if(g===b&&f===c)return;b==null&&(b=g),c==null&&(c=f),$("body").data("type",b),$("body").data("tag",c),$(".selectable.tag-b").removeClass("selected"),$(".selectable.type-b").removeClass("selected"),$('.selectable.tag-b[data-val="'+c+'"]:first').addClass("selected"),$('.selectable.type-b[data-val="'+b+'"]').addClass("selected"),j=a(b,c),d&&window.history.pushState({type:b,tag:c},"",j),_gaq.push(["_trackPageview",j]),document.title=""+b[0].toUpperCase()+b.slice(1)+" "+(c!=null&&c!=="all"?c:"")+" modules - Node.JS Modules";if(!e)return;return $("#modules").addClass("exit"),h=null,i=!1,setTimeout(function(){return h!=null&&h(),i=!0},400),$("#loading").addClass("visible"),j==="/"&&(j="/popular"),$.get(j+"/partial",function(a){$("#loading").removeClass("visible"),h=function(){var b;return $("#modules").remove(),$("#main").append(a),b=$("#modules"),b.addClass("enter"),window.getComputedStyle(b.get(0)).getPropertyValue("top"),b.removeClass("enter")};if(i)return h()})},b=function(a){var b;return b=$("li.tag-b.selected").data("val"),$.getJSON("/tags.json?q="+a,function(a){var c,d,e,f,g,h;$("li.tag-b").remove(),d=$("#tags ul"),b!=="all"&&d.append($("<li data-val='all' class='tag-b selectable'><a href='/tags/all' class='tag'>all</a></li>")),d.append($("<li data-val='"+b+"' class='tag-b selectable selected'><a href='/tags/"+b+"' class='tag'>"+b+"</a></li>")),h=[];for(f=0,g=a.length;f<g;f++){e=a[f],c=$("<li data-val='"+e+"' class='tag-b selectable'><a href='/tags/"+e+"' class='tag'>"+e+"</a></li>");if(e===b||e==="all")continue;h.push(d.append(c))}return h})},window.onpopstate=function(a){var b,d;return a.state==null?window.history.replaceState({type:$("body").data("type"),tag:$("body").data("tag")},"",window.location):c((b=a.state)!=null?b.type:void 0,(d=a.state)!=null?d.tag:void 0,!1,!0)},$("body").on("click","li[href]",function(a){return window.location=$(this).attr("href")}),$("#searchTags input").on("change keyup",function(a){if($(a.target).data("existing")!==a.target.value)return $(a.target).data("existing",a.target.value),b(a.target.value)}),$("#tags").on("click","a.tag",function(a){var b,d;if(a.which!==1||a.metaKey||a.ctrlKey)return;return b=$(this),d=b.text(),c(void 0,d,!0,!0),a.stopPropagation(),a.preventDefault()}),$(function(){return $("a.type").click(function(a){var b,d;if(a.which!==1||a.metaKey||a.ctrlKey)return;return b=$(this),d=b.text().toLowerCase(),c(d,void 0,!0,!0),a.stopPropagation(),a.preventDefault()})})}).call(this)