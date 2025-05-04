function calculate(){
    var num = parseFloat(document.getElementById("num").value);
    var answer = num * 100000;
    document.getElementById("result").innerText = num + " Kilometers is: " + answer + "cm";
}