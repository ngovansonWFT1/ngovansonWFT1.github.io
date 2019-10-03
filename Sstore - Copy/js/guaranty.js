$(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();
        let bill = $('#bill-number').val();

        if (testText(name) == false) {
            $('#nameHelp').addClass('showed')
        } else {
            $('#nameHelp').removeClass('showed')
        }

        if (email == '') {
            $('#emailHelp').addClass('showed')

        } else {
            $('#emailHelp').removeClass('showed')
        }

        if (testPhone(phone) == false) {
            $('#phoneHelp').addClass('showed')
            $('#phoneHelp').text('Số điện thoại hợp lệ phải bắt đầu bằng số "0" và phải có 10 hoặc 11 số')
        } else {
            $('#phoneHelp').removeClass('showed')

        }


        if (testBill(bill) == false || bill == '') {
            $('#billHelp').addClass('showed')
            $('#billHelp').text('Số hóa đơn hợp lệ không được chứa các ký tự đặc biệt')
        } else {
            $('#billHelp').removeClass('showed')
        }
        if(testText(name) == true && email != '' && testPhone(phone) && testBill(bill)==true) {
            $('.notice').addClass('showed')
            $('.layer-gray').addClass('showed')
            
        }
        



    })

    $('.notice').fadeIn(5000);
    $('.layer-gray').fadeIn(5000);

    $('.closed').click(function() {
        $('.notice').removeClass('showed')
        $('.layer-gray').removeClass('showed')
    })
    $('.layer-gray').click(function() {
        $('.notice').removeClass('showed')
        $('.layer-gray').removeClass('showed')
    })
})

function testText(value) {
    let str = /^[a-zA-Za-z\sàáâãèéêếìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+(([\'\,\.\- ][a-zA-Za-z\sàáâãèéêếìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ ])?[a-zA-Za-z\sàáâãèéêếìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]*)*$/;
    if (value.match(str) == null) {
        return false;
    }
    return true;

}
function testPhone(value) {
    let str = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
    if (value.match(str) == null) {
        return false;
    }
    return true;

}

function testBill(value) {
    let str = /^[a-zA-Z0-9]*$/;
    if (value.match(str) == null) {
        return false;
    }
    return true;
}