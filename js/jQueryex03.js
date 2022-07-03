$(document).on('keyup', '#textarea01', function(e){
    var textarea01 = $(this).val();
    $('#cntSPAN').text(getBytes(textarea01));
});

function getBytes(str){
    var cnt = 0;
    for(var i = 0; i<str.length;i++) {
        cnt += (str.charCodeAt(i) >128) ? 2: 1;
    }
    return cnt;
}