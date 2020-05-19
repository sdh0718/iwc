$(function(){
    $('#footer_nat').change(function(){
        var tmp=$(this).val();
        console.log(tmp)
        if(tmp="ko"){
            $('#phone').text('+82 2 3440 5876');
        }else if(tmp=="us"){
            $('#phone').text('+1-800-432-9330');
        }else if(tmp=="ch"){
            $('#phone').text('+86 400 0642 999');
        }else if(tmp=="pr"){
            $('#phone').text('+33 1 58 18 14 98');
        }else if(tmp=="hk"){
            $('#phone').text('+852 8200 3001');
        }
    });
});