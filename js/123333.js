/**
 * 
 */
// window.onload:웹브라우저가 실행되자 마자 익명함수 안에있는 기능을 실행해라
window.onload=function(){
	// 아이디가 idchk인 것을 선택 document.querySelector("#idchk")
	// 한후 idchk 변수에 저장.
	var idchk=document.querySelector("#idchk") //<input type="text" id="idchk">
	// idchk에 저장되어 있는 것과 blur이벤트 연결 한 후 익명함수 안에 있는 것을 실행
	idchk.onblur=function(){
	// "정자바"문자열을 여기로 가지와서(idchk.value) idValue변수에 저장
	var idValue=idchk.value;
	// id는 5~20자 이내로 입력하셔야 합니다.
	var idmsg=document.querySelector("#idmsg");
	// id가 idmsg인 것을 선택하여 idmsg변수에 저장
	if(idValue.length>=5 && idValue.length<=20){
	// "정자바".length(정자바 문자열의 글자 수)
		idmsg.innerHTML="정상입니다";
		idmsg.style.color="green";
	} else {
		idmsg.innerHTML="5~20자 이내로 입력하셔야 합니다.";
		idmsg.style.color="red";
	 }
   }
}