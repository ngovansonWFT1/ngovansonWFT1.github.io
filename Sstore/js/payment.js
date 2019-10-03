$(function() {

    $.ajax({
        url: './city-district.json',
        type: 'GET',
        dataType: 'json'
    }).done(function(data){
        
        data.map((data) => {
            $('.province-select select').append(`<option>${data.province}</option> `)

        })
        $('.province-select select').change(function(){
            $('.district-select select').html('<option>--- Chọn Quận/Huyện ---</option>')
            let prv = $(this).val();
            let fil = data.filter(data => prv.match(data.province))
            console.log(fil);
            if(fil.length > 0) {
                fil[0].district.map(district => {
                    $('.district-select select').append(`<option>${district}</option>`)
                })
            }
        });
        
    });

        $('.guide-payment-bank').slideUp()
    $('.form-check #exampleRadios1').click(function() {
        $('.form-check:first-child').removeClass('border-bottom')
        $('.guide-payment-delivery').slideDown();
        $('.guide-payment-bank').slideUp();
        $('.order-product').removeClass('style-block')
    })

    $('.form-check #exampleRadios2').click(function() {
        $('.form-check:first-child').addClass('border-bottom')
        $('.guide-payment-delivery').slideUp();
        $('.guide-payment-bank').slideDown();
        $('.order-product').addClass('style-block')
    })
})