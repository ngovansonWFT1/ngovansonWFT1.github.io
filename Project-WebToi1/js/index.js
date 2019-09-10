$(function () {
    $('.only-image-cover').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    })

    $('.dropdown-menu.sale-prd a').click(function () {
        $('.dropdown-menu.sale-prd a').removeClass('checked')
        $(this).addClass('checked')
        $('.dropdown-toggle.sale-prd').html($(this).html())
        return false;
    })

    $('.dropdown-menu.ssd-prd a').click(function () {
        $('.dropdown-menu.ssd-prd a').removeClass('checked')
        $(this).addClass('checked')
        $('.dropdown-toggle.ssd-prd').html($(this).html())
        return false;
    });

    $('.dropdown-menu.mobi-prd a').click(function () {
        $('.dropdown-menu.mobi-prd a').removeClass('checked')
        $(this).addClass('checked')
        $('.dropdown-toggle.mobi-prd').html($(this).html())
        return false;
    });

    $('.dropdown-menu.microsd-prd a').click(function () {
        $('.dropdown-menu.microsd-prd a').removeClass('checked')
        $(this).addClass('checked')
        $('.dropdown-toggle.microsd-prd').html($(this).html())
        return false;
    });

    $('.dropdown-menu.ram-prd a').click(function () {
        $('.dropdown-menu.ram-prd a').removeClass('checked')
        $(this).addClass('checked')
        $('.dropdown-toggle.ram-prd').html($(this).html())
        return false;
    });

    $('.brand-appearence-like').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
})