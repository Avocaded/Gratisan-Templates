/*!
    SlickNav Responsive Mobile Menu v1.0.2
    (c) 2015 Josh Cope
    licensed under MIT
*/
!function(n,e){function t(e,t){this.element=e,this.settings=n.extend({},a,t),this._defaults=a,this._name=i,this.init()}var a={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,brand:"",init:function(){},open:function(){},close:function(){}},i="slicknav",s="slicknav";t.prototype.init=function(){var t,a,i=this,l=n(this.element),o=this.settings;if(o.duplicate?(i.mobileNav=l.clone(),i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(e,t){n(t).removeAttr("id")})):i.mobileNav=l,t=s+"_icon",""===o.label&&(t+=" "+s+"_no-text"),"a"==o.parentTag&&(o.parentTag='a href="#"'),i.mobileNav.attr("class",s+"_nav"),a=n('<div class="'+s+'_menu"></div>'),""!==o.brand){var r=n('<div class="'+s+'_brand">'+o.brand+"</div>");n(a).append(r)}i.btn=n(["<"+o.parentTag+' aria-haspopup="true" tabindex="0" class="'+s+"_btn "+s+'_collapsed">','<span class="'+s+'_menutxt">'+o.label+"</span>",'<span class="'+t+'">','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>',"</span>","</"+o.parentTag+">"].join("")),n(a).append(i.btn),n(o.prependTo).prepend(a),a.append(i.mobileNav);var d=i.mobileNav.find("li");n(d).each(function(){var e=n(this),t={};if(t.children=e.children("ul").attr("role","menu"),e.data("menu",t),t.children.length>0){var a=e.contents(),l=!1;nodes=[],n(a).each(function(){return n(this).is("ul")?!1:(nodes.push(this),void(n(this).is("a")&&(l=!0)))});var r=n("<"+o.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+s+'_item"/>');if(o.allowParentLinks&&!o.nestedParentLinks&&l)n(nodes).wrapAll('<span class="'+s+"_parent-link "+s+'_row"/>').parent();else{var d=n(nodes).wrapAll(r).parent();d.addClass(s+"_row")}e.addClass(s+"_collapsed"),e.addClass(s+"_parent");var c=n('<span class="'+s+'_arrow">'+o.closedSymbol+"</span>");o.allowParentLinks&&!o.nestedParentLinks&&l&&(c=c.wrap(r).parent()),n(nodes).last().after(c)}else 0===e.children().length&&e.addClass(s+"_txtnode");e.children("a").attr("role","menuitem").click(function(e){o.closeOnClick&&!n(e.target).parent().closest("li").hasClass(s+"_parent")&&n(i.btn).click()}),o.closeOnClick&&o.allowParentLinks&&(e.children("a").children("a").click(function(){n(i.btn).click()}),e.find("."+s+"_parent-link a:not(."+s+"_item)").click(function(){n(i.btn).click()}))}),n(d).each(function(){var e=n(this).data("menu");o.showChildren||i._visibilityToggle(e.children,null,!1,null,!0)}),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),n(e).mousedown(function(){i._outlines(!1)}),n(e).keyup(function(){i._outlines(!0)}),n(i.btn).click(function(n){n.preventDefault(),i._menuToggle()}),i.mobileNav.on("click","."+s+"_item",function(e){e.preventDefault(),i._itemClick(n(this))}),n(i.btn).keydown(function(n){var e=n||event;13==e.keyCode&&(n.preventDefault(),i._menuToggle())}),i.mobileNav.on("keydown","."+s+"_item",function(e){var t=e||event;13==t.keyCode&&(e.preventDefault(),i._itemClick(n(e.target)))}),o.allowParentLinks&&o.nestedParentLinks&&n("."+s+"_item a").click(function(n){n.stopImmediatePropagation()})},t.prototype._menuToggle=function(){var n=this,e=n.btn,t=n.mobileNav;e.hasClass(s+"_collapsed")?(e.removeClass(s+"_collapsed"),e.addClass(s+"_open")):(e.removeClass(s+"_open"),e.addClass(s+"_collapsed")),e.addClass(s+"_animating"),n._visibilityToggle(t,e.parent(),!0,e)},t.prototype._itemClick=function(n){var e=this,t=e.settings,a=n.data("menu");a||(a={},a.arrow=n.children("."+s+"_arrow"),a.ul=n.next("ul"),a.parent=n.parent(),a.parent.hasClass(s+"_parent-link")&&(a.parent=n.parent().parent(),a.ul=n.parent().next("ul")),n.data("menu",a)),a.parent.hasClass(s+"_collapsed")?(a.arrow.html(t.openedSymbol),a.parent.removeClass(s+"_collapsed"),a.parent.addClass(s+"_open"),a.parent.addClass(s+"_animating"),e._visibilityToggle(a.ul,a.parent,!0,n)):(a.arrow.html(t.closedSymbol),a.parent.addClass(s+"_collapsed"),a.parent.removeClass(s+"_open"),a.parent.addClass(s+"_animating"),e._visibilityToggle(a.ul,a.parent,!0,n))},t.prototype._visibilityToggle=function(e,t,a,i,l){var o=this,r=o.settings,d=o._getActionItems(e),c=0;a&&(c=r.duration),e.hasClass(s+"_hidden")?(e.removeClass(s+"_hidden"),e.slideDown(c,r.easingOpen,function(){n(i).removeClass(s+"_animating"),n(t).removeClass(s+"_animating"),l||r.open(i)}),e.attr("aria-hidden","false"),d.attr("tabindex","0"),o._setVisAttr(e,!1)):(e.addClass(s+"_hidden"),e.slideUp(c,this.settings.easingClose,function(){e.attr("aria-hidden","true"),d.attr("tabindex","-1"),o._setVisAttr(e,!0),e.hide(),n(i).removeClass(s+"_animating"),n(t).removeClass(s+"_animating"),l?"init"==i&&r.init():r.close(i)}))},t.prototype._setVisAttr=function(e,t){var a=this,i=e.children("li").children("ul").not("."+s+"_hidden");i.each(t?function(){var e=n(this);e.attr("aria-hidden","true");var i=a._getActionItems(e);i.attr("tabindex","-1"),a._setVisAttr(e,t)}:function(){var e=n(this);e.attr("aria-hidden","false");var i=a._getActionItems(e);i.attr("tabindex","0"),a._setVisAttr(e,t)})},t.prototype._getActionItems=function(n){var e=n.data("menu");if(!e){e={};var t=n.children("li"),a=t.find("a");e.links=a.add(t.find("."+s+"_item")),n.data("menu",e)}return e.links},t.prototype._outlines=function(e){e?n("."+s+"_item, ."+s+"_btn").css("outline",""):n("."+s+"_item, ."+s+"_btn").css("outline","none")},t.prototype.toggle=function(){var n=this;n._menuToggle()},t.prototype.open=function(){var n=this;n.btn.hasClass(s+"_collapsed")&&n._menuToggle()},t.prototype.close=function(){var n=this;n.btn.hasClass(s+"_open")&&n._menuToggle()},n.fn[i]=function(e){var a=arguments;if(void 0===e||"object"==typeof e)return this.each(function(){n.data(this,"plugin_"+i)||n.data(this,"plugin_"+i,new t(this,e))});if("string"==typeof e&&"_"!==e[0]&&"init"!==e){var s;return this.each(function(){var l=n.data(this,"plugin_"+i);l instanceof t&&"function"==typeof l[e]&&(s=l[e].apply(l,Array.prototype.slice.call(a,1)))}),void 0!==s?s:this}}}(jQuery,document,window);



