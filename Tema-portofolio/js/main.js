$(document).ready(function($) {
    "use strict";

    //Preloader
    $('body').addClass('preloader-active');
    $('.preloader').fadeOut();
    $('.preloader-spinner').delay(350).fadeOut('slow');
    $('body').removeClass('preloader-active');

    // Smooth Scroll
    $('a[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });

    //Nav menu active class change
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight() + 15,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });


    $(window).on("scroll", function() {

        // Bind to scroll
        var fromTop = $(this).scrollTop() + topMenuHeight;
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#" + id + "']").parent().addClass("active");
        }

        //Add class in top-menu
        if ($(window).scrollTop() > 100) {
            $("#top-menu").addClass("new-nav");
        } else {
            $("#top-menu").removeClass("new-nav");
        }

        //Simple Parallax
        var scrollTop = $(this).scrollTop();
        $('.header-panel').css('top', -(scrollTop * 0.4) + "px");

        //Skill Progress bar
        if ($(window).scrollTop() > 2300) {
            $(".progress-bar").each(function() {
                var each_bar_width = $(this).attr('aria-valuenow');
                $(this).width(each_bar_width + '%');
            });
        }

        //Scroll up
        if ($(window).scrollTop() > 300) {
            $('.scroll-up').slideDown(300);
        } else {
            $('.scroll-up').fadeOut(300);
        }
    });

    //Skill Progress bar ToolTip
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'manual'
    }).tooltip('show');

    //Counter
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

})(jQuery);