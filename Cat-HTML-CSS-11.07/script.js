$(function() {

   new WOW().init(); // kích hoạt wow


    $('.block_loadmore').slideUp();
    TweenMax.staggerFrom($('.block_original .card-deck .card'), 1, {bottom: 200, opacity:0}, 0.3)

    $('.btn_end a').click(function() {
        $('.block_loadmore').slideToggle();
        TweenMax.staggerFrom($('.block_loadmore .card-deck .card'), 1, {left: 200, opacity:0}, 0.3)
        return false;
    });

});