/*!
	Counter Up	
*/
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);


/*Waypoint*/
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);



/*

 scrollup v2.1.1
 Author: Mark Goodyear - http://markgoodyear.com
 Git: https://github.com/markgoodyear/scrollup

 Copyright 2013 Mark Goodyear.
 Licensed under the MIT license
 http://www.opensource.org/licenses/mit-license.php

 Twitter: @markgdyr

 */
!function(a,b,c){a.fn.scrollUp=function(b){a.data(c.body,"scrollUp")||(a.data(c.body,"scrollUp",!0),a.fn.scrollUp.init(b))},a.fn.scrollUp.init=function(d){var e=a.fn.scrollUp.settings=a.extend({},a.fn.scrollUp.defaults,d),f=e.scrollTitle?e.scrollTitle:e.scrollText,g=a("<a/>",{id:e.scrollName,href:"#top",title:f}).appendTo("body");e.scrollImg||g.html(e.scrollText),g.css({display:"none",position:"fixed",zIndex:e.zIndex}),e.activeOverlay&&a("<div/>",{id:e.scrollName+"-active"}).css({position:"absolute",top:e.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+e.activeOverlay,zIndex:e.zIndex}).appendTo("body"),scrollEvent=a(b).scroll(function(){switch(scrollDis="top"===e.scrollFrom?e.scrollDistance:a(c).height()-a(b).height()-e.scrollDistance,e.animation){case"fade":a(a(b).scrollTop()>scrollDis?g.fadeIn(e.animationInSpeed):g.fadeOut(e.animationOutSpeed));break;case"slide":a(a(b).scrollTop()>scrollDis?g.slideDown(e.animationInSpeed):g.slideUp(e.animationOutSpeed));break;default:a(a(b).scrollTop()>scrollDis?g.show(0):g.hide(0))}}),g.click(function(b){b.preventDefault(),a("html, body").animate({scrollTop:0},e.scrollSpeed,e.easingType)})},a.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollText:"<i class='scroll-icon fa fa-chevron-up scroll-up'></i>",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},a.fn.scrollUp.destroy=function(d){a.removeData(c.body,"scrollUp"),a("#"+a.fn.scrollUp.settings.scrollName).remove(),a("#"+a.fn.scrollUp.settings.scrollName+"-active").remove(),a.fn.jquery.split(".")[1]>=7?a(b).off("scroll",d):a(b).unbind("scroll",d)},a.scrollUp=a.fn.scrollUp}(jQuery,window,document);



////////////////////////////////////////////////////////////////////
// Retina
////////////////////////////////////////////////////////////////////
(function(){function n(){}function i(e){return t.retinaImageSuffix+e}function s(e,t){this.path=e||"";if(typeof t!=="undefined"&&t!==null){this.at_2x_path=t;this.perform_check=false}else{if(undefined!==document.createElement){var n=document.createElement("a");n.href=this.path;n.pathname=n.pathname.replace(r,i);this.at_2x_path=n.href}else{var s=this.path.split("?");s[0]=s[0].replace(r,i);this.at_2x_path=s.join("?")}this.perform_check=true}}function o(e){this.el=e;this.path=new s(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var t=this;this.path.check_2x_variant(function(e){if(e){t.swap()}})}var e=typeof exports==="undefined"?window:exports;var t={retinaImageSuffix:"@2x",check_mime_type:true,force_original_dimensions:true};e.Retina=n;n.configure=function(e){if(e===null){e={}}for(var n in e){if(e.hasOwnProperty(n)){t[n]=e[n]}}};n.init=function(t){if(t===null){t=e}var n=t.onload||function(){};t.onload=function(){var e=document.getElementsByTagName("img"),t=[],r,i;for(r=0;r<e.length;r+=1){i=e[r];if(!!!i.getAttributeNode("data-no-retina")){t.push(new o(i))}}n()}};n.isRetina=function(){var t="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";if(e.devicePixelRatio>1){return true}if(e.matchMedia&&e.matchMedia(t).matches){return true}return false};var r=/\.\w+$/;e.RetinaImagePath=s;s.confirmed_paths=[];s.prototype.is_external=function(){return!!(this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain))};s.prototype.check_2x_variant=function(e){var n,r=this;if(this.is_external()){return e(false)}else if(!this.perform_check&&typeof this.at_2x_path!=="undefined"&&this.at_2x_path!==null){return e(true)}else if(this.at_2x_path in s.confirmed_paths){return e(true)}else{n=new XMLHttpRequest;n.open("HEAD",this.at_2x_path);n.onreadystatechange=function(){if(n.readyState!==4){return e(false)}if(n.status>=200&&n.status<=399){if(t.check_mime_type){var i=n.getResponseHeader("Content-Type");if(i===null||!i.match(/^image/i)){return e(false)}}s.confirmed_paths.push(r.at_2x_path);return e(true)}else{return e(false)}};n.send()}};e.RetinaImage=o;o.prototype.swap=function(e){function r(){if(!n.el.complete){setTimeout(r,5)}else{if(t.force_original_dimensions){n.el.setAttribute("width",n.el.offsetWidth);n.el.setAttribute("height",n.el.offsetHeight)}n.el.setAttribute("src",e)}}if(typeof e==="undefined"){e=this.path.at_2x_path}var n=this;r()};if(n.isRetina()){n.init(e)}})();


