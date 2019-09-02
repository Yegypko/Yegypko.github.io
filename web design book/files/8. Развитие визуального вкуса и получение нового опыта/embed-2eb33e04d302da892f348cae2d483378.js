/*! jQuery v1.7.1 jquery.com | jquery.org/license */

(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
(function() {
  window.blocks = {
    coub: {},
    clientsideTimeline: {}
  };
  window.channels = {};
  window.pages = {};
  window.pages.bestCoubs2013 = {};
  window.pages.bestCoubs2014 = {};
  window.pages.weeklySingle = {};
  window.pages.profile = {
    view: {},
    promo: {}
  };
  window.pages.tags = {};
  window.pages.dev_docs = {};
  window.pages.newEditorPromo = {};
  window.pages.findFriends = {};
  window.pages.editAccount = {};
  window.pages.popularPage = {};
  window.widgets = {
    player: {},
    timeline: {},
    transliteration: {},
    hints: {}
  };
  window.siteData = {};
  window.abTests = {
    tests: {},
    BTFTests: {}
  };
  window.dataProviders = {};
  window.clientsideTests = {
    stubs: {}
  };
  window.coubEditor = {
    data: {
      typeMatchers: {}
    },
    utils: {},
    widgets: {},
    helpers: {},
    serializers: {},
    functions: {},
    flash: {},
    stateMachines: {},
    animators: {},
    logic: {},
    mixins: {},
    modules: {},
    initializers: {}
  };
  window.helpers = {};
  window.mobile = {
    navigations: {},
    modules: {}
  };
  window.utils = {};
  window.functions = {};
  window.mobilePlayer = {};
  window.html5Player = {};
  window.CoubComments = {};
  window.siteAdmin = {
    widgets: {}
  };
  window.initializers = {};
  window.abstract = {};
}).call(this);
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/

var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
if (!window.console && !document.console) {
  window.console = {
    log: function() {}
  }
}
;
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);
;(function () {

  var
    object = typeof exports != 'undefined' ? exports : window,
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    INVALID_CHARACTER_ERR = (function () {
      // fabricate a suitable error object
      try { document.createElement('$'); }
      catch (error) { return error; }}());

  // encoder
  // [https://gist.github.com/999166] by [https://github.com/nignag]
  object.btoa || (
  object.btoa = function (input) {
    for (
      // initialize result and counter
      var block, charCode, idx = 0, map = chars, output = '';
      // if the next input index does not exist:
      //   change the mapping table to "="
      //   check if d has no fractional digits
      input.charAt(idx | 0) || (map = '=', idx % 1);
      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
    ) {
      charCode = input.charCodeAt(idx += 3/4);
      if (charCode > 0xFF) throw INVALID_CHARACTER_ERR;
      block = block << 8 | charCode;
    }
    return output;
  });

  // decoder
  // [https://gist.github.com/1020396] by [https://github.com/atk]
  object.atob || (
  object.atob = function (input) {
    input = input.replace(/=+$/, '')
    if (input.length % 4 == 1) throw INVALID_CHARACTER_ERR;
    for (
      // initialize result and counters
      var bc = 0, bs, buffer, idx = 0, output = '';
      // get next character
      buffer = input.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }
    return output;
  });

}());
/*
CSS Browser Selector 0.6.1
Originally written by Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/

Co-maintained by:
https://github.com/verbatim/css_browser_selector

*/


showLog=true;
function log(m) {if ( window.console && showLog ) {console.log(m); }  }

function css_browser_selector(u)
	{
	var	uaInfo = {},
		screens = [320, 480, 640, 768, 1024, 1152, 1280, 1440, 1680, 1920, 2560],
		allScreens = screens.length,
		ua=u.toLowerCase(),
		is=function(t) { return RegExp(t,"i").test(ua);  },
		version = function(p,n) 
			{ 
			n=n.replace(".","_"); var i = n.indexOf('_'),  ver=""; 
			while (i>0) {ver += " "+ p+n.substring(0,i);i = n.indexOf('_', i+1);} 
			ver += " "+p+n; return ver; 
			},
		g='gecko',
		w='webkit',
		c='chrome',
		f='firefox',
		s='safari',
		o='opera',
		m='mobile',
		a='android',
		bb='blackberry',
		lang='lang_',
		dv='device_',
		html=document.documentElement,
		b=	[
		
			// browser
			(!(/opera|webtv/i.test(ua))&&/msie\s(\d+)/.test(ua))?('ie ie'+(/trident\/4\.0/.test(ua) ? '8' : RegExp.$1))
			:is('firefox/')?g+ " " + f+(/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)?' '+f+RegExp.$2 + ' '+f+RegExp.$2+"_"+RegExp.$4:'')	
			:is('gecko/')?g
			:is('opera')?o+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)?' '+o+RegExp.$2 + ' '+o+RegExp.$2+"_"+RegExp.$4 : (/opera(\s|\/)(\d+)\.(\d+)/.test(ua)?' '+o+RegExp.$2+" "+o+RegExp.$2+"_"+RegExp.$3:''))
			:is('konqueror')?'konqueror'
	
			:is('blackberry') ? 
				( bb + 
					( /Version\/(\d+)(\.(\d+)+)/i.test(ua)
						? " " + bb+ RegExp.$1 + " "+bb+ RegExp.$1+RegExp.$2.replace('.','_')
						: (/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(ua) 
							? ' ' +bb+RegExp.$2 + (RegExp.$3?' ' +bb+RegExp.$2+RegExp.$3:'')
							: '')
					)
				) // blackberry
	
			:is('android') ? 
				(  a +
					( /Version\/(\d+)(\.(\d+))+/i.test(ua)
						? " " + a+ RegExp.$1 + " "+a+ RegExp.$1+RegExp.$2.replace('.','_')
						: '')
					+ (/Android (.+); (.+) Build/i.test(ua)
						? ' '+dv+( (RegExp.$2).replace(/ /g,"_") ).replace(/-/g,"_")
						:''	)
				) //android
	
			:is('chrome')?w+   ' '+c+(/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)?' '+c+RegExp.$2 +((RegExp.$4>0) ? ' '+c+RegExp.$2+"_"+RegExp.$4:''):'')	
			
			:is('iron')?w+' iron'
			
			:is('applewebkit/') ? 
				( w+ ' '+ s + 
					( /version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua)
						?  ' '+ s +RegExp.$2 + " "+s+ RegExp.$2+RegExp.$3.replace('.','_')
						:  ( / Safari\/(\d+)/i.test(ua) 
							? 
							( (RegExp.$1=="419" || RegExp.$1=="417" || RegExp.$1=="416" || RegExp.$1=="412" ) ? ' '+ s + '2_0' 
								: RegExp.$1=="312" ? ' '+ s + '1_3'
								: RegExp.$1=="125" ? ' '+ s + '1_2'
								: RegExp.$1=="85" ? ' '+ s + '1_0'
								: '' )
							:'')
						)
				) //applewebkit	
		
			:is('mozilla/')?g
			:''
			
			// mobile
			,is("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk")?m:''
			
			// os/platform
			,is('j2me')?'j2me'
			:is('ipad|ipod|iphone')?  
				( 
					(
						/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(ua)  ?
						'ios' + version('ios',RegExp.$2) : ''
					) + ' ' + ( /(ip(ad|od|hone))/gi.test(ua) ?	RegExp.$1 : "" )
				) //'iphone'
			//:is('ipod')?'ipod'
			//:is('ipad')?'ipad'
			:is('playbook')?'playbook'
			:is('kindle|silk')?'kindle'
			:is('playbook')?'playbook'
			:is('mac')?'mac'+ (/mac os x ((\d+)[.|_](\d+))/.test(ua) ?    ( ' mac' + (RegExp.$2)  +  ' mac' + (RegExp.$1).replace('.',"_")  )     : '' )
			:is('win')?'win'+
					(is('windows nt 6.2')?' win8'
					:is('windows nt 6.1')?' win7'
					:is('windows nt 6.0')?' vista'
					:is('windows nt 5.2') || is('windows nt 5.1') ? ' win_xp' 
					:is('windows nt 5.0')?' win_2k'
					:is('windows nt 4.0') || is('WinNT4.0') ?' win_nt'
					: ''
					) 
			:is('freebsd')?'freebsd'
			:(is('x11|linux'))?'linux'
			:''
			
			// user agent language
			,(/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(ua))?(lang+RegExp.$2).replace("-","_")+(RegExp.$3!=''?(' '+lang+RegExp.$1).replace("-","_"):''):''
		
			// beta: test if running iPad app
			,( is('ipad|iphone|ipod') && !is('safari') )  ?  'ipad_app'  : ''
		
		
		]; // b

    function screenSize() 
    	{
		var w = window.outerWidth || html.clientWidth;
		var h = window.outerHeight || html.clientHeight;
		uaInfo.orientation = ((w<h) ? "portrait" : "landscape");
        // remove previous min-width, max-width, client-width, client-height, and orientation
        html.className = html.className.replace(/ ?orientation_\w+/g, "").replace(/ [min|max|cl]+[w|h]_\d+/g, "")
        for (var i=(allScreens-1);i>=0;i--) { if (w >= screens[i] ) { uaInfo.maxw = screens[i]; break; }}
		widthClasses="";
        for (var info in uaInfo) { widthClasses+=" "+info+"_"+ uaInfo[info]  };
		html.className =  ( html.className +widthClasses  );
		return widthClasses;
    	} // screenSize
	
    window.onresize = screenSize;
	screenSize();	

	var cssbs = (b.join(' ')) + " js ";
	html.className =   ( cssbs + html.className.replace(/\b(no[-|_]?)?js\b/g,"")  ).replace(/^ /, "").replace(/ +/g," ");

	return cssbs;
	}
	
css_browser_selector(navigator.userAgent);


$.fn.extend({
  scrollWidth: function() {
    return this.get(0).scrollWidth;
  },

  scrollHeight: function() {
    return this.get(0).scrollHeight;
  },

  positionedOffset: function() {
    return {
      left: parseInt(this.css("left")),
      right: parseInt(this.css("left")) + this.width()
    }
  },

  groupBind: function(group, cbk) {
    var el = $(this)
    var cbks = {}
    var checkIfAllIsDone = function() {
      var values = _.values(cbks);
      if (_.uniq(values) == [true]) {
        cbk();
      }
    }

    _.each(group, function(g) {
      cbks[group] = false;

      el.bind(group, function() {
        console.log('ckbs is done', group)
        cbks[group] = true;
      })
    })
  },

  getJSON: function() {
    return JSON.parse($(this).html());
  },

  getLeft: function() {
    return parseInt($(this).css('left')) || 0;
  },

  getTop: function() {
    return parseInt($(this).css('top')) || 0;
  },

  reverse: function() {
    return this.pushStack(this.get().reverse(), arguments);
  },
})


$.handleRedirect = function(u) {
  if (u == window.location.href) {
    window.location.reload();
  } else {
    window.location.href = u;
  }
}

$.formatTime = function(time) {
  minutes = Math.floor(time / 60);
  seconds = Math.floor(time % 60);
  decimal = (time - Math.floor(time)).toFixed(2) * 100;

  pr = function(num) { return num > 9 ? num : "0" + num; }
  return [ pr(minutes), pr(seconds) ].join(":") + "." + pr(Math.round(decimal));
}

$.formatTimeSecondsOnly = function(time) {
  seconds = Math.floor(time % 60);
  decimal = (time - Math.floor(time)).toFixed(2) * 100;

  pr = function(num) { return num > 9 ? num : "0" + num; }
  return pr(seconds) + "." + pr(Math.round(decimal));
};

$.thisMovie = function(movieName) {
  return document[movieName] || window[movieName];
};

$.makeFlashURL = function(url) {
  url = url.replace(/^http[s]{0,1}:/, window.location.protocol);

  if (window.location.protocol === 'https:') // ассеты прекомпилены и все пути с http, поэтому заменяем на https если надо
    url = url.replace(/\/\/.*?coub.com/, '//coubsecureassets-a.akamaihd.net');

  if ($('html').hasClass('ie')) {
    return url + "?=" + new Date().valueOf();
  } else {
    return url;
  }
};

Math.randomFromTwo = function(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
};

// проверяет, находится ли val в диапазоне
Math.inRange = function(range, val) {
  return val >= range[0] && val <= range[1];
};

// ограничения наоборот
// пример: ограничения [360, 500]
// если значения 350 то вернет 360
// если 550 то вернет 500
// если внутри диапазона - то само число
//
Math.getNearestConstraint = function(constraints, val) {
  if (val <= constraints[0]) {
    return constraints[0];
  } else if (val >= constraints[1]) {
    return constraints[1]
  } else {
    return val;
  }
}

Math.divide = function(num) {
  var isInt = (num / 2) == parseInt(num / 2);
  if (isInt) {
    return [num / 2, num / 2];
  } else {
    var first = Math.floor(num / 2);
    var last = num - first;
    return [first, last];
  }
}

$.extend(Function.prototype, {
  bind: function(context) {
    var fn = this, args = Array.prototype.slice.call(arguments), object = args.shift();
    return function(){
      return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)));
    };
  }
});

$.extend(Number.prototype, {
  toFixed: function(n) {
    return Math.round(this * Math.pow(10, n)) / Math.pow(10, n);
  }
});


(function($){
    $.fn.serializeObject = function(){
        var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key":      /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push":     /^$/,
                "fixed":    /^\d+$/,
                "named":    /^[a-zA-Z0-9_]+$/
            };


        this.build = function(base, key, value){
            base[key] = value;
            return base;
        };

        this.push_counter = function(key){
            if(push_counters[key] === undefined){
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };

        $.each($(this).serializeArray(), function(){

            // skip invalid keys
            if(!patterns.validate.test(this.name)){
                return;
            }

            var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

            while((k = keys.pop()) !== undefined){

                // adjust reverse_key
                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

                // push
                if(k.match(patterns.push)){
                    merge = self.build([], self.push_counter(reverse_key), merge);
                }

                // fixed
                else if(k.match(patterns.fixed)){
                    merge = self.build([], k, merge);
                }

                // named
                else if(k.match(patterns.named)){
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });

        return json;
    };
})(jQuery);

/*
 * jQuery store - Plugin for persistent data storage using localStorage, userData (and window.name)
 * 
 * Authors: Rodney Rehm
 * Web: http://medialize.github.com/jQuery-store/
 * 
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 */

/**********************************************************************************
 * INITIALIZE EXAMPLES:
 **********************************************************************************
 * 	// automatically detect best suited storage driver and use default serializers
 *	$.storage = new $.store();
 *	// optionally initialize with specific driver and or serializers
 *	$.storage = new $.store( [driver] [, serializers] );
 *		driver		can be the key (e.g. "windowName") or the driver-object itself
 *		serializers	can be a list of named serializers like $.store.serializers
 **********************************************************************************
 * USAGE EXAMPLES:
 **********************************************************************************
 *	$.storage.get( key );			// retrieves a value
 *	$.storage.set( key, value );	// saves a value
 *	$.storage.del( key );			// deletes a value
 *	$.storage.flush();				// deletes aall values
 **********************************************************************************
 */


(function($,undefined){

/**********************************************************************************
 * $.store base and convinience accessor
 **********************************************************************************/

$.store = function( driver, serializers )
{
	var that = this;
	
	if( typeof driver == 'string' )
	{
		if( $.store.drivers[ driver ] )
			this.driver = $.store.drivers[ driver ];
		else
			throw new Error( 'Unknown driver '+ driver );
	}
	else if( typeof driver == 'object' )
	{
		var invalidAPI = !$.isFunction( driver.init )
			|| !$.isFunction( driver.get )
			|| !$.isFunction( driver.set )
			|| !$.isFunction( driver.del )
			|| !$.isFunction( driver.flush );
			
		if( invalidAPI )
			throw new Error( 'The specified driver does not fulfill the API requirements' );
		
		this.driver = driver;
	}
	else
	{
		// detect and initialize storage driver
		$.each( $.store.drivers, function()
		{
			// skip unavailable drivers
			if( !$.isFunction( this.available ) || !this.available() )
				return true; // continue;
			
			that.driver = this;
			if( that.driver.init() === false )
			{
				that.driver = null;
				return true; // continue;
			}
			
			return false; // break;
		});
	}
	
	// use default serializers if not told otherwise
	if( !serializers )
		serializers = $.store.serializers;
	
	// intialize serializers
	this.serializers = {};
	$.each( serializers, function( key, serializer )
	{
		// skip invalid processors
		if( !$.isFunction( this.init ) )
			return true; // continue;
		
		that.serializers[ key ] = this;
		that.serializers[ key ].init( that.encoders, that.decoders );
	});
};


/**********************************************************************************
 * $.store API
 **********************************************************************************/

$.extend( $.store.prototype, {
	get: function( key )
	{
		var value = this.driver.get( key );
		return this.driver.encodes ? value : this.unserialize( value );
	},
	set: function( key, value )
	{
		this.driver.set( key, this.driver.encodes ? value : this.serialize( value ) );
	},
	del: function( key )
	{
		this.driver.del( key );
	},
	flush: function()
	{
		this.driver.flush();
	},
	driver : undefined,
	encoders : [],
	decoders : [],
	serialize: function( value )
	{
		var that = this;
		
		$.each( this.encoders, function()
		{
			var serializer = that.serializers[ this + "" ];
			if( !serializer || !serializer.encode )
				return true; // continue;
			try
			{
				value = serializer.encode( value );
			}
			catch( e ){}
		});

		return value;
	},
	unserialize: function( value )
	{
		var that = this;
		if( !value )
			return value;
		
		$.each( this.decoders, function()
		{
			var serializer = that.serializers[ this + "" ];
			if( !serializer || !serializer.decode )
				return true; // continue;

			value = serializer.decode( value );
		});

		return value;
	}
});


/**********************************************************************************
 * $.store drivers
 **********************************************************************************/

$.store.drivers = {
	// Firefox 3.5, Safari 4.0, Chrome 5, Opera 10.5, IE8
	'localStorage': {
		// see https://developer.mozilla.org/en/dom/storage#localStorage
		ident: "$.store.drivers.localStorage",
		scope: 'browser',
		available: function()
		{
			try
			{
				// Firefox won't allow localStorage if cookies are disabled
				if (!!window.localStorage) {
					// Safari's "Private" mode throws a QUOTA_EXCEEDED_ERR on setItem
					window.localStorage.setItem("jQuery Store Availability test", true);
					window.localStorage.removeItem("jQuery Store Availability test");
					return true;
				};
				return false;
			}
			catch(e)
			{
				return false;
			}
		},
		init: $.noop,
		get: function( key )
		{
			return window.localStorage.getItem( key );
		},
		set: function( key, value )
		{
			window.localStorage.setItem( key, value );
		},
		del: function( key )
		{
			window.localStorage.removeItem( key );
		},
		flush: function()
		{
			window.localStorage.clear();
		}
	},
	
	// IE6, IE7
	'userData': {
		// see http://msdn.microsoft.com/en-us/library/ms531424.aspx
		ident: "$.store.drivers.userData",
		element: null,
		nodeName: 'userdatadriver',
		scope: 'browser',
		initialized: false,
		available: function()
		{
			try
			{
				return !!( document.documentElement && document.documentElement.addBehavior );
			}
			catch(e)
			{
				return false;
			}
		},
		init: function()
		{
			// $.store can only utilize one userData store at a time, thus avoid duplicate initialization
			if( this.initialized )
				return;
			
			try
			{
				// Create a non-existing element and append it to the root element (html)
				this.element = document.createElement( this.nodeName );
				document.documentElement.insertBefore( this.element, document.getElementsByTagName('title')[0] );
				// Apply userData behavior
				this.element.addBehavior( "#default#userData" );
				this.initialized = true;
			}
			catch( e )
			{
				return false; 
			}
		},
		get: function( key )
		{
			this.element.load( this.nodeName );
			return this.element.getAttribute( key );
		},
		set: function( key, value )
		{
			this.element.setAttribute( key, value );
			this.element.save( this.nodeName );
		},
		del: function( key )
		{
			this.element.removeAttribute( key );
			this.element.save( this.nodeName );
			
		},
		flush: function()
		{
			// flush by expiration
			var attrs = this.element.xmlDocument.firstChild.attributes;
			for (var i = attrs.length - 1; i >= 0; i--) {
				this.element.removeAttribute( attrs[i].nodeName );
			}
        		this.element.save( this.nodeName );
		}
	},
	
	// most other browsers
	'windowName': {
		ident: "$.store.drivers.windowName",
		scope: 'window',
		cache: {},
		encodes: true,
		available: function()
		{
			return true;
		},
		init: function()
		{
			this.load();
		},
		save: function()
		{
			window.name = $.store.serializers.json.encode( this.cache );
		},
		load: function()
		{
			try
			{
				this.cache = $.store.serializers.json.decode( window.name + "" );
				if( typeof this.cache != "object" )
					this.cache = {};
			}
			catch(e)
			{
				this.cache = {};
				window.name = "{}";
			}
		},
		get: function( key )
		{
			return this.cache[ key ];
		},
		set: function( key, value )
		{
			this.cache[ key ] = value;
			this.save();
		},
		del: function( key )
		{
			try
			{
				delete this.cache[ key ];
			}
			catch(e)
			{
				this.cache[ key ] = undefined;
			}
			
			this.save();
		},
		flush: function()
		{
			window.name = "{}";
		}
	}
};

/**********************************************************************************
 * $.store serializers
 **********************************************************************************/

$.store.serializers = {
	
	'json': {
		ident: "$.store.serializers.json",
		init: function( encoders, decoders )
		{
			encoders.push( "json" );
			decoders.push( "json" );
		},
		encode: JSON.stringify,
		decode: JSON.parse
	},
	
	// TODO: html serializer
	// 'html' : {},
	
	'xml': {
		ident: "$.store.serializers.xml",
		init: function( encoders, decoders )
		{
			encoders.unshift( "xml" );
			decoders.push( "xml" );
		},
		
		// wouldn't be necessary if jQuery exposed this function
		isXML: function( value )
		{
			var documentElement = ( value ? value.ownerDocument || value : 0 ).documentElement;
			return documentElement ? documentElement.nodeName.toLowerCase() !== "html" : false;
		},

		// encodes a XML node to string (taken from $.jStorage, MIT License)
		encode: function( value )
		{
			if( !value || value._serialized || !this.isXML( value ) )
				return value;

			var _value = { _serialized: this.ident, value: value };
			
			try
			{
				// Mozilla, Webkit, Opera
				_value.value = new XMLSerializer().serializeToString( value );
				return _value;
			}
			catch(E1)
			{
				try
				{
					// Internet Explorer
					_value.value = value.xml;
					return _value;
				}
				catch(E2){}
			}
			
			return value;
		},
		
		// decodes a XML node from string (taken from $.jStorage, MIT License)
		decode: function( value )
		{
			if( !value || !value._serialized || value._serialized != this.ident )
				return value;

			var dom_parser = ( "DOMParser" in window && (new DOMParser()).parseFromString );
			if( !dom_parser && window.ActiveXObject )
			{
				dom_parser = function( _xmlString )
				{
					var xml_doc = new ActiveXObject( 'Microsoft.XMLDOM' );
					xml_doc.async = 'false';
					xml_doc.loadXML( _xmlString );
					return xml_doc;
				}
			}

			if( !dom_parser )
			{
				return undefined;
			}
			
			value.value = dom_parser.call(
				"DOMParser" in window && (new DOMParser()) || window, 
				value.value, 
				'text/xml'
			);
			
			return this.isXML( value.value ) ? value.value : undefined;
		}
	}
};

})(jQuery);
/*!
 * jQuery postMessage - v0.5 - 9/11/2009
 * http://benalman.com/projects/jquery-postmessage-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery postMessage: Cross-domain scripting goodness
//
// *Version: 0.5, Last updated: 9/11/2009*
// 
// Project Home - http://benalman.com/projects/jquery-postmessage-plugin/
// GitHub       - http://github.com/cowboy/jquery-postmessage/
// Source       - http://github.com/cowboy/jquery-postmessage/raw/master/jquery.ba-postmessage.js
// (Minified)   - http://github.com/cowboy/jquery-postmessage/raw/master/jquery.ba-postmessage.min.js (0.9kb)
// 
// About: License
// 
// Copyright (c) 2009 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// This working example, complete with fully commented code, illustrates one
// way in which this plugin can be used.
// 
// Iframe resizing - http://benalman.com/code/projects/jquery-postmessage/examples/iframe/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with and what browsers it has been tested in.
// 
// jQuery Versions - 1.3.2
// Browsers Tested - Internet Explorer 6-8, Firefox 3, Safari 3-4, Chrome, Opera 9.
// 
// About: Release History
// 
// 0.5 - (9/11/2009) Improved cache-busting
// 0.4 - (8/25/2009) Initial release

(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  // A few vars used in non-awesome browsers.
  var interval_id,
    last_hash,
    cache_bust = 1,
    
    // A var used in awesome browsers.
    rm_callback,
    
    // A few convenient shortcuts.
    window = this,
    FALSE = false,
    
    // Reused internal strings.
    postMessage = 'postMessage',
    addEventListener = 'addEventListener',
    
    p_receiveMessage,
    
    // I couldn't get window.postMessage to actually work in Opera 9.64!
    has_postMessage = window[postMessage];
  
  // Method: jQuery.postMessage
  // 
  // This method will call window.postMessage if available, setting the
  // targetOrigin parameter to the base of the target_url parameter for maximum
  // security in browsers that support it. If window.postMessage is not available,
  // the target window's location.hash will be used to pass the message. If an
  // object is passed as the message param, it will be serialized into a string
  // using the jQuery.param method.
  // 
  // Usage:
  // 
  // > jQuery.postMessage( message, target_url [, target ] );
  // 
  // Arguments:
  // 
  //  message - (String) A message to be passed to the other frame.
  //  message - (Object) An object to be serialized into a params string, using
  //    the jQuery.param method.
  //  target_url - (String) The URL of the other frame this window is
  //    attempting to communicate with. This must be the exact URL (including
  //    any query string) of the other window for this script to work in
  //    browsers that don't support window.postMessage.
  //  target - (Object) A reference to the other frame this window is
  //    attempting to communicate with. If omitted, defaults to `parent`.
  // 
  // Returns:
  // 
  //  Nothing.
  
  $[postMessage] = function( message, target_url, target ) {
    if ( !target_url ) { return; }
    
    // Serialize the message if not a string. Note that this is the only real
    // jQuery dependency for this script. If removed, this script could be
    // written as very basic JavaScript.
    message = typeof message === 'string' ? message : $.param( message );
    
    // Default to parent if unspecified.
    target = target || parent;
    
    if ( has_postMessage ) {
      // The browser supports window.postMessage, so call it with a targetOrigin
      // set appropriately, based on the target_url parameter.
      target[postMessage]( message, target_url.replace( /([^:]+:\/\/[^\/]+).*/, '$1' ) );
      
    } else if ( target_url ) {
      // The browser does not support window.postMessage, so set the location
      // of the target to target_url#message. A bit ugly, but it works! A cache
      // bust parameter is added to ensure that repeat messages trigger the
      // callback.
      target.location = target_url.replace( /#.*$/, '' ) + '#' + (+new Date) + (cache_bust++) + '&' + message;
    }
  };
  
  // Method: jQuery.receiveMessage
  // 
  // Register a single callback for either a window.postMessage call, if
  // supported, or if unsupported, for any change in the current window
  // location.hash. If window.postMessage is supported and source_origin is
  // specified, the source window will be checked against this for maximum
  // security. If window.postMessage is unsupported, a polling loop will be
  // started to watch for changes to the location.hash.
  // 
  // Note that for simplicity's sake, only a single callback can be registered
  // at one time. Passing no params will unbind this event (or stop the polling
  // loop), and calling this method a second time with another callback will
  // unbind the event (or stop the polling loop) first, before binding the new
  // callback.
  // 
  // Also note that if window.postMessage is available, the optional
  // source_origin param will be used to test the event.origin property. From
  // the MDC window.postMessage docs: This string is the concatenation of the
  // protocol and "://", the host name if one exists, and ":" followed by a port
  // number if a port is present and differs from the default port for the given
  // protocol. Examples of typical origins are https://example.org (implying
  // port 443), http://example.net (implying port 80), and http://example.com:8080.
  // 
  // Usage:
  // 
  // > jQuery.receiveMessage( callback [, source_origin ] [, delay ] );
  // 
  // Arguments:
  // 
  //  callback - (Function) This callback will execute whenever a <jQuery.postMessage>
  //    message is received, provided the source_origin matches. If callback is
  //    omitted, any existing receiveMessage event bind or polling loop will be
  //    canceled.
  //  source_origin - (String) If window.postMessage is available and this value
  //    is not equal to the event.origin property, the callback will not be
  //    called.
  //  source_origin - (Function) If window.postMessage is available and this
  //    function returns false when passed the event.origin property, the
  //    callback will not be called.
  //  delay - (Number) An optional zero-or-greater delay in milliseconds at
  //    which the polling loop will execute (for browser that don't support
  //    window.postMessage). If omitted, defaults to 100.
  // 
  // Returns:
  // 
  //  Nothing!
  
  $.receiveMessage = p_receiveMessage = function( callback, source_origin, delay ) {
    if ( has_postMessage ) {
      // Since the browser supports window.postMessage, the callback will be
      // bound to the actual event associated with window.postMessage.
      
      if ( callback ) {
        // Unbind an existing callback if it exists.
        rm_callback && p_receiveMessage();
        
        // Bind the callback. A reference to the callback is stored for ease of
        // unbinding.
        rm_callback = function(e) {
          if ( ( typeof source_origin === 'string' && e.origin !== source_origin )
            || ( $.isFunction( source_origin ) && source_origin( e.origin ) === FALSE ) ) {
            return FALSE;
          }
          callback( e );
        };
      }
      
      if ( window[addEventListener] ) {
        window[ callback ? addEventListener : 'removeEventListener' ]( 'message', rm_callback, FALSE );
      } else {
        window[ callback ? 'attachEvent' : 'detachEvent' ]( 'onmessage', rm_callback );
      }
      
    } else {
      // Since the browser sucks, a polling loop will be started, and the
      // callback will be called whenever the location.hash changes.
      
      interval_id && clearInterval( interval_id );
      interval_id = null;
      
      if ( callback ) {
        delay = typeof source_origin === 'number'
          ? source_origin
          : typeof delay === 'number'
            ? delay
            : 100;
        
        interval_id = setInterval(function(){
          var hash = document.location.hash,
            re = /^#?\d+&/;
          if ( hash !== last_hash && re.test( hash ) ) {
            last_hash = hash;
            callback({ data: hash.replace( re, '' ) });
          }
        }, delay );
      }
    }
  };
  
})(jQuery);

