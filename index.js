1 + 80; //=> 81
60 - 40; //=> 20
2 * 3.4; //=> 6.8
5.0 / 2.5; //=> 2

function add(a, b) {
    return a + b;
}
function subtract(a ,b) {
    return a - b;
} 
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
} 
function increment(n) {
    return (n += 1)
}
function decrement(n) {
    return(n -= 1) 
}

function makeInt(string){
    return parseInt(string, 10);
}

function preserveDecimal(string) {
    return parseFloat(string, 10);
}