////////////////////////////////////////////////////////////////
// Parallax
//////////////////////////////////////////////////////////////
(function(e,t,n,r){function u(t,n){this.element=t;this.$element=e(this.element);this.options=e.extend({},s,n);this._defaults=s;this._name=i;this.init()}var i="scrolly",s={bgParallax:false},o=false;u.prototype.init=function(){var t=this;this.startPosition=this.$element.position().top;this.offsetTop=this.$element.offset().top;this.height=this.$element.outerHeight(true);this.velocity=this.$element.attr("data-velocity");this.bgStart=parseInt(this.$element.attr("data-fit"),10);e(n).scroll(function(){t.didScroll=true});setInterval(function(){if(t.didScroll){t.didScroll=false;t.scrolly()}},10)};u.prototype.scrolly=function(){var n=e(t).scrollTop(),r=e(t).height(),i=this.startPosition;if(this.offsetTop>=n+r){this.$element.addClass("scrolly-invisible")}else{if(this.$element.hasClass("scrolly-invisible")){i=this.startPosition+(n+(r-this.offsetTop))*this.velocity}else{i=this.startPosition+n*this.velocity}}if(this.bgStart){i=i+this.bgStart}if(this.options.bgParallax===true){this.$element.css({backgroundPosition:"50% "+i+"px"})}else{this.$element.css({top:i})}};e.fn[i]=function(t){return this.each(function(){if(!e.data(this,"plugin_"+i)){e.data(this,"plugin_"+i,new u(this,t))}})}})(jQuery,window,document);


