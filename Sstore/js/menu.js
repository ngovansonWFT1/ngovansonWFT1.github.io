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

    if (url.match('about-us')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Giới thiệu')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }
    
    if (url.match('cart')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Giỏ hàng')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('change-return')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Phiếu yêu cầu đổi trả')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('guaranty')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Phiếu yêu cầu bảo hành')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('payment-method')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Phương thức thanh toán')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('payment')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Thanh toán')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('policy-delivery')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Chính sách giao hàng')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('policy-guaranty')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Chính sách bảo hành')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('policy-restore')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Chính sách đổi trả')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('policy-security')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Chính sách bảo mật thông tin')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('rule-buy-product')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Điều khoản mua bán hàng hóa')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    // Page-product
    if (url.match('product-list')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Ổ cứng SSD')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('product-list-sale')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Sản phẩm giảm giá')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('product-list-ram')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Ram Laptop')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('product-list-ram-pc')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Ram PC')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('product-list-mobi-hard-disk')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Ổ cứng di động')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('product-list-microsd')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Thẻ nhớ')
        $('ol.breadcrumb li:nth-child(3)').css('display','none')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('product-detail')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Ổ cứng SSD')
        $('ol.breadcrumb li:nth-child(3)').text('SSD Samsung 860 Evo 500GB')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }


    if (url.match('product-detail-ram')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Ram Laptop')
        $('ol.breadcrumb li:nth-child(3)').text('Ram Laptop Apacer DDR3L 4GB')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('product-detail-rampc')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Ram PC')
        $('ol.breadcrumb li:nth-child(3)').text('Ram PC G.SKILL Trident Z')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('product-detail-mobi-hardisk')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Ổ cứng di động')
        $('ol.breadcrumb li:nth-child(3)').text('Ổ cứng di động 1TB chống Sock Apacer AC631')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }

    if (url.match('product-detail-microsd')) {
        $('.menu-right a:last-child').children().addClass('ws')
        $('ol.breadcrumb li:nth-child(2)').text('Thẻ nhớ')
        $('ol.breadcrumb li:nth-child(3)').text('Thẻ Nhớ MicroSDHC SanDisk')
    } else {
        $('.menu-right a:last-child').children().removeClass('ws')
    }



    


});