function dis(val) {
    document.getElementById('result').value +=val;
}
function solve() {
    let x = document.getElementById('result').value;
    let y = eval(x)
    document.getElementById('result').value = y;
}
function mths(val) {
    let x = document.getElementById('result').value;
    let y = val(x)
    document.getElementById('result').value = y;
    
}
function clr() {
    document.getElementById('result').value = "";
}