////////////////////////////////////////////////////////////////
/*Page 2 Scroll*/
//////////////////////////////////////////////////////////////
(function(f,j,n,g){var d="mPageScroll2id",k="mPS2id",v=".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id']",l={scrollSpeed:1300,autoScrollSpeed:true,scrollEasing:"easeInOutExpo",scrollingEasing:"easeInOutCirc",pageEndSmoothScroll:true,layout:"vertical",offset:0,highlightSelector:false,clickedClass:k+"-clicked",targetClass:k+"-target",highlightClass:k+"-highlight",forceSingleHighlight:false,keepHighlightUntilNext:false,highlightByNextTarget:false,disablePluginBelow:false,clickEvents:true,onStart:function(){},onComplete:function(){},defaultSelector:false,live:true},r,c,i,a,s,h,p,q,o,t,b=0,e,u={init:function(w){var w=f.extend(true,{},l,w);f(n).data(k,w);c=f(n).data(k);r=(!r)?this.selector:r+","+this.selector;if(c.defaultSelector){if(typeof f(r)!=="object"||f(r).length===0){r=v}}if(c.clickEvents){f(n).undelegate("."+k).delegate(r,"click."+k,function(z){if(m._isDisabled.call(null)){m._removeClasses.call(null);return}var y=f(this),x=y.attr("href"),A=y.prop("href");if(x&&x.indexOf("#/")!==-1){return}m._reset.call(null);t=y.data("ps2id-offset")||0;if(m._isValid.call(null,x,A)&&m._findTarget.call(null,x)){z.preventDefault();a="selector";s=y;m._setClasses.call(null,true);m._scrollTo.call(null)}})}f(j).unbind("."+k).bind("scroll."+k+" resize."+k,function(){if(m._isDisabled.call(null)){m._removeClasses.call(null);return}var x=f("._"+k+"-t");x.each(function(z){var y=f(this),B=y.attr("id"),A=m._findHighlight.call(null,B);m._setClasses.call(null,false,y,A);if(z==x.length-1){m._extendClasses.call(null)}})});i=true;m._setup.call(null);m._live.call(null)},scrollTo:function(y,w){if(m._isDisabled.call(null)){m._removeClasses.call(null);return}if(y&&typeof y!=="undefined"){m._isInit.call(null);var x={layout:c.layout,offset:c.offset,clicked:false},w=f.extend(true,{},x,w);m._reset.call(null);q=w.layout;o=w.offset;y=(y.indexOf("#")!==-1)?y:"#"+y;if(m._isValid.call(null,y)&&m._findTarget.call(null,y)){a="scrollTo";s=w.clicked;if(s){m._setClasses.call(null,true)}m._scrollTo.call(null)}}},destroy:function(){f(j).unbind("."+k);f(n).undelegate("."+k).removeData(k);f("._"+k+"-t").removeData(k);m._removeClasses.call(null,true)}},m={_isDisabled:function(){var x=j,w="inner",y=c.disablePluginBelow instanceof Array?[c.disablePluginBelow[0]||0,c.disablePluginBelow[1]||0]:[c.disablePluginBelow||0,0];if(!("innerWidth" in j)){w="client";x=n.documentElement||n.body}return x[w+"Width"]<=y[0]||x[w+"Height"]<=y[1]},_isValid:function(w,z){if(!w){return}z=(!z)?w:z;var y=(z.indexOf("#/")!==-1)?z.split("#/")[0]:z.split("#")[0],x=j.location.toString().split("#")[0];return w!=="#"&&w.indexOf("#")!==-1&&(y===""||y===x)},_setup:function(){var x=m._highlightSelector(),w=1,y=0;return f(x).each(function(){var C=f(this),z=C.attr("href"),E=C.prop("href");if(m._isValid.call(null,z,E)){var D=(z.indexOf("#/")!==-1)?z.split("#/")[1]:z.split("#")[1],A=f("#"+D);if(A.length>0){if(c.highlightByNextTarget){if(A!==y){if(!y){A.data(k,{tn:"0"})}else{y.data(k,{tn:A})}y=A}}if(!A.hasClass("_"+k+"-t")){A.addClass("_"+k+"-t")}A.data(k,{i:w});if(!C.hasClass("_"+k+"-h")){C.addClass("_"+k+"-h")}var B=m._findHighlight.call(null,D);m._setClasses.call(null,false,A,B);b=w;w++;if(w==f(x).length){m._extendClasses.call(null)}}}})},_highlightSelector:function(){return(c.highlightSelector&&c.highlightSelector!=="")?c.highlightSelector:r},_findTarget:function(y){var x=(y.indexOf("#/")!==-1)?y.split("#/")[1]:y.split("#")[1],w=f("#"+x);if(w.length<1||w.css("position")==="fixed"){if(x==="top"){w=f("body")}else{return}}h=w;if(!q){q=c.layout}o=m._setOffset.call(null);p=[(w.offset().top-o[0]).toString(),(w.offset().left-o[1]).toString()];p[0]=(p[0]<0)?0:p[0];p[1]=(p[1]<0)?0:p[1];return p},_setOffset:function(){if(!o){o=(c.offset)?c.offset:0}if(t){o=t}var A,z,B,w;switch(typeof o){case"object":case"string":A=[(o.y)?o.y:o,(o.x)?o.x:o];z=[(A[0] instanceof jQuery)?A[0]:f(A[0]),(A[1] instanceof jQuery)?A[1]:f(A[1])];if(z[0].length>0){B=z[0].height();if(z[0].css("position")==="fixed"){B+=z[0][0].offsetTop}}else{if(!isNaN(parseFloat(A[0]))&&isFinite(A[0])){B=parseInt(A[0])}else{B=0}}if(z[1].length>0){w=z[1].width();if(z[1].css("position")==="fixed"){w+=z[1][0].offsetLeft}}else{if(!isNaN(parseFloat(A[1]))&&isFinite(A[1])){w=parseInt(A[1])}else{w=0}}break;case"function":A=o.call(null);if(A instanceof Array){B=A[0];w=A[1]}else{B=w=A}break;default:B=w=parseInt(o)}return[B,w]},_findHighlight:function(B){var A=j.location.toString().split("#")[0],x=f("._"+k+"-h[href='#"+B+"']"),y=f("._"+k+"-h[href='"+A+"#"+B+"']"),w=f("._"+k+"-h[href='#/"+B+"']"),z=f("._"+k+"-h[href='"+A+"#/"+B+"']");x=(x.length>0)?x:y;w=(w.length>0)?w:z;return(w.length>0)?w:x},_setClasses:function(B,x,y){var A=c.clickedClass,w=c.targetClass,z=c.highlightClass;if(B&&A&&A!==""){f("."+A).removeClass(A);s.addClass(A)}else{if(x&&w&&w!==""&&y&&z&&z!==""){if(m._currentTarget.call(null,x)){x.addClass(w);y.addClass(z)}else{if(!c.keepHighlightUntilNext||f("."+z).length>1){x.removeClass(w);y.removeClass(z)}}}}},_extendClasses:function(){var w=c.targetClass,B=c.highlightClass,D=f("."+w),A=f("."+B),C=w+"-first",z=w+"-last",y=B+"-first",x=B+"-last";f("._"+k+"-t").removeClass(C+" "+z);f("._"+k+"-h").removeClass(y+" "+x);if(!c.forceSingleHighlight){D.slice(0,1).addClass(C).end().slice(-1).addClass(z);A.slice(0,1).addClass(y).end().slice(-1).addClass(x)}else{if(c.keepHighlightUntilNext&&D.length>1){D.slice(0,1).removeClass(w);A.slice(0,1).removeClass(B)}else{D.slice(1).removeClass(w);A.slice(1).removeClass(B)}}},_removeClasses:function(w){f("."+c.clickedClass).removeClass(c.clickedClass);f("."+c.targetClass).removeClass(c.targetClass+" "+c.targetClass+"-first "+c.targetClass+"-last");f("."+c.highlightClass).removeClass(c.highlightClass+" "+c.highlightClass+"-first "+c.highlightClass+"-last");if(w){f("._"+k+"-t").removeClass("_"+k+"-t");f("._"+k+"-h").removeClass("_"+k+"-h")}},_currentTarget:function(M){var P=c["target_"+M.data(k).i],D=M.data("ps2id-target"),A=D?f(D)[0].getBoundingClientRect():M[0].getBoundingClientRect();if(typeof P!=="undefined"){var K=M.offset().top,L=M.offset().left,Q=(P.from)?P.from+K:K,B=(P.to)?P.to+K:K,N=(P.fromX)?P.fromX+L:L,z=(P.toX)?P.toX+L:L;return(A.top>=B&&A.top<=Q&&A.left>=z&&A.left<=N)}else{var I=f(j).height(),T=f(j).width(),G=D?f(D).height():M.height(),S=D?f(D).width():M.width(),F=1+(G/I),O=F,J=(G<I)?F*(I/G):F,w=1+(S/T),E=w,R=(S<T)?w*(T/S):w,U=[A.top<=I/O,A.bottom>=I/J,A.left<=T/E,A.right>=T/R];if(c.highlightByNextTarget){var C=M.data(k).tn;if(C){var H=C[0].getBoundingClientRect();if(c.layout==="vertical"){U=[A.top<=I/2,H.top>I/2,1,1]}else{if(c.layout==="horizontal"){U=[1,1,A.left<=T/2,H.left>T/2]}}}}return(U[0]&&U[1]&&U[2]&&U[3])}},_scrollTo:function(){c.scrollSpeed=parseInt(c.scrollSpeed);p=(c.pageEndSmoothScroll)?m._pageEndSmoothScroll.call(null):p;var x=f("html,body"),z=(c.autoScrollSpeed)?m._autoScrollSpeed.call(null):c.scrollSpeed,B=(x.is(":animated"))?c.scrollingEasing:c.scrollEasing,y=f(j).scrollTop(),w=f(j).scrollLeft();switch(q){case"horizontal":if(w!=p[1]){m._callbacks.call(null,"onStart");x.stop().animate({scrollLeft:p[1]},z,B).promise().then(function(){m._callbacks.call(null,"onComplete")})}break;case"auto":if(y!=p[0]||w!=p[1]){m._callbacks.call(null,"onStart");if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)){var A;x.stop().animate({pageYOffset:p[0],pageXOffset:p[1]},{duration:z,easing:B,step:function(C,D){if(D.prop=="pageXOffset"){A=C}else{if(D.prop=="pageYOffset"){j.scrollTo(A,C)}}}}).promise().then(function(){m._callbacks.call(null,"onComplete")})}else{x.stop().animate({scrollTop:p[0],scrollLeft:p[1]},z,B).promise().then(function(){m._callbacks.call(null,"onComplete")})}}break;default:if(y!=p[0]){m._callbacks.call(null,"onStart");x.stop().animate({scrollTop:p[0]},z,B).promise().then(function(){m._callbacks.call(null,"onComplete")})}}},_pageEndSmoothScroll:function(){var w=f(n).height(),z=f(n).width(),y=f(j).height(),x=f(j).width();return[((w-p[0])<y)?w-y:p[0],((z-p[1])<x)?z-x:p[1]]},_autoScrollSpeed:function(){var y=f(j).scrollTop(),x=f(j).scrollLeft(),z=f(n).height(),w=f(n).width(),A=[c.scrollSpeed+((c.scrollSpeed*(Math.floor((Math.abs(p[0]-y)/z)*100)))/100),c.scrollSpeed+((c.scrollSpeed*(Math.floor((Math.abs(p[1]-x)/w)*100)))/100)];return Math.max.apply(Math,A)},_callbacks:function(w){if(!c){return}this[k]={trigger:a,clicked:s,target:h,scrollTo:{y:p[0],x:p[1]}};switch(w){case"onStart":c.onStart.call(null,this[k]);break;case"onComplete":c.onComplete.call(null,this[k]);break}},_reset:function(){q=o=t=false},_isInit:function(){if(!i){u.init.apply(this)}},_live:function(){e=setTimeout(function(){if(c.live){if(f(m._highlightSelector()).length!==b){m._setup.call(null)}}else{if(e){clearTimeout(e)}}m._live.call(null)},1000)},_easing:function(){f.easing.easeInQuad=f.easing.easeInQuad||function(y,z,w,B,A){return B*(z/=A)*z+w};f.easing.easeOutQuad=f.easing.easeOutQuad||function(y,z,w,B,A){return -B*(z/=A)*(z-2)+w};f.easing.easeInOutQuad=f.easing.easeInOutQuad||function(y,z,w,B,A){if((z/=A/2)<1){return B/2*z*z+w}return -B/2*((--z)*(z-2)-1)+w};f.easing.easeInCubic=f.easing.easeInCubic||function(y,z,w,B,A){return B*(z/=A)*z*z+w};f.easing.easeOutCubic=f.easing.easeOutCubic||function(y,z,w,B,A){return B*((z=z/A-1)*z*z+1)+w};f.easing.easeInOutCubic=f.easing.easeInOutCubic||function(y,z,w,B,A){if((z/=A/2)<1){return B/2*z*z*z+w}return B/2*((z-=2)*z*z+2)+w};f.easing.easeInQuart=f.easing.easeInQuart||function(y,z,w,B,A){return B*(z/=A)*z*z*z+w};f.easing.easeOutQuart=f.easing.easeOutQuart||function(y,z,w,B,A){return -B*((z=z/A-1)*z*z*z-1)+w};f.easing.easeInOutQuart=f.easing.easeInOutQuart||function(y,z,w,B,A){if((z/=A/2)<1){return B/2*z*z*z*z+w}return -B/2*((z-=2)*z*z*z-2)+w};f.easing.easeInQuint=f.easing.easeInQuint||function(y,z,w,B,A){return B*(z/=A)*z*z*z*z+w};f.easing.easeOutQuint=f.easing.easeOutQuint||function(y,z,w,B,A){return B*((z=z/A-1)*z*z*z*z+1)+w};f.easing.easeInOutQuint=f.easing.easeInOutQuint||function(y,z,w,B,A){if((z/=A/2)<1){return B/2*z*z*z*z*z+w}return B/2*((z-=2)*z*z*z*z+2)+w};f.easing.easeInExpo=f.easing.easeInExpo||function(y,z,w,B,A){return(z==0)?w:B*Math.pow(2,10*(z/A-1))+w};f.easing.easeOutExpo=f.easing.easeOutExpo||function(y,z,w,B,A){return(z==A)?w+B:B*(-Math.pow(2,-10*z/A)+1)+w};f.easing.easeInOutExpo=f.easing.easeInOutExpo||function(y,z,w,B,A){if(z==0){return w}if(z==A){return w+B}if((z/=A/2)<1){return B/2*Math.pow(2,10*(z-1))+w}return B/2*(-Math.pow(2,-10*--z)+2)+w};f.easing.easeInSine=f.easing.easeInSine||function(y,z,w,B,A){return -B*Math.cos(z/A*(Math.PI/2))+B+w};f.easing.easeOutSine=f.easing.easeOutSine||function(y,z,w,B,A){return B*Math.sin(z/A*(Math.PI/2))+w};f.easing.easeInOutSine=f.easing.easeInOutSine||function(y,z,w,B,A){return -B/2*(Math.cos(Math.PI*z/A)-1)+w};f.easing.easeInCirc=f.easing.easeInCirc||function(y,z,w,B,A){return -B*(Math.sqrt(1-(z/=A)*z)-1)+w};f.easing.easeOutCirc=f.easing.easeOutCirc||function(y,z,w,B,A){return B*Math.sqrt(1-(z=z/A-1)*z)+w};f.easing.easeInOutCirc=f.easing.easeInOutCirc||function(y,z,w,B,A){if((z/=A/2)<1){return -B/2*(Math.sqrt(1-z*z)-1)+w}return B/2*(Math.sqrt(1-(z-=2)*z)+1)+w};f.easing.easeInElastic=f.easing.easeInElastic||function(y,A,w,E,D){var B=1.70158;var C=0;var z=E;if(A==0){return w}if((A/=D)==1){return w+E}if(!C){C=D*0.3}if(z<Math.abs(E)){z=E;var B=C/4}else{var B=C/(2*Math.PI)*Math.asin(E/z)}return -(z*Math.pow(2,10*(A-=1))*Math.sin((A*D-B)*(2*Math.PI)/C))+w};f.easing.easeOutElastic=f.easing.easeOutElastic||function(y,A,w,E,D){var B=1.70158;var C=0;var z=E;if(A==0){return w}if((A/=D)==1){return w+E}if(!C){C=D*0.3}if(z<Math.abs(E)){z=E;var B=C/4}else{var B=C/(2*Math.PI)*Math.asin(E/z)}return z*Math.pow(2,-10*A)*Math.sin((A*D-B)*(2*Math.PI)/C)+E+w};f.easing.easeInOutElastic=f.easing.easeInOutElastic||function(y,A,w,E,D){var B=1.70158;var C=0;var z=E;if(A==0){return w}if((A/=D/2)==2){return w+E}if(!C){C=D*(0.3*1.5)}if(z<Math.abs(E)){z=E;var B=C/4}else{var B=C/(2*Math.PI)*Math.asin(E/z)}if(A<1){return -0.5*(z*Math.pow(2,10*(A-=1))*Math.sin((A*D-B)*(2*Math.PI)/C))+w}return z*Math.pow(2,-10*(A-=1))*Math.sin((A*D-B)*(2*Math.PI)/C)*0.5+E+w};f.easing.easeInBack=f.easing.easeInBack||function(y,z,w,C,B,A){if(A==g){A=1.70158}return C*(z/=B)*z*((A+1)*z-A)+w};f.easing.easeOutBack=f.easing.easeOutBack||function(y,z,w,C,B,A){if(A==g){A=1.70158}return C*((z=z/B-1)*z*((A+1)*z+A)+1)+w};f.easing.easeInOutBack=f.easing.easeInOutBack||function(y,z,w,C,B,A){if(A==g){A=1.70158}if((z/=B/2)<1){return C/2*(z*z*(((A*=(1.525))+1)*z-A))+w}return C/2*((z-=2)*z*(((A*=(1.525))+1)*z+A)+2)+w};f.easing.easeInBounce=f.easing.easeInBounce||function(y,z,w,B,A){return B-f.easing.easeOutBounce(y,A-z,0,B,A)+w};f.easing.easeOutBounce=f.easing.easeOutBounce||function(y,z,w,B,A){if((z/=A)<(1/2.75)){return B*(7.5625*z*z)+w}else{if(z<(2/2.75)){return B*(7.5625*(z-=(1.5/2.75))*z+0.75)+w}else{if(z<(2.5/2.75)){return B*(7.5625*(z-=(2.25/2.75))*z+0.9375)+w}else{return B*(7.5625*(z-=(2.625/2.75))*z+0.984375)+w}}}};f.easing.easeInOutBounce=f.easing.easeInOutBounce||function(y,z,w,B,A){if(z<A/2){return f.easing.easeInBounce(y,z*2,0,B,A)*0.5+w}return f.easing.easeOutBounce(y,z*2-A,0,B,A)*0.5+B*0.5+w}}};m._easing.call();f.fn[d]=function(w){if(u[w]){return u[w].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof w==="object"||!w){return u.init.apply(this,arguments)}else{f.error("Method "+w+" does not exist")}}};f[d]=function(w){if(u[w]){return u[w].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof w==="object"||!w){return u.init.apply(this,arguments)}else{f.error("Method "+w+" does not exist")}}};f[d].defaults=l})(jQuery,window,document);


