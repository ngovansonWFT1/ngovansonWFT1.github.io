var manHinh ='';
var ketqua = document.getElementById('manhinh');
var doi_dau = false;
var doi_phep_tinh = false;
var phep_tinh_cu = '';
var end = false;
var ketquaHT = '';
var khac = document.getElementById('manhinh');

function pressNumber(x) {
   var type = x.innerHTML;
   if (end) {
      ketqua.value = '';
      end = false;
   }
    
   if (ketquaHT == '' && manHinh == '') {
      ketquaHT = ketqua.value;
   }
   
   if (type == '0' || type == '1' ||
       type == '2' || type == '3' ||
       type == '4' || type == '5' ||
       type == '6' || type == '7' ||
       type == '8' || type == '9' ||
       type == '.' || type == '+/-') {
      doi_phep_tinh = false;
      if (type == '+/-') {
         if (doi_dau) {
            doi_dau = false;
            manHinh = manHinh.slice(1);
         }
         else {
            doi_dau = true;
            manHinh = '-' + manHinh;
         }
      }
      else if ( type == '0' && manHinh == '') {
         return manHinh = '';
      }

      else {
         manHinh += type;
      }
      ketqua.value = ketquaHT + manHinh;
   }
   else if (type == '+' || type == '-' ||
            type == '×' || type == '÷'   ) {
         
      if(doi_phep_tinh) {
         ketqua.value = ketqua.value.substring(0, ketqua.value.length - 1) + type;
      }
      else {
         phep_tinh_cu = type;
         ketqua.value = ketqua.value + type;
      }
      doi_phep_tinh = true;
      ketquaHT = '';
      manHinh = '';
   }
   
   else if (type == '=' || type == '%' ||
            type == '1/x' || type == 'x^2' || type == "√") {
      if (type == '=') {
         getValue();
      }
      else if (type == '%') {
         getPercent();
      }
      else if (type == '1/x') {
         getReverseFraction();
      }
      else if (type == 'x^2') {
         getSquare();
      }
      else if (type == "√") {
         getSquareRoot();
      }
   }
   else if (type == 'CE') {
      manHinh = '';
      ketqua.value = manHinh + ketquaHT;
   }
   else if (type == 'C') {
      ketqua.value = '';
      manHinh = '';
      ketquaHT = '';
   }
   else if (type == 'DEL') {
      ketqua.value = ketqua.value.substring(0, ketqua.value.length - 1);
      manHinh = '';
      ketquaHT = '';
   }
}

function getValue() {
   if (khac.value.includes('×','÷')) {
      khac.value = khac.value.replace(/×/g, '*').replace(/÷/g, '/');
      khac.value = eval(khac.value);
      ketqua.value = khac.value;
      manHinh = ketqua.value;
      ketquaHT = '';
   }
   else if (khac.value.includes('×',0)) {
      khac.value = khac.value.replace('×', '*');
      khac.value = eval(khac.value);
      ketqua.value = khac.value;
      manHinh = ketqua.value;
      ketquaHT = '';
      
   }
   else if (khac.value.includes('÷',0)) {
      khac.value = khac.value.replace('÷', '/');
      khac.value = eval(khac.value);
      ketqua.value = khac.value;
      manHinh = ketqua.value;
      ketquaHT = '';
      
   }
      
   else {
   ketqua.value = eval(ketqua.value);
   manHinh = ketqua.value;
   ketquaHT = '';
   }
}

function getPercent() {
   if (phep_tinh_cu == '/') {
      ketqua.value = eval(ketqua.value) * 100;
      manHinh = '';
      ketquaHT = '';
   }
   else {}
}

function getReverseFraction() {
   ketqua.value = 1 / eval(ketqua.value);
   manHinh = ketqua.value;
   ketquaHT = '';
}

function getSquare() {
   ketqua.value = Math.pow(eval(ketqua.value), 2);
   manHinh = ketqua.value;
   ketquaHT = '';
}

function getSquareRoot() {
   ketqua.value = Math.sqrt(eval(ketqua.value));
   manHinh = ketqua.value;
   ketquaHT = '';
}