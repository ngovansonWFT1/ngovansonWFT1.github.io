$(function () {
    $('.only-image-cover').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    })

    $('.product-sale .block-card-sale').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                  slidesToShow: 1.15,
                  slidesToScroll: 1
                }
              },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2.5,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 3.5,
                  slidesToScroll: 1
                }
              }
            
          ]
        });




    



    // $('#dr1 .dropdown-menu.ssd-prd a:first-child').addClass('checked');
    // $('#dr2 .dropdown-menu.mobi-prd a:first-child').addClass('checked');
    // $('#dr3 .dropdown-menu.microsd-prd a:first-child').addClass('checked');
    // $('#dr4 .dropdown-menu.ram-prd a:first-child').addClass('checked');
    // $('#dr5 .dropdown-menu.rampc-prd a:first-child').addClass('checked');

    // $('.dropdown-menu.sale-prd a').click(function () {
    //     $('.dropdown-menu.sale-prd a').removeClass('checked')
    //     $(this).addClass('checked')
    //     $('.dropdown-toggle.sale-prd').html($(this).html())
    //     return false;
    // })

    $('.dropdown-menu a:first-child').addClass('checked');

    $('.dropdown-menu.ssd-prd > a').click(function () {
        $('.dropdown-menu.ssd-prd > a').removeClass('checked')
        $(this).addClass('checked')
        $('.dropdown-toggle.ssd-prd').html($(this).html())
        return false;
    });

    $('.dropdown-menu.mobi-prd > a').click(function () {
        $('.dropdown-menu.mobi-prd > a').removeClass('checked')
        $(this).addClass('checked')
        $('.dropdown-toggle.mobi-prd').html($(this).html())
        return false;
    });

    $('.dropdown-menu.microsd-prd > a').click(function () {
        $('.dropdown-menu.microsd-prd > a').removeClass('checked')
        $(this).addClass('checked')
        $('.dropdown-toggle.microsd-prd').html($(this).html())
        return false;
    });

    $('.dropdown-menu.ram-prd > a').click(function () {
        $('.dropdown-menu.ram-prd > a').removeClass('checked')
        $(this).addClass('checked')
        $('.dropdown-toggle.ram-prd').html($(this).html())
        return false;
    });

    $('#dr5 .dropdown-menu.rampc-prd > a').click(function () {
        $('#dr5 .dropdown-menu.rampc-prd > a').removeClass('checked')
        $(this).addClass('checked')
        $('.dropdown-toggle.ram-pc-prd').html($(this).html())
        return false;
    });

    $('.brand-appearence-like').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5
                }
            }
        ]
    });
    

    $('#dr1 .dropdown-item').click(function() {
        let $grid = $('.block-card-ssd').isotope({
            itemSelector: '.card',
            layoutMode: 'fitRows',
            fitRows: {
            gutter: 20
            },
            masonry: {
                columnWidth: 262,
                fitWidth: true
              },
            getSortData: {
                name: '.brand'
                
            }
        });
        let sortByValue = $(this).attr('data-sort-by');
        let fil = $(this).data('filter');
        let bol = true;
        if(fil == 'all') {
            sortByValue = 'original-order'
        }
        if(fil == 'DESC') {
            bol = false;
        }

        $grid.isotope({ 
            sortBy: sortByValue,
            sortAscending: bol
        });
    })

    $('#dr2 .dropdown-item').click(function() {
        let $grid = $('.block-card-mobi').isotope({
            itemSelector: '.card',
            layoutMode: 'fitRows',
            fitRows: {
            gutter: 20
            },
            masonry: {
                columnWidth: 262,
                fitWidth: true
              },
            getSortData: {
                name: '.brand'
                
            }
        });
        let sortByValue = $(this).attr('data-sort-by');
        let fil = $(this).data('filter');
        let bol = true;
        if(fil == 'all') {
            sortByValue = 'original-order'
        }
        if(fil == 'DESC') {
            bol = false;
        }

        $grid.isotope({ 
            sortBy: sortByValue,
            sortAscending: bol
        });
    })

    $('#dr3 .dropdown-item').click(function() {
        let $grid = $('.block-card-microsd').isotope({
            itemSelector: '.card',
            layoutMode: 'fitRows',
            fitRows: {
            gutter: 20
            },
            masonry: {
                columnWidth: 262,
                fitWidth: true
              },
            getSortData: {
                name: '.brand'
                
            }
        });
        let sortByValue = $(this).attr('data-sort-by');
        let fil = $(this).data('filter');
        let bol = true;
        if(fil == 'all') {
            sortByValue = 'original-order'
        }
        if(fil == 'DESC') {
            bol = false;
        }

        $grid.isotope({ 
            sortBy: sortByValue,
            sortAscending: bol
        });
    })

    $('#dr4 .dropdown-item').click(function() {
        let $grid = $('.block-card-ram').isotope({
            itemSelector: '.card',
            layoutMode: 'fitRows',
            fitRows: {
            gutter: 20
            },
            masonry: {
                columnWidth: 262,
                fitWidth: true
              },
            getSortData: {
                name: '.brand'
                
            }
        });
        let sortByValue = $(this).attr('data-sort-by');
        let fil = $(this).data('filter');
        let bol = true;
        if(fil == 'all') {
            sortByValue = 'original-order'
        }
        if(fil == 'DESC') {
            bol = false;
        }

        $grid.isotope({ 
            sortBy: sortByValue,
            sortAscending: bol
        });
    })

    $('#dr5 .dropdown-item').click(function() {
        let $grid = $('.block-card-rampc').isotope({
            itemSelector: '.card',
            layoutMode: 'fitRows',
            fitRows: {
            gutter: 20
            },
            masonry: {
                columnWidth: 262,
                fitWidth: true
              },
            getSortData: {
                name: '.brand'
                
            }
        });
        let sortByValue = $(this).attr('data-sort-by');
        let fil = $(this).data('filter');
        let bol = true;
        if(fil == 'all') {
            sortByValue = 'original-order'
        }
        if(fil == 'DESC') {
            bol = false;
        }

        $grid.isotope({ 
            sortBy: sortByValue,
            sortAscending: bol
        });
    })


    



})