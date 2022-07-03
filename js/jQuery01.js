// 웹브라우저 선택한 것에 대해서 준비가 된 후 익명함수에 있는 것을 실행
// ready 는 함수! 
// function add( a , b ){
//             (매개변수)
//
//  }   add(10,20,function(){alert("")}) 10/20은 인수
//      function 은 콜백함수
$(document).ready(function(){

    //id를 이용한 선택자(글자색을 빨간색)
    $("#header1").css("color","red")
    
    //css를 두번 사용하여 글자색을 빨간색이고,배경색을 파란색으로 적용
    $("#header1").css("color","red").css("background-color","blue")

    //css를 하나만 사용하여 2개의 조건을 나타내는방법
    $("#header1").css({"color":"red","border-style":"solid"})
    
    //class를 이용한 선택자
    $(".header2").css("background-color","yellow")
    
    //tag를 이용한 선택자
    $("h1").css("font-size","20px")

    $("#header1").on("click",function(){
        alert("첫번째 h1태그를 클릭 했을때");
    })
    $("#idchk").on("blur",function(){
        alert("id입력란에서 커서를 뺏겼을때...");
    })


})
