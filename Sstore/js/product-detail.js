$(function() {
    $('.img-product-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.img-product-small'
      });
      $('.img-product-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.img-product-big',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1199.98,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          }
        ]
      });

      let value = parseInt($('.screen').text())
      $('.asc').click(function() {
        
        if(value > 0) {
          value++;
          $('.screen').html(value)
        }
      })

      $('.desc').click(function() {
        
        if(value > 1) {
          value--;
          $('.screen').html(value)
        }
        
      })
})