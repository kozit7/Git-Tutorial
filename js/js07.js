/**
 * 객체
 */

//window.alert("안녕")

// 객체 선언. 객체를 만들때 쓰는것 중괄호!{}
var product={
	// 제품명과 유형은 속성에 속한다.
	제품명 : "아이스 아메리카노",
	유형 : "커피",
	// 메소드(함수)
	eat : function(drink){
		alert(drink+"를 마십니다.")
	}
}
alert(product.제품명)
product.eat("라떼")