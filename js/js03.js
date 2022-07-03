/**
 *  조건식
 */
/*
if(조건식) {
  참일때의 문장(true)
}
ex) 평균이 60점 이상이면 합격 */
 //평균(avg)에 70저 저장
//if(평균이 60점 이상)
/*if(avg >= 60){
	alert("합격")
}
     

/*
참과 거짓의 결과를 나타낼때
if(조건식) {
  참일때의 문장(true)
}
else(조건식){
  거짓일때의 문장(false)
}
ex) 평균이 60점 이상(조건)이면 합격 그렇지 않으면 불합격(조건)

if(avg >= 60){
	alert("합격")
}
else{
	alert("불합격")
}*/


/*조건이 여러개일때
if(조건식) {
  참일때의 문장
} else if(조건식) {
  참일때의 문장
else(조건식) {
  거짓일때의 문장(false)
}
ex)평균이 60점 이상이면 합격
     평균이 59점 이상이면 보류,
     그렇지 않으면 불합격
if(avg >= 60){
	alert("합격")
} else if(avg >=59){
	alert("보류")
} else{
	alert("불합격")
} 
// 평균이 60점 이상이고, 총점이 300점 이상이면 합격
// 그렇지 않으면 불합격.
if(avg >= 60 && sum>300){
	alert("합격")
} else{ alert("불합격")}*/

/*var num=10;

switch(num){
	case 10:
		alert("num값은 10입니다.")
		break;
	case 20:
		alert("num값은 20입니다.")
		break;
	case 30:
		alert("num값은 30입니다.")
		break;
}*/

//1번문제
/*var hi = prompt("안녕 또는 잘자를 입력하세요")
var gn = "잘자"
if(hi==("안녕" || "잘자")){alert("안녕하세요")
}else if(gn==("잘자")){
	alert("안녕히 주무세요")
}*/

//삼항연산자 식 1번
/*var hi = prompt("안녕 또는 잘자를 입력하세요")
hi == "안녕"? alert("안녕하세요"): hi=="안녕" || "잘자"? alert("안녕히주무세요"):alert("안녕 또는 잘자를 입력하세요.")
*/

//2번문제
/*var hi = prompt("안녕")
if(hi =="안녕"){ alert("안녕하세요")}
else(alert("인사를 안 하다니 "))*/
/*var hi = prompt("안녕")
hi!="안녕"?alert("인사를 안 하다니"):""
*/


//3번문제
/*var result=Number(prompt("4로 나눠지는 숫자를 입력하시오."));
      if(result % 4 === 0 && result !== 0){
        alert("4로 나눌 수 있는 숫자입니다.");
    } else{
        alert("4로 나눌 수 없는 숫자입니다.");
    }*/ //%는 나머지가 0일때 쓰일수있다. 몫이 0이아님 !!


//4번문제
/*var plus=Number(prompt("양수 또는 음수를 입력하세요"))
if(plus > 0 ){
	alert("양수입니다.");
}
else if(plus == 0){
    alert("0입니다.")
    }
else if(plus <= 0){
	alert("음수입니다.");
}
else {
	alert("숫자만 입력하세요.")
}*/



//5번문제
/*var times=Number(prompt("짝수 또는 홀수를 입력하세요."));
      if(times %2 == 0 && times !== 0){
        alert("짝수입니다.");
    } else{
        alert("홀수입니다.");
    }*/
/*var num=prompt("숫자를 입력하세요.");
num%2==0?alert("짝수"):alert("홀수")
*/

i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}
