(function(e){try{if(!window[e.ns]){if(!window.am){am={c:{}};var k=am.c[e.id]={};k.d=[];k.d.push("lazy:"+Date.now())}e.ns="am"}var a=window[e.ns].c[e.id];a?(a.v={version:"1.3.1.0",debugLevel:e.debug?e.debug:0,auditLevel:e.audit?e.audit:0,sessionId:Math.random().toString().slice(2,10),href:location.href,ref:document.referrer,tagsFired:[],context:""},a.v.auditTag="//ib.adnxs.com/getuid?//segment.a3cloud.net/px.png?uid=$UID&cid="+e.id,am.c.cb={tto:function(b){b=parseInt(b.uid)||0;var a=Object.keys(am.c)[0],d="ats-cid-"+a+"-sid",e=Math.random().toString().slice(2,10);if(0===b)for(am.c[a].f.logit("employ 3to1 redirect"),am.c[a].f.setCookie(d,e+"s",!1,"/"),b=0;b<document.links.length;b+=1)a=document.links[b],a.href="//ib.adnxs.com/seg?add=1&redir="+encodeURIComponent(a.href);else am.c[a].f.logit("3to1 redirect not needed, id is "+b),am.c[a].f.setCookie(d,e+"x",!1,"/")}},a.f={logit:function(b){a.d.push(b+":"+new Date);0<a.v.debugLevel&&console.log(e.id+"-DEBUG:"+b)},safeEval:function(b,c){var d="";try{a.v.context=c,"undefined"!==typeof c&&null!==c&&(b="var el=am.c['"+e.id+"'].v.context;"+b),d=eval(b)}catch(g){}return d},getCookie:function(b){var a=document.cookie.indexOf(b+"="),d=a+b.length+1;if(!a&&b!==document.cookie.substring(0,b.length)||-1===a)return null;b=document.cookie.indexOf(";",d);-1===b&&(b=document.cookie.length);return unescape(document.cookie.substring(d,b))},setCookie:function(b,a,d,e,f,h){var c=new Date;c.setTime(c.getTime());d&&(d*=864E5);c=new Date(c.getTime()+d);document.cookie=b+"="+escape(a)+(d?";expires="+c.toGMTString():"")+(e?";path="+e:"")+(f?";domain="+f:"")+(h?";secure":"")},getSessionId:function(){var b="ats-cid-"+e.id+"-sid",c=a.f.getCookie(b);c||(c=Math.random().toString().slice(2,10),a.f.setCookie(b,c,!1,"/"));return c},getParentReferrer:function(b){var c;if(b.parent===b)try{c=b.document.referrer}catch(d){c="(iframed)"+document.referrer}else c=a.f.getParentReferrer(b.parent);return c},getParentHref:function(b){var c;if(b.parent===b)try{c=b.location.href}catch(d){c="(iframed)"+location.href}else c=a.f.getParentHref(b.parent);return c},evalTrigger:function(b,c){return b.trigger.result=a.f.safeEval(b.trigger.code,c)},evalVars:function(b,c,d){b.result=a.f.safeEval(b.value,d);return c.text.replace(new RegExp(b.name,"g"),b.result)},fireTag:function(b){function a(b){(new Image).src=b.text}function d(b){var a=document.getElementsByTagName("script")[0],c=document.createElement("script");c.async=!0;c.id=e.id+"-tid-"+b.id;c.src=b.text;a.parentNode.insertBefore(c,a)}function g(){var a=document.createElement("div");a.style="width:0px;height:0px;display:none;visibility:hidden";a.id=e.id+"-tid-"+b.id;a.innerHTML=b.text;document.body.appendChild(a)}function f(b){var a=document.createElement("iframe");a.id=e.id+"-tid-"+b.id;a.style="width:0px;height:0px;display:none;visibility:hidden";a.width=0;a.height=0;a.src=b.text;document.body.appendChild(a)}function h(b){var a=document.createElement("iframe");a.id=e.id+"-tid-"+b.id;a.style="width:0px;height:0px;display:none;visibility:hidden";a.width=0;a.height=0;document.body.appendChild(a);a.contentWindow.document.open().write("<html><body>"+b.text+"</body></html>");a.contentWindow.document.close()}switch(b.obj){case "img":a(b);break;case "script":d(b);break;case "div":g(b);break;case "null":break;case "iframe":f(b);break;default:h(b)}},firePreAudit:function(){a.f.fireTag({id:-1,name:"pre-audit",trigger:{name:"always",code:"true"},vars:[],obj:"img",text:a.v.auditTag})},firePostAudit:function(){a.f.fireTag({id:1,name:"post-audit",trigger:{name:"audit",code:"true"},vars:[],obj:"img",text:a.v.auditTag+"&px="+a.v.tagsFired.join()})},fireDefaultTag:function(b){var c,d;if(a.f.evalTrigger(b)){for(c=0;c<b.vars.length;c+=1)d=b.vars[c],b.text=a.f.evalVars(d,b);a.v.tagsFired.push(b.id);a.f.fireTag(b)}},prepareEventTag:function(b){window.addEventListener(b.trigger.event,function(c){try{var d,g;if(a.f.evalTrigger(b,c.target)){for(d=0;d<b.vars.length;d+=1)g=b.vars[d],b.text=a.f.evalVars(g,b,c.target);a.v.tagsFired.push(b.id);a.f.fireTag(b)}}catch(f){console.log(e.id+"-ERR: trapped event error: "+f.message),document.createElement("img").src="//ib.adnxs.com/getuid?//segment.a3cloud.net/px.png?uid=$UID&cid="+e.id+"&err=event&msg="+escape(f.message)}},!1)},main:function(b){var c,d;a.v.sessionId=a.f.getSessionId();a.v.href=a.f.getParentHref(window);a.v.ref=a.f.getParentReferrer(window);a.v.debugLevel=/amdebug=1/i.test(a.v.href)?1:a.v.debugLevel;a.v.auditTag=a.v.auditTag+"&sid="+a.v.sessionId+"&url="+escape(a.v.ref);a.v.atsCookie=a.f.getCookie("ats-cid-"+e.id+"-sid");1<a.v.auditLevel&&a.f.firePreAudit();for(c=0;c<b.length;c+=1)d=b[c],d.trigger.event&&""!==d.trigger.event?a.f.prepareEventTag(d):a.f.fireDefaultTag(d);a.v.atsCookie&&9>a.v.atsCookie.length&&setTimeout(function(){var a=Object.keys(am.c)[0];am.c[a].f.fireTag({id:"321",name:"3to1",obj:"script",text:"//ib.adnxs.com/getuidp?callback=am.c.cb.tto",trigger:{name:"321all",code:"true"},vars:[]})},Math.random().toString().slice(2,6));0<a.v.auditLevel&&a.f.firePostAudit();a.d.push("finish:"+Date.now())}},a.t=[{"obj":"img","name":"audit","id":"0","text":"{auditUrl}&vars=","trigger":{"code":"true","name":"all"},"vars":[{"name":"{auditUrl}","value":"am.c['AM-141099'].v.auditTag"}]}],a.f.main(a.t)):(console.log(e.id+"-ERR: namespace _NOT_ found"),document.createElement("img").src="//ib.adnxs.com/getuid?//segment.a3cloud.net/px.png?uid=$UID&cid="+e.id+"&err=no-namespace")}catch(b){console.log(e.id+"-ERR: trapped error: "+b.message),document.createElement("img").src="//ib.adnxs.com/getuid?//segment.a3cloud.net/px.png?uid=$UID&cid="+e.id+"&err=unknown&msg="+escape(b.message)}})({ns:"am",id:"AM-141099",audit:0,debug:0});