/*!
 * jQuery Accordion 0.0.1
 * (c) 2014 Victor Fernandez <victor@vctrfrnndz.com>
 * MIT Licensed.
 */

;(function ( $, window, document, undefined ) {

    var pluginName = 'accordion',
        defaults = {
            transitionSpeed: 300,
            transitionEasing: 'ease',
            controlElement: '[data-control]',
            contentElement: '[data-content]',
            groupElement: '[data-accordion-group]',
            singleOpen: true
        };

    function Accordion(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Accordion.prototype.init = function () {
        var self = this,
            opts = self.options;

        var $accordion = $(self.element),
            $controls = $accordion.find('> ' + opts.controlElement),
            $content =  $accordion.find('> ' + opts.contentElement);

        var accordionParentsQty = $accordion.parents('[data-accordion]').length,
            accordionHasParent = accordionParentsQty > 0;

        var closedCSS = { 'max-height': 0, 'overflow': 'hidden' };

        var CSStransitions = supportsTransitions();

        function debounce(func, threshold, execAsap) {
            var timeout;

            return function debounced() {
                var obj = this,
                    args = arguments;

                function delayed() {
                    if (!execAsap) func.apply(obj, args);
                    timeout = null;
                };

                if (timeout) clearTimeout(timeout);
                else if (execAsap) func.apply(obj, args);

                timeout = setTimeout(delayed, threshold || 100);
            };
        }

        function supportsTransitions() {
            var b = document.body || document.documentElement,
                s = b.style,
                p = 'transition';

            if (typeof s[p] == 'string') {
                return true;
            }

            var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];

            p = 'Transition';

            for (var i=0; i<v.length; i++) {
                if (typeof s[v[i] + p] == 'string') {
                    return true;
                }
            }

            return false;
        }

        function requestAnimFrame(cb) {
            if(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) {
                return  requestAnimationFrame(cb) ||
                        webkitRequestAnimationFrame(cb) ||
                        mozRequestAnimationFrame(cb);
            } else {
                return setTimeout(cb, 1000 / 60);
            }
        }

        function toggleTransition($el, remove) {
            if(!remove) {
                $content.css({
                    '-webkit-transition': 'max-height ' + opts.transitionSpeed + 'ms ' + opts.transitionEasing,
                    'transition': 'max-height ' + opts.transitionSpeed + 'ms ' + opts.transitionEasing
                });
            } else {
                $content.css({
                    '-webkit-transition': '',
                    'transition': ''
                });
            }
        }

        function calculateHeight($el) {
            var height = 0;

            $el.children().each(function() {
                height = height + $(this).outerHeight(true);
            });

            $el.data('oHeight', height);
        }

        function updateParentHeight($parentAccordion, $currentAccordion, qty, operation) {
            var $content = $parentAccordion.filter('.open').find('> [data-content]'),
                $childs = $content.find('[data-accordion].open > [data-content]'),
                $matched;

            if(!opts.singleOpen) {
                $childs = $childs.not($currentAccordion.siblings('[data-accordion].open').find('> [data-content]'));
            }

            $matched = $content.add($childs);

            if($parentAccordion.hasClass('open')) {
                $matched.each(function() {
                    var currentHeight = $(this).data('oHeight');

                    switch (operation) {
                        case '+':
                            $(this).data('oHeight', currentHeight + qty);
                            break;
                        case '-':
                            $(this).data('oHeight', currentHeight - qty);
                            break;
                        default:
                            throw 'updateParentHeight method needs an operation';
                    }

                    $(this).css('max-height', $(this).data('oHeight'));
                });
            }
        }

        function refreshHeight($accordion) {
            if($accordion.hasClass('open')) {
                var $content = $accordion.find('> [data-content]'),
                    $childs = $content.find('[data-accordion].open > [data-content]'),
                    $matched = $content.add($childs);

                calculateHeight($matched);

                $matched.css('max-height', $matched.data('oHeight'));
            }
        }

        function closeAccordion($accordion, $content) {
            $accordion.trigger('accordion.close');
            
            if(CSStransitions) {
                if(accordionHasParent) {
                    var $parentAccordions = $accordion.parents('[data-accordion]');

                    updateParentHeight($parentAccordions, $accordion, $content.data('oHeight'), '-');
                }

                $content.css(closedCSS);

                $accordion.removeClass('open');
            } else {
                $content.css('max-height', $content.data('oHeight'));

                $content.animate(closedCSS, opts.transitionSpeed);

                $accordion.removeClass('open');
            }
        }

        function openAccordion($accordion, $content) {
            $accordion.trigger('accordion.open');
            if(CSStransitions) {
                toggleTransition($content);

                if(accordionHasParent) {
                    var $parentAccordions = $accordion.parents('[data-accordion]');

                    updateParentHeight($parentAccordions, $accordion, $content.data('oHeight'), '+');
                }

                requestAnimFrame(function() {
                    $content.css('max-height', $content.data('oHeight'));
                });

                $accordion.addClass('open');
            } else {
                $content.animate({
                    'max-height': $content.data('oHeight')
                }, opts.transitionSpeed, function() {
                    $content.css({'max-height': 'none'});
                });

                $accordion.addClass('open');
            }
        }

        function closeSiblingAccordions($accordion) {
            var $accordionGroup = $accordion.closest(opts.groupElement);

            var $siblings = $accordion.siblings('[data-accordion]').filter('.open'),
                $siblingsChildren = $siblings.find('[data-accordion]').filter('.open');

            var $otherAccordions = $siblings.add($siblingsChildren);

            $otherAccordions.each(function() {
                var $accordion = $(this),
                    $content = $accordion.find(opts.contentElement);

                closeAccordion($accordion, $content);
            });

            $otherAccordions.removeClass('open');
        }

        function toggleAccordion() {
            var isAccordionGroup = (opts.singleOpen) ? $accordion.parents(opts.groupElement).length > 0 : false;

            calculateHeight($content);

            if(isAccordionGroup) {
                closeSiblingAccordions($accordion);
            }

            if($accordion.hasClass('open')) {
                closeAccordion($accordion, $content);
            } else {
                openAccordion($accordion, $content);
            }
        }

        function addEventListeners() {
            $controls.on('click', toggleAccordion);
            
            $controls.on('accordion.toggle', function() {
                if(opts.singleOpen && $controls.length > 1) {
                    return false;
                }
                
                toggleAccordion();
            });

            $(window).on('resize', debounce(function() {
                refreshHeight($accordion);
            }));
        }

        function setup() {
            $content.each(function() {
                var $curr = $(this);

                if($curr.css('max-height') != 0) {
                    if(!$curr.closest('[data-accordion]').hasClass('open')) {
                        $curr.css({ 'max-height': 0, 'overflow': 'hidden' });
                    } else {
                        toggleTransition($curr);
                        calculateHeight($curr);

                        $curr.css('max-height', $curr.data('oHeight'));
                    }
                }
            });


            if(!$accordion.attr('data-accordion')) {
                $accordion.attr('data-accordion', '');
                $accordion.find(opts.controlElement).attr('data-control', '');
                $accordion.find(opts.contentElement).attr('data-content', '');
            }
        }

        setup();
        addEventListeners();
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Accordion( this, options ));
            }
        });
    }

})( jQuery, window, document );


