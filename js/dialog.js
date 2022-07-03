/**
 * 대화상자(alert,confirm,prompt)
 */

//alert("안녕하세요.")

//var result=confirm("안녕하신가요?")

//alert(result) // 확인:true , 취소:false

// 네이버 카페 글삭제 기준
// result 값이 확인(true)이면 
// 삭제
// result 값이 취소(false)이면
// 원래대로.

/*var result = [함수]prompt("...")
1. 변수명을 carName 으로 지정하고 Volvo 값을 저장하는 변수를 선언하세요.
  var carName='Volvo';
  alert(carName)*/

/*2. x라는 변수를 서넝ㄴ하고 값 50을 저장하세요.
var x = 50;
alert(x)*/

/*3. 두 개의 변수x와 y를 사용해서 5+10의 합을 알림창에 표시하세요.
var x = 5;
var y = 10;
alert(x+y)*/

/*4.z라는 변수를 작성하고 x+y를 지정하고 결과를 알림창에 표시하세요.
var z = x+y;
alert(z)*/

//5. confirm창에 내용을 "진짜로 삭제하시겠습니까?"로 표시하고, 
//확인을누르면 "삭제됨" 취소를 누르면 "취소됨" 알림창을 띄우세요.
/*var result=confirm("진짜로 삭제하시겠습니까?")
if(result){ alert("확인됨")}
else {alert("취소됨")}

var result=confirm("진짜로 삭제하시겠습니까?")
result?alert("삭제됨"):alert("취소됨")
*/

/*6.
문자열을 숫자열로 변환한다고해서 전문용어로 (형변환)
var a = Number (prompt("숫자를입력하세요",""));
var b = Number (prompt("숫자를입력하세요",""));
alert(a+b);*/


/*var age = prompt("나이가 19세 이상입니까?");
if (age >= "19"){
	alert("인증됨");}
	else {
		alert("인증불가");
	}*/   

//var mag = prompt("당신이 제일 좋아하는 음식은무었입니까?");
//if (mag=="삼겹살") {alert("정답입니다!")}
//else {alert("오답입니다.");}

var id = prompt("id를 입력하세요.")
var pw = prompt("pw를 입력하세요.")
if (id==="kozit7" && pw==="123123"){alert( id +"님 반갑습니다.")}
else {alert("아이디 또는 비밀번호가 잘못입력되었습니다.")}








