
// function getCheckboxValue(){
//     const query = 'input[name="sports"]:checked';
//     const selectedEls =
//         document.querySelectorAll(query);

//     let result = "";
//     selectedEls.forEach((el) => {
//         result += el.value + ' ';
//     });
//       document.getElementById('result').innerText
//       = result;
// }

$(document).ready(function(){
  
    // 버튼태그  click이벤트 
    $("button").on("click",function(){

    // 속성선택자 : "태그명[속성='값']"->사용자가 어떠한 항목을 체크했는지 여부를 파악 
   $("input[type='checkbox']").each(function(){
        console.log($(this).is("checked"));
    })
 

    
    })

})


//체크박스는 배열에 저장해야한다.그래야 중복 출력가능