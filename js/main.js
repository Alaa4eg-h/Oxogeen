$(document).ready(function() {
    // Preloader //
    var preloader = $('.preloader');
    $(window).on('load', function() {
        preloader.fadeOut(1000).remove();
    })


    // #main-slider //
    var slideHeight = $(window).height();
    $('#my-header .item').css('height', slideHeight);

    // Scroll Menu //
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= slideHeight) {
            $('.top-nav').addClass('navbar-fixed-top');
        } else {
            $('.top-nav').removeClass('navbar-fixed-top');
        }
    })

    // Start Smooth Scrolling //
    $('.top-nav ul li a , .navbar-brand, .down-arrow').on('click', function(e) {
        e.preventDefault();
        var navLi = $(this).attr('href'),
            navHeight = $('.top-nav').height();
        $('html, body').animate({
            scrollTop: $(navLi).offset().top - navHeight
        }, 1500);
    })


    // Active Section //
    $('.top-nav ul li').on('click', function() {
        $(this).addClass('active-link').siblings().removeClass('active-link');
    })

    //Wow Animation //
    new WOW().init();

});