/*
    Version 1.5.0
    The MIT License (MIT)

    Copyright (c) 2014 Dirk Groenen

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
*/

(function($){
    $.fn.viewportChecker = function(useroptions){
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            offset: 100,
            repeat: false,
            callbackFunction: function(elem, action){},
			scrollHorizontal: false
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
            windowSize = (!options.scrollHorizontal) ? $(window).height() : $(window).width(),
            scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');

        this.checkElements = function(){
        
            // Set some vars to check with
			if(!options.scrollHorizontal){
				var viewportTop = $(scrollElem).scrollTop(),
					viewportBottom = (viewportTop + windowSize);
			}
			else{
				var viewportTop = $(scrollElem).scrollLeft(),
					viewportBottom = (viewportTop + windowSize);
			}
            

            $elem.each(function(){
                var $obj = $(this),
                    objOptions = {},
                    attrOptions = {};

                //  Get any individual attribution data
                if ($obj.data('add'))
                    attrOptions.classToAdd = $obj.data('add');
                if ($obj.data('offset'))
                    attrOptions.offset = $obj.data('offset');
                if ($obj.data('repeat'))
                    attrOptions.repeat = $obj.data('repeat');
                if ($obj.data('scrollHorizontal'))
                    attrOptions.scrollHorizontal = $obj.data('scrollHorizontal');

                $.extend(objOptions, options);
                $.extend(objOptions, attrOptions);

                // If class already exists; quit
                if ($obj.hasClass(objOptions.classToAdd) && !objOptions.repeat){
                    return;
                }

                // define the top position of the element and include the offset which makes is appear earlier or later
                var elemTop = (!objOptions.scrollHorizontal) ? Math.round( $obj.offset().top ) + objOptions.offset : Math.round( $obj.offset().left ) + objOptions.offset,
                    elemBottom = elemTop + ($obj.height());

                // Add class if in viewport
                if ((elemTop < viewportBottom) && (elemBottom > viewportTop)){
                    $obj.addClass(objOptions.classToAdd);

                    // Do the callback function. Callback wil send the jQuery object as parameter
                    objOptions.callbackFunction($obj, "add");
                    
                // Remove class if not in viewport and repeat is true
                } else if ($obj.hasClass(objOptions.classToAdd) && (objOptions.repeat)){
                    $obj.removeClass(objOptions.classToAdd);

                    // Do the callback function.
                    objOptions.callbackFunction($obj, "remove");
                }
            });
        
        };

        // Run checkelements on load and scroll
        $(window).bind("load scroll touchmove", this.checkElements);

        // On resize change the height var
        $(window).resize(function(e){
            windowSize = (!options.scrollHorizontal) ? e.currentTarget.innerHeight : e.currentTarget.innerWidth;
        });
        
        // trigger inital check if elements already visible
        this.checkElements();
        
        return this;
    };
})(jQuery);


