$(function () {

    $(window).scroll(function() {
        if ($('html').scrollTop() > 200) {
            $('.menutop').addClass('bg_blue');
            $('.logo').addClass('logo_red');
    
        }
        else {
    
            $('.menutop').removeClass('bg_blue');
            $('.logo').removeClass('logo_red');
    
        }

        let vitribody = $('html').scrollTop() ;
        if(vitribody >= $('.content4 .row:nth-child(2)').offset().top -250) {
            $('.content4 .col-md-6:first-child .card_block4').addClass('bounceInLeft animated');

            $('.content4 .col-md-6:last-child .card_block4').addClass('bounceInRight animated');
        }

        if(vitribody >= $('.content3 .row:nth-child(3)').offset().top -250) {
            $('.content3 .block_infor3').addClass('bounceInDown animated');
        }

    });




});