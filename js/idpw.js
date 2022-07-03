/**
 * 
 */
window.onload=function(){
	
	var idchk=document.querySelector("#idchk") 
	idchk.onblur=function(){
	var idValue=idchk.value;
	var idmsg=document.querySelector("#idmsg");
	if(idValue.length>=5 && idValue.length<=20){
		idmsg.innerHTML="정상입니다";
		idmsg.style.color="green";
	} else {
		idmsg.innerHTML="5~20자 이내로 입력하셔야 합니다.";
		idmsg.style.color="red";
	 }
   
	var pwchk=document.querySelector("#pwchk") 
	pwchk.onblur=function(){
	var pwValue=pwchk.value;
	var pwmsg=document.querySelector("#pwmsg");
	
	if(pwValue.length>=8 && pwValue.length<=16){
		pwmsg.innerHTML="정상입니다";
		pwmsg.style.color="green";
	} else {
		pwmsg.innerHTML="8~16자 이내로 입력하셔야 합니다.";
		pwmsg.style.color="red";
}
	var pw2chk=document.querySelector("#pw2chk") 
	pw2chk.onblur=function(){
	var pw2Value=pw2chk.value;
	var pw2msg=document.querySelector("#pw2msg");
	
	if(pw2Value === pwValue){
		pw2msg.innerHTML="정상입니다";
		pw2msg.style.color="green";
	} else {
		pw2msg.innerHTML="8~16자 이내로 입력하셔야 합니다.";
		pw2msg.style.color="red";
	
	}
	}
}
}
}