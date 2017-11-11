$(document).ready(function () {
  $('.btn1').on('click', function () {
    $('.frame img').attr({
      'src': 'img/pic1.jpg',
      'alt': '시계1'
    });
  });

  $('.btn2').on('click', function () {
    $('.frame img').attr({
      'src': 'img/pic2.jpg',
      'alt': '시계2'
    });
  });
});
