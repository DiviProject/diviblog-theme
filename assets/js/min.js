$(document).ready(function(){"use strict";var a,b=ea?"touchstart":"click",c=".wrapper",d=".element-reveal-left",e=".element-reveal-right",f=".side-navigation-wrapper",g=".side-nav-show, a.side-nav-show",h=".side-nav-hide a",i=".no-scroll",j=".element-show-left",k=".element-show-right",l="easeInOutQuint",m={init:function(){if(!$(f).length)return!1;$("body").data("aux-nav",!1);var a=$(f).data("animation")?$(f).data("animation"):"no-transition",n=$(f).is("[data-no-scrollbar]")?"no-scrollbar":"scrollbar";"no-transition"===a&&$(c).addClass(a+"-reset"),$(c).addClass("reveal-side-navigation"),$(f).addClass(a+"-reset "+n);var o=$(f).hasClass("enter-right")?"right":"left";_?p="left"===o?d:e:(p="left"===o?j:k,$(f).addClass("hide"));var p=p.split(".").join("");i=i.split(".").join(""),$(g).on(b,function(d){if(d.preventDefault(),$(f).hasClass("active"))m.closeNav(p,a);else{A.state(!0),y.state(!0),$("body").data("aux-nav",!0),$("html, body").addClass(i);var e=$(window).scrollTop();ea||$(".header-inner").css({top:e+"px"}),_?($(c).addClass(p+" inactive "+a).css({transitionTimingFunction:da[l]}),$(f).addClass("active "+a).css({transitionTimingFunction:da[l]})):($(c).addClass(p),$(f).removeClass("hide").addClass("active")),$(c).on(ca,function(c){return c.target===$(this)[0]&&(c.stopPropagation(),$(this).off(ca),void $(".reveal-side-navigation").on(b,function(c){$(".reveal-side-navigation").off(b),m.closeNav(p,a)}))})}}),$(h).on(b,function(c){c.preventDefault(),$(".reveal-side-navigation").off(b),m.closeNav(p,a)}),$(window).on("resize",function(){$("body").data("aux-nav")?y.state(!0):y.state(!1)})},closeNav:function(a,b){_?(A.state(!0),$(c).removeClass(a+" "+b),$(f).removeClass(b),"no-transition"===b&&($("html, body").removeClass(i),$(c).removeClass("inactive"),$(f).removeClass("active")),$(c).on(ca,function(a){return a.target===$(this)[0]&&(a.stopPropagation(),y.state(!1),$(this).off(ca),$("html, body").removeClass(i),$(c).removeClass("inactive"),$(f).removeClass("active"),void(ea||$(".header-inner").css({top:0})))})):($(c).removeClass(a+" "+b),$(f).addClass("hide").removeClass("active")),$("body").data("aux-nav",!1)}},n=".overlay-navigation-wrapper",o=".overlay-navigation-inner",p=".overlay-nav-show a, a.overlay-nav-show",q=".overlay-nav-hide a, .one-page-nav .overlay-navigation .scroll-link",r=".no-scroll",s="easeInOutQuint",t={init:function(){if(!$(n).length)return!1;var a=$(n).data("animation")?$(n).data("animation"):"no-transition",c=$(n).is("[data-no-scrollbar]")?"no-scrollbar":"scrollbar";$(n).addClass(a+"-reset "+c),r=r.split(".").join(""),$(p).on(b,function(b){b.preventDefault(),$(n).hasClass("active")?t.closeNav(a):($("body").data("aux-nav",!0),$("html, body").addClass(r),_?$(n).addClass("active "+a).css({transitionTimingFunction:da[s]}):$(n).addClass("active"),$(n).on(ca,function(a){return a.target===$(this)[0]&&(a.stopPropagation(),y.state(!0),void $(this).off(ca))}))}),$(o).on(b,function(b){b.target===this&&t.closeNav(a)}),$(q).on(b,function(b){b.preventDefault(),t.closeNav(a)}),$(window).on("resize",function(){$("body").data("aux-nav")?y.state(!0):y.state(!1)})},closeNav:function(a){_?($(n).removeClass(a),"no-transition"===a&&($("html, body").removeClass(r),$(n).removeClass("active")),$(n).on(ca,function(a){return a.target===$(this)[0]&&(a.stopPropagation(),y.state(!1),$(this).off(ca),$("html, body").removeClass(r),void $(n).removeClass("active"))})):$(n).removeClass("active").css({top:"-100%"}),$("body").data("aux-nav",!1)}},u=".side-navigation-wrapper, .overlay-navigation-wrapper",v=".sub-menu",w=".contains-sub-menu",x={init:function(){function a(a){return e=$(a).siblings(v).children(),f=0,e.each(function(){f+=$(this).outerHeight()}),f}function c(a){$(a).parents().eq(2).is("nav")?$(a).closest(u).find(v).css({height:0}).removeClass("open"):$(a).closest("li").find(v).css({height:0}).removeClass("open")}function d(a,b){$(a).parents(v).each(function(){var a=parseFloat($(this).css("height")),c=b?a-f:a+f;$(this).css({height:c+"px"})})}var e,f,g=0;$($(u).find(".current").children(w).get().reverse()).each(function(){f=a($(this)),g+=f,$(this).siblings(v).css({height:g+"px"}).addClass("open")}),$(u).find(w).each(function(){$(this).on(b,function(b){return b.preventDefault(),!$(this).siblings(v).data("animating")&&($(this).siblings(v).data("animating",!0),$(this).parent().hasClass("current")?$(this).closest("ul").find("li").removeClass("current"):($(this).parents().eq(2).is("nav")&&$(u).find("nav").find("li").removeClass("current"),$(this).parent().addClass("current")),A.state(!0),f=a($(this)),$(this).siblings(v).hasClass("open")?(c($(this)),d($(this),!0)):(c($(this)),$(this).siblings(v).css({height:f+"px"}).addClass("open"),d($(this),!1)),void $(this).siblings(v).on(ca,function(a){$(this).data("animating",!1)}))})})}},y={state:function(a){ea?a?$("body").addClass("aux-navigation-active"):$("body").removeClass("aux-navigation-active"):a?$("body").addClass("aux-navigation-active"):$("body").data("aux-nav")||$("body").removeClass("aux-navigation-active")}},z=".header, .header-inner, .logo, .logo a, .header .navigation",A={init:function(){ea||$(window).on("scroll",function(){A.state(!0)}),$(window).on("resize",function(){A.state(!1)})},state:function(a){a?$(z).removeClass("no-transition"):$(z).addClass("no-transition")}},B=300,C=".scroll-to-top",D=600,E={init:function(){$(window).on("scroll",function(){return!$(C).is("[data-no-hide]")&&void($(this).scrollTop()>B?$(C).addClass("active"):$(C).removeClass("active"))}),$(C).on(b,function(a){a.preventDefault(),E.scrollUp()})},scrollUp:function(){$("html, body").animate({scrollTop:0},D)}},F=".header",G=".tabs",H=".tab-trigger-click",I=".accordion",J="icon-plus",K="icon-minus",L=".accordion-content",M=".accordion-trigger-click",N=".box.dismissable",O=300,P="swing",Q=".dropdown",R=".thumbnail",S=".overlay-info, img",T=".overlay-info",U=400,V="easeInOutQuint",W=".background-image-container",X={init:function(){X.tabs(),X.accordions(),X.dismissable(),X.dropdown(),X.radioInputs(),X.checkboxes(),X.rollovers(),X.thumbnailRatio(),X.setAsBackground()},tabs:function(){$(G).each(function(){var a=$(this).children(".tab-nav").find("li > a");$(this).find(".tab-panes > .active").addClass("animate-in"),a.each(function(){$(this).on(b,function(){if($(this).parent().hasClass("disabled"))return!1;var a=$(this).attr("href"),b=$(this).closest(".tabs").find(a);if($(this).closest(".tab-nav").find(".active").removeClass("active"),$(this).parent().addClass("active"),$(this).closest(".tabs").children(".tab-panes").children(".active").removeClass("active animate-in"),b.addClass("active"),b.find(".tm-slider-container").length>0){var c=b.find(".tm-slider-container").data("avalancheSlider");c.resizeSlider()}var d=null;return clearTimeout(d),d=setTimeout(function(){b.addClass("animate-in")},50),!1}),$(this).parent().hasClass("active")&&$(this).closest(".tabs").find($(this).attr("href")).addClass("active")})}),$(H).each(function(){$(this).on("click",function(){var a=$(this).data("target-tab");return $(G).find(a).parent().removeClass("disabled"),$(G).find(a).trigger("click"),!1})})},accordions:function(){$(I).each(function(){var a=$(this).children().children().children("a");a.each(function(){$(this).closest(I).is("[data-toggle-icon]")&&($(this).find("span").length||$(this).parent().hasClass("active")?!$(this).find("span").length&&$(this).parent().hasClass("active")&&$(this).prepend('<span class="'+K+'" />'):$(this).prepend('<span class="'+J+'" />')),$(this).on(b,function(){if($(this).parent().hasClass("disabled"))return!1;var a=$(this),b=a.attr("href"),c=a.closest(I).find(b),d=a.closest(I).find(L).parent();a.closest(I).children().children(".active").children("div").each(function(){var a=$(this).children().outerHeight();$(this).addClass("no-transition").css({height:a+"px"})});var e=null;return clearTimeout(e),e=a.parent().hasClass("active")?setTimeout(function(){a.closest(I).is("[data-toggle-multiple]")?a.siblings(c).removeClass("no-transition").css({height:0}):a.siblings("div").removeClass("no-transition").css({height:0}),a.parent().removeClass("active")},50):setTimeout(function(){var b=a.siblings(c).find(L).outerHeight();a.closest(I).is("[data-toggle-multiple]")||(d.removeClass("no-transition").css({height:0}),a.closest(I).children().children("li").removeClass("active")),a.parent().addClass("active"),a.siblings(c).removeClass("no-transition").css({height:b+"px"})},50),a.find("."+K).length?a.find("."+K).removeClass(K).addClass(J):a.find("."+J).length&&(a.closest(I).is("[data-toggle-multiple]")||a.closest("ul").find("."+K).removeClass(K).addClass(J),a.find("."+J).removeClass(J).addClass(K)),!1})}),$(M).each(function(){$(this).on("click",function(){var a=$(this).data("target-accordion");return $(I).find(a).parent().removeClass("disabled"),$(I).find(a).trigger("click"),!1})}),$(window).on("resize",function(){$(I).each(function(){$(this).children().children(".active").children("div").addClass("no-transition").css({height:"auto"})})})})},dismissable:function(){$(N).each(function(){$(this).find(".close").length||$(this).prepend('<a href="" class="close icon-cancel" />'),$(this).find(".close").on(b,function(a){a.preventDefault(),_?$(this).parent().css({transitionProperty:"opacity",opacity:0,transitionDuration:O+"ms",transitionTimingFunction:da[P]}).on(ca,function(a){return a.stopPropagation(),a.target===$(this)[0]&&void $(this).remove()}):$(this).parent().animate({opacity:0},U,P,function(){$(this).remove()})})})},dropdown:function(){$(Q).each(function(){$(this).children(".button, button").each(function(){function a(a){return c=$(a).children(),d=0,c.each(function(){d+=$(this).outerHeight()}),d}var c,d,e=$(this);e.on(b,function(b){b.preventDefault(),$(Q).children(".button, button").removeClass("active");var c=$(this).parent().children(".dropdown-list");if($(this).parent().hasClass("disabled"))return!1;if($(this).parent().hasClass("list-up")&&(d=$(Q).children(".button, button").outerHeight()+a(c)+8,c.css({transition:"none",transform:"translateY("+-d+"px )"})),$(".dropdown-list").not(c).removeClass("active"),c.hasClass("active"))c.removeClass("active"),$(this).removeClass("active");else{if(c.addClass("active"),$(this).addClass("active"),c.find("input").hasClass("set-focus")){var e,g=c.find("input");clearTimeout(e),e=setTimeout(function(){g.focus()},50)}if(c.find(".dropdown-aux-close")){var h=c.find(".dropdown-aux-close");h.on("click",function(a){$(this).off("click"),a.preventDefault(),f()})}}$(document).on("click.closeDropdown",function(a){$(a.target).closest(Q).length||f()})}),$(this).parent().children(".dropdown-list").find("li a").on(b,function(a){if(a.preventDefault(),$(".dropdown-list").removeClass("active"),$(".dropdown-list").find(".active").removeClass("active"),$(this).addClass("active"),$(this).closest(".dropdown").is("[data-update-selection]")){var b=$(this).text();$(this).closest(".dropdown").find(e).children('span:not([class*="icon-"])').text(b)}}),ea||$(window).on("scroll",function(){f()}),$(F).find(".navigation > ul > li > a").mouseenter(function(){f()});var f=function(){$(Q).each(function(){$(this).find(".button, button").removeClass("active"),$(this).find(".dropdown-list").removeClass("active")}),$(document).off("click.closeDropdown")}})})},radioInputs:function(){$("input:radio").each(function(){var a=!!$(this).is("[data-toggle-content]");if(a){var b=$(this).attr("name");$('input[name="'+b+'"]').on("change",function(){if($(this).is("[data-toggle-content]")){var a=$(this).data("target-content");c($(this)),$(a).addClass("active show")}else c($(this))});var c=function(a){$(a).siblings("[data-toggle-content]").each(function(){var a=$(this).data("target-content");$(a).removeClass("active show")})}}})},checkboxes:function(){$("input:checkbox").each(function(){var a=!!$(this).is("[data-toggle-content]");a&&$(this).on("change",function(){var a=$(this).data("target-content");$(a).toggleClass("active show")})})},rollovers:function(){_?$(R).each(function(){var a,b=$(this).data("hover-speed")?$(this).data("hover-speed"):U,c=$(this).data("hover-easing")?$(this).data("hover-easing"):V,d=$(this).data("hover-bkg-opacity")?$(this).data("hover-bkg-opacity"):1;if($(this).data("hover-bkg-color")){var e=$(this).data("hover-bkg-color");e=e.replace("#","");var f=parseInt(e.substring(0,2),16),g=parseInt(e.substring(2,4),16),h=parseInt(e.substring(4,6),16);a="rgba( "+f+","+g+","+h+","+d/1+" )"}else a=$(this).find(T).css("background-color");if($(this).find(S).css({transitionDuration:b+"ms",transitionTimingFunction:da[c]}),$(this).is("[data-gradient]")){var i=$(this).data("gradient-spread")?$(this).data("gradient-spread"):"50%";$(this).find(T).css({backgroundImage:"linear-gradient(to top, "+a+" 0%, transparent "+i+")",backgroundColor:"transparent"})}else $(this).find(T).css({backgroundColor:a})}):$(R).find(".overlay-link").mouseenter(function(){$(this).find(T).css({opacity:0}).stop().animate({opacity:1},U,V)}).mouseleave(function(){$(this).find(T).stop().animate({opacity:0},U,V)})},thumbnailRatio:function(){$("body").hasClass("ie-be-11")&&$(window).on("resize",function(){$(R).each(function(){if($(this).find(".caption-over-outer").length){var a=$(this).find("img, video"),b=a.attr("width"),c=a.attr("height"),d=$(this).find("img, video").width(),e=b>=c?b/c:c/b,f=b>=c?d/e:d*e;$(this).find(".caption-over-outer").css({opacity:1}),$(this).css({height:f+"px"})}})}).resize()},setAsBackground:function(){$(W).each(function(){var a=$(this).children("img").attr("src");$(this).addClass("background-cover").css({"background-image":"url("+a+")"})})}},Y=document.body||document.documentElement,Z=Y.style,_=void 0!==Z.transition||void 0!==Z.WebkitTransition||void 0!==Z.MozTransition||void 0!==Z.MsTransition||void 0!==Z.OTransition,aa=["WebkitTransform","MozTransform","OTransform","msTransform"];for(var ba in aa)void 0!==Z[aa[ba]]&&(a="-"+aa[ba].replace("Transform","").toLowerCase());var ca="webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";_&&(document.getElementsByTagName("body")[0].className+=" transition-support");var da={linear:"cubic-bezier(0, 0, 1, 1)",swing:"cubic-bezier(0.42, 0, 0.58, 1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};window.onpageshow=function(a){a.persisted&&$("body").addClass("page-fade-reset").removeClass("page-fade-out")};var ea=!1;(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))&&(ea=!0,document.getElementsByTagName("body")[0].className+=" mobile");var fa="WebkitAppearance"in document.documentElement.style;fa&&(document.getElementsByTagName("body")[0].className+=" webkit");var ga=/constructor/i.test(window.HTMLElement);ga&&(document.getElementsByTagName("body")[0].className+=" safari-browser");var ha=document.all&&document.addEventListener||"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style;ha&&(document.getElementsByTagName("body")[0].className+=" ie-browser");var ia=document.all&&document.addEventListener;ia&&(document.getElementsByTagName("body")[0].className+=" ie-be-11",$(".flex").removeClass("flex").addClass("equalize")),m.init(),t.init(),x.init(),A.init(),E.init(),X.init()});