/* Responsive Tab */
// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com>
(function ($) {
    $.fn.extend({
        easyResponsiveTabs: function (options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                width: 'auto',
                fit: true,
                closed: false,
                activate: function(){}
            }
            //Variables
            var options = $.extend(defaults, options);
            var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';
            var hash = window.location.hash;
            var historyApi = !!(window.history && history.replaceState);
            
            //Events
            $(this).bind('tabactivate', function(e, currentTab) {
                if(typeof options.activate === 'function') {
                    options.activate.call(currentTab, e)
                }
            });

            //Main function
            this.each(function () {
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('ul.resp-tabs-list');
                var respTabsId = $respTabs.attr('id');
                $respTabs.find('ul.resp-tabs-list li').addClass('resp-tab-item');
                $respTabs.css({
                    'display': 'block',
                    'width': jwidth
                });

                $respTabs.find('.resp-tabs-container > div').addClass('resp-tab-content');
                jtab_options();
                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs');
                    }
                    if (jfit == true) {
                        $respTabs.css({ width: '100%', margin: '0px' });
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion');
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }

                //Assigning the h2 markup to accordion title
                var $tabItemh2;
                $respTabs.find('.resp-tab-content').before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");

                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function () {
                    $tabItemh2 = $(this);
                    var $tabItem = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')');
                    var $accItem = $respTabs.find('.resp-accordion:eq(' + itemCount + ')');
                    $accItem.append($tabItem.html());
                    $accItem.data($tabItem.data());
                    $tabItemh2.attr('aria-controls', 'tab_item-' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.resp-tab-item').each(function () {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', 'tab_item-' + (count));
                    $tabItem.attr('role', 'tab');

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content').each(function () {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', 'tab_item-' + (tabcount));
                        tabcount++;
                    });
                    count++;
                });
                
                // Show correct content area
                var tabNum = 0;
                if(hash!='') {
                    var matches = hash.match(new RegExp(respTabsId+"([0-9]+)"));
                    if (matches!==null && matches.length===2) {
                        tabNum = parseInt(matches[1],10)-1;
                        if (tabNum > count) {
                            tabNum = 0;
                        }
                    }
                }

                //Active correct tab
                $($respTabs.find('.resp-tab-item')[tabNum]).addClass('resp-tab-active');

                //keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode
                if(options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {
                    $($respTabs.find('.resp-accordion')[tabNum]).addClass('resp-tab-active');
                    $($respTabs.find('.resp-tab-content')[tabNum]).addClass('resp-tab-content-active').attr('style', 'display:block');
                }
                //assign proper classes for when tabs mode is activated before making a selection in accordion mode
                else {
                    $($respTabs.find('.resp-tab-content')[tabNum]).addClass('resp-tab-content-active resp-accordion-closed')
                }

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function () {
                   
                    var $currentTab = $(this);
                    $currentTab.click(function () {
                        
                        var $currentTab = $(this);
                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active').slideUp('', function () { $(this).addClass('resp-accordion-closed'); });
                            $currentTab.removeClass('resp-tab-active');
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('resp-tab-content-active');
                        } else {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').addClass('resp-tab-content-active').attr('style', 'display:block');
                        }
                        //Trigger tab activation event
                        $currentTab.trigger('tabactivate', $currentTab);
                        
                        //Update Browser History
                        if(historyApi) {
                            var currentHash = window.location.hash;
                            var newHash = respTabsId+(parseInt($tabAria.substring(9),10)+1).toString();
                            if (currentHash!="") {
                                var re = new RegExp(respTabsId+"[0-9]+");
                                if (currentHash.match(re)!=null) {
                                    newHash = currentHash.replace(re,newHash);
                                }
                                else {
                                    newHash = currentHash+"|"+newHash;
                                }
                            }
                            else {
                                newHash = '#'+newHash;
                            }
                            
                            history.replaceState(null,null,newHash);
                        }
                    });
                    
                });
                
                //Window resize function
                $(window).resize(function () {
                    $respTabs.find('.resp-accordion-closed').removeAttr('style');
                });
            });
        }
    });
})(jQuery);

