function getResult() {
    var num = document.getElementById('num').value;
    var count = 0;
    var i;
    if(num == 0){
        document.getElementById('result1').innerHTML = "Number is ZERO";
    } else {
        if (num % 2 == 0) {
            document.getElementById('result1').innerHTML = "EVEN";
        } else {
            document.getElementById('result1').innerHTML = "ODD";
        }
    }

    if (num <= 1) {
        document.getElementById('result2').innerHTML = "INVALID";
    }else{
        for (i = 0; i <= num; i++){
            if (num % 2 == 0) {
                count++
            }
        }
        if (count <= 2){
            document.getElementById('result2').innerHTML = "PRIME";
        } else {
            document.getElementById('result2').innerHTML = "COMPOSITE";
        }
    }
    
}