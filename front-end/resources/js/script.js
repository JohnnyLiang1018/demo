/*-----------------Waypoints Navigation script----------------------*/
$(document).ready(function () {
    $('.js--section-categories').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });
    /*ANIMATIONS ON SCROLL*/
    /*fade in main categories*/
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    /*fade in iphone*/
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--nav-icon').click(function () {

        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');

        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });

});
