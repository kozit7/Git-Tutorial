$(document).ready(function(){


//  quantity 변수에 수량을 저장
$("#plus").on("click",function(){
    //갯수를 입력하는 텍스트상자를 선택한다.
    //+버튼을 선택한 후 더하기버튼을 클릭하면
    var quantity = Number($("#quantity").val())
    // 갯수를 1씩 증가시켜서 갯수입력란에 세팅한다.
    $("#quantity").val(quantity+1);
})



//-버튼을 선택한 후 빼기버튼을 클릭하면
$("#minus").on("click",function(){
    //갯수를 입력하는 텍스트상자를 선택한다.
    //-버튼을 선택한 후 더하기버튼을 클릭하면
    var quantity = Number($("#quantity").val())
// 갯수를 1씩 감소시켜서 갯수입력란에 세팅한다.
    if(quantity==1){
    // quantity변수에 저장되어 있는 값이 1이면
    $("#quantity").val(1);
} else {
    // 그렇지 않으면 갯수를 입력하는 텍스트상자에 1을 세팅해라.
    $("#quantity").val(quantity-1);
}  
    })
})



/*val()
1. 매개변수가 없는 경우 html의값을 javascript로 가져온다.
ex) $("#quantity").val() = jQuery
document.getElementById("quantity").value; = javascript

2. 매개변수가 한개 있는경우 javascript에서 얻어진값을 html로 가져온다.
ex) $("#quantity").val(20) =jQuery
document.getElementById("quantity").value=20; = javascript
*/