(function(c,q){var m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function n(){var b=c(j),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function p(b){k(b.target,"error"===b.type)}function k(b,a){b.src===m||-1!==c.inArray(b,l)||(l.push(b),a?h.push(b):j.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),r&&d.notifyWith(c(b),[a,e,c(j),c(h)]),e.length===l.length&&(setTimeout(n),e.unbind(".imagesLoaded",
p)))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():0,r=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),l=[],j=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",p).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)k(a,e.isBroken);else if(a.complete&&a.naturalWidth!==q)k(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=m,a.src=d}):
n();return d?d.promise(g):g}})(jQuery);
(function() {
  /*
    Main file with namespace and imports
  */  if (window.chms == null) {
    window.chms = {};
  }
  if (window.chms.utils === void 0) {
    window.chms.utils = {};
  }
}).call(this);
(function() {
  /*
    Initialize class on a dom elements.
  
    Search for a dom element with Class.ATTR_NAME attribute and pass it to
    the class constructor.
  
    Class must contains a static variable ATTR_NAME in order this to work.
  
    If class contains static variable ATTR_VALUE it would be used in a
    search selector.
  
    Also dom node must have a chms.utils.Autoinit.ATTR_NAME attribute
    This attribute indicated that dom element can be autoinited
  
    @example How to use autoinit
      chms.utils.Autoinit.init(someNs.MyClass);
      chms.utils.Autoinit.init(someNs.MyClass, $(".someElement"));
  */  chms.utils.Autoinit = (function() {
    function Autoinit() {}
    Autoinit.ATTR_NAME = "auto-init";
    Autoinit.init = function(cl, container, initFn) {
      var inited, selector;
      if (!cl.ATTR_NAME) {
        throw "chms.utils.Autoinit: ATTR_NAME in class missing!";
      }
      if (container == null) {
        container = $("body");
      }
      if (cl.ATTR_VALUE != null) {
        selector = "[" + cl.ATTR_NAME + "='" + cl.ATTR_VALUE + "'][" + chms.utils.Autoinit.ATTR_NAME + "]";
      } else {
        selector = "[" + cl.ATTR_NAME + "][" + chms.utils.Autoinit.ATTR_NAME + "]";
      }
      inited = [];
      $(selector, container).each(function() {
        var inst;
        if (initFn != null) {
          inst = initFn($(this), cl);
        } else {
          inst = new cl($(this));
        }
        return inited.push(inst);
      });
      return inited;
    };
    Autoinit.initAfterDom = function(cl, container, initFn) {
      return $(function() {
        return chms.utils.Autoinit.init(cl, container);
      });
    };
    return Autoinit;
  })();
}).call(this);
(function() {
  /*
    Queue
  */
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  chms.utils.Queue = (function() {
    function Queue() {
      this.clear = __bind(this.clear, this);
      this.overwrite = __bind(this.overwrite, this);
      this.shiftAndExecute = __bind(this.shiftAndExecute, this);
      this.popAndExecute = __bind(this.popAndExecute, this);
      this.executeAll = __bind(this.executeAll, this);
      this.add = __bind(this.add, this);      this.clear();
    }
    Queue.prototype.add = function(task) {
      return this._queue.push(task);
    };
    Queue.prototype.executeAll = function() {
      var task, _i, _len, _ref;
      _ref = this._queue;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        task = _ref[_i];
        task();
      }
      return this.clear();
    };
    Queue.prototype.popAndExecute = function() {
      var task;
      task = this._queue.pop();
      if (task != null) {
        return task();
      }
    };
    Queue.prototype.shiftAndExecute = function() {
      var task;
      task = this._queue.shift();
      if (task != null) {
        return task();
      }
    };
    Queue.prototype.overwrite = function(queue) {
      return this._queue = queue;
    };
    Queue.prototype.clear = function() {
      return this._queue = [];
    };
    return Queue;
  })();
}).call(this);
(function() {
  /*
    Queue where tasks executed in a time interval
  */
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; }, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  chms.utils.IntervalQueue = (function() {
    __extends(IntervalQueue, chms.utils.Queue);
    IntervalQueue.prototype.DEFAULT_INTERVAL_TIME = 1000;
    function IntervalQueue() {
      this.stop = __bind(this.stop, this);
      this.start = __bind(this.start, this);
      this.getInterval = __bind(this.getInterval, this);
      this.setInterval = __bind(this.setInterval, this);      IntervalQueue.__super__.constructor.apply(this, arguments);
      this.setInterval(this.DEFAULT_INTERVAL_TIME);
    }
    IntervalQueue.prototype.setInterval = function(time) {
      return this.intervalTime = time;
    };
    IntervalQueue.prototype.getInterval = function() {
      return this.intervalTime;
    };
    IntervalQueue.prototype.start = function() {
      return this.executioner = setInterval(this.shiftAndExecute, this.getInterval());
    };
    IntervalQueue.prototype.stop = function() {
      return clearInterval(this.executioner);
    };
    return IntervalQueue;
  })();
}).call(this);
(function() {
  /*
    It is just a flag what you can lock and unlock.
  
    For example: you can use it on animation to block UI
    so user can't do anything to break it.
  
    Also you can pass a element to constructor and locker
    will change chms.utils.Locker.ATTR arttribute on it
    to true of false, depend on lock state.
  
    @example Usage
      // use a lock method to set lock:
      locker.lock();
  
      // use a unlock method to unlock it:
      locker.unlock();
  
      // use a safeExec function to exec givan fucntion only if locker is unlocked:
      locker.safeExec(function(){ console.log("i'm unlocked") });
  
      // use a isLocked method to check locker locked or unlocked
      locker.isLocked();
  
      // locker also spawns a chms.utils.Locker.EVENT_LOCK_CHANGED on itself
      // so you can bind and listen it
      $(locker).bind(chms.utils.Locker.EVENT_LOCK_CHANGED, function(){console.log("lock changed");});
  
    @example Example of use
      var locker = new chms.utils.Locker()
  
      function setVal(val){
        locker.safeExec(function(){window.val = val});
      }
  
      function getVal(){return window.val;}
  
      setVal(0);
      console.log("val is: ", getVal());
      // val is 0
  
      locker.lock();
      setVal(1);
      console.log("val is: ", getVal());
      // val is 0
  
      locker.unlock();
      setVal(1);
      console.log("val is: ", getVal());
      // val is 1
  */
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  chms.utils.Locker = (function() {
    Locker.EVENT_LOCK_CHANGED = "chms.utils.Locker:ChangeLock";
    Locker.ATTR = "lock";
    function Locker(el) {
      this.executeAfterUnlock = __bind(this.executeAfterUnlock, this);
      this.safeExec = __bind(this.safeExec, this);
      this.isLocked = __bind(this.isLocked, this);
      this.updateLock = __bind(this.updateLock, this);
      this.unlock = __bind(this.unlock, this);
      this.lock = __bind(this.lock, this);      this.ATTR = chms.utils.Locker.ATTR;
      this.s = this.constructor;
      if (el != null) {
        this.el = el;
      }
      this.queue = [];
      this.updateLock(false);
    }
    Locker.prototype.lock = function() {
      return this.updateLock(true);
    };
    Locker.prototype.unlock = function() {
      var fn, _i, _len, _ref;
      this.updateLock(false);
      _ref = this.queue;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        fn = _ref[_i];
        fn();
      }
      return this.queue = [];
    };
    Locker.prototype.updateLock = function(value) {
      var spawner;
      this.locked = value;
      spawner = $(this);
      if (this.el != null) {
        this.el.attr(this.ATTR, value);
        spawner.add(this.el);
      }
      spawner.trigger({
        type: chms.utils.Locker.EVENT_LOCK_CHANGED,
        lock: this.locked
      });
      return this.locked;
    };
    Locker.prototype.isLocked = function() {
      return this.locked;
    };
    Locker.prototype.safeExec = function(fn) {
      if (!this.isLocked()) {
        fn();
        return true;
      } else {
        return false;
      }
    };
    Locker.prototype.executeAfterUnlock = function(fn) {
      if (this.isLocked()) {
        this.queue.push(fn);
        return false;
      } else {
        fn();
        return true;
      }
    };
    return Locker;
  })();
}).call(this);
(function() {
  /*
    Mixins for javascript
  */  chms.utils.Mixin = (function() {
    function Mixin(to) {
      if (to != null) {
        chms.utils.Mixin.mix(to, this);
      }
    }
    Mixin.mix = function(cl, mixin) {
      var name, value;
      for (name in mixin) {
        value = mixin[name];
        if (name !== "constructor") {
          switch (typeof value) {
            case "function":
              cl[name] = value.bind(cl);
              break;
            default:
              cl[name] = value;
          }
        }
      }
    };
    return Mixin;
  })();
}).call(this);
(function() {
  /*
    Дата сторедж с глобальной точкой доступа
  */
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  chms.utils.Singletonizer = (function() {
    function Singletonizer() {
      this.touch = __bind(this.touch, this);
      this.get = __bind(this.get, this);
      this.add = __bind(this.add, this);      if (!chms.utils.Singletonizer.__instance) {
        chms.utils.Singletonizer.__instance = this;
        this._data = {};
      } else {
        return chms.utils.Singletonizer.__instance;
      }
    }
    Singletonizer.prototype.add = function(key, value) {
      return this._data[key] = value;
    };
    Singletonizer.prototype.get = function(key) {
      return this._data[key];
    };
    Singletonizer.prototype.touch = function(key, value) {
      if (this._data[key] == null) {
        this._data[key] = value;
      }
      return this.get(key);
    };
    return Singletonizer;
  })();
}).call(this);
(function() {
  /*
    Generates a uniq number.
  */
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  chms.utils.Uniq = (function() {
    function Uniq() {
      this.gen = __bind(this.gen, this);      if (chms.utils.Uniq.__instance == null) {
        chms.utils.Uniq.__instance = this;
        this.flows = {
          "default": 0
        };
      } else {
        return chms.utils.Uniq.__instance;
      }
    }
    Uniq.prototype.gen = function(flow) {
      if (flow == null) {
        flow = "default";
      }
      if (this.flows[flow] == null) {
        this.flows[flow] = 0;
      }
      this.flows[flow]++;
      return this.flows[flow];
    };
    return Uniq;
  })();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  helpers.Application = (function() {
    function Application() {
      this.Application = __bind(this.Application, this);
      this.Application = __bind(this.Application, this);
      this.Application = __bind(this.Application, this);
      this.Application = __bind(this.Application, this);
    }
    Application.capitalize = function(str) {
      return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    };
    Application.simpleSanitize = function(str) {
      if (str != null) {
        return str.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&');
      } else {
        return;
      }
    };
    Application.retinizeImg = function(lowDpi, highDpi) {
      var res;
      res = [];
      if (lowDpi) {
        res.push("" + lowDpi + " 1x");
      }
      if (highDpi) {
        res.push("" + highDpi + " 2x");
      }
      return "src='" + (lowDpi || highDpi || '') + "' srcset='" + (res.join(',')) + "'";
    };
    Application.specificImgVersion = function(object, key, version, missing) {
      var replace, src, template;
      if (missing == null) {
        missing = void 0;
      }
      if ((object != null) && (object[key] != null)) {
        template = object[key].template;
        replace = function(v) {
          return template.replace('%{version}', v);
        };
        if (template != null) {
          src = this.retinizeImg(replace(version), replace(version + "_2x"));
        } else {
          src = "src=\"" + (Params.get('missing_userpic')) + "\"";
        }
        return src;
      } else {
        return "";
      }
    };
    Application.setAvatarAttrs = function(el, template, version) {
      var missing, replace;
      missing = Params.get('missing_userpic');
      replace = __bind(function(v) {
        return template.replace('%{version}', v);
      }, this);
      if (template != null) {
        el.attr({
          src: replace(version),
          srcset: "" + (replace(version)) + " 1x, " + (replace(version + '_2x')) + " 2x"
        });
        return picturefill({
          elements: el
        });
      } else {
        return el.attr({
          src: missing,
          srcset: ''
        });
      }
    };
    Application.smartDateTime = function(object, ago) {
      var c, d, getDiff, m, n, stamp;
      c = moment(object.created_at);
      n = moment(new Date());
      getDiff = __bind(function(ti) {
        return Math.abs(c.diff(n, ti));
      }, this);
      if ((d = getDiff("years")) >= 1) {
        m = I18n.t("smart_datetime_new.month_names")[c.month()];
        stamp = I18n.t("smart_datetime_new.year_ago", {
          day: c.date(),
          month: m,
          year: c.year()
        });
        ago = false;
      } else if ((d = getDiff("hours")) >= 72) {
        m = I18n.t("smart_datetime_new.month_names")[c.month()];
        stamp = I18n.t("smart_datetime_new.current_year", {
          day: c.date(),
          month: m
        });
        ago = false;
      } else if (d >= 24 && d < 72) {
        stamp = I18n.t("smart_datetime_new.days", {
          days: getDiff("days")
        });
      } else if (d >= 1) {
        stamp = I18n.t("smart_datetime_new.hours", {
          hours: d
        });
      } else if ((d = getDiff("minutes")) >= 1) {
        stamp = I18n.t("smart_datetime_new.minutes", {
          minutes: d
        });
      } else {
        stamp = I18n.t("smart_datetime_new.seconds", {
          seconds: getDiff("seconds")
        });
      }
      if (ago) {
        stamp = stamp + (" " + (I18n.t('smart_datetime.ago')));
      }
      return stamp;
    };
    Application.getCoubPermalinkFromUrl = function(url) {
      var oUrl, p, v;
      oUrl = new URLRepresent(url);
      if ((oUrl.getDomain() != null) && (oUrl.getDomain().match(/(coub|localhost)/gi) != null)) {
        if ((p = oUrl.getPath()) != null) {
          if ((v = p.match(/view\/([\w\d]+)$/i)) != null) {
            if (v[1] != null) {
              return v[1];
            }
          }
        }
      }
    };
    Application.injectUberUrl = function(url) {
      var pat, r;
      if (url.match("uber")) {
        return url;
      } else {
        pat = /\/?((\?[;&\w\d%_\.~+=-]*)?(\#[\-\w\d_]*)?)$/;
        r = url.replace(pat, "/uber$1");
        return r;
      }
    };
    Application.injectUberUrlIfAdmin = function(url) {
      if (GlobalState.USER.isAdmin()) {
        return helpers.Application.injectUberUrl(url);
      } else {
        return url;
      }
    };
    Application.getSourceUrl = function(coub) {
      return Routes.source_path(coub.raw_video_id) + "?from_id=" + coub.id;
    };
    Application.getUserEnvInfo = function() {
      return "User agent info: " + window.navigator.userAgent + "<br/>Flash player version: " + (swfobject.getFlashPlayerVersion().major) + "<br/>Page url: " + window.location.href;
    };
    Application.renderStatsPixel = function(src) {
      src += "" + (src.indexOf('?') === -1 && '?' || '&') + "_=" + (Math.random());
      return $("<img src='" + src + "' style='position:absolute;left:-1000px;top:-1000px;' />").appendTo('body').load(function() {
        return $(this).remove();
      });
    };
    Application.isMissing = function(url) {
      if (url != null) {
        return url.match(/missing\.png$/i) != null;
      } else {
        return true;
      }
    };
    Application.roundToK = function(v) {
      var r;
      if (v >= 1000) {
        r = (v / 1000).toFixed(1).toString();
        return r.replace(/\.0$/, "") + "k";
      } else {
        return v;
      }
    };
    Application.number_with_delimiter = function(number, delimiter) {
      if (delimiter == null) {
        delimiter = ',';
      }
      return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + delimiter);
    };
    Application.handle429StatusError = function(xhr, action) {
      if (xhr.status === 429) {
        Growl.msg(I18n.ERRORS.too_fast[action], I18n.ERRORS.too_fast.slow_down);
        return true;
      }
      return false;
    };
    return Application;
  })();
}).call(this);
(function() {
  /*
    Хелпер для системы авторизации
  */  helpers.Auth = {
    errorMailAlreadyUsed: function(msg, action, inPopup) {
      var trigger;
      if (inPopup == null) {
        inPopup = false;
      }
      if (inPopup) {
        trigger = " <span data-dialog-change=" + action + " class='-color--dusty-gray'>" + (I18n.t("auth_popup." + action)) + "</span>";
      } else {
        trigger = " <span data-action=" + action + " class='-color--dusty-gray toggle-registration'>" + (I18n.t("auth_popup." + action)) + "</span>";
      }
      return msg + trigger;
    }
  };
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  helpers.Channel = (function() {
    function Channel() {
      this.Channel = __bind(this.Channel, this);
      this.Channel = __bind(this.Channel, this);
      this.Channel = __bind(this.Channel, this);
    }
    Channel.getBirthday = function(type, birthday) {
      switch (type) {
        case 'month':
          return moment(birthday).format('MMM');
        case 'day':
          return moment(birthday).format('D');
        default:
          return moment(birthday).format('YYYY');
      }
    };
    Channel.getProviderUserName = function(provider, authentications) {
      return $.map(authentications, function(e, i) {
        if (e.provider === provider) {
          return e.username_from_provider;
        } else {
          return '';
        }
      }).join('');
    };
    Channel.getSpecificParam = function(opts, gp) {
      var channel, key, value, _i, _len, _ref;
      key = _.keys(opts).join();
      value = _.values(opts).join();
      if (GlobalState.USER.isLogedIn()) {
        _ref = Params.getBranchValue("current_user.channels");
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          channel = _ref[_i];
          if (channel[key] === value) {
            return channel[gp];
          }
        }
      } else {

      }
    };
    Channel.presentChannels = function() {
      var channels, curentId, current;
      curentId = parseInt(Params.get("current_channel_id"));
      channels = Params.getBranchValue("current_user.channels");
      current = void 0;
      channels = _.reject(channels, function(channel) {
        var isCurrent;
        isCurrent = channel.id === curentId;
        if (isCurrent) {
          current = channel;
        }
        return isCurrent;
      });
      channels.unshift(current);
      return _.compact(channels);
    };
    Channel.findByParam = function(key, value) {
      return _.find(Params.getBranchValue("current_user.channels"), function(channel) {
        return channel[key] === value;
      });
    };
    Channel.hasId = function(id) {
      return _.include(helpers.Channel.mapIds(), id);
    };
    Channel.hasAuthentication = function(provider, authentications) {
      return _.contains($.map(authentications, function(e, i) {
        return e.provider;
      }), provider);
    };
    Channel.socialLink = function(contacts, provider) {
      return _.pluck([contacts], provider).join();
    };
    Channel.mapPermalinks = function(channels) {
      if (!(channels != null)) {
        channels = Params.getBranchValue("current_user.channels");
      }
      if (channels != null) {
        return channels.map(function(channel, i) {
          return channel.permalink;
        });
      } else {
        return [];
      }
    };
    Channel.mapIds = function(channels) {
      if (!(channels != null)) {
        channels = Params.getBranchValue("current_user.channels");
      }
      if (channels != null) {
        return channels.map(function(channel, i) {
          return channel.id;
        });
      } else {
        return [];
      }
    };
    Channel.getOtherUserChannels = function(id) {
      var channels;
      if (!(id != null)) {
        id = Params.get('current_channel_id');
      }
      channels = Params.getBranchValue("current_user.channels");
      return _.reject(channels, function(channel) {
        return channel.id === id;
      });
    };
    Channel.channelsToRecoub = function(id) {
      var channels;
      if (helpers.Channel.hasId(id)) {
        channels = helpers.Channel.getOtherUserChannels(id);
      } else {
        channels = Params.getBranchValue("current_user.channels");
      }
      return channels;
    };
    Channel.authOrder = function() {
      if (Params.get('ussr_ip')) {
        return ['vkontakte', 'facebook', 'twitter', 'google'];
      } else {
        return ['facebook', 'twitter', 'google', 'vkontakte'];
      }
    };
    Channel.friendshipStamp = function(friend, dontShowfollowers) {
      var followersCount, stamp;
      if (dontShowfollowers == null) {
        dontShowfollowers = false;
      }
      switch (friend.type) {
        case 'editorial':
        case 'suggested':
          if (!dontShowfollowers) {
            followersCount = friend.followers_count === 1 ? 'one' : 'more';
            stamp = friend.followers_count + I18n.t("profile.timeline.friendships_block.followers_title_" + followersCount);
          } else {
            stamp = '';
          }
          break;
        default:
          stamp = helpers.Channel.friendhipSocStamp(friend);
      }
      return stamp;
    };
    Channel.friendhipSocStamp = function(friend, socClass) {
      var provider, stamp, withIcon;
      if (socClass == null) {
        socClass = "-soc-i-sml-";
      }
      provider = friend.provider || friend.friend_from;
      withIcon = function(stamp) {
        return "<span class='stamp__provider'><i class='" + socClass + provider + "'></i>" + stamp + "</span>";
      };
      if (provider === 'twitter' && (friend.screen_name != null)) {
        stamp = withIcon("<a class='-color--tundora' href='//twitter.com/" + friend.screen_name + "' target='_blank'>@" + friend.screen_name + "</a>");
      } else if (provider === 'google' && (friend.email != null)) {
        stamp = withIcon("<a class='-color--tundora -undr' href='mailto:" + friend.email + "'>" + friend.email + "</a>");
      } else if (provider === 'facebook' && (friend.name_from_provider != null)) {
        stamp = withIcon("<a class='-color--tundora' href='//facebook.com/" + (friend.screen_name || friend.provider_uid) + "' target='_blank'>" + friend.name_from_provider + "</a>");
      } else if ((provider != null) && (friend.name_from_provider != null)) {
        stamp = withIcon(friend.name_from_provider);
      } else {
        stamp = '';
      }
      return stamp;
    };
    Channel.followedByKindStamp = function(channels, overallFollowCount) {
      var c, channelsHtml, count, first, last, sChannelsHtml, _i, _len, _ref;
      if (overallFollowCount == null) {
        overallFollowCount = 0;
      }
      if (channels.length <= 0) {
        return '';
      } else {
        channelsHtml = [];
        sChannelsHtml = "";
        _ref = channels.slice(0, 2);
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          channelsHtml.push(c.title);
        }
        if (channels.length === 1) {
          sChannelsHtml = channelsHtml.join("");
        } else {
          if (channels.length === 2 || !(overallFollowCount != null) || overallFollowCount === 0) {
            first = channelsHtml.slice(0, 1);
            last = channelsHtml[channelsHtml.length - 1];
          } else {
            first = channelsHtml.slice(0, 2);
            count = overallFollowCount + 1;
            last = count + "&nbsp;" + pluralize("other", count);
          }
          sChannelsHtml = first.join(", ") + " and " + last;
        }
      }
      return I18n.who_to_follow.kinds.followed.replace("%{channels}", sChannelsHtml);
    };
    Channel.friendshipKindStamp = function(friend) {
      var k, m, s;
      k = friend.kind;
      m = friend.meta;
      if (m != null) {
        if (k === "followed" && (m.channels != null)) {
          return helpers.Channel.followedByKindStamp(m.channels, m.follows_count);
        } else if (k === "liked" && (m.likes_count != null)) {
          s = m.likes_count + " " + pluralize("coub", m.likes_count);
          return I18n.who_to_follow.kinds.liked.replace("%{count}", s);
        } else if (k === "friends" && (m.channel != null)) {
          s = $("<a>", {
            href: Routes.channel_path(m.channel.permalink),
            text: m.channel.title
          })[0].outerHTML;
          return I18n.who_to_follow.kinds.friends.replace("%{friend}", s);
        }
      }
      if ((s = helpers.Channel.friendhipSocStamp(friend, "-soc-i-notifications-")).length > 0) {
        return s;
      } else {
        if (friend.description != null) {
          return friend.description;
        } else {
          return '';
        }
      }
    };
    Channel.friendshipProfileLink = function(friend) {
      switch (friend.friend_from) {
        case 'facebook':
          if (friend.screen_name || friend.provider_uid) {
            return "https://facebook.com/" + (friend.screen_name || friend.provider_uid);
          }
          break;
        case 'twitter':
          if (friend.screen_name) {
            return "https://twitter.com/" + friend.screen_name;
          }
      }
    };
    Channel.getGravatarUrl = function(email_hash, size, d404) {
      return "http://gravatar.com/avatar/" + email_hash + "?s=" + size + (d404 && '&d=404' || '');
    };
    Channel.followersCounter = function(count) {
      var type;
      type = count === 1 ? 'one' : 'more';
      return I18n.t("profile.followers_counter." + type, {
        count: count
      });
    };
    Channel.isMyChannel = function(channel) {
      var channels, ids;
      channels = Params.getBranchValue("current_user.channels");
      if (channels != null) {
        ids = channels.map(function(c) {
          return c.id;
        });
        return ids.indexOf(channel.id) !== -1;
      } else {
        return false;
      }
    };
    return Channel;
  })();
}).call(this);
(function() {
  /*
    Хелпер для дропдауна пользователя в шапке
  */
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  helpers.ChannelMenuDropdown = (function() {
    function ChannelMenuDropdown() {
      this.ChannelMenuDropdown = __bind(this.ChannelMenuDropdown, this);
    }
    ChannelMenuDropdown.getEditorLinks = function() {
      var add, links;
      links = [];
      add = __bind(function(u, t, p) {
        if (Params.getBranchValue(p)) {
          return links.push({
            url: u,
            text: t
          });
        }
      }, this);
      add(Routes.editor_coubs_path(), I18n.editor.pane, "permissions.can_index_editor_coubs");
      add(Routes.editor_tags_path(), I18n.editor.search_tags_pane, "permissions.can_index_search_tags");
      add(Routes.stats_path(), I18n.stats.pane, "permissions.can_index_stats");
      add(Routes.admin_path(), I18n.admin.pane, "current_user.is_admin");
      add(Routes.editor_saved_channels_path(), I18n.editor.saved_users, "permissions.can_index_editor_saved_channels");
      add(Routes.channels_stats_editor_channels_path(), I18n.editor.channels_stats, "permissions.can_channels_stats_channel_stats");
      add(Routes.explore_editor_delay_publishes_path(), I18n.editor.explore_queue, "permissions.can_index_explore_editor_delay_publishes");
      add(Routes.editors_stats_editor_coubs_path(), I18n.editor.editors_stats, "permissions.can_index_editors_stats_editor_coubs");
      add(Routes.ads_banners_path(), I18n.editor.banners_page, "permissions.can_index_ads_banners");
      add(Routes.avatar_moderation_editor_channels_path(), I18n.editor.avatar_moderation, "permissions.can_index_editor_avatar_moderation");
      add(Routes.editor_backgrounds_path(), I18n.editor.background_moderation, "permissions.can_index_editor_background_moderations");
      add(Routes.featured_channels_editor_channels_path(), I18n.editor.featured_channels, "permissions.can_index_editor_channels_featured_channels");
      add(Routes.editor_weekly_digests_path(), I18n.editor.weekly_digests, "permissions.can_index_editor_weekly_digest");
      return links;
    };
    return ChannelMenuDropdown;
  })();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.helpers.Coub = {
    getOriginalCoub: function(coub) {
      if (coub.type != null) {
        if (coub.type === 'Coub::Recoub') {
          return coub.recoub_to;
        } else {
          return coub;
        }
      } else {
        return coub;
      }
    },
    isRecoub: function(coub) {
      return coub.type === "Coub::Recoub";
    },
    /*
       Стемп это различные подписи под кобом: когда сделан, кем сделан и тд
      */
    externalDownloadStamp: function(coub, showEmbed) {
      var link, out, sourcePath;
      if (showEmbed == null) {
        showEmbed = true;
      }
      out = '';
      if (coub.external_download && showEmbed) {
        sourcePath = Routes.source_path({
          id: coub.raw_video_id
        }) + ("?from_id=" + coub.id);
        if (coub.external_download.has_embed) {
          link = $("<a>", {
            text: coub.external_download.type,
            href: coub.external_download.url,
            target: "_blank",
            "class": "-color--blue-ribbon -undr",
            type: 'embedPopup',
            source: sourcePath
          })[0].outerHTML;
          out = "from " + link;
        } else {
          out = I18n.t("coub.external_download.link", {
            url: coub.external_download.url,
            type: coub.external_download.type
          });
        }
      } else if (helpers.Coub.fromMobileApp(coub)) {
        out = helpers.Coub.mobileAppStamp(coub, "_blank");
      } else if (helpers.Coub.fromApplication(coub)) {
        out = I18n.t("coub.external_download.link", {
          url: coub.application.url,
          type: coub.application.name
        });
      }
      return out;
    },
    fromMobileApp: function(coub) {
      return coub.uploaded_by_ios_app || coub.uploaded_by_android_app;
    },
    fromApplication: function(coub) {
      return coub.application != null;
    },
    applicationStamp: function(coub) {
      return I18n.t("coub.external_download.link", {
        url: coub.application.url,
        type: coub.application.name
      });
    },
    mobileAppStamp: function(coub, target) {
      var getStamp, out;
      out = '';
      getStamp = function(os) {
        return I18n.t("coub.from_mobile_app", {
          url: Routes.app_promo_path(),
          target: target,
          os: os
        });
      };
      if (coub.uploaded_by_ios_app) {
        out = getStamp('iPhone');
      } else if (coub.uploaded_by_android_app) {
        out = getStamp('Android');
      }
      return out;
    },
    iosAppStamp: function(coub, target) {
      var out;
      coub = helpers.Coub.getOriginalCoub(coub);
      out = I18n.t("coub.from_app", {
        url: Routes.app_promo_path(),
        target: target
      });
      if (coub.uploaded_by_ios_app) {
        return out;
      } else {
        return "";
      }
    },
    coubUserStamp: function(coub) {
      var original, text, userLink;
      original = helpers.Coub.getOriginalCoub(coub);
      userLink = $("<a>", {
        text: original.channel.title,
        href: Routes.channel_path(original.channel.permalink),
        target: "_blank",
        "class": "-color--blue-ribbon -undr",
        title: original.channel.title,
        "widget-channel-dropdown": true,
        "auto-init": true,
        channel: widgets.ChannelDropdown.getChannelParam(original.channel)
      })[0].outerHTML;
      if (coub.type === "Coub::Recoub") {
        text = I18n.t("coub.original_by", {
          original: userLink
        });
      } else {
        text = I18n.t('coub.by', {
          name: userLink
        });
      }
      return text;
    },
    coubTime: function(coub) {
      return helpers.Application.smartDateTime(coub, false);
    },
    coubCreatedTimeAndIcons: function(coub) {
      return helpers.Coub.coubPrivacyIcon(coub) + this.coubTime(this.getOriginalCoub(coub));
    },
    cotdDate: function(coub) {
      coub = helpers.Coub.getOriginalCoub(coub);
      return moment(coub.cotd_at).format('MMMM Do');
    },
    coubPrivacyIcon: function(coub) {
      var types, visibility;
      visibility = coub.original_visibility_type;
      if (coub.banned === true) {
        visibility = 'banned';
      }
      types = ["private", "friends", "banned", "unlisted"];
      if (_.contains(types, visibility)) {
        return JST['app/site/templates/coub_block/parts/coub_stamp/coub_privacy_icon']({
          visibility: visibility
        });
      } else {
        return "";
      }
    },
    coubAudioTrack: function(coub) {
      return (coub.media_blocks != null) && coub.media_blocks.audio_track;
    },
    showNoteSign: function(coub) {
      var media;
      media = coub.media_block_audio;
      return !_.isEmpty(media);
    },
    showNSFWSign: function(coub) {
      return !helpers.Channel.isMyChannel(coub.channel) && helpers.Coub.isAdult(coub);
    },
    isAdult: function(coub) {
      return coub.age_restricted_by_admin || coub.age_restricted || coub.not_safe_for_work;
    },
    hasAudioAndDetectedByEchonest: function(coub) {
      return helpers.Coub.coubAudioTrack(coub) && coub.media_blocks.audio_track.title !== "Unknown";
    },
    videoSourceShouldBeShowed: function(coub) {
      return coub.video_block_banned === false && (coub.media_blocks != null) && ((coub.media_blocks.external_video != null) || (coub.media_blocks.external_video_manual != null));
    },
    changeVideoSourceToManualIfExist: function(coub) {
      var newCoub;
      if ((coub.media_blocks != null) && (coub.media_blocks.external_video_manual != null)) {
        newCoub = _.clone(coub);
        newCoub.media_blocks.external_video = newCoub.media_blocks.external_video_manual;
        return newCoub;
      } else {
        return coub;
      }
    },
    ageRestrictedForCurrentUser: function(coub) {
      var authorId, cu, isar, legalAge, notConfirmedAgeInThisSession, notLoggedOrNotAuthorAndChild;
      coub = helpers.Coub.getOriginalCoub(coub);
      cu = {
        id: Params.getBranchValue("current_user.id"),
        age: Params.getBranchValue("current_user.age")
      };
      authorId = coub.channel_id;
      isar = coub.age_restricted_by_admin || coub.age_restricted || coub.not_safe_for_work;
      legalAge = 18;
      notConfirmedAgeInThisSession = Params.get('not_confirmed_age');
      notLoggedOrNotAuthorAndChild = !Params.get("is_logged_in") || (authorId !== cu.id && (!cu.age || cu.age < legalAge));
      return isar && notLoggedOrNotAuthorAndChild && notConfirmedAgeInThisSession;
    },
    visibleForCurrentUser: function(coub) {
      return !(coub.error != null);
    },
    disabledSocialAction: function(coub) {
      switch (coub.visibility_type) {
        case 'private':
          return true;
        case 'friends':
          return true;
        case 'unlisted':
          return true;
        default:
          return false;
      }
    },
    getTitle: function(coub) {
      var originalUrl, piece, pieces, title, _i, _len;
      title = utils.stripTags(coub.title);
      title = title.replace(new RegExp(Params.get("coub_hash_tag_regexp"), "gi"), __bind(function(str) {
        return $("<a>", {
          text: str,
          href: Routes.search_path({
            q: str.toLowerCase()
          }),
          "class": "-undr -color--emperor",
          target: "_blank"
        })[0].outerHTML;
      }, this));
      if (!helpers.Coub.isCurrentPageCoubPage(coub)) {
        pieces = title.split(/<a[^>]+>\#[^>]+<\/a>/gi);
        originalUrl = helpers.Coub.getOriginalCoub(coub).permalink;
        for (_i = 0, _len = pieces.length; _i < _len; _i++) {
          piece = pieces[_i];
          if (piece.trim() !== '') {
            title = title.replace(piece, __bind(function() {
              return $("<a>", {
                href: Routes.view_coub_by_permalink_path({
                  id: originalUrl
                }),
                html: piece,
                target: "_blank",
                title: piece
              })[0].outerHTML;
            }, this));
          }
        }
      }
      return title;
    },
    isEditable: function(coub) {
      return _.isNumber(coub.raw_video_id);
    },
    isDone: function(coub) {
      return coub.type !== "Coub::Temp" && coub.is_done;
    },
    isReuseable: function(coub) {
      if (coub.video_block_banned) {
        return false;
      }
      if (coub.allow_reuse) {
        return true;
      } else {
        return Params.get('is_logged_in') && helpers.Coub.isCurrentUserAuthorOf(coub) && coub.raw_video_id !== '';
      }
    },
    coubTags: function(coub, type) {
      var tags;
      tags = $.map(coub.tags, function(n) {
        return n.title;
      });
      if (type === 'edit') {
        return tags.join(",");
      } else {
        return tags;
      }
    },
    albumCover: function(coub, link) {
      var cover, coverClass, out, src;
      src = helpers.Application.retinizeImg(coub.media_blocks.audio_track.image, coub.media_blocks.audio_track.image_retina);
      coverClass = link != null ? '-ribbon -rounded' : '';
      cover = "<img " + src + " class='image " + coverClass + "' width='112' height='112'>";
      if (link != null) {
        out = ("<a href='" + link + "' class='-ribbon itunes_link' target='_blank'>") + cover + "</a>";
        return out;
      } else {
        return cover;
      }
    },
    musicStamp: function(coub, link) {
      var artist, out, stamp, title;
      if (coub.media_blocks.audio_track.meta != null) {
        artist = coub.media_blocks.audio_track.meta.artist;
      } else {
        artist = "";
      }
      title = "<span class='hbold -truncate-text'>" + coub.media_blocks.audio_track.title + "</span>";
      stamp = [title, artist].join("");
      if (link != null) {
        out = "<a href='" + link + "' target='_blank' class='itunes_link -ribbon-hvr-text'>" + stamp + "</a>";
        return out;
      } else {
        return stamp;
      }
    },
    mediaThumbnail: function(thumbnail, hdpiThumbnail) {
      var src;
      if (thumbnail != null) {
        src = helpers.Application.retinizeImg(thumbnail, hdpiThumbnail);
        return "<img " + src + " class='image img-placeholder' width='112' height='70'>";
      } else {
        return "<div class='blank'></div>";
      }
    },
    hasAbusesOn: function(coub, reason) {
      var abuses, cuId, reasons;
      coub = helpers.Coub.getOriginalCoub(coub);
      cuId = Params.getBranchValue("current_user.id");
      abuses = $.map(coub.abuses, function(a) {
        return a.channel_id;
      });
      reasons = $.map(coub.abuses, function(a) {
        return a.reason;
      });
      return _.contains(abuses, cuId) && _.contains(reasons, reason);
    },
    showMedia: function(coub) {
      var show;
      show = helpers.Coub.isCurrentUserAuthorOf(coub) || coub.allow_reuse;
      show = show || coub.external_download !== false;
      show = show || ((coub.media_blocks != null) && (coub.media_blocks.external_video_manual != null));
      return show || helpers.Coub.hasAudioAndDetectedByEchonest(coub);
    },
    imgListenerAttrs: function(coub) {
      var attrs;
      coub = helpers.Coub.getOriginalCoub(coub);
      if (Params.getBranchValue("profile_channel.id") === coub.channel_id) {
        attrs = 'auto-init widget-avatar-change-listener';
      } else {
        attrs = '';
      }
      return attrs;
    },
    getWIAText: function(device) {
      var lang, platform;
      if (device == null) {
        device = void 0;
      }
      lang = GlobalState.COUNTRY.isExUssr() && '_ru' || '';
      platform = device || GlobalState.PLATFORM.hasApp();
      if (platform === 'android' && (navigator.userAgent.indexOf('FB_IAB') !== -1 || navigator.userAgent.indexOf('Twitter') !== -1)) {
        return I18n.embed["get_app" + lang];
      } else {
        return I18n.embed["open_in_app" + lang];
      }
    },
    getViewsText: function(count) {
      var key, last_digit;
      count = count.toString();
      last_digit = count[count.length - 1];
      key = GlobalState.COUNTRY.isExUssr() ? last_digit === '1' ? '_singular_ru' : last_digit === '2' || last_digit === '3' || last_digit === '4' ? '_double_ru' : '_plural_ru' : '';
      return "" + count + " " + I18n.embed['views' + key];
    },
    getWIATextExtended: function(device) {
      var lang;
      if (device == null) {
        device = void 0;
      }
      lang = Params.get("ussr_ip") ? '_ru' : '';
      return {
        long: helpers.Coub.getWIAText(device),
        short_title: I18n.wia_block["title" + lang],
        short_button: I18n.wia_block["get_the_app" + lang]
      };
    },
    showWIAButton: function() {
      var device, devices, isPinterest, ref;
      device = GlobalState.PLATFORM;
      devices = (device.isIos() || device.isWindophone() || device.isAndroidNative()) && device.isMobile();
      ref = document.referrer;
      isPinterest = ref && ref.indexOf('pinterest') !== -1;
      return devices && !isPinterest;
    },
    isCurrentPageCoubPage: function(coub) {
      return document.location.pathname.match(Routes.view_coub_by_permalink_path(coub.permalink)) != null;
    },
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    },
    middot: function() {
      return '&nbsp;&#183;&nbsp;';
    },
    getFileVersion: __bind(function(versions, versionName) {
      if (versions && versions.template) {
        return versions.template.replace("%{version}", versionName);
      } else {
        return "";
      }
    }, this),
    getBigSocialButtonsOrder: __bind(function() {
      var order;
      order = {
        visible: ["facebook", "reddit"],
        hidden: ["facebook", "twitter", "tumblr", "reddit", "pinterest"]
      };
      if (GlobalState.COUNTRY.isExUssr()) {
        order.visible.unshift("vkontakte");
        order.hidden.unshift("vkontakte");
      } else {
        order.visible.splice(order.visible.indexOf('reddit'), 0, 'twitter');
      }
      if (GlobalState.PLATFORM.isMobile()) {
        order.visible.push("watsapp");
        order.visible = _.without(order.visible, 'reddit');
      }
      return order;
    }, this),
    isSharingButtonsActive: __bind(function(coub) {
      var ovt;
      ovt = coub.original_visibility_type;
      return !coub.banned && (ovt === "public" || ovt === "unlisted") && coub.is_done;
    }, this),
    getAbuseIdForReason: __bind(function(coub, reason) {
      var curAbuse;
      if (!_.isArray(coub.abuses)) {
        return "";
      }
      curAbuse = _.detect(coub.abuses, (function(ab) {
        return ab.reason === reason;
      }));
      if (curAbuse) {
        return curAbuse.id;
      } else {
        return "";
      }
    }, this),
    isCurrentUserAuthorOf: function(coub) {
      return helpers.Channel.hasId(coub.channel_id);
    },
    calculatePropertiesForViewIfNotComputed: function(coub) {
      var da, ratio, sizes, t, version;
      if (!coub.computed) {
        coub.computed = {};
        if (!coub.render) {
          coub.render = {};
        }
        if (coub.render["card-type"] !== void 0) {
          coub.computed.cardType = blocks.coub.CardTypes.types[coub.render["card-type"]];
        } else {
          coub.computed.cardType = blocks.coub.CardTypes.getDefaultCardType();
        }
        sizes = coub[coub.computed.cardType.sizeProp] || [640, 360];
        if (coub.render["card-type"] === blocks.coub.CardTypes.types.page.name) {
          da = helpers.Coub.calculateDimsAndAlignment(sizes);
          coub.computed.sizes = da.sizes;
          coub.computed.alignment = da.alignment;
          coub.computed.size = da.size;
        } else {
          coub.computed.sizes = sizes;
          ratio = coub.computed.sizes[0] / coub.computed.sizes[1];
          if (coub.computed.sizes[1] >= coub.computed.sizes[0] || (coub.render["card-type"] === blocks.coub.CardTypes.types.page.name && (0.9 <= ratio && ratio <= 1.1))) {
            coub.computed.alignment = "vertical";
          } else {
            coub.computed.alignment = "horizontal";
          }
        }
        coub.computed.showSharing = coub.render["no-sharing"] !== "true" && helpers.Coub.visibleForCurrentUser(coub);
        coub.computed.cardClassName = blocks.coub.CardTypes.getClassName(coub.computed.cardType);
        coub.computed.cardStatus = blocks.coub.CardStatuses.getCardStatusByCoub(coub);
        if (coub.first_frame_versions !== void 0 && (t = coub.first_frame_versions.template) !== void 0) {
          version = (coub.computed.size != null) && coub.computed.size === 'big' && '0' || '1';
          coub.computed.firstFrameUrl = t.replace('%{version}', coub.first_frame_versions.versions[version]);
        } else {
          coub.computed.firstFrameUrl = "";
        }
      }
      return coub;
    },
    shortNameCount: function(count, type) {
      var c, r;
      if (count && (type != null) && type === blocks.coub.CardTypes.types.small.name) {
        c = parseInt(count);
        if (c >= 1000) {
          r = (c / 1000).toString();
          r = r.match(/(\d+\.?\d?)/)[0];
          r = r.replace(/\.0$/, "");
          return "" + r + "K";
        }
      }
      return count;
    },
    aspectRatio: function(width, height) {
      var ratio;
      ratio = height / width;
      return {
        percent: (ratio * 100).toFixed(2) + '%',
        val: ratio.toFixed(4)
      };
    },
    calculateDimsAndAlignment: function(sizes) {
      var alignment, coubRatio, max, min, preset, ratios, size, width;
      coubRatio = sizes[0] / sizes[1];
      width = sizes[0];
      alignment = 'horizontal';
      size = 'big';
      ratios = {
        400: [4 / 4.1, 4 / 99, 'tiny'],
        500: [4 / 3.5, 4 / 4.1, 'small'],
        640: [4 / 2.5, 4 / 3.5, 'med']
      };
      for (preset in ratios) {
        min = ratios[preset][1];
        max = ratios[preset][0];
        if (coubRatio >= min && coubRatio <= max) {
          width = parseInt(preset);
          alignment = 'vertical';
          size = ratios[preset][2];
          break;
        }
      }
      return {
        sizes: [width, width / sizes[0] * sizes[1]],
        alignment: alignment,
        size: size
      };
    },
    isPromoPage: function() {
      return $('body').hasClass('promo-page');
    },
    rightCoubTitle: function(count) {
      if (count === 1) {
        return "1 coub";
      } else {
        return "" + count + " coubs";
      }
    },
    enableLaysBanner: function(obj) {
      var recoubers;
      if (window.location.pathname.indexOf('laysmaxx') !== -1) {
        return false;
      }
      if (obj.promo_winner) {
        recoubers = _.map(obj.promo_winner_recoubers, (function(dd) {
          return dd[0];
        }));
        if (recoubers.indexOf(2232735) !== -1) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  };
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  helpers.Editor = (function() {
    function Editor() {}
    Editor.getAvailableEditorChannels = function(editorsChannels, takenChannels) {
      var available;
      available = editorsChannels;
      _.each(takenChannels, function(el, i) {
        return available = _.reject(editorsChannels, function(item) {
          return _.isEqual(el, item);
        });
      });
      return JSON.stringify(available);
    };
    Editor.getAuditStamp = function(audit) {
      var audits, getTemp, stamp;
      stamp = [];
      audits = [
        {
          addedFlags: audit.added_flags,
          cl: ''
        }, {
          deletedFlags: audit.deleted_flags,
          cl: 'removed'
        }, {
          recoubs: audit.added_editor_recoubs,
          cl: ''
        }, {
          unrecoubs: audit.deleted_editor_recoubs,
          cl: 'removed'
        }
      ];
      getTemp = __bind(function(flags, cl) {
        return _.each(flags, function(val, i) {
          return stamp.push("<span class='" + cl + "'>\n  " + (helpers.Application.capitalize(val.replace(/_/g, ' '))) + "\n</span>");
        });
      }, this);
      _.each(audits, function(audit) {
        return getTemp(_.values(audit)[0], _.values(audit)[1]);
      });
      return stamp.join('・');
    };
    Editor.editorialCoubStamp = function(createdAt) {
      return moment(createdAt).format('MMM Do YY, h:mm:ssa');
    };
    return Editor;
  })();
}).call(this);
(function() {
  /*
    Хелперы для формы
  */
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  helpers.Form = {
    DT: "helpers.Form",
    bindPseudoSubmit: function(container) {
      var find, form;
      if (container.is("form")) {
        form = container;
      } else {
        find = container.parents("form");
        if (find.size() > 0) {
          console.warn(helpers.Form.DT, "Cannot find form for the given container.");
          return;
        } else {
          form = find.first();
        }
      }
      return form.find("[form-submit]").on("click", __bind(function() {
        return form.submit();
      }, this));
    }
  };
}).call(this);
(function() {
  /*
    Хелпер для работы с графикой
  */  helpers.Graphics = {
    preloadImg: function(url) {
      return $("<img>", {
        src: url
      });
    }
  };
}).call(this);
(function() {
  /*
    Функции для определения текущего положения и тд
  */  helpers.Location = {
    isVkontakteEmbed: function() {
      var rc, rf;
      rf = document.referrer.toLowerCase();
      rc = window.request_client || '';
      return rc.indexOf('com.vkontakte') !== -1 || rf.indexOf('vk.com/video_ext.php') !== -1;
    }
  };
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  mobile.Helpers = (function() {
    Helpers.EVENTS = {
      RESPOND_TO: 'mobile.Helpers:Events:RespondTo'
    };
    Helpers.BREAKPOINT = void 0;
    function Helpers() {
      if (!(mobile.Helpers.__instance != null)) {
        mobile.Helpers.__instance = this;
        this.breakpoints = $('.js-breakpoints');
        this.currentBreakpoint = this.breakpoint().attr('data-breakpoint');
        mobile.Helpers.BREAKPOINT = this.currentBreakpoint;
        this.listentoMQBreakpoint({
          respond: function(breakpoint) {
            return mobile.Helpers.BREAKPOINT = breakpoint;
          }
        });
      } else {
        return mobile.Helpers.__instance;
      }
    }
    Helpers.prototype.listentoMQBreakpoint = function(opts) {
      if (opts == null) {
        opts = {};
      }
      return $(window).on('resize', __bind(function() {
        var breakpoint, el;
        el = this.breakpoint();
        breakpoint = el.attr('data-breakpoint');
        if (breakpoint !== this.currentBreakpoint) {
          this.currentBreakpoint = breakpoint;
          this.getCurrentBreakpoint({
            el: el,
            breakpoint: breakpoint,
            respond: __bind(function(breakpoint) {
              return opts.respond(breakpoint);
            }, this)
          });
          return $(document).trigger({
            type: mobile.Helpers.EVENTS.RESPOND_TO,
            breakpoint: breakpoint
          });
        }
      }, this));
    };
    Helpers.prototype.getCurrentBreakpoint = function(opts) {
      var breakpoint, el;
      if (opts == null) {
        opts = {};
      }
      el = opts.el != null ? opts.el : this.breakpoint();
      breakpoint = opts.breakpoint != null ? opts.breakpoint : el.attr('data-breakpoint');
      if (el.length) {
        return opts.respond(breakpoint);
      }
    };
    Helpers.prototype.breakpoint = function() {
      return this.breakpoints.find('[data-breakpoint]:visible');
    };
    Helpers.getCurrentBreakpoint = function() {
      var mh;
      mh = new mobile.Helpers();
      return mh.currentBreakpoint;
    };
    return Helpers;
  })();
}).call(this);
(function() {
  /*
    Хелперы для нотификейшнов.
  */
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.helpers.Notifications = {
    getText: function(n) {
      var notificationKind, opts;
      opts = {
        recipient: $('<a>', {
          'class': 'hbold -undr',
          text: n.recipient.title,
          href: Routes.channel_path(n.recipient.permalink)
        })[0].outerHTML
      };
      if (n.system_notification && (n.categories != null) && n.categories.length > 0) {
        false;
        $.extend(opts, {
          count: 1
        });
      }
      if (n.entity_type === "Coub") {
        $.extend(opts, {
          coub_name: n.object.title,
          someone: $('<a>', {
            'class': 'hbold -undr',
            text: n.object.channel.title,
            href: Routes.channel_path(n.object.channel.permalink)
          })[0].outerHTML
        });
      }
      if (n.kind === "cotd") {
        $.extend(opts, {
          cotd_link: $('<a>', {
            'class': 'hbold -undr',
            text: I18n.t("coub.cotd"),
            href: Routes.explore_path() + "/cotd"
          })[0].outerHTML
        });
      }
      if (!n.system_notification && n.senders.length > 0) {
        $.extend(opts, {
          sender: helpers.Notifications.pluralizeObjectNamesForNotification(n.senders, "title", {
            kind: n.kind,
            notification: n
          }),
          count: n.senders.length
        });
      }
      if (n.kind === "follow" && n.directed_to_channel) {
        $.extend(opts, {
          recipient: $('<a>', {
            'class': 'hbold -undr',
            text: n.object.title,
            href: Routes.channel_path(n.object.permalink)
          })[0].outerHTML
        });
      }
      if (n.kind === "like" && helpers.Coub.isRecoub(n.object)) {
        notificationKind = "like_recoub";
      } else {
        notificationKind = n.kind;
      }
      if (n.directed_to_channel) {
        return I18n.t("notifications." + notificationKind + ".mine", opts);
      } else {
        return I18n.t("notifications." + notificationKind + ".foreign", opts);
      }
    },
    getTextForFriendsNotification: __bind(function(n) {
      var channels, famSocNetwork, followCount, likesCount, recoubsCount, sender, t;
      if ((n.senders != null) && n.senders.length > 0) {
        sender = n.senders[0];
        t = JST["app/site/templates/blocks/friendship_notifications/friendship_notification_text"];
        if (n.meta != null) {
          if (n.meta.friendships != null) {
            famSocNetwork = helpers.Notifications.sortSocialNetworks(n.meta.friendships);
          }
          likesCount = n.meta.likes_count;
          recoubsCount = n.meta.recoubs_count;
          channels = n.meta.channels;
          followCount = n.meta.follows_count;
        }
        return t({
          sender: sender,
          familiarSocNetworks: famSocNetwork,
          likesCount: likesCount,
          recoubsCount: recoubsCount,
          channels: channels,
          kind: n.kind,
          followCount: followCount
        });
      } else {
        return "";
      }
    }, this),
    getFriendNotificationTitle: __bind(function(n) {
      var channelLink, f, isNamesEqual, k, snLink, t;
      channelLink = $("<a>", {
        "class": "hbold",
        href: Routes.channel_path(n.sender.permalink),
        text: n.sender.title
      });
      channelLink = channelLink[0].outerHTML;
      k = n.kind;
      if (k === "follow_back") {
        return channelLink + "&nbsp;" + I18n.notifications.follow.follow_back_suffix;
      } else if ((k === "sn_friend_follow" || k === "sn_friend_registered") && (n.familiarSocNetworks != null) && n.familiarSocNetworks[0]) {
        f = n.familiarSocNetworks[0];
        if (f.url != null) {
          snLink = $("<a>", {
            "class": "hbold",
            href: f.url,
            text: helpers.Notifications.getNameForSn(f)
          })[0].outerHTML;
        } else {
          snLink = $("<span>", {
            "class": "hbold",
            text: helpers.Notifications.getNameForSn(f)
          })[0].outerHTML;
        }
        isNamesEqual = n.sender.title.toLowerCase().trim() === helpers.Notifications.getNameForSn(f).toLowerCase().trim();
        if (k === "sn_friend_follow") {
          if (isNamesEqual) {
            t = I18n.site_notifications.kinds.sn_friend_follow_equal_name;
          } else {
            t = I18n.site_notifications.kinds.sn_friend_follow;
          }
        } else {
          if (isNamesEqual) {
            t = I18n.site_notifications.kinds.sn_friend_registered_equal_name;
          } else {
            t = I18n.site_notifications.kinds.sn_friend_registered;
          }
        }
        return t.replace("%{sn}", f.from).replace("%{nickname}", snLink).replace("%{channel}", channelLink).replace("vkontakte", "VK");
      } else {
        return channelLink + "&nbsp;" + I18n.notifications.follow.is_now_following_suffix;
      }
    }, this),
    getNameForSn: __bind(function(sn) {
      if (sn.name != null) {
        return sn.name;
      } else {
        return sn.nickname;
      }
    }, this),
    getTextForLikesAndRecoubs: __bind(function(likes, recoubs) {
      var s, total;
      if (likes && recoubs) {
        total = likes + recoubs;
        return I18n.notifications.likes_recoubs.likes_recoubs.replace("%{count}", total);
      } else if (likes) {
        s = likes + " " + pluralize("coub", likes);
        return I18n.notifications.likes_recoubs.likes.replace("%{count}", s);
      } else if (recoubs) {
        s = recoubs + " " + pluralize("coub", recoubs);
        return I18n.notifications.likes_recoubs.recoubs.replace("%{count}", s);
      } else {
        return "";
      }
    }, this),
    isTypeChannel: function(n) {
      return n.entity_type === "Channel";
    },
    pluralizeObjectNamesForNotification: function(objects, attr, opts) {
      var dropdown, f, i, ids, kind, n, object, strings, widget, _i, _len, _ref;
      kind = opts.kind;
      n = opts.notification;
      f = function(ind) {
        var obj, url;
        obj = objects[ind];
        if (helpers.Notifications.isSenderChannel(obj, kind)) {
          url = Routes.channel_path(obj.permalink);
        } else if (helpers.Notifications.isSenderCategory(obj, kind)) {
          url = Routes.explore_category_path(obj.permalink);
        } else {
          url = Routes.view_coub_by_permalink_path(obj.permalink);
        }
        return $('<a>', {
          'class': 'hbold -undr',
          href: url,
          text: obj.title,
          title: obj.title
        })[0].outerHTML;
      };
      if (objects.length === 1) {
        return f(0);
      } else if (objects.length === 2) {
        return I18n.t("objects_group_pluralizer.two", {
          first: f(0),
          second: f(1)
        });
      } else if (objects.length > 2) {
        if (kind === "new_category") {
          strings = [];
          for (i = 0, _ref = objects.length - 2; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
            strings.push(f(i));
          }
          return [strings.join(", "), I18n.t("objects_group_pluralizer.and"), f(objects.size - 1)].join(' ');
        } else {
          ids = [];
          for (_i = 0, _len = objects.length; _i < _len; _i++) {
            object = objects[_i];
            ids.push(object.id);
          }
          ids.shift();
          widget = "" + blocks.NotificationGroupDropdown.ATTR_NAME + "='true' auto-init='true' ";
          switch (kind) {
            case "like":
              widget += "kind='" + blocks.NotificationGroupDropdown.KIND.LIKE + "'";
              break;
            case "recoub":
              widget += "kind='" + blocks.NotificationGroupDropdown.KIND.RECOUB + "'";
              break;
            default:
              widget += "kind='" + blocks.NotificationGroupDropdown.KIND.FOLLOW + "'";
          }
          dropdown = JST["app/site/templates/widgets/absolute_dropdown_with_handler/absolute_dropdown_with_handler"]({
            attrs: "data-id='" + n.object.id + "' data-ids='" + (ids.join(",")) + "' " + widget,
            handler: "<span class='-color--blue-ribbon -undr'>" + (I18n.t('objects_group_pluralizer.others_text', {
              count: objects.length - 1
            })) + "</span>",
            dClass: 'box--inline',
            hClass: 'box--inline'
          });
          return I18n.t('objects_group_pluralizer.many_with_dropdown', {
            first: f(0),
            dropdown: dropdown
          });
        }
      }
    },
    getBgLink: function(n) {
      var link;
      if (n.entity_type === 'Coub') {
        link = Routes.view_coub_by_permalink_path(n.object.permalink);
      } else {
        if (n.kind === 'follow' && n.directed_to_channel) {
          link = Routes.channel_path(n.senders[0].permalink);
        } else {
          link = Routes.channel_path(n.object.permalink);
        }
      }
      return link;
    },
    getObjectForFriendNotifications: function(n) {
      var channel, classes, object, showFollowButtonFor;
      showFollowButtonFor = _.without(siteData.UserData.FRIENDS_NOTIFICATIONS_TYPES, "follow_back");
      object = '';
      classes = '';
      channel = n.senders != null ? n.senders[0] : void 0;
      if (showFollowButtonFor.indexOf(n.kind) !== -1 && channel) {
        if (!channel.i_follow_him || Params.getBranchValue("current_user.channels").length > 1) {
          object = JST['app/site/templates/widgets/follow_button/follow_button_init']({
            channelId: channel.id,
            followedFrom: channel.follows_by_users_channels,
            btnCls: "-grey",
            iFollow: channel.i_follow_him
          });
          classes = 'notification-list__object--channel';
        }
      }
      return {
        object: object,
        "class": classes
      };
    },
    getObject: function(n) {
      var getChannelImg, getCoubImg, getFollowButton, getImgTemp, object, opts;
      opts = {};
      getImgTemp = __bind(function(opts) {
        return " <a href='" + opts.url + "'>\n  <img alt='" + opts.alt + "' " + opts.src + " class='" + opts["class"] + "' width='" + opts.size[0] + "' height='" + opts.size[1] + "'>\n</a>";
      }, this);
      getFollowButton = __bind(function(channel) {
        return JST['app/site/templates/widgets/follow_button/follow_button_init']({
          channelId: channel.id,
          followedFrom: channel.follows_by_users_channels,
          btnCls: "-grey"
        });
      }, this);
      getCoubImg = __bind(function(coub) {
        return getImgTemp({
          url: Routes.view_coub_by_permalink_path(coub.permalink),
          src: helpers.Application.specificImgVersion(coub, 'image_versions', 'micro'),
          size: [70, 46],
          alt: coub.title,
          'class': 'image -rounded'
        });
      }, this);
      getChannelImg = __bind(function(channel) {
        return getImgTemp({
          url: Routes.channel_path(channel.permalink),
          src: helpers.Application.specificImgVersion(channel, 'avatar_versions', 'notification'),
          size: [32, 32],
          alt: channel.title,
          'class': 'image -rounded'
        });
      }, this);
      if (n.entity_type === 'Channel' && Params.getBranchValue("current_user.is_admin")) {
        opts = {
          "class": 'notification-list__object--channel'
        };
      } else if (n.entity_type === 'Channel') {
        opts = {
          "class": 'notification-list__object--channel -hidden'
        };
      } else {
        opts = {
          "class": 'notification-list__object--coub'
        };
      }
      if (n.kind === 'follow') {
        if (n.directed_to_channel) {
          object = n.senders[0].i_follow_him ? '' : getFollowButton(n.senders[0]);
        } else {
          object = getChannelImg(n.object);
        }
      } else {
        if (n.entity_type === 'Coub') {
          object = getCoubImg(n.object);
        } else {
          object = '';
        }
      }
      return $.extend(opts, {
        object: object
      });
    },
    notificationClassNames: function(n) {
      var classes;
      classes = [];
      classes.push(n.kind);
      if (n.important) {
        classes.push('important');
      }
      if (n.directed_to_channel && n.kind === 'follow') {
        classes.push('mine');
      }
      return classes.join(' ');
    },
    isSenderChannel: function(s, k) {
      return k === "follow" || k === "like" || k === "recoub";
    },
    isSenderCategory: function(s, k) {
      return k === "new_category";
    },
    sortSocialNetworks: function(sns) {
      return sns.sort(__bind(function(f, s) {
        if (f.from === "twitter") {
          return -1;
        } else if (s.from === "twitter") {
          return +1;
        } else {
          return 0;
        }
      }, this));
    }
  };
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  helpers.Scrollers = (function() {
    function Scrollers() {
      this.Scrollers = __bind(this.Scrollers, this);
      this.Scrollers = __bind(this.Scrollers, this);
      this.Scrollers = __bind(this.Scrollers, this);
      this.Scrollers = __bind(this.Scrollers, this);
      this.Scrollers = __bind(this.Scrollers, this);
      this.Scrollers = __bind(this.Scrollers, this);
    }
    Scrollers.ATTACH_VAL = {
      COVER: 125,
      DEFAULT: 6
    };
    Scrollers.FIRE_VAL = {
      COVER: 350,
      DEFAULT: 500
    };
    Scrollers.changeUI = function(value, attachFn, detachFn, frame) {
      if (frame == null) {
        frame = false;
      }
      if ($(window).scrollTop() > value) {
        if (frame) {
          return requestAnimationFrame(attachFn);
        } else {
          return attachFn();
        }
      } else {
        if (frame) {
          return requestAnimationFrame(detachFn);
        } else {
          return detachFn();
        }
      }
    };
    Scrollers.isProfile = function() {
      return GlobalState.PAGE.isProfile();
    };
    Scrollers.withTransHeader = function() {
      return GlobalState.UI.hasTransHeader();
    };
    Scrollers.notVerified = function() {
      return GlobalState.USER.notVerified();
    };
    Scrollers.getAttachValue = function(type) {
      return helpers.Scrollers.ATTACH_VAL[type.toUpperCase()];
    };
    Scrollers.getFireValue = function(type) {
      return helpers.Scrollers.FIRE_VAL[type.toUpperCase()];
    };
    return Scrollers;
  })();
}).call(this);
(function() {
  helpers.Tags = (function() {
    function Tags() {}
    Tags.rearrangeTags = function(src_tags) {
      var compare, tags;
      compare = function(a, b) {
        if (a.title.length > b.title.length) {
          return 1;
        } else if (a.title.length < b.title.length) {
          return -1;
        } else {
          return 0;
        }
      };
      tags = [];
      if (src_tags.length) {
        tags.push(src_tags.shift());
        src_tags.sort(compare);
        tags = tags.concat(src_tags);
      }
      return tags;
    };
    return Tags;
  })();
}).call(this);
(function() {
  /*
    Хелпер для темплейтов
  */  helpers.Template = (function() {
    function Template() {}
    Template.strIfUndef = function(value, def) {
      if (def == null) {
        def = "";
      }
      if (value != null) {
        return value;
      } else {
        return def;
      }
    };
    return Template;
  })();
}).call(this);
(function() {
  window.helpers.UsersHelper = {
    avatarURL: function(url) {
      if (url !== null && url !== void 0) {
        return url;
      } else {
        return "/assets/missing/tiny-avatar-7e82306b522153779136cff706f67cc5.png";
      }
    },
    printNameFromProvider: function(us) {
      if (us.name_from_provider !== null) {
        return us.name_from_provider;
      } else {
        return us.name;
      }
    },
    printScreenName: function(us) {
      var prefix;
      if (us.screen_name) {
        prefix = "";
        if (us.friend_from === 'twitter') {
          prefix = "@";
        }
        return prefix + us.screen_name;
      } else {
        return "";
      }
    }
  };
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.GlobalState = {
    __cache: {},
    __cacheIt: function(fn, key) {
      if (GlobalState.__cache[key] == null) {
        GlobalState.__cache[key] = fn();
      }
      return GlobalState.__cache[key];
    },
    USER: {
      isLogedIn: function() {
        return !$("body").hasClass("notLoggedIn");
      },
      notVerified: function() {
        return $("body").hasClass("notVerified");
      },
      isAdmin: function() {
        return window.is_admin;
      },
      followingCount: function() {
        return window.following_count;
      },
      getApiToken: function() {
        return window.api_token;
      },
      getCurrentUserId: function() {
        return window.gon.current_user.id;
      }
    },
    BROWSER: {
      isChrome: function() {
        return $("html").hasClass("chrome");
      },
      isChromeNative: function() {
        return window.chrome && !GlobalState.BROWSER.isOperaNative();
      },
      isSafari: function() {
        return $("html").hasClass("safari");
      },
      isOpera: function() {
        return $("html").hasClass("opera");
      },
      isOperaNative: function() {
        return window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
      },
      isOpera12: function() {
        return $("html").hasClass("opera12");
      },
      hasFlash: function() {
        return swfobject.hasFlashPlayerVersion("11.4");
      }
    },
    PAGE: {
      isUserTimeline: function() {
        return $('.timelinePage').hasClass('startpage');
      },
      isNotCoubPage: function() {
        return GlobalState.__cacheIt((__bind(function() {
          return $('.coub-page').size() === 0;
        }, this)), "page.isNotCoubPage");
      },
      isCoubPage: function() {
        return !GlobalState.PAGE.isNotCoubPage();
      },
      isProfile: function() {
        return GlobalState.__cacheIt((__bind(function() {
          return $("body").hasClass('profile-page');
        }, this)), "page.isProfile");
      },
      isPromoProfile: function() {
        return GlobalState.__cacheIt((__bind(function() {
          return $("body").hasClass('promo-profile-page');
        }, this)), "page.isPromoProfile");
      },
      isPromoCover: function() {
        return GlobalState.__cacheIt((__bind(function() {
          return $("body").hasClass('promo-cover');
        }, this)), "page.isPromoCover");
      },
      isTimeline: function() {
        return GlobalState.__cacheIt((__bind(function() {
          return $(".coubs-list").size() > 0;
        }, this)), "page.isTimeline");
      },
      isExplore: function() {
        return GlobalState.__cacheIt((__bind(function() {
          return $("body").hasClass('explore-page');
        }, this)), "page.isExplore");
      },
      isHotPage: function() {
        return GlobalState.__cacheIt((__bind(function() {
          return $("body").hasClass('hotPage');
        }, this)), "page.isHotPage");
      },
      isWeekly: function() {
        return GlobalState.__cacheIt((__bind(function() {
          return $("body").hasClass('weekly-page');
        }, this)), "page.isWeekly");
      },
      isTagPage: function() {
        return GlobalState.__cacheIt((__bind(function() {
          return $("[tags-page]").size() > 0;
        }, this)), "page.isTagPage");
      },
      isBestCoubs2014: function() {
        return GlobalState.__cacheIt((function() {
          return $("body").hasClass('best-2014');
        }), "page.isBestCoubs2014");
      }
    },
    UI: {
      hasStaticHeader: function() {
        return $('header.header').hasClass('-static');
      },
      hasTransHeader: function() {
        return $('header.header').hasClass('-transparent');
      },
      hasSolidHeader: function() {
        return $('body').hasClass('solid-header');
      }
    },
    COUNTRY: {
      isRussia: function() {
        return (typeof Params !== "undefined" && Params !== null ? Params.get('country_ip') === 'Russian Federation' : ['RU'].indexOf(window.geo_country) !== -1) || window.env === 'development';
      },
      isExUssr: function() {
        return (typeof Params !== "undefined" && Params !== null ? Params.get('ussr_ip') : ['RU', 'UA', 'KZ', 'BY'].indexOf(window.geo_country) !== -1) || window.env === 'development';
      }
    },
    TIMELINE: {
      type: function() {
        var path;
        path = window.location.pathname || '';
        if (path === '/' && !GlobalState.USER.isLogedIn()) {
          return 'mainpage';
        } else if (path === '/') {
          return 'timeline';
        } else if (path.indexOf('/explore/hot') === 0) {
          return 'hot';
        } else if (path.indexOf('/explore/random') === 0) {
          return 'random';
        } else if (path.indexOf('/explore/newest') === 0) {
          return 'newest';
        } else if (path.indexOf('/explore') === 0) {
          return 'explore';
        } else if (path.indexOf('/search') === 0) {
          return 'search';
        } else if (path.indexOf('/weekly') === 0) {
          return 'weekly';
        } else if (GlobalState.PAGE.isProfile()) {
          return 'profile';
        } else if (path.indexOf('/best/2014/hidden-gems') === 0) {
          return 'best2014_gems';
        } else if (path.indexOf('/best/2014/popular-tags') === 0) {
          return 'best2014_tags';
        } else if (path.indexOf('/best/2014') === 0) {
          return 'best2014_likes';
        } else {
          return 'unknown';
        }
      }
    },
    PLATFORM: {
      isMobile: function() {
        return GlobalState.__cacheIt((__bind(function() {
          return $("html").hasClass("mobile");
        }, this)), "platform.isMobile");
      },
      isAndroid: function() {
        return GlobalState.__cacheIt((__bind(function() {
          return $("html").hasClass("android");
        }, this)), "platform.isAndroid");
      },
      isAndroidNative: function() {
        return GlobalState.__cacheIt((__bind(function() {
          return navigator.userAgent.toLowerCase().indexOf("android") !== -1;
        }, this)), "platform.isAndroidNative");
      },
      isIos: function() {
        return GlobalState.__cacheIt((__bind(function() {
          return $("html").hasClass("ios");
        }, this)), "platform.isIos");
      },
      isWindophone: function() {
        return GlobalState.__cacheIt((__bind(function() {
          return $("html").hasClass("win") && $("html").hasClass("mobile");
        }, this)), "platform.isWindophone");
      },
      hasApp: function() {
        var device;
        device = void 0;
        if (GlobalState.PLATFORM.isIos()) {
          device = 'ios';
        } else if (GlobalState.PLATFORM.isAndroidNative()) {
          device = 'android';
        } else if (GlobalState.PLATFORM.isWindophone()) {
          device = 'win';
        }
        return device;
      }
    },
    SCREEN: {
      isTablet: function() {
        return GlobalState.__cacheIt((function() {
          return Math.max(screen.width, screen.height) / Math.min(screen.width, screen.height) <= 1.6;
        }), 'screen.isTablet');
      }
    },
    EDITOR: {
      isEditing: function() {
        return $(".cb-edtr").attr("editing") === "true";
      },
      isAuthor: function() {
        return $(".cb-edtr").attr("is_author") === "true";
      }
    },
    STATS: {
      getPageSection: function() {
        var path;
        path = window.location.pathname || '';
        if (path.indexOf('/view') === 0) {
          return 'coub_page';
        } else if (path.indexOf('/embed') === 0) {
          return 'embed';
        } else if (path.indexOf('/sources') === 0) {
          return 'make_coub';
        } else if (path.indexOf('/tags') === 0) {
          return 'tags_page';
        } else if (path.indexOf('/search') === 0) {
          return 'search_page';
        } else if (GlobalState.TIMELINE.type() !== 'unknown') {
          return "timeline_" + (GlobalState.TIMELINE.type());
        } else {
          return path;
        }
      }
    }
  };
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.StatsDataProvider = (function() {
    function StatsDataProvider() {
      this.cacheUserActivity = __bind(this.cacheUserActivity, this);
      this.coubIncrementViews = __bind(this.coubIncrementViews, this);      if (!(StatsDataProvider.__instance != null)) {
        StatsDataProvider.__instance = this;
      } else {
        return StatsDataProvider.__instance;
      }
    }
    StatsDataProvider.prototype.coubIncrementViews = function(coubId) {
      return $.post("/coubs/" + coubId + "/increment_views");
    };
    StatsDataProvider.prototype.cacheUserActivity = function(permalink, suggestPermalink, place, type, success, error, referrer) {
      if (!(referrer != null)) {
        referrer = document.referrer;
      }
      return $.ajax({
        url: "/coubs/" + permalink + "/cache_user_activity",
        type: "POST",
        data: {
          referrer: referrer,
          suggest: {
            id: suggestPermalink,
            place: place,
            type: type
          }
        },
        success: success,
        error: error
      });
    };
    return StatsDataProvider;
  })();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.SocialSharingDataProvider = (function() {
    SocialSharingDataProvider.TYPES = {
      FACEBOOK: {
        name: "facebook",
        getPopupUrl: function(encoded_title, url) {
          return "https://www.facebook.com/sharer/sharer.php?u=" + (encodeURIComponent(url)) + "&title=" + encoded_title;
        }
      },
      TWITTER: {
        name: "twitter",
        getPopupUrl: function(encoded_title, url) {
          return "http://twitter.com/home?status=" + encoded_title + "%20" + (encodeURIComponent(url)) + "%20@coub";
        },
        popupH: 450
      },
      TUMBLR: {
        name: "tumblr",
        getPopupUrl: function(encoded_title, url) {
          return "http://www.tumblr.com/share/video?embed=" + (encodeURIComponent(url)) + "&caption=" + encoded_title;
        }
      },
      STUMBLEUPON: {
        name: "stumbleupon",
        getPopupUrl: function(encoded_title, url) {
          return "http://www.stumbleupon.com/submit?url=" + (encodeURIComponent(url)) + "&title=" + encoded_title;
        },
        popupW: 800,
        popupH: 590
      },
      GOOGLEPLUS: {
        name: "google_plus",
        getPopupUrl: function(encoded_title, url) {
          return "https://plus.google.com/share?url=" + (encodeURIComponent(url));
        },
        popupW: 500
      },
      VKONTAKTE: {
        name: "vkontakte",
        getPopupUrl: function(encoded_title, url) {
          return "http://vk.com/share.php?url=" + (encodeURIComponent(url)) + "&title=" + encoded_title;
        }
      },
      SURFINGBIRD: {
        name: "surfingbird",
        getPopupUrl: function(encoded_title, url) {
          return "http://surfingbird.ru/share?url=" + (encodeURIComponent(url));
        }
      },
      PINTEREST: {
        name: "pinterest",
        getPopupUrl: function(encoded_title, url, img) {
          return "http://www.pinterest.com/pin/create/button/?url=" + (encodeURIComponent(url)) + "&description=" + encoded_title + "&media=" + (encodeURIComponent(img));
        }
      },
      ODNOKLASSNIKI: {
        name: "odnoklassniki",
        getPopupUrl: function(encoded_title, url, img) {
          return "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=" + (encodeURIComponent(url)) + "&st.comments=" + encoded_title;
        }
      },
      LINKEDIN: {
        name: "linkedin",
        getPopupUrl: function(encoded_title, url, img) {
          return "http://www.linkedin.com/shareArticle?mini=true&url=" + (encodeURIComponent(url)) + "&summary=" + encoded_title + "&source=Coub";
        }
      },
      REDDIT: {
        name: "reddit",
        getPopupUrl: function(encoded_title, url, img) {
          return "http://reddit.com/submit?url=" + (encodeURIComponent(url)) + "&title=" + encoded_title;
        }
      },
      KANOBU: {
        name: "kanobu",
        getPopupUrl: function(encoded_title, url, img) {
          return "http://kanobu.ru/pub/share/?url=" + (encodeURIComponent(url)) + "&title=" + encoded_title;
        }
      },
      WATSAPP: {
        name: "watsapp",
        onClick: __bind(function(e, w) {
          var url;
          if (!w.isDisabled()) {
            url = "whatsapp://send?text=" + w.title + "%20" + (w.url || Routes.view_coub_by_permalink_url(w.permalink));
            window.location = url;
            return w.track();
          }
        }, SocialSharingDataProvider)
      }
    };
    function SocialSharingDataProvider() {
      this.getProviderByName = __bind(this.getProviderByName, this);      if (!(SocialSharingDataProvider.__instance != null)) {
        SocialSharingDataProvider.__instance = this;
        this.TYPES = SocialSharingDataProvider.TYPES;
      } else {
        return SocialSharingDataProvider.__instance;
      }
    }
    SocialSharingDataProvider.prototype.getProviderByName = function(name) {
      var k, v, _ref;
      _ref = this.TYPES;
      for (k in _ref) {
        v = _ref[k];
        if (v.name === name) {
          return v;
        }
      }
    };
    SocialSharingDataProvider.getDefaultProvidersOrder = function() {
      var p;
      p = SocialSharingDataProvider.TYPES;
      if (GlobalState.COUNTRY.isRussia()) {
        return [p.FACEBOOK, p.TWITTER, p.VKONTAKTE, p.SURFINGBIRD, p.GOOGLEPLUS, p.TUMBLR, p.PINTEREST];
      } else {
        return [p.FACEBOOK, p.TWITTER, p.TUMBLR, p.STUMBLEUPON, p.GOOGLEPLUS, p.PINTEREST];
      }
    };
    return SocialSharingDataProvider;
  }).call(this);
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Testotron = (function() {
    function Testotron() {
      this.run = __bind(this.run, this);
      this.Testotron = __bind(this.Testotron, this);
      this.addExample = __bind(this.addExample, this);      if (!Testotron.__instance) {
        Testotron.__instance = this;
        this.examples = [];
      } else {
        return Testotron.__instance;
      }
      this.aE = this.addExample;
    }
    Testotron.prototype.addExample = function(name, body) {
      return this.examples.push(new TestotronExample(name, body));
    };
    Testotron.addExample = function(name, body) {
      return new Testotron().addExample(name, body);
    };
    Testotron.prototype.run = function() {
      var example, _i, _len, _ref, _results;
      _ref = this.examples;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        example = _ref[_i];
        _results.push(example.run() !== true ? console.log("Example " + example.name + " failed") : void 0);
      }
      return _results;
    };
    return Testotron;
  })();
  window.TestotronExample = (function() {
    function TestotronExample(name, body) {
      this.run = __bind(this.run, this);      this.name = name;
      this.body = body;
    }
    TestotronExample.prototype.run = function() {
      return this.body();
    };
    return TestotronExample;
  })();
  window.Te = new Testotron();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.MobilePlayerDataProvider = (function() {
    function MobilePlayerDataProvider() {}
    MobilePlayerDataProvider.prototype.getChunk = function(url) {
      return $.ajax({
        type: "GET",
        url: url,
        dataType: "json"
      });
    };
    MobilePlayerDataProvider.prototype.getFramesByChunks = function(chunksUrls) {
      var chunkUrl, chunksCount, chunksLoadedCount, deferred, key, _fn, _len;
      deferred = $.Deferred();
      chunksLoadedCount = 0;
      chunksCount = chunksUrls.length;
      if (chunksUrls.length > 0) {
        _fn = __bind(function(index) {
          var xhr;
          xhr = this.getChunk(chunkUrl);
          xhr.done(function(data) {
            chunksLoadedCount++;
            deferred.notify(chunksLoadedCount / chunksCount, data, index);
            if (chunksLoadedCount === chunksCount) {
              return deferred.resolve(chunksCount);
            }
          });
          return xhr.fail(function(data) {
            return deferred.reject(this.url, data.status);
          });
        }, this);
        for (key = 0, _len = chunksUrls.length; key < _len; key++) {
          chunkUrl = chunksUrls[key];
          _fn(key);
        }
      } else {
        deferred.resolve(chunksCount);
      }
      return deferred.promise();
    };
    return MobilePlayerDataProvider;
  })();
}).call(this);
(function() {
  if (typeof I18n === "undefined" || I18n === null) {
    window.I18n = {};
  }
  window.I18n.template = function(localeStr) {
    var fn;
    fn = function(vals) {
      var i, str;
      str = this;
      for (i in vals) {
        str = str.replace('%{' + i + '}', vals[i]);
      }
      return str;
    };
    return fn.bind(localeStr);
  };
  window.I18n.ERRORS = {
    INTERNAL_SERVER_ERROR: {
      SUB: "An unexpected error occurred.",
      TRY_AGAIN: "We are working to solve this issue.<br />Please try again later."
    },
    AUTH_FAILED: {
      HEADER: "Authorization failed",
      SUB: "It seems, that you cancelled authorization process. Please, try again."
    },
    REQUIRED: {
      BUG_REPORT: "This fields are required"
    },
    too_fast: {
      follow: 'You are following too fast',
      like: 'You are liking too fast',
      recoub: 'You are recoubing too fast',
      slow_down: 'Please slow down'
    }
  };
  window.I18n.EDITOR = {
    FLAGS: {
      VISIBLE: "Visible:",
      BANNED: "Banned:",
      AGE_RESTRICTED_BY_ADMIN: "Age restricted:",
      AGE_RESTRICTED: "Age restricted by user:",
      COPYRIGHT_BANNED: "Copyright banned:",
      EXPLORE: "Visible on explore:",
      EXPLORE_ROOT: "Visible on explore root:"
    }
  };
  window.I18n.CREATE = {
    VIDEO_UPLOAD_ERRORS: {
      CANT_READ: "We could not read this file.",
      EXCEEEDS_DURATION: "Videos must be 10 minutes or shorter."
    },
    MESSAGES: {
      SAVE_SUCCESS: {
        TITLE: "Saved!",
        MESSAGE: "Your coub saved successfuly"
      },
      SAVE_ERROR: {
        TITLE: "Error while saving!",
        MESSAGE: "Error while saving occurred. Try to reload editor."
      }
    }
  };
  window.I18n.CUSTOMIZE_POPUP = {
    AFTER_CREATE: {
      BUTTONS: {
        SHOW_MESSAGE: "edit post",
        HIDE_MESSAGE: "hide"
      },
      TAGS_PLACEHOLDER: "Use comma or press Enter to separate tags"
    },
    SIMPLE_EDIT: {
      MESSAGE_AFTER_SAVE: {
        HEADER: "Done!",
        MESSAGE: "The changes have been saved."
      }
    },
    ERROR_MESSAGES: {
      TITLE_REQUIRED: "Please write a caption for your coub.",
      TITLE_TOO_LONG: "You've exceeded the 140 character limit.",
      AUTH_TAKEN: {
        TITLE: "Auth error",
        MESSAGE: "Authentication has already been taken"
      }
    }
  };
  window.I18n.AUTH_POPUP = {
    BUTTONS: {
      VIEW_MORE: "Show more",
      VIEW_LESS: "Show fewer"
    }
  };
  window.I18n.PROFILE = {
    ERRORS: {
      FIRST_NAME: "First name field is required",
      PASSWORD_INCORECT: "The password is incorrect",
      EMAIL_IS_INVALID: "Incorrect email",
      EMAIL_IS_REGISTERED: "This email is already registered",
      PERMALINK_UNAVAILABLE: "This URL is unavailable",
      PERMALINK_TOO_SHORT: "The URL must be at least 8 characters long",
      PERMALINK_INVALID: "Use only A-Z, a-z, 0-9, period (.), or hyphen (-)",
      PERMALINK_ENDS_WITH_DOT: "URL must not end with the dot symbol"
    },
    UPLOADING: "Uploading",
    ADD_COVER: "Edit cover",
    EDIT: {
      SAVED_SUCCESSFULL: {
        HEADER: "Done!",
        MESSAGE: "The changes have been saved."
      }
    }
  };
  window.I18n.FIND_FRIENDS = {
    INVITE: {
      FACEBOOK: {
        INVITE_MESSAGE: "Join Coub, man"
      }
    }
  };
  window.I18n.sharing = {
    share: "Share on",
    share_vk_short: "Share on VK",
    share_tweeter_short: "Tweet"
  };
  window.I18n.editor = {
    pane: "Editor Control Pane",
    search_tags_pane: "Search Tags Pane",
    editors_stats: "Editors stats",
    banners_page: "Banners",
    avatar_moderation: "Avatar Moderation",
    background_moderation: "Background moderation",
    featured_channels: "Featured Channels",
    weekly_digests: "Weekly Digests",
    saved_users: "Saved users",
    channels_stats: "Channels Stats",
    explore_queue: "Explore queue"
  };
  window.I18n.stats = {
    pane: "Stats pane"
  };
  window.I18n.admin = {
    pane: "Admin Control Pane",
    set_external_video_source: "Set external video source",
    source: "Source: "
  };
  window.I18n.channels = {
    add_new: "Add new channel"
  };
  window.I18n.profile = {
    settings: "Settings",
    timeline: {
      friendships_block: {
        heading: "Who to follow"
      }
    }
  };
  window.I18n.logout = 'Logout';
  window.I18n.embed = {
    get_app: "Get the App",
    get_app_ru: "Скачать приложение",
    open_in_app: "Open in App",
    open_in_app_ru: "Открыть в приложении",
    views: "views",
    views_singular_ru: "просмотр",
    views_plural_ru: "просмотров",
    views_double_ru: "просмотра",
    share: "Share coub",
    share_ru: "Поделиться"
  };
  window.I18n.growl_errors = {
    reload: {
      header: "Page error",
      error: "Please reload this page"
    }
  };
  window.I18n.follow_confirmation = {
    confirm: "Confirm channel following",
    followed: "You successfully following channel",
    sign_title: "Login to Follow"
  };
  window.I18n.notifications = {
    follow: {
      is_now_following_suffix: 'is now following you',
      follow_back_suffix: 'followed you back'
    },
    likes_recoubs: {
      likes: "You liked %{count} from this channel",
      recoubs: "You recoubed %{count} from this channel",
      likes_recoubs: "You liked & recoubed %{count} coubs from this channel"
    }
  };
  window.I18n.who_to_follow = {
    kinds: {
      liked: 'You liked %{count} from this channel',
      followed: 'Followed by %{channels}',
      friends: 'This channel is run by %{friend}'
    }
  };
  window.I18n.site_notifications = {
    kinds: {
      sn_friend_follow: 'Your %{sn} friend %{nickname} is now following you as %{channel}',
      sn_friend_registered: 'Your %{sn} friend %{nickname} just joined Coub as %{channel}',
      sn_friend_follow_equal_name: 'Your %{sn} friend %{nickname} is now following you',
      sn_friend_registered_equal_name: 'Your %{sn} friend %{nickname} just joined Coub'
    }
  };
  window.I18n.wia_block = {
    title: 'Open in Coub',
    title_ru: 'Открыть в Коубе',
    get_the_app: 'Скачать',
    get_the_app_ru: 'Скачать'
  };
}).call(this);
(function() {
  window.LoadRotator = (function() {
    function LoadRotator() {}
    LoadRotator.appendToContainer = function(container, cl) {
      var l;
      if (cl == null) {
        cl = "";
      }
      container.append("<div class='loadRotator " + cl + "'></div>");
      l = container.find(".loadRotator");
      l.makeLoader();
      return l;
    };
    LoadRotator.appendToContainterAndStart = function(container, cl) {
      return LoadRotator.appendToContainer(container, cl);
    };
    LoadRotator.removeFromContainer = function(container) {
      return container.find(".loadRotator").remove();
    };
    LoadRotator.appendWithOverlayAndStart = function(container, cl, contCl) {
      var ovrl;
      if (contCl == null) {
        contCl = '';
      }
      ovrl = $(" <div class='loader__overlay " + contCl + "'></div> ");
      container.append(ovrl);
      ovrl.show();
      return LoadRotator.appendToContainterAndStart(ovrl, cl);
    };
    LoadRotator.removeWithOverlay = function(container) {
      return container.find('.loader__overlay').remove();
    };
    return LoadRotator;
  })();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.CoubEmbed = (function() {
    CoubEmbed.prototype.TUMBLR_SAFE_FRAME = 'https://safe.txmblr.com/svc/embed/iframe';
    CoubEmbed.prototype.TEST_FRAME = 'test_page/tumblr_embeds';
    CoubEmbed.prototype.TIMELINE_PIC_SIZES = [
      {
        v: "big",
        w: 1280,
        h: 1280
      }, {
        v: "med",
        w: 640,
        h: 500
      }, {
        v: "small",
        w: 400,
        h: 400
      }
    ];
    CoubEmbed.prototype.DT = "CoubEmbed";
    function CoubEmbed() {
      this.resizeFromParams = __bind(this.resizeFromParams, this);
      this.getProperTimelinePic = __bind(this.getProperTimelinePic, this);
      var eventMapper, muted, resize, tumblrSafeFrame, v;
      $.storage = new $.store();
      if ((v = $("script#coubJson").html()) != null) {
        try {
          this.coubData = JSON.parse(v);
        } catch (e) {
          Honeybadger.notify("Can't parse coub json", {
            context: {
              json: v
            }
          });
        }
      }
      this.parent = window.parent;
      this.referrer = document.referrer;
      this.params = this.loadURLParams();
      this.viewer = $('.coub__viewer > .viewer');
      this.playerContainer = $('.viewer__player', this.viewer);
      this.img = $('.viewer__img', this.viewer);
      if (window.env === 'production') {
        tumblrSafeFrame = this.referrer.match(this.TUMBLR_SAFE_FRAME);
      } else {
        tumblrSafeFrame = this.referrer.match(this.TEST_FRAME);
      }
      this.viewer.bind("embedded", __bind(function() {
        if (tumblrSafeFrame) {
          this.resizeFromParams(this.referrer);
          return this.repositionValues();
        }
      }, this));
      eventMapper = {};
      eventMapper[Player.EVENT_READY] = "ready";
      eventMapper[Player.EVENT_PLAYING] = "playStarted";
      eventMapper[Player.EVENT_PAUSED] = "playPaused";
      eventMapper[Player.EVENT_LOOP_OCCURED] = "loopOccured";
      this.viewer.on(_.keys(eventMapper).join(' '), __bind(function(e) {
        var event;
        event = eventMapper[e.type];
        return $.postMessage(event, "*", parent);
      }, this));
      muted = this.params.muted;
      if (decodeURIComponent(window.location.search).indexOf("redditmedia.com") !== -1) {
        muted = false;
      }
      this.player = new Player(this.viewer, {
        embed: true,
        muted: muted,
        noControls: this.params.no_controls || this.params.noControls,
        autoplay: this.params.autoplay || this.params.autostart || this.referrerIsSaveFrame(),
        startWithHD: this.params.startWithHD,
        hideTopBar: this.params.hideTopBar,
        noLogo: this.params.noLogo,
        noSiteButtons: this.params.noSiteButtons,
        noHDControl: this.params.noHDControl,
        startOnMouseOver: this.params.startOnMouseOver,
        href: this.params.href,
        smooth_embedding: false,
        data: this.coubData
      });
      resize = __bind(function() {
        if (tumblrSafeFrame) {
          this.resizeFromParams(this.referrer);
        } else {
          this.resizePlayer();
        }
        return this.repositionValues();
      }, this);
      $(window).on("resize", resize);
      resize();
      $.receiveMessage(__bind(function(e) {
        var data, msg, _ref;
        _ref = (e.data || '').split('#'), msg = _ref[0], data = _ref[1];
        switch (msg) {
          case 'play':
            this.startPlayer();
            break;
          case 'stop':
            this.suspendPlayer();
            break;
          case 'mute':
            this.mutePlayer();
            break;
          case 'unmute':
            this.unmutePlayer();
            break;
          case 'hidefinger':
            this.hideFinger();
        }
        if (data === 'runner') {
          return Stats.addPersistentParameters({
            scriptAutoplay: true
          });
        }
      }, this));
      $('html').bind("mouseenter", __bind(function() {
        return this.mouseIn = true;
      }, this));
      $('html').bind("mouseleave", __bind(function() {
        return this.mouseIn = false;
      }, this));
      $('html').bind('mouseleave', __bind(function() {
        return this.mouseOutside();
      }, this));
      _.defer(this.getProperTimelinePic);
      this.setClasses();
    }
    CoubEmbed.prototype.getProperTimelinePic = function() {
      var biggest, dim, dominated, f, isVertical, mapDiff, mapVals, res, t, tp, vh, vw;
      if (this.coubData == null) {
        return;
      }
      tp = this.viewer.find("[timeline-pic]");
      vw = tp.width();
      vh = tp.height();
      biggest = this.TIMELINE_PIC_SIZES[0];
      isVertical = vh > vw;
      dim = isVertical ? "h" : "w";
      dominated = isVertical ? vh : vw;
      mapVals = __bind(function(e) {
        return [e.v, e[dim]];
      }, this);
      mapDiff = __bind(function(e) {
        return [e[0], e[1] - dominated];
      }, this);
      res = (this.TIMELINE_PIC_SIZES.map(__bind(function(e) {
        return mapDiff(mapVals(e));
      }, this)).filter(__bind(function(e) {
        return e[1] >= 0;
      }, this)).reduce((__bind(function(f, s) {
        if (f[1] < s[1]) {
          return f;
        } else {
          return s;
        }
      }, this)), mapVals(biggest)))[0];
      t = this.coubData.first_frame_versions.template;
      if (t) {
        f = t.replace("%{version}", res);
        console.log(this.DT, "Update first frame by", f);
        return tp.attr({
          src: f
        });
      }
    };
    CoubEmbed.prototype.startPlayer = function() {
      if (this.playing) {
        return;
      }
      return this.startTimeout = setTimeout(__bind(function() {
        this.viewer.trigger('play');
        return this.playing = true;
      }, this), 50);
    };
    CoubEmbed.prototype.mouseOutside = function() {
      if ((this.params.startOnMouseOver != null) && (this.startTimeout != null)) {
        clearTimeout(this.startTimeout);
        $('html').one('mouseenter', __bind(function() {
          return this.startPlayer();
        }, this));
      }
      if (!this.mouseIn && (this.player.curHandler != null) && this.player.kind !== 'mobile') {
        return this.player.curHandler.mouseLeave();
      }
    };
    CoubEmbed.prototype.mutePlayer = function() {
      return this.player.curHandler.mute();
    };
    CoubEmbed.prototype.unmutePlayer = function() {
      return this.player.curHandler.unmute();
    };
    CoubEmbed.prototype.suspendPlayer = function() {
      this.viewer.trigger('suspend');
      return this.playing = false;
    };
    CoubEmbed.prototype.unembedPlayer = function() {
      if (!this.playing) {
        return;
      }
      this.playing = false;
      return this.viewer.trigger('unembed');
    };
    CoubEmbed.prototype.hideFinger = function() {
      return this.viewer.trigger('hidefinger');
    };
    CoubEmbed.prototype.referrerIsSaveFrame = function() {
      var url, urls;
      urls = ['www.tumblr.com/dashboard', 'www.tumblr.com/blog', 'www.tumblr.com/tagged'];
      url = document.referrer;
      url = url.replace(/^http:\/\//, '').replace(/^https:\/\//, '');
      return _.detect(urls, function(el) {
        return url.indexOf(el) === 0;
      });
    };
    CoubEmbed.prototype.resizePlayer = function() {
      var height, width;
      console.log("CoubEmbed", "Resize.");
      width = $(window).width();
      height = $(window).height();
      this.viewer.css({
        width: width,
        height: height
      });
      return $('object').attr('width', width).attr('height', height);
    };
    CoubEmbed.prototype.resizeFromParams = function(url) {
      var getParamValue, height, width;
      getParamValue = __bind(function(str, param) {
        var match;
        match = str.match(param + '=([^&]+)');
        if (match) {
          return match[1];
        } else {
          return '';
        }
      }, this);
      width = getParamValue(url, 'w');
      height = getParamValue(url, 'h');
      this.viewer.css({
        width: width,
        height: height
      });
      return $('object').attr('width', width).attr('height', height);
    };
    CoubEmbed.prototype.repositionValues = function() {
      var embedHeight, embedProportion, embedWidth, height, marginLeft, marginTop, originalHeight, originalProportion, originalWidth, rate, toCenter, width;
      originalWidth = parseInt(this.viewer.attr('original-width'));
      originalHeight = parseInt(this.viewer.attr('original-height'));
      embedWidth = this.viewer.width();
      embedHeight = this.viewer.height();
      originalProportion = originalWidth / originalHeight;
      embedProportion = embedWidth / embedHeight;
      rate = embedProportion < originalProportion ? embedWidth / originalWidth : embedHeight / originalHeight;
      width = Math.floor(originalWidth * rate);
      height = Math.floor(originalHeight * rate);
      marginTop = height / 2;
      marginLeft = width / 2;
      this.img.css({
        width: width,
        height: height
      });
      toCenter = this.player.kind === 'mobile' && (!document.referrer || document.referrer.toLowerCase().indexOf('vk.com/video_ext.php') === -1);
      if (toCenter) {
        this.playerContainer.css({
          position: 'absolute',
          top: '50%',
          left: '50%',
          margin: "-" + marginTop + "px 0 0 -" + marginLeft + "px",
          width: width,
          height: height
        });
      } else if (this.player.kind === 'mobile') {
        this.playerContainer.css({
          width: width,
          height: height
        });
        this.img.css({
          margin: '0'
        });
      }
      return this.viewer.triggerHandler('resize');
    };
    CoubEmbed.prototype.loadURLParams = function() {
      var nonBooleanParams, out, search;
      out = {};
      nonBooleanParams = ['href'];
      search = window.location.search.substr(1).replace(/&amp;/, '&');
      _.each(search.split("&"), __bind(function(p) {
        var splitted;
        splitted = p.split('=');
        if (nonBooleanParams.indexOf(splitted[0]) !== -1) {
          return out[splitted[0]] = splitted[1];
        } else {
          return out[splitted[0]] = splitted[1] === 'true';
        }
      }, this));
      return out;
    };
    CoubEmbed.prototype.setClasses = function() {
      var c;
      c = $(".coub__embed");
      if (helpers.Location.isVkontakteEmbed()) {
        return c.addClass("loc-vkontakte-embed");
      }
    };
    return CoubEmbed;
  })();
  $(function() {
    try {
      return new window.CoubEmbed();
    } catch (e) {
      Honeybadger.notify(e);
      throw e;
    }
  });
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.EmbedDispatcher = (function() {
    EmbedDispatcher.prototype.key = 'embed_current_playing_coub';
    function EmbedDispatcher(opts) {
      try {
        this.latestId = $.storage.get(this.key);
      } catch (error) {
        $.storage.set(this.key, '');
        this.latestId = '';
      }
      if (opts == null) {
        opts = {};
      }
      this.opts = opts;
      this.id = this.generateRandID();
      this.checkingInterval = setInterval((__bind(function() {
        return this.checkIfNeedToShut();
      }, this)), 100);
    }
    EmbedDispatcher.prototype.startedPlaying = function() {
      $.storage.set(this.key, this.id);
      return this.latestId = this.id;
    };
    EmbedDispatcher.prototype.checkIfNeedToShut = function() {
      if (this.latestId !== $.storage.get(this.key)) {
        this.opts.onStop();
      }
      return this.latestId = $.storage.get(this.key);
    };
    EmbedDispatcher.prototype.destruct = function() {
      return clearInterval(this.checkingInterval);
    };
    EmbedDispatcher.prototype.generateRandID = function() {
      return "coub_embed_" + Math.round(Math.random() * Math.random() * 10000000);
    };
    return EmbedDispatcher;
  })();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.FlashPlayer = (function() {
    FlashPlayer.prototype.DT = "FlashPlayer";
    function FlashPlayer(el, opts) {
      var jstring, timelineUrl;
      this.element = $(el);
      this.opts = opts || {};
      this.fullscreenOn = false;
      this.embedded = false;
      this.id = this.element.attr('data-permalink');
      this.playerId = "playerEmbed" + this.id + (this.randomNum());
      jstring = this.element.find(".data script").html();
      try {
        this.data = JSON.parse(jstring);
      } catch (e) {
        Honeybadger.notify("Something wrong with this json " + jstring);
        throw e;
      }
      if (this.data.country_code == null) {
        this.data.country_code = window.geo_country;
      }
      this.element.attr("duration", this.data.duration);
      this.preloaded = false;
      this.playing = false;
      this.videoContainer = $(".viewer__player", this.element);
      this.bindedPlay = this.play.bind(this);
      this.bindOnEl('preload', this.preload.bind(this));
      this.bindOnEl('play', this.preloadAndPlay.bind(this));
      this.bindOnEl('suspend', this.suspend.bind(this));
      this.bindOnEl('unembed', this.unembed.bind(this));
      this.bindOnEl(Player.ACTION_UNEMBED_IF_NOT_PLAYING, __bind(function() {
        if (!this.playing) {
          return this.unembed();
        }
      }, this));
      this.bindOnEl("loaded", this.preloadFinished.bind(this));
      this.bindOnEl("hidefinger", this.hideFinger.bind(this));
      this.bindOnEl('mute', __bind(function() {
        return this.mute();
      }, this));
      this.bindOnEl('unmute', __bind(function() {
        return this.unmute();
      }, this));
      this.bindOnEl("embed", __bind(function() {
        return this.embed();
      }, this));
      this.element.trigger('inited');
      this.loopCounter = new widgets.player.LoopCounter(this.data.duration * 1000, this.element);
      this.bindOnEl(Player.EVENT_PLAYING, this.loopCounter.start);
      this.bindOnEl(Player.EVENT_PAUSED, this.loopCounter.stop);
      if ($('.multipageDialog.closedPage').size() > 0 || $(".signedInChannelsGuidePopup").is(":visible")) {
        this.opts.muted = true;
      }
      if (this.getPlayerType() === 'site' && GlobalState.TIMELINE.type() !== 'unknown') {
        if ((e = this.element.parents("[clientside-timeline]")).size() > 0) {
          timelineUrl = e.first().attr("url");
        } else {
          timelineUrl = "unknown";
        }
        this.bindOnEl(Player.EVENT_PLAYING, (__bind(function() {
          return Stats.track('timeline_play_started', {
            timeline_type: GlobalState.TIMELINE.type(),
            source_url: timelineUrl
          });
        }, this)));
      }
      if (!this.opts.embed) {
        $(document).bind("flash_player:mute", this.mute.bind(this));
        $(document).bind("flash_player:unmute", this.unmute.bind(this));
        this.inFocus = true;
        $(window).focus(__bind(function() {
          return this.onFocus();
        }, this));
        $(window).blur(__bind(function() {
          return this.onBlur();
        }, this));
      }
      this.element.bind("mouseenter", this.mouseEnter.bind(this));
      this.element.bind("mouseleave", this.mouseLeave.bind(this));
      this.element.bind(Player.ACTION_ACTIVATE_HAND_CONTROL, this.activateHandControl.bind(this));
      if (!this.opts.embed) {
        $(document).bind("flash_player:" + this.playerId + ":soundlevel", __bind(function(e, lvl) {
          return $(window).one("focus", __bind(function() {
            return this.fullscreenOn = false;
          }, this));
        }, this));
      }
      $(document).bind("flash_player:" + this.playerId + ":fullscreen", __bind(function() {
        this.fullscreenOn = !this.fullscreenOn;
        return $(window).one("focus", __bind(function() {
          return this.fullscreenOn = false;
        }, this));
      }, this));
      $(document).bind("flash_player:" + this.playerId + ":app_initialized", __bind(function() {
        return this.element.trigger(Player.EVENT_READY);
      }, this));
      $(document).bind("flash_player:" + this.playerId + ":loaded", __bind(function() {
        return this.element.trigger('loaded');
      }, this));
      $(document).bind("flash_player:" + this.playerId + ":play_started", __bind(function() {
        this.playing = true;
        return this.element.trigger(Player.EVENT_PLAYING, [this.id]);
      }, this));
      $(document).bind("flash_player:" + this.playerId + ":play_paused", __bind(function() {
        this.playing = false;
        return this.element.trigger(Player.EVENT_PAUSED, [this.id]);
      }, this));
      $(document).bind("flash_player:" + this.playerId + ":reembed", __bind(function(e) {
        var wasPlayingState;
        e.preventDefault();
        e.stopPropagation();
        wasPlayingState = this.playing;
        this.unembed();
        return setTimeout((__bind(function() {
          this.embed();
          if (wasPlayingState) {
            return this.play();
          }
        }, this)), 300);
      }, this));
      if (this.getPlayerType() === 'embed') {
        this.embed();
      }
      window.f = this;
      this.startPlayingOnFocus = false;
      this.firstTimeHidden = document.hidden === void 0 ? false : document.hidden;
    }
    FlashPlayer.prototype.randomNum = function() {
      return Math.round(Math.random() * 10000);
    };
    FlashPlayer.prototype.onFocus = function() {
      if (this.startPlayingOnFocus && this.isActive()) {
        this.play();
      }
      return this.firstTimeHidden = void 0;
    };
    FlashPlayer.prototype.onBlur = function() {
      this.startPlayingOnFocus = this.playing || this.playingIntent;
      return this.suspend();
    };
    FlashPlayer.prototype.mouseEnter = function() {
      if (this.commander) {
        return this.commander.callPlayerCMD('mouseover');
      }
    };
    FlashPlayer.prototype.mouseLeave = function() {
      if (this.commander) {
        return this.commander.callPlayerCMD('mouseout');
      }
    };
    FlashPlayer.prototype.hideFinger = function() {
      if (this.commander) {
        return this.commander.callPlayerCMD('hidefinger');
      }
    };
    FlashPlayer.prototype.preload = function() {
      return this.embedIfNeeded();
    };
    FlashPlayer.prototype.preloadFinished = function() {
      return this.preloaded = true;
    };
    FlashPlayer.prototype.isActive = function() {
      if ($('body').hasClass('cobb-page')) {
        return true;
      } else {
        return this.element.closest('[coub-block]').hasClass('active');
      }
    };
    FlashPlayer.prototype.embed = function() {
      var dims, embeddedCallback, flashvars, params, url, vars;
      if (this.embedded || this.embedInProcess) {
        return;
      }
      this.embedInProcess = true;
      this.videoContainer.html("<div id='" + this.playerId + "'></div>");
      vars = {
        id: this.playerId,
        type: this.getPlayerType(),
        host: window.location.host.replace(/^www\./, '')
      };
      if (this.opts.autoplay || this.element.attr('data-has-autoplay') === 'true') {
        vars.autoplay = true;
        vars.useEmbedDispatcher = false;
      }
      if (this.opts.muted) {
        vars.isMuted = true;
      }
      if (this.getPlayerType() === 'site') {
        vars.noLogo = true;
        vars.hideTopBar = false;
        vars.useEmbedDispatcher = false;
      }
      if (this.getPlayerType() === 'embed') {
        vars.type = 'embed';
        vars.referrer = document.referrer;
      }
      if (this.getPlayerType() === 'embed' && this.opts.autoplay) {
        vars.useEmbedDispatcher = false;
      }
      _.each(['noControls', 'startWithHD', 'hideTopBar', 'noLogo', 'noSiteButtons', 'noHDControl', 'startOnMouseOver'], __bind(function(k) {
        if (this.opts[k]) {
          return vars[k] = true;
        }
      }, this));
      if (("" + location.protocol + "//" + location.host + location.pathname) === this.data.href) {
        vars.disableLink = true;
      }
      if (this.opts.href) {
        vars.href = this.opts.href;
      }
      if (window.location.pathname.indexOf('/view/') === 0) {
        vars.showHandButton = true;
        if (window.location.pathname.indexOf("/view/" + this.data.permalink) === 0) {
          vars.disableLink = true;
        }
      }
      if (window.location.pathname.indexOf('/view/' + this.data.permalink) === -1) {
        vars.goOnClick = true;
        vars.hasMusicIcon = true;
      }
      vars = $.extend(vars, this.getFlashVarsFromEl());
      if (GlobalState.PAGE.isCoubPage()) {
        vars = $.extend(vars, {
          coub_page: true
        });
      }
      flashvars = {
        json: encodeURIComponent(JSON.stringify(this.data)),
        vars: encodeURIComponent(JSON.stringify(vars))
      };
      params = {
        allowscriptaccess: 'always',
        allowfullscreen: 'true',
        wmode: this.getPlayerWmode(),
        name: this.playerId
      };
      embeddedCallback = __bind(function(e) {
        var NEXT_TRY;
        this.embedInProcess = false;
        if (e.success) {
          this.commander = new FlashCommander(this.playerId);
          this.embedded = true;
          this.element.trigger('embedded');
          return $("#" + this.playerId).css({
            cursor: "pointer"
          });
        } else {
          return setTimeout(this.embed.bind(this), (NEXT_TRY = 500));
        }
      }, this);
      if (this.opts.smooth_embedding) {
        $(document).one("flash_player:" + this.playerId + ":app_initialized", __bind(function() {
          return $(this.element).css({
            position: 'static',
            left: "0",
            top: "0"
          });
        }, this));
        this.element.css({
          "position": "absolute",
          left: -10000,
          top: -10000
        });
      }
      switch (window.env) {
        case 'staging':
          url = $.makeFlashURL('/staging-player-test/coub-player.swf');
          break;
        case 'staging2':
          url = $.makeFlashURL('/staging-player-test/coub-player-s2.swf');
          break;
        default:
          url = $.makeFlashURL('http://assets1-new.akamai.coub.com/assets/coub-player-5bbf3c16518c101d40e9893bf3851f8a.swf');
      }
      dims = [];
      if (this.getPlayerType() === 'site') {
        dims[0] = '100%';
        dims[1] = '100%';
      } else {
        dims[0] = this.element.width();
        dims[1] = this.element.height();
      }
      return swfobject.embedSWF(url, this.playerId, dims[0], dims[1], '11.2.0', null, flashvars, params, {
        name: this.playerId
      }, embeddedCallback);
    };
    FlashPlayer.prototype.getFlashVarsFromEl = function() {
      return FlashPlayer.getFlashVarsFromEl(this.element);
    };
    FlashPlayer.prototype.embedIfNeeded = function() {
      if (!this.embedded) {
        return this.embed();
      }
    };
    FlashPlayer.prototype.unembed = function() {
      if (!this.embedded) {
        return;
      }
      this.videoContainer.html('');
      this.preloaded = false;
      this.embedded = false;
      this.playing = false;
      this.muted = false;
      this.commander.clearIntervals();
      this.commander = null;
      return this.element.trigger(FlashPlayer.EVENT_UNEMBED);
    };
    FlashPlayer.prototype.hideProgressBar = function() {
      return this.preloader.css({
        width: "0"
      });
    };
    FlashPlayer.prototype.preloadAndPlay = function() {
      if (this.playing) {
        return;
      }
      if (!this.embedded) {
        this.playingIntent = true;
        this.element.one("loaded", this.bindedPlay);
        return this.embed();
      } else {
        return this.play();
      }
    };
    FlashPlayer.prototype.play = function() {
      console.log(this.DT, "Play.");
      if ((this.firstTimeHidden != null) && this.firstTimeHidden === true && !this.opts.embed) {
        this.firstTimeHidden = void 0;
        return this.startPlayingOnFocus = true;
      } else {
        this.startPlayingOnFocus = false;
        this.playingIntent = false;
        if (this.playing) {
          return;
        }
        this.commander.execCommand('doPlay');
        return this.playing = true;
      }
    };
    FlashPlayer.prototype.getPlayerWmode = function() {
      return "transparent";
    };
    FlashPlayer.prototype.suspend = function() {
      console.log(this.DT, "Suspend.");
      if (!this.embedded) {
        return;
      }
      this.element.unbind("loaded", this.bindedPlay);
      this.playingIntent = false;
      this.playing = false;
      return this.commander.execCommand('suspend');
    };
    FlashPlayer.prototype.mute = function() {
      this.muted = true;
      if (this.commander) {
        return this.commander.execCommand('windowBlur');
      }
    };
    FlashPlayer.prototype.unmute = function() {
      this.muted = false;
      if (this.commander) {
        return this.commander.execCommand('windowFocus');
      }
    };
    FlashPlayer.prototype.getPlayerType = function() {
      if (this.opts.playerType) {
        return this.opts.playerType;
      } else {
        if (this.opts.embed) {
          return "embed";
        } else {
          return "site";
        }
      }
    };
    FlashPlayer.prototype.bindOnEl = function(evt, cbk) {
      return this.element.bind(evt, __bind(function(e) {
        e.stopPropagation();
        return cbk();
      }, this));
    };
    FlashPlayer.prototype.getHandControl = function() {
      if (!this.handControl) {
        this.handControl = $(".viewer__hand", this.element);
      }
      return this.handControl;
    };
    FlashPlayer.prototype.activateHandControl = function() {
      var onPlay, onUnembed;
      onUnembed = __bind(function() {
        return this.getHandControl().show();
      }, this);
      onPlay = __bind(function() {
        return this.getHandControl().hide();
      }, this);
      this.element.bind(FlashPlayer.EVENT_UNEMBED, onUnembed);
      if (!this.playing) {
        this.getHandControl().show();
      }
      this.getHandControl().bind("click", __bind(function() {
        this.preloadAndPlay();
        return this.getHandControl().hide();
      }, this));
      this.element.bind("playWasStarted", onPlay);
      return this.element.one(Player.ACTION_DISACTIVATE_HAND_CONTROL, __bind(function() {
        this.element.unbind(FlashPlayer.EVENT_UNEMBED, onUnembed);
        this.element.unbind("playWasStarted", onPlay);
        this.getHandControl().unbind("click");
        return this.getHandControl().css("display", "");
      }, this));
    };
    return FlashPlayer;
  })();
  window.FlashPlayer.EVENT_UNEMBED = "FlashPlayer:Unembed";
  window.FlashPlayer.getAttr = function(name) {
    return "flash-var-" + name;
  };
  window.FlashPlayer.FLASH_VAR_PAT = /^flash-var-([\w\d]+)/;
  window.FlashPlayer.getRawFlashVarsFromEl = function(el) {
    var attr, index, res, _ref;
    res = {};
    _ref = el[0].attributes;
    for (index in _ref) {
      attr = _ref[index];
      if ((attr.name != null) && (attr.name.match(window.FlashPlayer.FLASH_VAR_PAT) != null)) {
        res[attr.name] = attr.value;
      }
    }
    return res;
  };
  window.FlashPlayer.getFlashVarsFromEl = function(el) {
    var attr, res, value, _ref;
    res = {};
    _ref = FlashPlayer.getRawFlashVarsFromEl(el);
    for (attr in _ref) {
      value = _ref[attr];
      res[attr.replace("flash-var-", "")] = value;
    }
    return res;
  };
  window.FlashPlayer.addFlashVar = function(el, key, value) {
    el.attr(FlashPlayer.getAttr(key), value);
    return el.trigger("unembed");
  };
  window.FlashPlayer.removeFlashVars = function(el) {
    var attr, val, _ref, _results;
    _ref = FlashPlayer.getRawFlashVarsFromEl(el);
    _results = [];
    for (attr in _ref) {
      val = _ref[attr];
      _results.push(el.removeAttr(attr));
    }
    return _results;
  };
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  mobilePlayer.CanvasCore = (function() {
    CanvasCore.prototype.NEXT_FRAME_TIMEOUT = 66;
    function CanvasCore(player, videoData) {
      this.player = player;
      this.videoData = videoData;
      this.ctx = player.ui.screen.getContext('2d');
      this.currentFrame = 0;
      this.loopTimeout = -1;
    }
    CanvasCore.prototype.preloadFrames = function() {
      var chunk, chunksLoadStartTime, chunksLoaded, key, _len, _ref;
      if (this.chunksDefer == null) {
        this.$frames = $('.viewer__progress--frames > .images', this.player.vb);
        this.frames = new MobilePlayerFrameArray(this.videoData.isReversed, this.videoData.duration);
        _ref = this.videoData.chunksUrls;
        for (key = 0, _len = _ref.length; key < _len; key++) {
          chunk = _ref[key];
          this.videoData.chunksUrls[key] = chunk.replace("storage.akamai.coub.com", "storagegz.akamai.coub.com");
        }
        this.chunksDefer = new MobilePlayerDataProvider().getFramesByChunks(this.videoData.chunksUrls);
        chunksLoaded = {};
        chunksLoadStartTime = new Date().getTime();
        this.chunksDefer.fail(function(url, status) {
          return Stats.track('mobile_player_load_error', {
            chunkUrl: url,
            status: status
          });
        });
        this.chunksDefer.progress(__bind(function(progress, base64frames, index) {
          var $img, frame, _i, _len2, _results;
          chunksLoaded[index] = [];
          _results = [];
          for (_i = 0, _len2 = base64frames.length; _i < _len2; _i++) {
            frame = base64frames[_i];
            $img = $('<img />');
            $img.attr('src', frame);
            this.$frames.append($img);
            _results.push(chunksLoaded[index].push($img.get(0)));
          }
          return _results;
        }, this));
        this.chunksDefer.done(__bind(function(count) {
          var i;
          for (i = 0; 0 <= count ? i < count : i > count; 0 <= count ? i++ : i--) {
            this.frames.concat(chunksLoaded[i]);
          }
          return Stats.track('mobile_player_load_finished', {
            time: (new Date().getTime() - chunksLoadStartTime) / 1000
          });
        }, this));
      }
      return this.chunksDefer;
    };
    CanvasCore.prototype.preloadAudio = function() {
      var $audio, defer;
      $audio = $("<audio loop preload='metadata'><source src='" + this.videoData.audioUrl + "' type='audio/mpeg' /></audio>");
      defer = $.Deferred();
      $audio.on('progress', function() {
        var buffered, total;
        if (this.buffered.length > 0) {
          total = this.duration;
          buffered = this.buffered.end(this.buffered.length - 1);
          return defer.notify(buffered / total);
        } else {
          return defer.notify(0);
        }
      });
      $audio.on('error', function() {
        return defer.reject();
      });
      $audio.one('timeupdate', function() {
        defer.notify(1);
        return defer.resolve();
      });
      $audio.on('pause', function(e) {
        if (!this.ended) {
          return;
        }
        return _.defer(__bind(function() {
          if (!this.ended && this.paused) {
            return this.play();
          }
        }, this));
      });
      $audio.on('ended', function() {
        this.currentTime = 0;
        return this.play();
      });
      $audio.appendTo(this.player.vb);
      this.audio = $audio.get(0);
      this.audio.play();
      return defer.promise();
    };
    CanvasCore.prototype.drawFrame = function(frameNo) {
      return this.ctx.drawImage(this.frames.get(frameNo), 0, 0, this.player.ui.width, this.player.ui.height);
    };
    CanvasCore.prototype.playSimpleLoop = function() {
      var playLoop;
      this.notifyAboutPlay();
      playLoop = __bind(function() {
        var nextFrameNo;
        nextFrameNo = this.frames.getNextIndex();
        if (nextFrameNo < this.currentFrame) {
          this.notifyAboutLoop();
        }
        this.drawFrame(nextFrameNo);
        this.loopTimeout = setTimeout(playLoop, this.NEXT_FRAME_TIMEOUT);
        return this.currentFrame = nextFrameNo;
      }, this);
      return playLoop();
    };
    CanvasCore.prototype.playAudioSyncLoop = function() {
      var playLoop;
      this.notifyAboutPlay();
      playLoop = __bind(function() {
        var nextFrameNo;
        nextFrameNo = this.frames.getIndexAt(this.audio.currentTime);
        if (nextFrameNo < this.currentFrame) {
          this.notifyAboutLoop();
        }
        this.drawFrame(nextFrameNo);
        this.loopTimeout = setTimeout(playLoop, this.NEXT_FRAME_TIMEOUT);
        return this.currentFrame = nextFrameNo;
      }, this);
      this.audio.play();
      return playLoop();
    };
    CanvasCore.prototype.rewind = function() {
      clearTimeout(this.loopTimeout);
      this.currentFrame = 0;
      return this.frames.resetCursor();
    };
    CanvasCore.prototype.pause = function() {
      this.notifyAboutPause();
      clearTimeout(this.loopTimeout);
      return this.audio && this.audio.pause();
    };
    CanvasCore.prototype.notifyAboutReadyState = function() {
      this.player.vb.triggerHandler(Player.EVENT_READY);
      return Stats.track('mobile_player_initialized');
    };
    CanvasCore.prototype.notifyAboutLoop = function() {
      this.player.vb.triggerHandler(Player.EVENT_LOOP_OCCURED);
      return Stats.track('mobile_player_loop_occured');
    };
    CanvasCore.prototype.notifyAboutPlay = function() {
      this.player.vb.triggerHandler(Player.EVENT_PLAYING);
      return Stats.track('mobile_player_started');
    };
    CanvasCore.prototype.notifyAboutPause = function() {
      this.player.vb.triggerHandler(Player.EVENT_PAUSED);
      return Stats.track('mobile_player_pause');
    };
    return CanvasCore;
  })();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.MobilePlayerFrameArray = (function() {
    function MobilePlayerFrameArray(isReversed, duration) {
      this.isReversed = isReversed;
      this.duration = duration;
      this.elements = [];
      this.currentFrame = 0;
    }
    Te.aE("Тест push", (__bind(function() {
      var x;
      x = new MobilePlayerFrameArray();
      x.push(1);
      return x.get(0) === 1;
    }, MobilePlayerFrameArray)));
    Te.aE("Тест concat", (__bind(function() {
      var x;
      x = new MobilePlayerFrameArray();
      x.push(1);
      x.concat([2, 3, 4]);
      return x.getLength() === 4 && x.get(x.getLength() - 1) === 4;
    }, MobilePlayerFrameArray)));
    Te.aE("Тест реверсного массива", (__bind(function() {
      var x;
      (x = new MobilePlayerFrameArray(true)).push(1);
      x.push(2);
      x.push(3);
      return x.get(0) === 1 && x.get(1) === 2 && x.get(2) === 3 && x.get(3) === 3 && x.get(4) === 2 && x.get(5) === 1 && x.get(6) === void 0 && x.getLength() === 6;
    }, MobilePlayerFrameArray)));
    MobilePlayerFrameArray.prototype.get = function(i) {
      if (this.isReversed && i >= this.elements.length) {
        i = (this.elements.length << 1) - i - 1;
      }
      return this.elements[i];
    };
    MobilePlayerFrameArray.prototype.getIndexAt = function(time) {
      var displayTime, frameNo, framesCount, framesTiming;
      displayTime = time % this.duration;
      framesCount = this.getLength();
      framesTiming = this.duration / framesCount;
      frameNo = Math.round(displayTime / framesTiming);
      if (frameNo < 0) {
        frameNo = 0;
      } else if (frameNo >= framesCount) {
        frameNo = framesCount - 1;
      }
      return frameNo;
    };
    MobilePlayerFrameArray.prototype.getNextIndex = function() {
      this.currentFrame++;
      if (this.currentFrame >= this.getLength()) {
        this.currentFrame = 0;
      }
      return this.currentFrame;
    };
    MobilePlayerFrameArray.prototype.resetCursor = function() {
      return this.currentFrame = 0;
    };
    MobilePlayerFrameArray.prototype.push = function(val) {
      return this.elements.push(val);
    };
    MobilePlayerFrameArray.prototype.concat = function(a) {
      return this.elements = this.elements.concat(a);
    };
    Te.aE("Тест getLength", (__bind(function() {
      var x;
      x = new MobilePlayerFrameArray();
      x.push(1);
      return x.getLength() === 1;
    }, MobilePlayerFrameArray)));
    Te.aE("Тест getLength, reverse", (__bind(function() {
      var x;
      x = new MobilePlayerFrameArray(true);
      x.push(1);
      return x.getLength() === 2;
    }, MobilePlayerFrameArray)));
    MobilePlayerFrameArray.prototype.getLength = function() {
      if (this.isReversed) {
        return this.elements.length << 1;
      } else {
        return this.elements.length;
      }
    };
    return MobilePlayerFrameArray;
  }).call(this);
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  mobilePlayer.UI = (function() {
    UI.prototype.VIEW = {
      UNLOADED: 0,
      LOADING_FRAMES: 1,
      LOADING_AUDIO: 2,
      SUSPENDED: 3,
      PAUSED: 4,
      DISABLED: 5,
      PLAYING: 6,
      PLAYING_MUTED: 7
    };
    UI.ACTION_RESIZE = "mobileplayer-UI:Actions:Resize";
    function UI(player, isEmbed) {
      this.s = this.constructor;
      this.player = player;
      this.isEmbed = isEmbed;
      this.hideMobileMark = false;
      this.hidePlayButton = false;
      this.hideToAppButton = false;
      this.vb = this.player.vb;
      this.playerContainer = $('.viewer__player:first', this.vb);
      this.poster = $('img.viewer__img:first', this.vb);
      this.pauseLayer = $('.viewer__pause:first', this.playerContainer);
      this.loadingFramesBar = $('.viewer__progress--frames:first', this.playerContainer);
      this.loadingAudioBar = $('.viewer__progress--audio:first', this.playerContainer);
      this.imagesContainer = $('.images:first', this.loadingFramesBar);
      this.screen = $('.viewer__screen:first', this.playerContainer).removeClass('-hidden').get(0);
      this.muteButton = $('.viewer__mute:first', this.playerContainer);
      this.playButton = $('.viewer__hand:first', this.playerContainer).removeClass('-hidden');
      this.mobileMark = $('.viewer__site-logo:first', this.playerContainer);
      this.toApp = $('.viewer__open-in-app:first', this.playerContainer);
      this.toAppPause = $('.viewer__pause__open-in-app', this.playerContainer);
      this.player.vb.on(this.s.ACTION_RESIZE, __bind(function() {
        return this.setSizes();
      }, this));
    }
    UI.prototype.init = function() {
      this.setSizes();
      this.poster.on('load', this.setSizes.bind(this));
      if (this.isEmbed) {
        this.mobileMark.removeClass('-hidden');
      } else {
        this.mobileMark.remove();
        this.mobileMark = $();
      }
      return this.initOpenInApp();
    };
    UI.prototype.initPauseScreen = function() {
      var $shareTitle, $shares, $views, count, lang;
      if (this.isPauseScreenInitialized) {
        return;
      }
      lang = GlobalState.COUNTRY.isExUssr() && '_ru' || '';
      $shareTitle = $('.viewer__pause__title', this.pauseLayer);
      $shareTitle.html(I18n.embed["share" + lang]);
      $views = $('.viewer__info__views', this.pauseLayer);
      count = $views.attr('data-count');
      if (count === '0' || !count) {
        $views.addClass('-hidden');
      } else {
        $views.html(helpers.Coub.getViewsText(count));
      }
      $shares = $('.viewer__pause__share .social', this.pauseLayer);
      if (helpers.Location.isVkontakteEmbed()) {
        $shares.add($shareTitle).remove();
      } else if (GlobalState.PLATFORM.isMobile()) {
        new CustomSharingButton($shares.filter('.facebook'));
        new CustomSharingButton($shares.filter('.pinterest'));
        new CustomSharingButton($shares.filter('.tumblr'));
        new CustomSharingButton($shares.filter('.watsapp'));
        new widgets.ShareInAppButton.TwitterShareInApp($shares.filter('.twitter'));
      } else {
        $shares.filter('.watsapp').remove();
        window.CustomSharingButton.constructIn(this.pauseLayer);
      }
      return this.isPauseScreenInitialized = true;
    };
    UI.prototype.initOpenInApp = function() {
      widgets.OpenInAppButton.constructIn(this.playerContainer);
      if (this.toApp.parent().length !== 0) {
        return this.toApp.removeClass('-hidden');
      } else {
        return this.toApp = $();
      }
    };
    UI.prototype.hideToApp = function() {
      this.hideToAppButton = true;
      this.toApp.addClass('-hidden');
      return this.toAppPause.hide();
    };
    UI.prototype.setSizes = function() {
      this.width = this.poster.width();
      this.height = this.poster.height();
      this.screen.width = this.width;
      this.screen.height = this.height;
      return this.resizeUI();
    };
    UI.prototype.isVisible = function() {
      return this.poster.is(":visible");
    };
    UI.prototype.resizeUI = function() {
      var isX2;
      isX2 = this.width >= 480 && this.height >= 130;
      this.vb.toggleClass('x2', isX2);
      $('.viewer__pause__title', this.pauseLayer).toggle((isX2 && this.height >= 210) || (!isX2 && this.height >= 130));
      return $('.viewer__pause__open-in-app', this.pauseLayer).toggle((isX2 && this.height >= 180) || (!isX2 && this.height >= 100));
    };
    UI.prototype.framesProgress = function(progress) {
      _.defer(__bind(function() {
        return this.loadingFramesBar.width(progress * 100 + '%');
      }, this));
      if (progress === 1) {
        return setTimeout((__bind(function() {
          return this.loadingFramesBar.addClass('-hidden');
        }, this)), 400);
      } else {
        return this.loadingFramesBar.removeClass('-hidden');
      }
    };
    UI.prototype.audioProgress = function(progress) {
      _.defer(__bind(function() {
        return this.loadingAudioBar.width(progress * 100 + '%');
      }, this));
      if (progress === 1) {
        return setTimeout((__bind(function() {
          return this.loadingAudioBar.addClass('-hidden');
        }, this)), 400);
      } else {
        return this.loadingAudioBar.removeClass('-hidden');
      }
    };
    UI.prototype.hideFinger = function() {
      this.hidePlayButton = true;
      return this.playButton.addClass('-hidden');
    };
    UI.prototype.hideLogo = function() {
      this.hideMobileMark = true;
      return this.mobileMark.addClass('-hidden');
    };
    UI.prototype.setView = function(view) {
      this.playButton.removeClass('disabled');
      this.pauseLayer.add(this.toApp).add(this.playButton).add(this.mobileMark).add(this.muteButton).addClass('-hidden');
      if (view === this.VIEW.UNLOADED) {
        this.toApp.add(this.mobileMark).add(this.playButton).removeClass('-hidden');
      } else if (view === this.VIEW.LOADING_FRAMES) {
        this.toApp.add(this.mobileMark).removeClass('-hidden');
      } else if (view === this.VIEW.LOADING_AUDIO) {
        this.toApp.add(this.mobileMark).removeClass('-hidden');
      } else if (view === this.VIEW.PLAYING) {
        this.toApp.removeClass('-hidden');
      } else if (view === this.VIEW.PLAYING_MUTED) {
        this.muteButton.add(this.mobileMark).add(this.toApp).removeClass('-hidden');
      } else if (view === this.VIEW.SUSPENDED) {
        this.toApp.add(this.mobileMark).removeClass('-hidden');
        this.muteButton.toggleClass('-hidden', this.player.isAudioPreloaded);
      } else if (view === this.VIEW.PAUSED) {
        this.pauseLayer.removeClass('-hidden');
        this.initPauseScreen();
      } else if (view === this.VIEW.DISABLED) {
        this.toApp.add(this.mobileMark).add(this.playButton).removeClass('-hidden');
        this.playButton.addClass('disabled');
      }
      if (this.hidePlayButton) {
        this.hideFinger();
      }
      if (this.hideMobileMark) {
        this.hideLogo();
      }
      if (this.hideToAppButton) {
        return this.hideToApp();
      }
    };
    return UI;
  })();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Html5Player = (function() {
    Html5Player.prototype.STATE = {
      UNLOADED: "unloaded",
      LOADING: "loading",
      PLAYING: "playing",
      PAUSED: "paused"
    };
    Html5Player.prototype.DT = "Html5Player";
    function Html5Player(viewerBlock, opts) {
      var html5Data, isEmbed, jsonStr, qualityKey, videoData;
      if (opts == null) {
        opts = {};
      }
      this.vb = $(viewerBlock).addClass('viewer--mobile');
      this.vb.addClass('viewer--v2');
      isEmbed = !!opts.embed;
      this.ui = new mobilePlayer.UI(this, isEmbed);
      this.ui.init();
      try {
        this.data = opts.data ? opts.data : (jsonStr = $('.data > script', this.vb).html(), JSON.parse(jsonStr));
      } catch (e) {
        this.ui.setView(mobilePlayer.UI.prototype.VIEW.DISABLED);
        Honeybadger.notify("Something wrong with coub's JSON", {
          context: {
            json: jsonStr
          }
        });
        return;
      }
      html5Data = this.data.file_versions.html5;
      if (!html5Data.video) {
        this.ui.setView(mobilePlayer.UI.prototype.VIEW.DISABLED);
        Stats.track('html5_player_no_muted_version');
        console.log(this.DT, 'no muted mp4');
        return;
      }
      qualityKey = opts.startWithHD ? 'high' : 'med';
      videoData = {
        duration: this.data.duration,
        videoUrl: html5Data.video[qualityKey].url,
        videoSize: html5Data.video[qualityKey].size
      };
      if (html5Data.audio) {
        videoData.audioUrl = html5Data.audio[qualityKey].url;
        videoData.audioSize = html5Data.audio[qualityKey].size;
      }
      this.changeState(this.STATE.UNLOADED);
      this.hasAudio = !!html5Data.audio;
      this.core = new html5Player.VideoCore(this, videoData);
      this.attachEvents();
      this.isMuted = !!opts.muted;
      this.isAutoplay = opts.autoplay || this.checkAutoplayLocation();
      if (this.isAutoplay) {
        this.play();
      }
      this.dispatcher = new EmbedDispatcher({
        onStop: __bind(function() {
          if (!this.isAutoplay || this.hasAudio) {
            return this.suspend();
          }
        }, this)
      });
      this.core.notifyAboutReadyState();
      if (this.checkAutoload()) {
        this.preload();
      }
      if (this.isAdult()) {
        this.ui.hideToApp();
      }
    }
    Html5Player.prototype.isAdult = function() {
      return this.data.age_restricted || this.data.age_restricted_by_admin || this.data.not_safe_for_work;
    };
    Html5Player.prototype.checkAutoload = function() {
      return helpers.Location.isVkontakteEmbed();
    };
    Html5Player.prototype.checkAutoplayLocation = function() {
      var ua;
      ua = navigator.userAgent.toLowerCase();
      return ua.indexOf('twitter') !== -1;
    };
    Html5Player.prototype.attachEvents = function() {
      $(document).on('visibilitychange', __bind(function() {
        if (document.hidden) {
          if (this.state !== this.STATE.PLAYING) {
            return;
          }
          this.suspend();
          return this.browserPaused = true;
        } else if (this.browserPaused) {
          this.play();
          return this.browserPaused = false;
        }
      }, this));
      $('.viewer__click', this.vb).click(this.togglePlayState.bind(this));
      this.ui.muteButton.click(this.plugInSound.bind(this));
      this.vb.on('play', this.play.bind(this));
      this.vb.on('pause', this.pause.bind(this));
      this.vb.on('suspend', this.suspend.bind(this));
      this.vb.on('preload', this.preload.bind(this));
      this.vb.on('hidefinger', this.ui.hideFinger.bind(this.ui));
      return this.vb.on('resize', this.ui.setSizes.bind(this.ui));
    };
    Html5Player.prototype.togglePlayState = function() {
      if (this.state !== this.STATE.PLAYING) {
        this.userPaused = false;
        return this.play();
      } else {
        this.userPaused = true;
        return this.pause();
      }
    };
    Html5Player.prototype.plugInSound = function() {
      var _ref;
      if ((_ref = this.state) !== this.STATE.PLAYING && _ref !== this.STATE.PAUSED) {
        return;
      }
      this.isMuted = false;
      return this.playLoop();
    };
    Html5Player.prototype.play = function() {
      var _ref;
      if (this.state === this.STATE.PAUSED && !this.userPaused) {
        return this.playLoop();
      } else if ((_ref = this.state) === this.STATE.UNLOADED || _ref === this.STATE.LOADING) {
        return this.preloadAndPlay();
      }
    };
    Html5Player.prototype.pause = function() {
      var _ref;
      if ((_ref = this.state) !== this.STATE.PAUSED && _ref !== this.STATE.PLAYING) {
        return;
      }
      this.changeState(this.STATE.PAUSED);
      this.core.pause();
      return this.ui.setView(mobilePlayer.UI.prototype.VIEW.PAUSED);
    };
    Html5Player.prototype.suspend = function() {
      var _ref;
      if ((_ref = this.state) !== this.STATE.PLAYING) {
        return;
      }
      this.changeState(this.STATE.PAUSED);
      this.core.pause();
      return this.ui.setView(mobilePlayer.UI.prototype.VIEW.SUSPENDED);
    };
    Html5Player.prototype.mute = function() {
      if (!this.hasAudio) {
        return;
      }
      return this.core.audio.muted = true;
    };
    Html5Player.prototype.unmute = function() {
      if (!this.hasAudio) {
        return;
      }
      return this.core.audio.muted = false;
    };
    Html5Player.prototype.preload = function() {
      var audioDefer, drawProgress, framesDefer, minProgress;
      if (!this.preloadDefer) {
        minProgress = 0.1;
        drawProgress = __bind(function(p) {
          return this.ui.framesProgress(Math.max(Math.round(p * 1000) / 1000, minProgress));
        }, this);
        if (this.hasAudio) {
          framesDefer = this.core.preloadFrames();
          audioDefer = this.core.preloadAudio();
          $.when(framesDefer.load, audioDefer.load).progress(function(v, a) {
            return drawProgress(.5 * ((v || 0) + (a || 0)));
          });
        } else {
          framesDefer = this.core.preloadFrames();
          framesDefer.load.progress(function(p) {
            return drawProgress(p);
          });
        }
        this.changeState(this.STATE.LOADING);
        this.ui.setView(mobilePlayer.UI.prototype.VIEW.LOADING_FRAMES);
        this.ui.framesProgress(minProgress);
        this.preloadDefer = $.when(framesDefer.play, audioDefer && audioDefer.play);
        this.preloadDefer.done(function() {
          drawProgress(1);
          return drawProgress = $.noop;
        });
      }
      return this.preloadDefer;
    };
    Html5Player.prototype.preloadAndPlay = function() {
      return this.preload().done(__bind(function() {
        this.ui.hideLogo();
        return this.playLoop();
      }, this));
    };
    Html5Player.prototype.playLoop = function() {
      this.changeState(this.STATE.PLAYING);
      if (this.hasAudio) {
        this.core.audio.muted = this.isMuted;
        this.ui.setView(this.isMuted && mobilePlayer.UI.prototype.VIEW.PLAYING_MUTED || mobilePlayer.UI.prototype.VIEW.PLAYING);
      } else {
        this.ui.setView(mobilePlayer.UI.prototype.VIEW.PLAYING);
      }
      this.core.playLoop();
      return this.dispatcher && this.dispatcher.startedPlaying();
    };
    Html5Player.prototype.changeState = function(state) {
      var key, value, _ref;
      console.log(this.DT, "Change state to", state);
      this.state = state;
      _ref = this.STATE;
      for (key in _ref) {
        value = _ref[key];
        this.vb.removeClass("-state-" + value);
      }
      return this.vb.addClass("-state-" + state);
    };
    return Html5Player;
  })();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  html5Player.MediaElementStrategy = (function() {
    function MediaElementStrategy(kind, size) {
      this.size = size;
      this.kind = kind;
      this.el = this.createElement();
      this.chunkSize = Math.max(Math.ceil(this.size / (this.kind === 'video' && 4 || 8)), 262144);
    }
    MediaElementStrategy.prototype.createElement = function() {
      if (this.kind === 'video') {
        return $("<video loop='loop' preload='auto' />");
      } else {
        return $("<audio preload='auto'></audio>");
      }
    };
    MediaElementStrategy.prototype.setSrc = function(src) {
      var MS;
      this.mimeCodec = this.getCodec();
      MS = window.MediaSource || window.webkitMediaSource;
      if (MS && MS.isTypeSupported(this.mimeCodec)) {
        return this.setMediaSource(src);
      } else {
        Stats.track('html5_player_mime_codec_fallback');
        return this.setSource(src);
      }
    };
    MediaElementStrategy.prototype.getCodec = function() {
      if (this.kind === 'video') {
        return 'video/mp4; codecs="avc1.42E01E"';
      } else if (GlobalState.BROWSER.isSafari()) {
        return 'audio/mp3; codecs="mp4a.6b"';
      } else {
        return 'audio/mpeg';
      }
    };
    MediaElementStrategy.prototype.fetchChunk = function(url, chunkNo) {
      var defer, xhr;
      defer = $.Deferred();
      xhr = new XMLHttpRequest();
      xhr.responseType = 'arraybuffer';
      xhr.onload = function() {
        return defer.resolve(xhr.response);
      };
      xhr.onerror = function() {
        return defer.reject();
      };
      xhr.onprogress = function(e) {
        return defer.notify(e.loaded / e.total);
      };
      xhr.open('get', "" + url + "?size=" + this.chunkSize + "&offset=" + ((chunkNo - 1) * this.chunkSize) + "&v=2");
      xhr.send();
      return defer.promise();
    };
    MediaElementStrategy.prototype.setMediaSource = function(src) {
      var loadDefer, ms, playDefer;
      ms = new (MediaSource || webkitMediaSource);
      playDefer = $.Deferred();
      loadDefer = $.Deferred();
      this.el.attr('src', URL.createObjectURL(ms));
      this.el.on('canplay', function() {
        return playDefer.resolve();
      });
      this.el.on('error', function() {
        return playDefer.reject('element err');
      });
      ms.addEventListener('sourceopen', __bind(function() {
        var chunkNo, chunks, loadChunk, progress, progress_per_chunk, sourceBuffer;
        chunks = src.indexOf('/get/b') !== -1 && Math.ceil(this.size / this.chunkSize) || 1;
        chunkNo = 1;
        progress_per_chunk = Math.round(1 / chunks * 100) / 100;
        progress = 0;
        sourceBuffer = ms.addSourceBuffer(this.mimeCodec);
        loadChunk = __bind(function() {
          var xhr;
          xhr = this.fetchChunk(src, chunkNo);
          xhr.fail(function() {
            return loadDefer().reject();
          });
          xhr.progress(function(p) {
            return loadDefer.notify(progress + progress_per_chunk * p);
          });
          return xhr.done(function(data) {
            try {
              return sourceBuffer.appendBuffer(data);
            } catch (e) {
              return playDefer.reject('sourceBuffer err');
            }
          });
        }, this);
        sourceBuffer.addEventListener('updateend', function() {
          if (++chunkNo > chunks) {
            try {
              ms.endOfStream();
            } catch (e) {
              $.noop();
            }
            loadDefer.notify(1);
            return loadDefer.resolve();
          } else {
            progress = progress_per_chunk * (chunkNo - 1);
            loadDefer.notify(progress);
            return loadChunk();
          }
        });
        return loadChunk();
      }, this));
      return {
        load: loadDefer.promise(),
        play: playDefer.promise()
      };
    };
    MediaElementStrategy.prototype.setSource = function(src) {
      var defer;
      defer = $.Deferred();
      this.el.html("<source src='" + src + "' />");
      this.el.on('progress', function() {
        var buffered, loaded, total;
        if (this.buffered.length > 0) {
          total = this.duration;
          buffered = this.buffered.end(this.buffered.length - 1);
          loaded = buffered / total;
          return defer.notify(loaded);
        } else {
          return defer.notify(0);
        }
      });
      this.el.one('error', function() {
        return defer.reject();
      });
      this.el.one('canplaythrough', function() {
        defer.notify(1);
        return defer.resolve();
      });
      return {
        load: defer.promise(),
        play: defer.promise()
      };
    };
    return MediaElementStrategy;
  })();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  html5Player.VideoCore = (function() {
    function VideoCore(player, videoData) {
      this.player = player;
      this.videoData = videoData;
    }
    VideoCore.prototype.preloadFrames = function() {
      var $video, media;
      if (!this.videoDefer) {
        media = new html5Player.MediaElementStrategy('video', this.videoData.videoSize);
        $video = media.el;
        $video.insertAfter(this.player.ui.screen);
        if (!GlobalState.BROWSER.isSafari()) {
          $video.attr('poster', this.player.ui.poster.attr('src'));
        }
        this.video = $video.get(0);
        this.videoDefer = media.setSrc(this.videoData.videoUrl);
        this.logMediaErrors(this.videoDefer, 'video');
      }
      return this.videoDefer;
    };
    VideoCore.prototype.preloadAudio = function() {
      var $audio, media;
      if (!this.audioDefer) {
        media = new html5Player.MediaElementStrategy('audio', this.videoData.audioSize);
        $audio = media.el;
        $audio.on('ended', __bind(function() {
          this.audio.ontimeupdate = __bind(function() {
            this.sync();
            return this.audio.ontimeupdate = void 0;
          }, this);
          return this.audio.play();
        }, this));
        $audio.appendTo(this.player.vb);
        this.audio = $audio.get(0);
        this.audioDefer = media.setSrc(this.videoData.audioUrl);
        this.logMediaErrors(this.audioDefer, 'audio');
      }
      return this.audioDefer;
    };
    VideoCore.prototype.playLoop = function() {
      this.notifyAboutPlay();
      if (this.audio) {
        if (GlobalState.BROWSER.isSafari()) {
          this.audio.ontimeupdate = __bind(function() {
            this.sync();
            this.video.play();
            return this.audio.ontimeupdate = void 0;
          }, this);
        } else {
          this.audio.onplay = __bind(function() {
            this.video.play();
            return this.audio.onplay = void 0;
          }, this);
        }
        return this.audio.play();
      } else {
        return this.video.play();
      }
    };
    VideoCore.prototype.pause = function() {
      this.notifyAboutPause();
      this.video.pause();
      return this.audio && this.audio.pause();
    };
    VideoCore.prototype.sync = function() {
      return this.video.currentTime = Math.round(1000 * this.audio.currentTime) % Math.round(1000 * this.videoData.duration) / 1000;
    };
    VideoCore.prototype.logMediaErrors = function(mediaDefer, kind) {
      mediaDefer.play.fail(function(reason) {
        return Stats.track("html5_player_" + kind + "_play_failed", {
          reason: reason
        });
      });
      return mediaDefer.load.fail(function() {
        return Stats.track("html5_player_" + kind + "_load_failed");
      });
    };
    VideoCore.prototype.notifyAboutReadyState = function() {
      this.player.vb.triggerHandler(Player.EVENT_READY);
      return Stats.track('html5_player_initialized');
    };
    VideoCore.prototype.notifyAboutLoop = function() {
      this.player.vb.triggerHandler(Player.EVENT_LOOP_OCCURED);
      return Stats.track('html5_player_loop_occured');
    };
    VideoCore.prototype.notifyAboutPlay = function() {
      this.player.vb.triggerHandler(Player.EVENT_PLAYING);
      return Stats.track('html5_player_started');
    };
    VideoCore.prototype.notifyAboutPause = function() {
      this.player.vb.triggerHandler(Player.EVENT_PAUSED);
      return Stats.track('html5_player_pause');
    };
    return VideoCore;
  })();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.widgets.player.LoopCounter = (function() {
    function LoopCounter(duration, vb) {
      this.loopCounted = __bind(this.loopCounted, this);
      this.stop = __bind(this.stop, this);
      this.start = __bind(this.start, this);
      this.getLoopInterval = __bind(this.getLoopInterval, this);      this.coubDuration = duration;
      this.vb = vb;
    }
    LoopCounter.prototype.MIN_LOOP_TIME = 1000;
    LoopCounter.prototype.getLoopInterval = function() {
      if (this.loopInterval == null) {
        if (this.coubDuration < this.MIN_LOOP_TIME) {
          this.loopInterval = this.MIN_LOOP_TIME;
        } else {
          this.loopInterval = this.coubDuration;
        }
      }
      return this.loopInterval;
    };
    LoopCounter.prototype.start = function() {
      if (this.countInterval == null) {
        this.countInterval = setInterval(this.loopCounted, this.getLoopInterval());
        return true;
      } else {
        return false;
      }
    };
    LoopCounter.prototype.stop = function() {
      if (this.countInterval != null) {
        clearInterval(this.countInterval);
        this.countInterval = void 0;
        return true;
      } else {
        return false;
      }
    };
    LoopCounter.prototype.loopCounted = function() {
      return this.vb.trigger(Player.EVENT_LOOP_OCCURED);
    };
    return LoopCounter;
  })();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.MobilePlayer = (function() {
    MobilePlayer.prototype.STATE = {
      UNLOADED: "unloaded",
      LOADING: "loading",
      PLAYING: "playing",
      PAUSED: "paused"
    };
    MobilePlayer.prototype.DT = "MobilePlayer";
    function MobilePlayer(viewerBlock, opts) {
      var isEmbed, jsonStr, videoData;
      if (opts == null) {
        opts = {};
      }
      this.vb = $(viewerBlock).addClass('viewer--mobile');
      isEmbed = !!opts.embed;
      this.ui = new mobilePlayer.UI(this, isEmbed);
      this.ui.init();
      try {
        this.data = opts.data ? opts.data : (jsonStr = $('.data > script', this.vb).html(), JSON.parse(jsonStr));
      } catch (e) {
        this.ui.setView(mobilePlayer.UI.prototype.VIEW.DISABLED);
        Honeybadger.notify("Something wrong with coub's JSON", {
          context: {
            json: jsonStr
          }
        });
        return;
      }
      try {
        this.mobileData = this.data.file_versions.mobile;
        this.html5Data = this.data.file_versions.html5;
      } catch (e) {
        this.ui.setView(mobilePlayer.UI.prototype.VIEW.DISABLED);
        Honeybadger.notify("Can't find mobile data in coub's JSON", {
          context: {
            json: JSON.stringify(this.data)
          }
        });
        return;
      }
      try {
        videoData = {
          framesUrl: this.mobileData.base64_url,
          framesCount: this.mobileData.frames_count,
          chunksUrls: this.getFramesVersion(),
          audioUrl: this.mobileData.audio_url,
          isReversed: this.data.ipad_playback_reversed,
          duration: this.data.duration
        };
      } catch (e) {
        Honeybadger.notify("Something wrong with base64 chunks", {
          context: {
            mobileData: JSON.stringify(this.mobileData)
          }
        });
        return;
      }
      if (videoData.chunksUrls.length === 0) {
        this.ui.setView(mobilePlayer.UI.prototype.VIEW.DISABLED);
        Stats.track('mobile_player_no_chunks_yet');
        console.log(this.DT, 'no chunks');
        return;
      }
      this.changeState(this.STATE.UNLOADED);
      this.hasAudio = this.checkAudio();
      this.hasSelfSound = this.hasAudio && this.data.has_sound;
      this.isAudioPreloaded = false;
      this.core = new mobilePlayer.CanvasCore(this, videoData);
      this.attachEvents();
      this.isMuted = opts.muted;
      this.isAutoplay = opts.autoplay || this.checkAutoplayLocation();
      if (this.isAutoplay) {
        this.play();
      }
      this.dispatcher = new EmbedDispatcher({
        onStop: __bind(function() {
          if (!this.isAutoplay || (this.hasAudio && this.isAudioPreloaded)) {
            return this.suspend();
          }
        }, this)
      });
      this.core.notifyAboutReadyState();
      if (this.checkAutoload()) {
        this.core.preloadFrames();
      }
      if (this.isAdult()) {
        this.ui.hideToApp();
      }
    }
    MobilePlayer.prototype.isAdult = function() {
      return this.data.age_restricted || this.data.age_restricted_by_admin || this.data.not_safe_for_work;
    };
    MobilePlayer.prototype.checkAutoload = function() {
      return helpers.Location.isVkontakteEmbed();
    };
    MobilePlayer.prototype.checkAutoplayLocation = function() {
      var ua;
      ua = navigator.userAgent.toLowerCase();
      return ua.indexOf('twitter') !== -1;
    };
    MobilePlayer.prototype.checkAudio = function() {
      var hasExternalTrack, hasSelfSound;
      hasSelfSound = this.data.has_sound;
      hasExternalTrack = _.keys(this.data.audio_versions).length !== 0;
      if (!hasSelfSound && !hasExternalTrack) {
        return false;
      }
      if (this.mobileData.audio_url) {
        return true;
      } else {
        Stats.track('mobile_player_missing_audio', {
          has_sound: hasSelfSound,
          external_audio: hasExternalTrack
        });
        console.log(this.DT, 'missing audio, not generated yet?');
        return false;
      }
    };
    MobilePlayer.prototype.getFramesVersion = function() {
      var whdefined, whsmall;
      whdefined = this.ui.width && this.ui.height;
      whsmall = this.ui.width <= 320 && this.ui.height <= 320;
      if (whdefined && whsmall && this.mobileData.base64_files_small.length > 0 && this.ui.isVisible()) {
        return this.mobileData.base64_files_small;
      } else {
        return this.mobileData.base64_files;
      }
    };
    MobilePlayer.prototype.attachEvents = function() {
      $(document).on('visibilitychange', __bind(function() {
        if (document.hidden) {
          if (this.state !== this.STATE.PLAYING) {
            return;
          }
          this.suspend();
          return this.browserPaused = true;
        } else if (this.browserPaused) {
          this.play();
          return this.browserPaused = false;
        }
      }, this));
      $('.viewer__click', this.vb).click(this.togglePlayState.bind(this));
      this.ui.muteButton.click(this.plugInSound.bind(this));
      this.vb.on('play', this.play.bind(this));
      this.vb.on('pause', this.pause.bind(this));
      this.vb.on('suspend', this.suspend.bind(this));
      this.vb.on('hidefinger', this.ui.hideFinger.bind(this.ui));
      return this.vb.on('resize', this.ui.setSizes.bind(this.ui));
    };
    MobilePlayer.prototype.togglePlayState = function() {
      if (this.state !== this.STATE.PLAYING) {
        this.userPaused = false;
        if (this.checkAutoload() && !this.isAudioPreloaded) {
          return this.preloadAllAndPlay();
        } else {
          return this.play();
        }
      } else {
        this.userPaused = true;
        return this.pause();
      }
    };
    MobilePlayer.prototype.plugInSound = function() {
      var _ref;
      if ((_ref = this.state) !== this.STATE.PLAYING && _ref !== this.STATE.PAUSED) {
        return;
      }
      if (this.isAudioPreloaded) {
        this.core.rewind();
        return this.playWithAudio();
      } else {
        return this.preloadAudioAndPlay();
      }
    };
    MobilePlayer.prototype.play = function() {
      if (this.state === this.STATE.PAUSED && !this.userPaused) {
        if (this.hasAudio && this.isAudioPreloaded) {
          return this.playWithAudio();
        } else {
          return this.playMuted();
        }
      } else if (this.state === this.STATE.UNLOADED) {
        if (this.hasAudio && !GlobalState.PLATFORM.isMobile() && !this.isMuted) {
          return this.preloadAllAndPlay();
        } else {
          return this.preloadFramesAndPlay();
        }
      }
    };
    MobilePlayer.prototype.pause = function() {
      var _ref;
      if ((_ref = this.state) !== this.STATE.PAUSED && _ref !== this.STATE.PLAYING) {
        return;
      }
      this.changeState(this.STATE.PAUSED);
      this.core.pause();
      return this.ui.setView(mobilePlayer.UI.prototype.VIEW.PAUSED);
    };
    MobilePlayer.prototype.suspend = function() {
      var _ref;
      if ((_ref = this.state) !== this.STATE.PLAYING) {
        return;
      }
      this.changeState(this.STATE.PAUSED);
      this.core.pause();
      return this.ui.setView(mobilePlayer.UI.prototype.VIEW.SUSPENDED);
    };
    MobilePlayer.prototype.mute = function() {
      if (!this.isAudioPreloaded) {
        return;
      }
      return this.core.audio.muted = true;
    };
    MobilePlayer.prototype.unmute = function() {
      if (!this.isAudioPreloaded) {
        return;
      }
      return this.core.audio.muted = false;
    };
    MobilePlayer.prototype.preloadFramesAndPlay = function() {
      var framesDefer;
      this.changeState(this.STATE.LOADING);
      this.ui.setView(mobilePlayer.UI.prototype.VIEW.LOADING_FRAMES);
      this.ui.framesProgress(0.1);
      framesDefer = this.core.preloadFrames();
      framesDefer.done(__bind(function() {
        return this.playMuted();
      }, this));
      framesDefer.progress(__bind(function(progress) {
        return this.ui.framesProgress(Math.max(progress, 0.1));
      }, this));
      return framesDefer.fail(__bind(function() {
        this.ui.framesProgress(0);
        return this.ui.setView(mobilePlayer.UI.prototype.VIEW.DISABLED);
      }, this));
    };
    MobilePlayer.prototype.preloadAudioAndPlay = function() {
      var audioDefer;
      audioDefer = this.core.preloadAudio();
      audioDefer.done(__bind(function() {
        this.isAudioPreloaded = true;
        this.ui.hideLogo();
        this.core.rewind();
        return this.playWithAudio();
      }, this));
      audioDefer.progress(__bind(function(progress) {
        return this.ui.audioProgress(Math.max(progress, 0.1));
      }, this));
      audioDefer.fail(__bind(function() {
        this.ui.audioProgress(0);
        return this.ui.setView(mobilePlayer.UI.prototype.VIEW.DISABLED);
      }, this));
      this.changeState(this.STATE.LOADING);
      this.ui.setView(mobilePlayer.UI.prototype.VIEW.LOADING_AUDIO);
      return this.ui.audioProgress(0.1);
    };
    MobilePlayer.prototype.preloadAllAndPlay = function() {
      var audioDefer, audioProg, checkAll, drawProgress, framesDefer, framesPreloaded, framesProg;
      framesDefer = this.core.preloadFrames();
      audioDefer = this.core.preloadAudio();
      audioProg = 0;
      framesProg = 0;
      framesPreloaded = false;
      checkAll = __bind(function() {
        if (this.isAudioPreloaded && framesPreloaded) {
          this.ui.hideLogo();
          return this.playWithAudio();
        }
      }, this);
      drawProgress = __bind(function() {
        return this.ui.framesProgress(Math.max(audioProg * .5 + framesProg * .5, .1));
      }, this);
      audioDefer.done(__bind(function() {
        this.isAudioPreloaded = true;
        audioProg = 1;
        drawProgress();
        return checkAll();
      }, this));
      framesDefer.done(__bind(function() {
        framesPreloaded = true;
        framesProg = 1;
        drawProgress();
        return checkAll();
      }, this));
      audioDefer.progress(__bind(function(progress) {
        console.log(this.DT, 'audio', progress);
        audioProg = progress;
        return drawProgress();
      }, this));
      framesDefer.progress(__bind(function(progress) {
        console.log(this.DT, 'video', progress);
        framesProg = progress;
        return drawProgress();
      }, this));
      this.changeState(this.STATE.LOADING);
      this.ui.setView(mobilePlayer.UI.prototype.VIEW.LOADING_FRAMES);
      return this.ui.framesProgress(0.1);
    };
    MobilePlayer.prototype.playMuted = function() {
      this.changeState(this.STATE.PLAYING);
      this.dispatcher && this.dispatcher.startedPlaying();
      if (this.hasAudio) {
        this.ui.setView(mobilePlayer.UI.prototype.VIEW.PLAYING_MUTED);
      } else {
        this.ui.setView(mobilePlayer.UI.prototype.VIEW.PLAYING);
      }
      return this.core.playSimpleLoop();
    };
    MobilePlayer.prototype.playWithAudio = function() {
      this.changeState(this.STATE.PLAYING);
      this.ui.setView(mobilePlayer.UI.prototype.VIEW.PLAYING);
      this.dispatcher && this.dispatcher.startedPlaying();
      return this.core.playAudioSyncLoop();
    };
    MobilePlayer.prototype.changeState = function(state) {
      var key, value, _ref;
      console.log(this.DT, "Change state to", state);
      this.state = state;
      _ref = this.STATE;
      for (key in _ref) {
        value = _ref[key];
        this.vb.removeClass("-state-" + value);
      }
      return this.vb.addClass("-state-" + state);
    };
    return MobilePlayer;
  })();
}).call(this);
(function() {
  window.Player = (function() {
    Player.prototype.kind = 'mobile';
    function Player(el, opts) {
      var jsonStr;
      if (opts == null) {
        opts = {};
      }
      if (window.is_admin && window.MediaSource && !GlobalState.PLATFORM.isMobile()) {
        if (!opts.data) {
          try {
            jsonStr = $('.data > script', el).html();
            opts.data = JSON.parse(jsonStr);
          } catch (e) {
            $.noop();
          }
        }
        if (opts.data && opts.data.file_versions.html5.video) {
          this.curHandler = new Html5Player(el, opts);
        }
      }
      this.curHandler || (this.curHandler = this.choosePlayer(el, opts));
    }
    Player.prototype.choosePlayer = function(el, opts) {
      if (GlobalState.BROWSER.hasFlash()) {
        this.kind = 'flash';
        return new FlashPlayer(el, opts);
      } else {
        return new MobilePlayer(el, opts);
      }
    };
    return Player;
  })();
  $.fn.player = function(opts) {
    return this.each(function() {
      if (!this.getAttribute('data-player-initialized')) {
        this.setAttribute('data-player-initialized', true);
        return new Player(this, opts);
      }
    });
  };
  Player.ACTION_ACTIVATE_HAND_CONTROL = "Player:Actions:ActivateHandControl";
  Player.ACTION_DISACTIVATE_HAND_CONTROL = "Player:Actions:DisactivateHandControl";
  Player.ACTION_UNEMBED_IF_NOT_PLAYING = "Player:Actions:UnembedIfNotPlaying";
  Player.EVENT_READY = "Player:Ready";
  Player.EVENT_PLAYING = "playWasStarted";
  Player.EVENT_PAUSED = "Player:Paused";
  Player.EVENT_LOOP_OCCURED = "Player:LoopOccured";
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.FlashCommander = (function() {
    FlashCommander.prototype.callIntervalIds = [];
    function FlashCommander(id) {
      this.id = id;
      this.e = $.thisMovie(this.id);
    }
    FlashCommander.prototype.reFindObject = function() {
      this.e = $.thisMovie(this.id);
      if (this.e && this.e.tagName === 'object') {
        return clearInterval(this.elementFinderInterval);
      }
    };
    FlashCommander.prototype.objectFound = function() {
      return this.e && this.e.tagName;
    };
    FlashCommander.prototype.execCommand = function(cmd) {
      var args, func, randID;
      args = Array.prototype.slice.call(arguments, 1);
      if (this.e && this.e[cmd]) {
        this.callPlayerCMD(cmd, args);
        return true;
      } else {
        randID = "interval_" + Math.round(Math.random() * 10000000);
      }
      func = __bind(function() {
        if (this.e && this.e[cmd]) {
          this.callPlayerCMD(cmd, args);
          return clearInterval(this.callIntervalIds[randID]);
        }
      }, this);
      return this.callIntervalIds[randID] = setInterval(func, 100);
    };
    FlashCommander.prototype.clearIntervals = function() {
      return _.each(this.callIntervalIds, function(id) {
        return clearInterval(id);
      });
    };
    FlashCommander.prototype.callPlayerCMD = function(cmd, args) {
      if (this.e && this.e[cmd]) {
        if (args && args.length > 0) {
          return this.e[cmd].apply(this.e, args);
        } else {
          return this.e[cmd].call(this.e);
        }
      } else {
        return null;
      }
    };
    return FlashCommander;
  })();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.AbstractAppSchemeLink = (function() {
    AbstractAppSchemeLink.prototype.schemeLink = 'what://ever';
    AbstractAppSchemeLink.prototype.alternativeLink = 'http://what.ever';
    AbstractAppSchemeLink.prototype.redirectHTPP = 'what_ever_redirect_http';
    AbstractAppSchemeLink.prototype.redirectApp = 'what_ever_redirect_app';
    AbstractAppSchemeLink.prototype.settings = {
      delay: 1000,
      delta: 500
    };
    function AbstractAppSchemeLink(el) {
      this.openAppStore = __bind(this.openAppStore, this);
      this.open = __bind(this.open, this);      this.el = $(el);
      this.el.on('click', __bind(function() {
        return this.open();
      }, this));
    }
    AbstractAppSchemeLink.prototype.open = function() {
      var timeout;
      if (!this.disableAutomaticStoreRedirect()) {
        timeout = setTimeout(this.openAppStore(Date.now()), this.settings.delay);
      }
      window.location.href = this.schemeLink;
      return clearTimeout(timeout);
    };
    AbstractAppSchemeLink.prototype.openAppStore = function(ts) {
      return __bind(function() {
        var wait;
        wait = this.settings.delay + this.settings.delta;
        if ((Date.now() - ts) < wait) {
          return window.location.href = this.alternativeLink;
        }
      }, this);
    };
    AbstractAppSchemeLink.prototype.disableAutomaticStoreRedirect = function() {
      var uagent;
      uagent = navigator.userAgent;
      if (uagent.indexOf('Twitter') !== -1) {
        return true;
      }
      if (uagent.indexOf('FBAN/MessengerForiOS') !== -1) {
        return true;
      }
      return false;
    };
    AbstractAppSchemeLink.prototype.getScheme = function() {
      var m;
      m = this.schemeLink.match(/^(\w+):\/\//);
      if (m.length) {
        return m[1];
      } else {
        return;
      }
    };
    return AbstractAppSchemeLink;
  })();
}).call(this);
(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  widgets.OpenInAppButton = {};
  widgets.OpenInAppButton = {
    constructIn: function($container) {
      var $showInAppBtn;
      $showInAppBtn = $('[show-in-app-btn]', $container);
      if ($showInAppBtn.length === 0) {
        return false;
      }
      return $showInAppBtn.each(function(i, el) {
        var $el;
        $el = $(el);
        if (GlobalState.PLATFORM.isIos()) {
          $el.addClass('-ios');
          return new widgets.OpenInAppButton.IosShowInApp($el);
        } else if (GlobalState.PLATFORM.isWindophone()) {
          $el.addClass('-win');
          return new widgets.OpenInAppButton.WindowsShowInApp($el);
        } else if (GlobalState.PLATFORM.isAndroidNative()) {
          $el.addClass('-android');
          return new widgets.OpenInAppButton.AndroidShowInApp($el);
        } else {
          return $el.remove();
        }
      });
    }
  };
  widgets.OpenInAppButton.IosShowInApp = (function() {
    __extends(IosShowInApp, AbstractAppSchemeLink);
    function IosShowInApp() {
      IosShowInApp.__super__.constructor.apply(this, arguments);
      this.schemeLink = "coub://view/" + (this.el.attr("data-permalink"));
      this.alternativeLink = "itms-apps://itunes.apple.com/app/coub/id714042522";
      this.redirectHTPP = "mobile_player_redirect_http";
      this.redirectApp = "mobile_player_redirect_app";
    }
    return IosShowInApp;
  })();
  widgets.OpenInAppButton.WindowsShowInApp = (function() {
    function WindowsShowInApp(el) {
      var $el, link;
      $el = $(el);
      link = "coubwp://view/" + ($el.attr("data-permalink"));
      $el.click(function() {
        window.location = link;
        return false;
      });
    }
    return WindowsShowInApp;
  })();
  widgets.OpenInAppButton.AndroidShowInApp = (function() {
    __extends(AndroidShowInApp, AbstractAppSchemeLink);
    function AndroidShowInApp(el) {
      var text;
      AndroidShowInApp.__super__.constructor.apply(this, arguments);
      this.schemeLink = "intent://coub.com/view/" + (this.el.attr('data-permalink')) + "#Intent;package=com.coub.android;scheme=http;end;";
      this.alternativeLink = "https://play.google.com/store/apps/details?id=com.coub.android";
      this.redirectHTPP = 'overlay_wia_redirect_http_android';
      this.redirectApp = 'overlay_wia_redirect_app_android';
      if (window !== window.top || navigator.userAgent.indexOf('FB_IAB') !== -1 || navigator.userAgent.indexOf('Twitter') !== -1) {
        text = I18n.embed["get_app" + (GlobalState.COUNTRY.isRussia() && '_ru' || '')];
        $('span', this.el).html(text);
        this.open = __bind(function() {
          return window.open(this.alternativeLink);
        }, this);
      }
    }
    return AndroidShowInApp;
  })();
}).call(this);
(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  widgets.ShareInAppButton = {};
  widgets.ShareInAppButton = {
    constructIn: function($container) {
      return $('.social', $container).each(function(i, el) {
        var $el;
        $el = $(el);
        if ($el.hassClass('.twitter')) {
          return new widgets.OpenInAppButton.TwitterShareInApp($el);
        }
      });
    }
  };
  widgets.ShareInAppButton.TwitterShareInApp = (function() {
    __extends(TwitterShareInApp, AbstractAppSchemeLink);
    function TwitterShareInApp() {
      var title, url;
      TwitterShareInApp.__super__.constructor.apply(this, arguments);
      url = this.el.attr('data-url');
      title = this.el.attr('data-encoded-title');
      this.schemeLink = "twitter://post?message=" + title + "%20" + url;
      this.alternativeLink = SocialSharingDataProvider.TYPES.TWITTER.getPopupUrl(title, url);
      this.redirectHTPP = "mobile_player_redirect_http";
      this.redirectApp = "mobile_player_redirect_app";
    }
    return TwitterShareInApp;
  })();
}).call(this);
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.CustomSharingButton = (function() {
    CustomSharingButton.ATTR = "custom-sharing-button";
    function CustomSharingButton(el) {
      this.isDisabled = __bind(this.isDisabled, this);
      this.track = __bind(this.track, this);
      this.onClick = __bind(this.onClick, this);
      this.init = __bind(this.init, this);      this.btn = $(el);
      this.init();
      this.provider = new SocialSharingDataProvider().getProviderByName(this.type);
      if (this.provider != null) {
        if (this.provider.onClick != null) {
          this.btn.on("click", __bind(function(e) {
            return this.provider.onClick(e, this);
          }, this));
        } else {
          this.btn.on("click", this.onClick);
        }
      } else {
        throw "CustomSharingButton: unknown button type " + this.type;
      }
    }
    CustomSharingButton.prototype.init = function() {
      this.type = this.btn.attr("data-custom-sharing");
      this.title = this.btn.attr("data-encoded-title");
      this.url = this.btn.attr("data-url");
      this.permalink = this.btn.attr("data-permalink");
      return this.img = this.btn.attr("data-img");
    };
    CustomSharingButton.prototype.onClick = function(e) {
      var h, left, params, top, url, w;
      if (this.isDisabled()) {
        return;
      }
      w = this.provider.popupW != null ? this.provider.popupW : 640;
      h = this.provider.popupH != null ? this.provider.popupH : 430;
      left = $(window).width() / 2 - w / 2;
      top = $(window).height() / 2 - h / 2;
      params = "menubar=no,toolbar=no,status=no,width=" + w + ",height=" + h + ",toolbar=no,left=" + left + ",top=" + top;
      if (this.url != null) {
        url = this.url;
      } else {
        url = Routes.view_coub_by_permalink_url(this.permalink);
      }
      window.open(this.provider.getPopupUrl(this.title, url, this.img), "_share_coub_" + this.type, params);
      return this.track();
    };
    CustomSharingButton.prototype.track = function() {
      return Stats.track('social_share', {
        sharing_destination: this.type,
        url: window.location.pathname,
        coubUrl: this.url
      });
    };
    CustomSharingButton.prototype.isDisabled = function() {
      return this.btn.hasClass("disabled");
    };
    CustomSharingButton.constructIn = function(container) {
      if (!(container != null)) {
        container = $("body");
      }
      return container.find("[" + CustomSharingButton.ATTR + "]").each(function() {
        return new CustomSharingButton($(this));
      });
    };
    CustomSharingButton.getAttributes = function(provider, url, title, img) {
      var attrs;
      attrs = [CustomSharingButton.ATTR];
      attrs.push("data-custom-sharing='" + provider + "'");
      attrs.push("data-permalink='" + url + "'");
      attrs.push("data-encoded-title=\"" + (encodeURIComponent(title)) + "\"");
      attrs.push("data-img='" + img + "'");
      return attrs.join(" ");
    };
    CustomSharingButton.getAttributesForCoub = function(provider, coub) {
      var img, imgVersion;
      if (provider === SocialSharingDataProvider.TYPES.PINTEREST.NAME) {
        imgVersion = "pinterest";
      } else {
        imgVersion = "med";
      }
      img = helpers.Coub.getFileVersion(coub.image_versions, imgVersion);
      return CustomSharingButton.getAttributes(provider, coub.permalink, coub.title, img);
    };
    CustomSharingButton.attachTo = function(container, provider, coub, classes, active) {
      var r, t;
      if (classes == null) {
        classes = "";
      }
      if (active == null) {
        active = true;
      }
      t = JST["app/site/templates/coub_block/social_action_buttons/custom_sharing_button"];
      r = $(t({
        provider: provider,
        coub: coub,
        checkFacebook: false,
        active: active,
        classes: classes
      }));
      container.append(r);
      return CustomSharingButton.constructIn(container);
    };
    return CustomSharingButton;
  })();
}).call(this);
(function() {
  window.Ces = {
    host: 'ces.coub.com',
    init: function() {
      if (this.inited) {
        return;
      }
      this.queue = [];
      this.inited = true;
      return setInterval(this.sendQueue.bind(this), 3000);
    },
    track: function(evt_name, params, sync) {
      if (!evt_name) {
        return;
      }
      this.init();
      if (params == null) {
        params = {};
      }
      params['type'] = "web_" + evt_name;
      this.queue.push(params);
      if (sync) {
        return this.sendQueue(true);
      }
    },
    sendQueue: function(sync) {
      if (this.queue.length === 0) {
        return;
      }
      window.queue = this.queue;
      console.log('sending to CES ', this.queue.length, 'events');
      $.ajax({
        async: !sync,
        type: 'POST',
        url: "//" + this.host + "/rec.json",
        data: {
          data: this.pack(this.queue)
        }
      });
      return this.queue = [];
    },
    pack: function(obj) {
      var string;
      string = JSON.stringify(obj);
      return btoa(string);
    }
  };
}).call(this);
(function() {
  window.Stats = {
    hosts: {
      production: "metrics.coub.com"
    },
    init: function() {
      if (this.inited) {
        return;
      }
      this.persistentParams = {};
      this.queue = [];
      setTimeout((function() {
        return $(window).bind('popstate', (function() {
          return Stats.track('pageview', {
            from_popstate: true
          });
        }));
      }), 5000);
      this.inited = true;
      return Stats.track('pageview');
    },
    identify: function(id, data) {
      if ((window.env != null) && window.env !== 'development') {
        mixpanel.identify(id);
        if (data) {
          return mixpanel.people.set(data);
        }
      }
    },
    track: function(evt_name, params, sync) {
      var ext_params, ga_interpolations, ga_virt_interpolations, mixpanel_whitelist;
      this.init();
      if (params == null) {
        params = {};
      }
      delete params["_type"];
      ga_interpolations = {
        "coub_created": ['Coub', 'Create'],
        "user_created": ['User', 'Create']
      };
      ga_virt_interpolations = {
        "coub_created": "/virt/coub-create",
        "user_created": "/virt/user-create"
      };
      if ((typeof _gaq !== "undefined" && _gaq !== null) && ga_interpolations[evt_name]) {
        _gaq.push(['_trackEvent'].concat(ga_interpolations[evt_name]));
        _gaq.push(['_trackPageView'].concat(ga_virt_interpolations[evt_name]));
        ga('send', 'event', ga_interpolations[evt_name][0], ga_interpolations[evt_name][1]);
      }
      params['browser'] = $('html').attr('class').split(' ');
      params['screen_resolution'] = [screen.width, screen.height];
      params['user_agent'] = window.navigator.userAgent;
      params['page_url'] = window.location.pathname;
      params['page_params'] = window.location.search;
      params['page_section'] = GlobalState.STATS.getPageSection();
      if (window.api_token) {
        params['signed_in'] = true;
      } else {
        params['signed_in'] = false;
      }
      _.extend(params, this.persistentParams);
      if (window.is_admin) {
        params['is_admin'] = true;
      }
      if (params['signed_in']) {
        ext_params = _.extend(params, {
          'cur_user_channels_count': Params.getBranchValue("current_user.channels").length,
          'cur_user_coubs_count': this.sumProp(Params.getBranchValue("current_user.channels"), 'simple_coubs_count'),
          'cur_user_recoubs_count': this.sumProp(Params.getBranchValue("current_user.channels"), 'recoubs_count'),
          'cur_user_followers_count': this.sumProp(Params.getBranchValue("current_user.channels"), 'followers_count'),
          'cur_user_following_count': this.sumProp(Params.getBranchValue("current_user.channels"), 'following_count')
        });
      } else {
        ext_params = params;
      }
      Ces.track(evt_name, ext_params, sync);
      mixpanel_whitelist = ['coub_created', 'user_created', 'social_share', 'visit_from_embed', 'timeline_session_started', 'loading_exp', 'sp_closed_site_screen_showed', 'sp_invite_signup_screen_showed', 'sp_signup_page_screen_showed', 'sp_registration_form_screen_showed', 'sp_create_channel_screen_showed', 'sp_find_friends_screen_showed', 'sp_invite_friends_screen_showed', 'sp_signup_complete_screen_showed', 'sp_signup_complete_screen_clicked', 'guide_step_one_showed', 'guide_step_one_completed', 'guide_step_one_skip_clicked', 'guide_step_one_follow_occured', 'sp_registration_form_error', 'sp_create_channel_form_error', 'sp_follow_channels_screen_showed', 'sp_follow_channels_screen_submit', 'sp_follow_channels_screen_skip', 'sp_follow_channels_channel_clicked', 'like_occured', 'recoub_occured', 'guide_second_dropdown_showed', 'guide_second_dropdown_hided_by_user', 'guardians_promo_clicked', 'guardians_promo_showed', 'follow_occured'];
      if ((window.env != null) && window.env !== 'development' && mixpanel_whitelist.indexOf(evt_name) !== -1) {
        return mixpanel.track(evt_name, ext_params);
      }
    },
    sumProp: function(objects, prop) {
      return _.reduce(objects, (function(memo, obj) {
        return memo + obj[prop];
      }), 0);
    },
    deliverQueue: function() {
      var host, sending_data;
      if (this.queue.length === 0) {
        return;
      }
      if (!this.hosts[window.env]) {
        return;
      }
      host = this.hosts[window.env];
      sending_data = {
        events: encodeURIComponent(JSON.stringify(this.queue))
      };
      $.ajax({
        type: "GET",
        url: "http://" + host + "/events.jsonp",
        dataType: "jsonp",
        data: sending_data
      });
      return this.queue = [];
    },
    addPersistentParameters: function(obj) {
      this.init();
      return _.extend(this.persistentParams, obj);
    }
  };
}).call(this);
(function() {

}).call(this);
