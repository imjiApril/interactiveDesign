$(document).ready(function(){
  $('button').on('click',function(){
    var age = $('input').val();
    if(age==''){
      alert('아무것도 입력하지 않았습니다.');
    }else if(age < 20){
      alert('미성년자 입니다.');
    }else if(age >19){
      alert('성인입니다.');
    }else{
      alert('숫자만 입력해주세요');
    }
  });

});
// $(document).ready(fucntion(){
//
//     for(var i=0; i<10; i++){
//       document.write(i);
//     }
// });
