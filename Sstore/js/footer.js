$(function() {

    $(window).scroll(function(){
        if($('html').scrollTop() > 400 ) {
            $('.back-to-top').addClass('appearence')
        }
        else {
            $('.back-to-top').removeClass('appearence')
        }
    });

    $('.back-to-top a').click(function() {
        $('html').animate({scrollTop:0}, 400);
        return false;
    })
});