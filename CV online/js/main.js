$(function () {
  let typed = new Typed('#typed', {
    strings: ["Web Developer", "Frontend Developer"],
    typeSpeed: 30,
    loop: false,
    startDelay: 1e3,
    backDelay: 3e3
  });

  let loadingShow = setTimeout(function () {
    $('.loading-overlay ').css('display', 'none')
  }, 2000);

  new WOW().init();
  let p1 = $('#about').offset().top;
  let p2 = $('#skill').offset().top;
  let p3 = $('#experience').offset().top;
  let p4 = $('#portfolio').offset().top;
  $(window).scroll(function () {

    if ($(document).scrollTop() >= p1) {
      $('.menu ul li a').removeClass('active')
      $('.menu ul li:nth-child(1) a').addClass('active')
    }

    if ($(document).scrollTop() >= p2) {
      $('.menu ul li a').removeClass('active')
      $('.menu ul li:nth-child(2) a').addClass('active')
    }

    if ($(document).scrollTop() >= p3) {
      $('.menu ul li a').removeClass('active')
      $('.menu ul li:nth-child(3) a').addClass('active')
    }

    if ($(document).scrollTop() >= p4) {
      $('.menu ul li a').removeClass('active')
      $('.menu ul li:nth-child(4) a').addClass('active')
    }
  })

  $('.menu ul li:nth-child(1) a').click(function () {
    $('.menu ul li a').removeClass('active')
    $(this).addClass('active');
    $('html').animate({ scrollTop: p1 }, 400);
    return false;
  })

  $('.menu ul li:nth-child(2) a').click(function () {
    $('.menu ul li a').removeClass('active')
    $(this).addClass('active');
    $('html').animate({ scrollTop: p2 }, 400);
    return false;
  })

  $('.menu ul li:nth-child(3) a').click(function () {
    $('.menu ul li a').removeClass('active')
    $(this).addClass('active');
    $('html').animate({ scrollTop: p3 }, 400);
    return false;
  })

  $('.menu ul li:nth-child(4) a').click(function () {
    $('.menu ul li a').removeClass('active')
    $(this).addClass('active');
    $('html').animate({ scrollTop: p4 }, 400);
    return false;
  })

  $('.open-menu').click(function () {
    $('.menu').toggleClass('show');
    if ($('.menu').hasClass('show')) {
      $('.open-menu svg').removeClass('fa-bars');
      $('.open-menu svg').addClass('fa-times');
    } else {
      $('.open-menu svg').removeClass('fa-times');
      $('.open-menu svg').addClass('fa-bars')
    }


  })

}) 