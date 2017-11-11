$(document).ready(function(){
  $('li').on('click', function(){
    $(this).css({'color':'red'});
    var i = $(this).index();
    alert(i);
  });
});
