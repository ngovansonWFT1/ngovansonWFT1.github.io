$(document).ready(function(){
    $('.menu-level-1').slideUp()
    $('.menu-list-item').click( function() {
        $('.menu-level-2').removeClass('active-done');
        $('.menu-list-item').removeClass('active');
        
        $(this).addClass('active')
        $(this).children('.menu-level-2').addClass('active-done')
    });
    $('.cover-by-menu').click(function() {
        $('.menu-level-2').removeClass('active-done');
        $('.menu-list-item').removeClass('active');
        $('.menu-level-1').slideToggle()
    })

    $(window).scroll(function() {
        if($('html').scrollTop() > 250) {
            $('.quickly-search-top-page').addClass('display-none')
            $('.img-frames').addClass('img-hidden')
            $('.menu-main').addClass('add-background')
            $('.logo-center').addClass('logo-smaller')
            $('.wraper-menutop.fixed-top nav').addClass('breadcrumb-fix')
            $('.wraper-menutop.fixed-top').addClass('desc-height')
        }
        else {
            $('.quickly-search-top-page').removeClass('display-none')
            $('.img-frames').removeClass('img-hidden')
            $('.menu-main').removeClass('add-background')
            $('.logo-center').removeClass('logo-smaller')
            $('.wraper-menutop.fixed-top nav').removeClass('breadcrumb-fix')
            $('.wraper-menutop.fixed-top').removeClass('desc-height')
        }
    })


    $('.sub-menu-level-1').slideUp()
    $('.sub-menu-level-2').slideUp()
    $('.sub-menu-list-item').click( function() {
        
        $(this).children('.sub-menu-level-2').slideToggle(300);
        $(this).prev().children('.sub-menu-level-2').slideUp();
        $(this).next().children('.sub-menu-level-2').slideUp();
        $(this).next().children('.click-sub-menu').removeClass('rotate-icon');
        $(this).prev().children('.click-sub-menu').removeClass('rotate-icon');

        $(this).children('.click-sub-menu').toggleClass('rotate-icon');
    });
    $('.sub-cover-by-menu').click(function() {
        $('.sub-menu-level-2').slideUp()
        $('.click-sub-menu').removeClass('rotate-icon');
        $('.sub-menu-level-1').slideToggle();

    })

    $('.button-nav').click(function() {

        $('.sub-list-menu-mobile').toggleClass('show-hide-menu');
        $('.layer-background-under').addClass('left-to-right');
        $('.sub-menu-level-2').slideUp();
        $('.sub-menu-level-1').slideUp();
    })
    $('.layer-background-under').click(function() {
        $('.sub-list-menu-mobile').removeClass('show-hide-menu');
        $(this).removeClass('left-to-right');
        $('.sub-menu-level-2').slideUp();
        $('.sub-menu-level-1').slideUp();
    })

    let url = $(location).attr('pathname');
    if (url.match('index')) {
        $('.menu-right a:first-child').children().addClass('ws');
        $('ol.breadcrumb li:nth-child(2)').css('display','none')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:first-child').children().removeClass('ws')
    }

    if (url.match('contact-us')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Liên hệ')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    


});