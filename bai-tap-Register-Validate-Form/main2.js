$(document).ready(function() {
    $(window).on('load', function LayThongTinDangKy() {
        let uri = document.URL;
        let urinew = document.URL.split('?')[0];
        let uri_dec = decodeURIComponent(uri);
        let content = uri_dec.replace(/[&?]/g, ' ').replace(/[+]/g, ' ').replace(/[=]/g, ': ');
        let total = content.replace(urinew, '').trim().split(' ');
        let hoTen= '';
        let ngaySinh = '';
        let gioiTinh = '';
        let diaChi = '';
        let soDT = '';
        let email = '';
        let pass = '';
        for (let i = 1; i < total.length; i++) {
            if (i < total.indexOf('birthday_day:', 1)) {
                hoTen+= total[i] + ' ';
                $('#hoTen').text(hoTen);
                
            }
            if (i > total.indexOf('birthday_day:', 1) && i < total.indexOf('gender:', 1) && 
                  total[i] != 'birthday_month:' && total[i] != 'birthday_year:') {
                ngaySinh += total[i] + '/';
                $('#ngaySinh').text(ngaySinh.substring(0,ngaySinh.length -1));
            }
            if (i > total.indexOf('gender:', 1) && i < total.indexOf('diachi:', 1) ) {
                gioiTinh += total[i];
                $('#gioiTinh').text(gioiTinh);
            }
            if (i > total.indexOf('diachi:', 1) && i < total.indexOf('sodt:', 1)) {
                diaChi += total[i] + ' ';
                $('#diaChi').text(diaChi);
            }
            if (i > total.indexOf('sodt:', 1) && i < total.indexOf('email:', 1)) {
                soDT += total[i];
                $('#soDT').text(soDT);
            }
            if (i > total.indexOf('email:', 1) && i < total.indexOf('matkhau:', 1)) {
                email += total[i];
                $('#email').text(email);
            }
            if (i > total.indexOf('matkhau:', 1)) {
                pass += total[i];
                $('#matKhau').text(pass)
            }

        }
    });
});
