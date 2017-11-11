$(document).ready(function(){
  $("div").on("mouseenter", function(){
    $("div").stop().animate({"height":"500px","width":"500px"},700,"swing",function(){
      $("div").stop().animate({"background-color":"red"},700);
    });
  });

  $("div").on("mouseleave", function(){
    $(this).stop().animate({"width":"300px", "height":"300px"},800,function(){
      $(this).stop().animate({"background-color":"blue"},700);
    });
  });
});
