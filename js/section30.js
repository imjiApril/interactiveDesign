$(document).ready(function(){
  // $('ul li:first-child').on('click',function(){
  $('li').eq(0).on('click',function(){
    $('.box1').hide(3000);
  });

  $('li').eq(1).on('click',function(){
    $('.box1').show();
  });

  $('li').eq(2).on('click',function(){
    $('.box2').fadeOut(3000);
  });

  $('li').eq(3).on('click',function(){
    $('.box2').fadeIn();
  });
});
