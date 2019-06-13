$doi_phep_tinh = false;
$phep_tinh_cu = '';
$doi_dau = false;

$(document).ready(function() {
   $('#manhinh').attr('disabled', 'true');
   $('.box-buttom #daubang').attr('disabled', 'true');
   $('.box-buttom .nhan').attr('disabled', 'true');
   $('.box-buttom .chia').attr('disabled', 'true');
   $('#so_0').attr('disabled', 'true');
   //$('.box-buttom .doidau').attr('disabled', 'true');
});

$('.box-buttom .phimso,.doidau').on('click', function () {
   $('.box-buttom #so_0').removeAttr('disabled');
   $char = $(this).html();
   $value_caculation = $('#manhinh').val();
   $string = $value_caculation + $char;
   $('.box-buttom .pheptinh').removeAttr('disabled');
   $('.box-buttom .equal').removeAttr('disabled');
   if ($char == $('.doidau').html()) {
      if ($doi_dau) {
         $doi_dau = false;
         $('#manhinh').val($string.substring(0, $string.length - 3));
      }
      else {
         $doi_dau = true;
         $('#manhinh').val('-' + $string.substring(0, $string.length - 3) );
      }
   }
   else {
      $('#manhinh').val($string);
   }

});
  
$doi_phep_tinh = false;

$('.box-buttom .daucham').on('click', function() {
   $char = $(this).html();
   $value_caculation = $('#manhinh').val();
   $('#manhinh').val($value_caculation + $char);
   $(this).attr('disabled', 'true');
   $('.box-buttom .pheptinh').attr('disabled', 'true');
});

$('.box-buttom .pheptinh').on('click', function() {
   $char = $(this).html();
   $value_caculation = $('#manhinh').val();
   $('#manhinh').val($value_caculation + $char);
   //$('.box-buttom .nhan').atrr('disabled', 'true');
   //$('.box-buttom .chia').atrr('disabled', 'true');
   $('.box-buttom .daucham').removeAttr('disabled');
});

$('.box-buttom .equal').on('click', function() {
   $result = $('#manhinh').val();
   if ($result.includes('×','÷')) {
      $result = $result.replace(/×/g, '*').replace(/÷/g, '/');
      $('#manhinh').val(eval($result));
   }
   else if ($result.includes('×')) {
      $result = $result.replace('×', '*');
      $('#manhinh').val(eval($result));
   }
   else if ($result.includes('÷')) {
      $result = $result.replace('÷', '/');
      $('#manhinh').val(eval($result));
   }
   else {
      $('#manhinh').val(eval($result));
   }
});

$('box-buttom .phimCBH').on('click', function() {
   $result = $('#manhinh').val();
   $('#manhinh').val(sqrt(eval($result)));
});


$('.box-buttom .del').on('click', function() {
   $string = $('#manhinh').val();
   $('#manhinh').val($string.substring(0, $string.length - 1));
});

$('.box-buttom .refresh').on('click', function() {
   $('#manhinh').val('');
});

$('box-buttom .ce').on('click', function() {

});
