/**
 * 
 */
window.onload=function(){
	var id=document.querySelector("#userId");
	var pw=document.querySelector("#userPassword");
	var em=document.querySelector("#userEmail");
	var idlb=document.querySelector("#idchk");
	var pwlb=document.querySelector("#pwchk");
	var emlb=document.querySelector("#emchk");
	
	userId.onblur=function(){
		
		var idchk = /^[a-z0-9]{4,12}$/;
		if(idchk.test(id.value)){
			idlb.innerHTML="사용가능합니다";
			idlb.style.color="blue";
		}else{
			idlb.innerHTML="4~12 사이의 숫자와 소문자만 가능합니다.";
			idlb.style.color="red";
		}
	}
	
	
	userPassword.onblur=function(){
		var pwchk = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
		if(pwchk.test(pw.value)){
			pwlb.innerHTML="사용가능합니다.";
			pwlb.style.color="blue";
		}else{
			pwlb.innerHTML="비밀번호는 8자이상이며, 숫자 대문자 소문자 특수문자를 모두 포함해야합니다.";
			pwlb.style.color="red";
	}
	}

	userEmail.onblur=function(){
		// 이메일 관련 정규식을 만들자 (
		var emchk = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
		if(emchk.test(em.value)){
			emlb.innerHTML="사용가능합니다.";
			emlb.style.color="blue";
		}else{
			emlb.innerHTML="다른 이메일로 입력해주세요.";
			emlb.style.color="red";
		}
	}

}