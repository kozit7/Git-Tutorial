/**
 *  반복문
 */

//"출력"이라는 문자열을 알림창으로 10번 띄우세요.(반복문)x
/*alert("출력")
alert("출력")
alert("출력")
alert("출력")
alert("출력")
alert("출력")
alert("출력")
alert("출력")
alert("출력")
alert("출력")*/
//"출력"이라는 문자열을 알림창으로 10번 띄우세요.(반복문)o
//순서     1         2       4
//                5       7
//                8       10
//               11       13
//               14       16
//               17       19
//               20       22
//               23       25
//               26       28
//               29       31
//               32
/*for(var i=0  ;  i<10  ;  i++){
	              
	alert("출력="+i)	     // 3 6 9 12 15 18 21 24 27 30
}
*/

/*var i=0
while(i<0){
	  
	alert("출력="+i)
	(i++)
	}*/
/*var i=11
do{
}
while(i<10){
	
	alert("출력="+ i)
	i++
}*/


// 반복문에서 사용이 되는 break키워드와 continue키워드
/*for(var i=0; i<10; i++){ //for문 start
	alert(i+"번째 반복문 입니다.");
	
	// 진행 여부를 물어봐서 진행하지 않겠다고 하면
	if(!confirm("계속하시겠습니까?")){ //if문 start
		break;
	}   //if문 end
	// 반복을 멈춰라
}//for문 end
alert("프로그램 종료")*/

// confirm >확인 취소 버튼 !는 부정논리연산자 !=와는 다름

/*for(var i = 1; i<=10 ; i++){
	
	// i가 홀수이면
	if(i%2==1){//if(i%2==0)는 홀수만 출력
        // 멈추고 다시 실행.
        continue;
	}
	alert(i);
}*/


//1번문제
/*
var promReq = "안녕 또는 잘자를 입력하시오.(잘 있어 입력시 종료)"
var hiRes = "안녕하세요"
var hiMsg = "안녕"
var gnRes = "안녕히 주무세요"
var gnMsg = "잘자"
var endRes = "종료합니다"
var endMsg = "잘 있어"
   //(prom != endMsg) else if break 문을 지우고 대신쓸수있음
while(true) {//true 는 무한반복 
	var prom = prompt(promReq) //prompt(promReq) 가 prom 을 초기화 선언함
	if(prom == hiMsg) {
		// 안녕 입력시 안녕하세요 출력
		alert(hiRes)
	} else if(prom == gnMsg){
		// 잘자 입력시 안녕히 주무세요 출력
		alert(gnRes)
	} else if(endMsg){
		// 잘 있어 입력시 반복문 종료
		alert(endRes)
		break; 
	} else {alert("명시되지않은 단어입니다.")}
}
*/
//2번문제

/*var sum = 0;
for(var i = 1; i <= 100; i++) {
  sum+=i // sum + i; // sum 은 전역변수
} //+= 복합대인연산자로 줄일수있다.
alert(sum);*/

//3번문제
/*var sum=0;
var tmp=0;
var num1=Number(prompt("첫번째 숫자를 입력하세요."))//10
var num2=Number(prompt("두번째 숫자를 입력하세요."))//20
        //변수명 넣어도 무관   
// if 문 두번째 숫자를 더크게넣고싶을때
// 조건 : num1이 num2보다 크면
// num2에 있는 값을 num1에 넣고
// num1에 있는 값을 num2에 넣는다. num1 > tmp > num2 > num1
if(num1>num2){
	tmp=num1;
	num1=num2;
	num2=tmp;
}
for(var i=num1; i<=num2; i++) {
	sum+=i; // sum=sum+i
}

alert(sum);*/
//4번문제

/*for(let i=1; i<10; i++) {
	alert("2*" + i + "=" +2*i);
}*/

//5번문제
/*
for(var i=2; i<=9; i++) {
	document.write(i+"단");
for(var j=1; j<=9; j++) {
	document.write (i + "*" + j + "=" +i*j)
	document.write(i*j)
}

}*/


//중첩 for문
//순서       1    2    
//            19   18     
/*for(var i=1; i<3; i++){
//           3    4    
//                7    6    
//                10   9   
//	              13   12
//                16   15
//           20   21  
	for(var j=1; j<5; j++){
		alert(i + "-" + j)//5 8 11 14 22
 	}
	alert(i +"번째반복문 끝")//17
}*/

for (k=0; k<=6; k+=3){ //3단씩 나눈다는 조건과 반복
	for(j=1; j<=9; j++){ // 곱해지는 수 구성(1~9)
		for(i=1; i<4; i++){ //단 구성(1~9)
	document.write(i+k + 'x' + j + '=' + (i+k)*j + '&nbsp');
	}document.write('<br>')
	}document.write('<br>')
}
