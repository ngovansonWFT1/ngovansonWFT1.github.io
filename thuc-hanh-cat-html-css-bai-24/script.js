$(function(){
    $(window).scroll(function() {
        if($('html').scrollTop() >200) {
            $('.menutop1').addClass('change_menu');
            $('.logo').addClass('change_color');
            $('.backtotop.fixed-bottom').addClass('appearence');
        }
        else {
            $('.menutop1').removeClass('change_menu');
            $('.logo').removeClass('change_color');
            $('.backtotop.fixed-bottom').removeClass('appearence');
        }

    });

    $('.backtotop.fixed-bottom a').click(function() {
        $('html').animate({scrollTop:0},400);
        return false;
    });

});