$(function() {
    $('.dropdown-menu a:first-child').addClass('checked');
    $('.dropdown-menu a').click(function() {

        $('.dropdown-menu a').removeClass('checked');
        $(this).addClass('checked');
        $('#dropdownMenuButton').html($(this).html())
        return false;
    })

    $('.list-icon').click(function() {
        $('.grid-product-list').addClass('hidden');
        $('.list-product-appearence').addClass('showed')
        $(this).children().attr('src','./../images/product-list/list-active.svg');
        $('.grid-icon img').attr('src','./../images/product-list/grid-none-active.svg')
        $(this).addClass('add-background');
        $('.layout-and-sort .grid-icon').addClass('remove-background');
    })

    $('.grid-icon').click(function() {
        $('.grid-product-list').removeClass('hidden');
        $('.list-product-appearence').removeClass('showed');
        $(this).children().attr('src','./../images/product-list/grid-active.svg');
        $('.list-icon img').attr('src', './../images/product-list/list-disactive.svg')
        $(this).removeClass('remove-background');
        $('.layout-and-sort .list-icon').removeClass('add-background');
    })

    let $grid = $('.block-card').isotope({
        itemSelector: '.card',
        layoutMode: 'fitRows',
        fitRows: {
        gutter: 19
        },
        getSortData: {
            name: '.card-title a',
            price: '.price parseInt'
        }
    });
    // let filterFns = {
    //     name: function(){
    //         let name = $(this).find('.brand').text();
    //         let value = '';
    //         $('.form-check input').click(function() {
                
    //             value = $(this).data('filter')
    //         })
    //         return name.match(value)
    //     },

    // }
    $('.form-check input').on( 'click', function() {
        let value = $(this).data('filter');
        let filterFns = {
            name: function() {
                let name = $(this).find('.brand').text();
                return name.match(value)
            },
            standard: function() {
                let name = $(this).find('.standard').text();
                return name.match(value)
            },
            price: function() {
                let name = $(this).find('.price').text();
                if(value[0] <= parseInt(name,10) && value[1] >= parseInt(name,10)) {
                    return name;
                }
            },
            memory: function() {
                let name = $(this).find('.memory').text();
                if(value[0] <= parseInt(name,10) && value[1] >= parseInt(name,10)) {
                    return name;
                }
            }
        }
        // get filter value from input value
        let filterValue = this.value;
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
      });

  
      
      // sort items on button click
      $('.dropdown-menu .dropdown-item').click( function() {
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

      });
      $('button.btn.btn-primary').click(function() {
        $('button.btn.btn-primary').removeClass('isActive');
        $(this).addClass('isActive');
        
      })
      $('button.btn.btn-primary:nth-child(1)').click(function() {
        $('.block-card:nth-child(1)').css('display','flex')
        $('.block-card:nth-child(2)').css('display','none')
        $('.block-card:nth-child(3)').css('display','none')
        $('.block-card:nth-child(4)').css('display','none')
        $('.page-1').css('display','block')
        $('.page-2').css('display','none')
        $('.page-3').css('display','none')
        $('.page-4').css('display','none')
      })

      $('button.btn.btn-primary:nth-child(2)').click(function() {
        $('.block-card:nth-child(2)').css('display','flex')
        $('.block-card:nth-child(1)').css('display','none')
        $('.block-card:nth-child(3)').css('display','none')
        $('.block-card:nth-child(4)').css('display','none')
        $('.page-2').css('display','block')
        $('.page-1').css('display','none')
        $('.page-3').css('display','none')
        $('.page-4').css('display','none')
      })

      $('button.btn.btn-primary:nth-child(3)').click(function() {
        $('.block-card:nth-child(3)').css('display','flex')
        $('.block-card:nth-child(2)').css('display','none')
        $('.block-card:nth-child(1)').css('display','none')
        $('.block-card:nth-child(4)').css('display','none')
        $('.page-3').css('display','block')
        $('.page-2').css('display','none')
        $('.page-1').css('display','none')
        $('.page-4').css('display','none')
      })

      $('button.btn.btn-primary:nth-child(4)').click(function() {
        $('.block-card:nth-child(4)').css('display','flex')
        $('.block-card:nth-child(2)').css('display','none')
        $('.block-card:nth-child(3)').css('display','none')
        $('.block-card:nth-child(1)').css('display','none')
        $('.page-4').css('display','block')
        $('.page-2').css('display','none')
        $('.page-3').css('display','none')
        $('.page-1').css('display','none')
      })


})