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
})