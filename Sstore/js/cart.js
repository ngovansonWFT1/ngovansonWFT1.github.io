$(function() {
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    let unit = parseInt($('tr td:nth-child(3) p span:first-child').text());
    let intoMoney=$('tr td:nth-child(5) p span:first-child').text();
    let value = parseInt($('.screen').text());
    let sum = parseInt($('tfoot tr td:last-child p span:first-child').text())
      $('.asc').click(function() {
        let sum = 0;
        if(value > 0) {
          value++;
          intoMoney = unit * value;
          sum += intoMoney;
        }
        $('tr td:nth-child(5) p span:first-child').text(formatNumber(intoMoney));
        $('.infor-res-pr .price-res span:first-child').text(formatNumber(intoMoney));
        $('tfoot tr td:last-child p span:first-child').text(formatNumber(sum))
        $('.sum-price .right-content p').text(formatNumber(sum));
      })

      $('.desc').click(function() {
        let sum=0;
        if(value > 1) {
          value--;
          intoMoney = unit * value;
          sum += intoMoney;
          $('tfoot tr td:last-child p span:first-child').text(formatNumber(sum));
          $('.infor-res-pr .price-res span:first-child').text(formatNumber(sum));
          $('.sum-price .right-content p').text(formatNumber(sum));
        }
        $('tr td:nth-child(5) p span:first-child').text(formatNumber(intoMoney));
        $('.sum-price .right-content p').text(formatNumber(intoMoney));
        $('.infor-res-pr .price-res span:first-child').text(formatNumber(intoMoney));
      })
    
    $('tr td:nth-child(3) p span:first-child').text(formatNumber(unit));
    $('tr td:nth-child(5) p span:first-child').text(formatNumber(intoMoney));
    $('.infor-res-pr .price-res span:first-child').text(formatNumber(intoMoney));
    $('.sum-price .right-content p').text(formatNumber(intoMoney));

    $('tfoot tr td:last-child p span:first-child').text(formatNumber(sum));

    $('tr td:last-child button').confirm({
        title: 'Xác nhận!',
        content: 'Bạn có chắc chắn muốn xóa sản phẩm khỏi giỏ hàng???',
        buttons: {
            confirm: function () {
                $('tbody, tfoot').html('');

                $.alert('Sản phẩm đã được xóa khỏi giỏ hàng thành công!');
            },
            cancel: function () {
                $.alert('Hủy!');
            },
        }
    });

    $('.action-btn button.btn.btn-danger').confirm({
      title: 'Xác nhận!',
      content: 'Bạn có chắc chắn muốn xóa sản phẩm khỏi giỏ hàng???',
      buttons: {
          confirm: function () {
              $('.table-res').html('');

              $.alert('Sản phẩm đã được xóa khỏi giỏ hàng thành công!');
          },
          cancel: function () {
              $.alert('Hủy!');
          },
      }
  });
         

})