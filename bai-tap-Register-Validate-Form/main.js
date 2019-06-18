$(document).ready(function() {
    $('#form-register').on('submit', function() {
        let hoten = $('#hoten').val();
        let diachi = $('#diachi').val();
        let sodt = $('#sodt').val();
        let email = $('#email').val();
        let pass = $('#matkhau').val();
        let isValid = true;

        if(KiemTraTen(hoten) == false) {
            DoiMauInputRed('hoten');
            isValid = false;
        } else {
            DoiMauInputGreen('hoten');
        }

        if(KiemTraDiaChi(diachi) == false) {
            DoiMauInputRed('diachi');
            isValid = false;
        } else {
            DoiMauInputGreen('diachi');
        }

        if(KiemTraSoDT(sodt) == false) {
            DoiMauInputRed('sodt');
            isValid = false;
        } else {
            DoiMauInputGreen('sodt');
        }

        if (KiemTraEmail(email) == false) {
            DoiMauInputRed('email');
            isValid = false;
        } else {
            DoiMauInputGreen('email');
        }

        if (KiemTraPassWord(pass) == false) {
            $('#matkhau').css('border-color', 'red').css('width', '337px');
            $('#matkhau').next('span').html('*<br><p>Mật khẩu phải đảm bảo: độ dài ít nhất 8 ký tự, có ít nhất 1 chữ cái viết hoa (A-Z) và viết thường (a-z) và 1 chữ số, và không giống với tên tài khoản!</p>');
            isValid = false;
        } else {
            DoiMauInputGreen('matkhau');
        }
        
        return isValid;


    });
    
});


function KiemTraTen(value) {
    let str = /^[a-zA-Za-z\sàáâãèéêếìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+(([\'\,\.\- ][a-zA-Za-z\sàáâãèéêếìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ ])?[a-zA-Za-z\sàáâãèéêếìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]*)*$/;
    if (value.match(str) == null) {
        return false;
    }
    return true;

}

function KiemTraDiaChi(value) {
    let str = /^\d+\s[A-za-z\sàáâãèéêếìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+\s[A-za-z\sàáâãèéêếìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+/;
    if (value.match(str) == null) {
        return false;
    }
    return true;
}

function KiemTraEmail(value) {
    let str = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (value.match(str) == null) {
        return false;
    }
    return true;
}

function KiemTraPassWord(value) {
    let str = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (value.match(str) == null) {
        return false;
    }
    return true;
}

function KiemTraSoDT(value) {
    let str = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
    if (value.match(str) == null) {
        return false;
    }
    return true;

}


function DoiMauInputRed(id) {
        $('#'+id).css('border-color', 'red').css('width', '337px');
        $('#'+id).next('span').html('*<br>Vui lòng điền đầy đủ thông tin!');
}

function DoiMauInputGreen(id) {
        $('#'+id).css('border-color', 'green').css('width', '337px');
        $('#'+id).next('span').html('<img src="./img/payment-successful.png" alt="tichxanh" width="15px" />');

}
