/**
 * 함수
 */

/*
// 함수 선언(더하기를 하기위한 함수)
function add(a,b){
	return a + b	
	
}

// 함수 호출
alert(add(5,7))*/

//가로 3 세로 4 일때 삼격형의 넓이를 구하는 함수를 작성하시오(선언문,호출 둘다)

//선언문
/*function add(a,b){
	return a*b*1/2
}
alert(add(3,4))//호출문*/

//익명 함수   호출이 먼저시작하면 출력불가능
/*var add=function(a,b){
	return a + b
}
alert(add(5,7));*/

//콜백 함수(매개변수로 전달하는 함수)

// var callback = 10
/*function callbackTest(a){
	// 3번 반복합니다.
	for(var i=0; i<3; i++){
		// 매개변수로 전달된 함수를 호출합니다.
		callback();
	 }
}

//익명 함수
var callback = function(callback){
	alert("콜백 함수 호출");
}

// callbackTest함수 호출
callbackTest(callback);*/

/*function test(a,b,c){
	
	alert(a)
	alert(a*b)
	alert(a*b*c) // 10*1000*undefined
	
}
   test(10,100) // 10, 1000, NaN(Not a Number)

function power(a,b){
	   //b 가 undefined이면 매개변수는 한개이다.
	   if(b==undefined){ 
		   var result=0 //결과를 저장하는 변수
		   //a 가 2일때
		   //2*2
		   //a가 3일때
		   //3*3
		   a*a
		   alert("매개변수 1개")
	   } else {// 그렇지 않으면 매개변수는 2개이다
		   for( i = 0; i < b; i++ ){
			   result *=a;
		   }
		   //a가 2이고b가 3이면
		   //2*2*2
		   //a가 5이고 b가 4이면
		   //5*5*5*5
		   alert("매개변수 2개")
	   }
   }

   
function power(a,b){
	if (b) { //b 가 있을 경우
		var result=1;
		for (var i = 0; i < b; i++) {
			result *= a;
		}// a를 b만큼 제곱해주므로 : b만큼 곱하기를 반복 = 반복문 사용
		return result;
	} else {
		return a*a; // b가 없는 경우, a의 제곱값이되므로
		}
}alert(power(2,3));
*/

//var power = function () {
//	alert(test(9,3))
//};


/* function test(a,b){
	return b ? (a ** b) : (a ** 2)
}//   조건문   ?    참       :    거짓
 alert(test(9,3))*/

/*function power(a,b = 2) {
	alert(Math.pow(a, b));
}
power(4);
*/
/*
function multiply(){ 
	var xx = 1
	for (var i = 0; i < arguments.length; i++) {
		xx *= arguments[i];
//arguments객체는 함수를 호출할 때 넘긴 인자들이 배열 형태로 저장된 객체를 말한다
	}
	return xx;
}
alert(multiply(1,2,3,4,5));
//multiply 곱셈 함수 이다.*/










