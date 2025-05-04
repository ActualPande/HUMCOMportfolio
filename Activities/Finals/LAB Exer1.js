function calculateSum() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 + num2;
    document.getElementById("Result").innerText = "SUM: " + sum;
}
function calculateDiff() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var diff = num1 - num2;
    document.getElementById("Result").innerText = "DIFFERENCE: " + diff;
}
function calculateProduct() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var pro = num1 * num2;
    document.getElementById("Result").innerText = "PRODUCT: " + pro;
}
function calculateQuotient() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var quo = num1 / num2;
    document.getElementById("Result").innerText = "QUOTIENT: " + quo;
}