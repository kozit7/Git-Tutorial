/**
 * 자료형(type)
 */

/*// 1. 문자열 자료형
alert("abcd")//""큰따옴표가있으면 문자로 인식
alert("1234")//문자가된 숫자 자료형
// 2. 숫자 자료형
alert(abcd)
//alert(1234)//""큰따옴표가없으면 숫자로 인식
alert(1234+5678)
alert("1234"-"5678")
alert("1234"+1234)
//산술연산자 : + - * / %
// 3. 불리언 자료형
alert(52>273) //false 52와273는 피연산자
alert(52<273) //true "<,>,<=,>=" 는 비교연산자
alert(52>273 && 10<20) //false
alert(52>273 || 10<20) //true
*/
var number=[20,35,73,23,17,10,22,84,95,74];
var sum = 0;

for(var i=0; i<number.length;i++){
		if(number[i]%2==0){
		sum+=number[i];
		}
	
	
}
alert(sum);

