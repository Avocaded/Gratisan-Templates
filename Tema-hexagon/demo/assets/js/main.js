(function ($) {
	"use strict";
    
    var hexagon = { 
        /* ---------------------------------------------
         Preloader
         --------------------------------------------- */
        preloader: function() {
            $(window).on('load', function() {
                $("body").imagesLoaded(function() {
                    $('.preloader').delay(400).slideUp('slow', function() {
                        $(this).remove();
                    });
                    $('.preloader-logo').delay(200).slideDown('slow', function() {
                        $(this).animate({top: '-200px'});
                    });
                });
            });
        },
        
        /* ---------------------------------------------
         Background Slideshow
         --------------------------------------------- */
        bg_slideshow: function() {
            //slideshow
            $(".slideshow").backgroundCycle({
                imageUrls: [
                    'assets/images/slide/slide-1.jpg',
                    'assets/images/slide/slide-2.jpg',
                    'assets/images/slide/slide-3.jpg'
                ],
                fadeSpeed: 1500,
                duration: 3000,
                backgroundSize: SCALING_MODE_COVER
            });
            
            //kenburn slideshow
            $('body').vegas({
                slides: [
                    { src: 'assets/images/slide/slide-2.jpg' },
                    { src: 'assets/images/slide/slide-4.jpg' },
                    { src: 'assets/images/slide/slide-5.jpg' }
                ],
                    animation: 'kenburns'
            });
        },
        
        /* ---------------------------------------------
         Count Down
         --------------------------------------------- */
        count_down: function() {
            $('#countdown').syotimer({
                year: 2017,
                month: 12,
                day: 9,
                hour: 20,
                minute: 30
            });    
        },
        /* ---------------------------------------------
        typer
        --------------------------------------------- */
        typer: function () {
            $("#typed").typed({
                stringsElement: $('#typed-strings'),
                typeSpeed: 100,
                backDelay: 500,
                loop: true,
                contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false
            });
        },
        /* ---------------------------------------------
         About Information
         --------------------------------------------- */
        about_information: function () {
            var formEl = document.querySelector('.form'),
            revealer = new RevealFx(formEl),
            closeCtrl = formEl.querySelector('.form__close');
            function about_fun_open(selecter) {
                document.querySelector(selecter).addEventListener('click', function() {
                    revealer.reveal({
                        bgcolor: '#1981EA',
                        direction: 'bt',
                        duration: 600,
                        onCover: function(contentEl, revealerEl) {
                            formEl.classList.add('form--open');
                            contentEl.style.opacity = 1;
                        },
                        onComplete: function() {
                            closeCtrl.addEventListener('click', closeForm);
                        }
                    });
                });
            };
            about_fun_open('.about-navber');
            about_fun_open('.btn-about');

			function closeForm() {
				closeCtrl.removeEventListener('click', closeForm);
				formEl.classList.remove('form--open');
				revealer.reveal({
					bgcolor: '#1981EA',
					direction: 'tb',
					duration: 600, 
					onCover: function(contentEl, revealerEl) {
						formEl.classList.remove('form--open');
						contentEl.style.opacity = 0;
					}
				});
			}
        },
        /* ---------------------------------------------
         Page Scroll
         --------------------------------------------- */
        page_scroll: function() {
            $(".custom-scroll").mCustomScrollbar({
                axis:"y",
                theme:"dark"
            });
        },
        /* ---------------------------------------------
        Portfolio Popup
         --------------------------------------------- */
        portfolio_popup: function() {
            $('.single-portfolio-item-inner').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,

                    duration: 300,
                    easing: 'ease-in-out', 

                    opener: function (openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        },
        /* ---------------------------------------------
         Mail Chip
         --------------------------------------------- */
        mailchip: function () {
            $('#mc-form').ajaxChimp({
                url: 'http://codextree.us10.list-manage.com/subscribe/post?u=b02e4f21e264536eff4820875&amp;id=4d57faf2cb'
                    /* Replace Your AjaxChimp Subscription Link */
            });            
        },
        /* ---------------------------------------------
         function initializ
         --------------------------------------------- */
        initializ: function() {   
            hexagon.preloader();
            hexagon.bg_slideshow();        
            hexagon.count_down();         
            hexagon.typer();           
            hexagon.about_information();     
            hexagon.page_scroll();     
            hexagon.portfolio_popup();     
            hexagon.mailchip();       
        }
    };
    
    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function() {
        hexagon.initializ();
    });  
    
})(jQuery);