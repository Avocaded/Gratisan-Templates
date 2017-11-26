/*
Name: 			Theme Initializer
Written by: 	JanXcode Themes - (http://www.janxcode.com)
Version: 		1.0
*/

(function() {

	"use strict";

	var Theme = {

		initialized: false,

		initialize: function() {

			if (this.initialized) return;
			this.initialized = true;

			this.build();
			this.events();

		},

		build: function() {

			//Items on load
			this.onLoad();
			
			// Search
			this.searchNav();
			
			// Nav Menu
			this.stickyMenu();
			
			//Mobile Menu
			jQuery('#jx-main-menu').slicknav();

			// ScrollTop
			this.scrollTop();

			// Word Rotate
			this.wordAnimate();

			// Twitter
			this.getTweets();
			
			// Toggle
			this.toggle();
			
			// Tabs
			this.tabs();	
		
			// Lightbox
			this.prettyPhoto();
			
			// Parallax
			this.parallax();
			
			// Isotope
			this.isotope();
			
			//Counter
			this.counter();
			
			//Service Network
			this.serviceNetwork();
			
			//Skillsbar
			this.skillsBar();
			
			//Alert
			this.alertBox();

		},

		events: function() {
			
			// Window Resize
			$(window).afterResize(function() {

				// Revolution Slider Fix
				Theme.fixRevolutionSlider();

				// Isotope
				if($(".isotope").get(0)) {
					$(".isotope").isotope('reLayout');
				}

			});


		},
		
		//Items on windows load
		onLoad: function(){
			
			$(window).on("load",function(){
				
				/* Page Scroll to id fn call */
				$("a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
					highlightSelector:".primary a"
				});
				
				
				/*Flexslider*/
				jQuery('.jx-blog-1 .flexslider').flexslider({
					animation: "slide",
					directionNav:false,
					slideshowSpeed:"8000"
				});
				
				/*Flexslider*/
				jQuery('.jx-flexslider .flexslider').flexslider({
					animation: "slide",
					directionNav:false,
					slideshowSpeed:"8000"
				});
			
				//Partners Logo			
				jQuery('.jx-logo-partner-1 .flexslider').flexslider({
					animation: "slide",
					controlNav: false,
					directionNav:true,
					slideshowSpeed:"8000",
					itemWidth: 209,
					minItems: 2,
					maxItems: 4,
					prevText:'',
					nextText:''
				});
			
				//Testimonial #1
				jQuery('.jx-testimonials-1 .flexslider').flexslider({
					animation: "fade",
					directionNav:false
				});			
				
				//Testimonial #2
				jQuery('.jx-testimonials-2 .flexslider').flexslider({
					animation: "slide",
					direction:"horizontal",
					directionNav:false
				});	
				
				
				
			});
			
		},
		searchNav: function() {
			
		  jQuery(".jx-search-icon").on("click",function(event){
				event.stopPropagation();
				
				jQuery(".search-box", this).slideToggle('fast', function(){
				
					if (jQuery(this).is(":visible")) {  // <---- DOESN'T WORK -------
						jQuery(this).parent().addClass('open');
					}
					else {
						jQuery(this).parent().removeClass('open');
					}
				 });
				
		  });
		  
		  jQuery(document).on("click",function(e){
				var targetbox = jQuery('.search-box');
				if(!targetbox.is(e.target) && targetbox.has(e.target).length === 0){
					targetbox.fadeOut('fast');
					jQuery(".search-box", this).removeClass('open');
				}
		   });
		   
		  // Fix input element click problem
		  jQuery('.input-group-flyout input, .input-group-btn-flyout button').on("click",function(e) {
			e.stopPropagation();
		  });		
			
		},

		stickyMenu: function() {
			//Menu
			 var s = jQuery(".jx-sub-header");
    		 var pos = s.position();  
			 var top = s.css('top');
			 var subheader = jQuery('.jx-sub-header.sticky');
			 var page_header = jQuery('.jx-page-header .box-content');
			 var page_head_main =jQuery('.jx-page-header');
			 var home_slider = jQuery('.jx-slider'); 
			 var header_stick = jQuery('.jx-animate-header');
			 var small_logo = jQuery('.jx-header-small-logo');
			 var slider_height = jQuery('.tp-banner-container').height()-66;
			
			 jQuery('.jx-slider').css({'height':slider_height});
			
			 
			 //Slider
			 if (header_stick.length >0){			 	
				var slider_top = header_stick.offset().top;	
					 
			 }
			 
			 
			 jQuery('.jx-header-logo').before(jQuery('.jx-header-logo').clone().addClass("jx-header-small-logo"));
			 
			 //Page Header
			 var nav_height = s.height();
			 
			 
			 jQuery(window).on("scroll",function() {
				
				var percent_overlay = (jQuery(document).scrollTop() / jQuery(document).height())*6;
				var percent_slider = (jQuery(document).scrollTop() / jQuery(document).height());
				var scroll = getCurrentScroll();
					
				
				if (subheader.length >0){	
				
				if ( scroll >= pos.top+1){
                    subheader.addClass('fixed');
					page_header.css({'margin-top':'118px'});
					page_head_main.css({'marginTop':nav_height});
					home_slider.css({'marginTop':nav_height});
				}else{
					subheader.removeClass('fixed');
					page_header.css({'margin-top':'118px'});
					page_head_main.css({'marginTop':0});
					home_slider.css({'marginTop':0});
						
				}	
				
				jQuery('.jx-scroll-overlay').css('opacity', 0 + percent_overlay);
				
				jQuery('.jx-animate-header.fixed').css('top', -percent_slider*700);
				
				
					if (scroll > slider_top ){
						header_stick.addClass('fixed');
					}else{				
						header_stick.removeClass('fixed');					 
					}
				}
				
				  if ( scroll > 150 ) {
					 jQuery('.jx-header-small-logo').addClass('show');
				  }else{
					 jQuery('.jx-header-small-logo').removeClass('show');
				  }
				
			});
			
		
			function getCurrentScroll() {
				return window.pageYOffset || document.documentElement.scrollTop;
			}
			
		},

		getTweets: function() {
			
			var get_twitter = $("#tweet"),
				accountId = get_twitter.data("account-id");

			if(get_twitter.get(0) && accountId != "") {
				getTwitters("tweet", {
					id: accountId,
					count: 1
				});

				get_twitter.before($("<a />").addClass("twitter-account").html("@" + accountId).attr("href", "http://www.twitter.com/" + accountId).attr("target", "_blank"));

			} else {
				get_twitter.empty();
			}
			
		},

		fixRevolutionSlider: function() {

			$(".revslider-initialised").each(function() {
				try{
					$(this).revredraw();
				} catch(e) {}
			});

		},
		
		scrollTop: function(){
		
			$.scrollUp({
						scrollName: 'scrollUp', // Element ID
						scrollDistance: 300, // Distance from top/bottom before showing element (px)
						scrollFrom: 'top', // 'top' or 'bottom'
						scrollSpeed: 300, // Speed back to top (ms)
						easingType: 'linear', // Scroll to top easing (see http://easings.net/)
						animation: 'fade', // Fade, slide, none
						animationInSpeed: 200, // Animation in speed (ms)
						animationOutSpeed: 200, // Animation out speed (ms)
						scrollTitle: false, // Set a custom <a> title if required. Defaults to scrollText
						scrollImg: false, // Set true to use image
						activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
						zIndex: 2147483647 // Z-Index for the overlay
					});
					
			jQuery(function($){
				jQuery('.destroy').on("click",function($){
					$.scrollUp.destroy();
				})
			});			
			
		},
		wordAnimate: function(){
		//set animation timing
			var animationDelay = 2500,
				//loading bar effect
				barAnimationDelay = 3800,
				barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
				//letters effect
				lettersDelay = 50,
				//type effect
				typeLettersDelay = 150,
				selectionDuration = 500,
				typeAnimationDelay = selectionDuration + 800,
				//clip effect 
				revealDuration = 600,
				revealAnimationDelay = 1500;
			
			initHeadline();
			
		
			function initHeadline() {
				//insert <i> element for each letter of a changing word
				singleLetters($('.jx-headline.letters').find('b'));
				//initialise headline animation
				animateHeadline($('.jx-headline'));
			}
		
			function singleLetters($words) {
				$words.each(function(){
					var word = $(this),
						letters = word.text().split(''),
						selected = word.hasClass('is-visible');
					for (i in letters) {
						if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
						letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
					}
					var newLetters = letters.join('');
					word.html(newLetters).css('opacity', 1);
				});
			}
		
			function animateHeadline($headlines) {
				var duration = animationDelay;
				$headlines.each(function(){
					var headline = $(this);
					
					if(headline.hasClass('loading-bar')) {
						duration = barAnimationDelay;
						setTimeout(function(){ headline.find('.jx-words-wrapper').addClass('is-loading') }, barWaiting);
					} else if (headline.hasClass('clip')){
						var spanWrapper = headline.find('.jx-words-wrapper'),
							newWidth = spanWrapper.width() + 10
						spanWrapper.css('width', newWidth);
					} else if (!headline.hasClass('type') ) {
						//assign to .jx-words-wrapper the width of its longest word
						var words = headline.find('.jx-words-wrapper b'),
							width = 0;
						words.each(function(){
							var wordWidth = $(this).width();
							if (wordWidth > width) width = wordWidth;
						});
						headline.find('.jx-words-wrapper').css('width', width);
					};
		
					//trigger animation
					setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
				});
			}
		
			function hideWord($word) {
				var nextWord = takeNext($word);
				
				if($word.parents('.jx-headline').hasClass('type')) {
					var parentSpan = $word.parent('.jx-words-wrapper');
					parentSpan.addClass('selected').removeClass('waiting');	
					setTimeout(function(){ 
						parentSpan.removeClass('selected'); 
						$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
					}, selectionDuration);
					setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
				
				} else if($word.parents('.jx-headline').hasClass('letters')) {
					var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
					hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
					showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);
		
				}  else if($word.parents('.jx-headline').hasClass('clip')) {
					$word.parents('.jx-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
						switchWord($word, nextWord);
						showWord(nextWord);
					});
		
				} else if ($word.parents('.jx-headline').hasClass('loading-bar')){
					$word.parents('.jx-words-wrapper').removeClass('is-loading');
					switchWord($word, nextWord);
					setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
					setTimeout(function(){ $word.parents('.jx-words-wrapper').addClass('is-loading') }, barWaiting);
		
				} else {
					switchWord($word, nextWord);
					setTimeout(function(){ hideWord(nextWord) }, animationDelay);
				}
			}
		
			function showWord($word, $duration) {
				if($word.parents('.jx-headline').hasClass('type')) {
					showLetter($word.find('i').eq(0), $word, false, $duration);
					$word.addClass('is-visible').removeClass('is-hidden');
		
				}  else if($word.parents('.jx-headline').hasClass('clip')) {
					$word.parents('.jx-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
						setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
					});
				}
			}
		
			function hideLetter($letter, $word, $bool, $duration) {
				$letter.removeClass('in').addClass('out');
				
				if(!$letter.is(':last-child')) {
					setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
				} else if($bool) { 
					setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
				}
		
				if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
					var nextWord = takeNext($word);
					switchWord($word, nextWord);
				} 
			}
		
			function showLetter($letter, $word, $bool, $duration) {
				$letter.addClass('in').removeClass('out');
				
				if(!$letter.is(':last-child')) { 
					setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
				} else { 
					if($word.parents('.jx-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.jx-words-wrapper').addClass('waiting'); }, 200);}
					if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
				}
			}
		
			function takeNext($word) {
				return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
			}
		
			function takePrev($word) {
				return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
			}
		
			function switchWord($oldWord, $newWord) {
				$oldWord.removeClass('is-visible').addClass('is-hidden');
				$newWord.removeClass('is-hidden').addClass('is-visible');
			}	
		},
		
		toggle: function(){
			
			jQuery('#accordion-1 [data-accordion]').accordion();
		
			jQuery('#accordion-2 [data-accordion],#accordion-3 [data-accordion]').accordion({
			  singleOpen: false
			});
			
			jQuery('.accordion [data-accordion]').accordion({
			  singleOpen: false
			});
		},
		tabs:function(){
			
		 jQuery('#verticalTab-1').easyResponsiveTabs({ 
			type: 'vertical', //Types: default, vertical, accordion 
			width: 'auto', //auto or any width like 600px 
			fit: true, // 100% fit in a container 
			closed: 'accordion', // Start closed if in accordion view 
			 
		 }); 
		 

		 jQuery('#verticalTab-2').easyResponsiveTabs({ 
			type: 'vertical', //Types: default, vertical, accordion 
			width: 'auto', //auto or any width like 600px 
			fit: true, // 100% fit in a container 
			closed: 'accordion', // Start closed if in accordion view 
			 
		 }); 
		 
		 jQuery('#horizontalTab-3').easyResponsiveTabs({ 
			type: 'default', //Types: default, vertical, accordion 
			width: 'auto', //auto or any width like 600px 
			fit: true, // 100% fit in a container 
			closed: 'accordion', // Start closed if in accordion view 
			 
		 }); 			
		
		},	
		prettyPhoto: function(){
			
		var prettyPhoto_parameters = {
					animation_speed: 'fast',
					slideshow: true, /* false OR interval time in ms */
					theme:'facebook',
					opacity: 1,
					show_title:true, /* true/false */
					allow_resize: true, /* Resize the photos bigger than viewport. true/false */
					default_width: 920,
					default_height: 540,
				   counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
					hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
					wmode: 'opaque', /* Set the flash wmode attribute */
					autoplay: true, /* Automatically start videos: True/False */
					modal: false, /* If set to true, only the close button will close the window */
					overlay_gallery: true
				};	
				
						
					jQuery('a[href$=jpg], a[href$=JPG], a[href$=jpeg], a[href$=JPEG], a[href$=png], a[href$=gif], a[href$=bmp]:has(img),a[class^="prettyPhoto"],a[data-rel^="prettyPhoto"]').prettyPhoto(prettyPhoto_parameters);
	
				
				jQuery('a[class^="prettyPhoto"],a[data-rel^="prettyPhoto"]').prettyPhoto(prettyPhoto_parameters); //prettyPhoto_parameters	
			
		},
		
		parallax: function(){
		
		jQuery('.parallax,.jx-page-header-parallax').scrolly({bgParallax: true});	
			
		},
		
		isotope: function(){
		
			var $container = jQuery('.jx-portfolio');
			
			
			var $item = $container.find('.item').not('.item-w2').eq(0);
			
			$container.isotope({
				itemSelector: '.item',
				masonry: {
				  columnWidth: 300,
				  isFitWidth: true
				}
			  });
		 
			jQuery('.jx-portfolio-filter a').on("click",function(){
				jQuery('.jx-portfolio-filter .current').removeClass('current');
				jQuery(this).addClass('current');
		 
				var selector = jQuery(this).attr('data-filter');
				$container.isotope({
					layoutMod: 'fitRows',
					itemSelector: '.item',
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				 });
				 return false;
			});	
		
		},
		
		counter: function(){
		
		jQuery(".jx-count-up").counterUp({ 
                delay: 10, 
                time: 1000 
            }); 	
		
		},
		
		serviceNetwork: function(){
			
		var items = document.querySelectorAll('.jx-circle-nav li');
		
		var items_text = document.querySelectorAll('.jx-srvc-container div');
		
		for(var i = 0, l = items.length; i < l; i++) {
		  items[i].style.left = (50 - 55*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";  
		  items[i].style.top = (50 + 55*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(6) + "%";  
		}
			
		},
		
		skillsBar:function() {
			
		jQuery('.skillbar').each(function(){
				jQuery(this).find('.skillbar-bar').animate({
					width:jQuery(this).attr('data-percent')
				},3000);
			});
		
		},
		
		alertBox: function(){
						
		jQuery('.jx-close').on("click",function($) { 
			jQuery(this).parent().hide(); 
			}); 
		}		

	};

	Theme.initialize();

})();