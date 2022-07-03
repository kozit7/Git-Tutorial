$(document).ready(function(){
$("#userId").on("blur",function(){
    
    var idchk = /^[a-z0-9]{4,12}$/;
    if(idchk.test(id.value)){
        idlb.innerHTML="사용가능합니다";
        idlb.style.color="blue";
    }else{
        idlb.innerHTML="4~12 사이의 숫자와 소문자만 가능합니다.";
        idlb.style.color="red";
    }
 })
})
