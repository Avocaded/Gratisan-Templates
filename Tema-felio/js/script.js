$(window).on("load", function() {
    "use strict";

    var left_header_height = $("#rev_slider_476_1_wrapper").innerHeight();
    $(".left-header").css({
        "height" : left_header_height
    });

    $(window).on("scroll", function(){
        if($(this).scrollTop() >= 1){
            $(".left-header").removeClass("active");
        }
    })

    $(".icon-bar").on("click", function(){
        $(".left-header").toggleClass("active");
    });


  /*=================== Dropdown Class ===================*/
    $("nav li ul").parent().addClass("has-children");

    /*=================== Responsive Menu ===================*/
    $(".menu-button").on("click",function(){
        $(".responsive-menu").addClass("slidein");
        return false;
    });  
    $(".close-menu").on("click",function(){
        $(".responsive-menu").removeClass("slidein");
        return false;
    });  


    /*================== Responsive Menu Dropdown =====================*/
    $(".responsive-menu ul ul").parent().addClass("menu-item-has-children");
    $(".responsive-menu ul li.menu-item-has-children > a").on("click", function() {
        $(this).parent().toggleClass("active").siblings().removeClass("active");
        $(this).next("ul").slideToggle();
        $(this).parent().siblings().find("ul").slideUp();
        return false;
    });


    /*=================== Header Search ===================*/
    $(".header-search > a").on("click", function() {
        $(this).parent().toggleClass('active');
        return false;
    });

    /*-----------------------------
      Top scroll function 
    -----------------------------*/

    $(window).on("scroll", function() {
    if ($(this).scrollTop() >= 250) {        // If page is scrolled more than 250px
        $('#return-to-top').fadeIn(500);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(500);   // Else fade out the arrow
    }
    });
    $('#return-to-top').on("click", function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 1000);
    });

});


    /*-----------------------------
      scroll function 
    -----------------------------*/
    $(document).ready(function(){
      $('.commment-bouton a').on("click", function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
           return false;
          }
        }
      });
    });