/* After Resize Plugin */

( function( $ ) {
	"use strict";
	
	// Define default settings
	var defaults = {
		action: function() {},
		runOnLoad: false,
		duration: 500
	};
	
	// Define global variables
	var settings = defaults,
		running = false,
		start;
	
	var methods = {};
	
	// Initial plugin configuration
	methods.init = function() {
		
		// Allocate passed arguments to settings based on type
		for( var i = 0; i <= arguments.length; i++ ) {
			var arg = arguments[i];
			switch ( typeof arg ) {
				case "function":
					settings.action = arg;
					break;
				case "boolean":
					settings.runOnLoad = arg;
					break;
				case "number":
					settings.duration = arg;
					break;
			}
		}
	
		// Process each matching jQuery object
		return this.each(function() {
		
			if( settings.runOnLoad ) { settings.action(); }
			
			$(this).resize( function() {
				
				methods.timedAction.call( this );
				
			} );
		
		} );
	};
	
	methods.timedAction = function( code, millisec ) {
		
		var doAction = function() {
			var remaining = settings.duration;
			
			if( running ) {
				var elapse = new Date() - start;
				remaining = settings.duration - elapse;
				if( remaining <= 0 ) {
					// Clear timeout and reset running variable
					clearTimeout(running);
					running = false;
					// Perform user defined function
					settings.action();
				
					return;
				}
			}
			wait( remaining );
		};
		
		var wait = function( time ) {
			running = setTimeout( doAction, time );
		};
		
		// Define new action starting time
		start = new Date();
		
		// Define runtime settings if function is run directly
		if( typeof millisec === 'number' ) { settings.duration = millisec; }
		if( typeof code === 'function' ) { settings.action = code; }
		
		// Only run timed loop if not already running
		if( !running ) { doAction(); }
		
	};

	
	$.fn.afterResize = function( method ) {
		
		if( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
		} else {
			return methods.init.apply( this, arguments );
		}
		
	};
	
})(jQuery);

