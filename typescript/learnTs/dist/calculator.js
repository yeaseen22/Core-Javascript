"use strict";
function add(a, b) {
    return a + b;
}
const substract = (a, b) => a - b;
const multipy = (a, b) => a * b;
function divide(a, b) {
    if (b == 0) {
        throw new Error(`cannot divide by zero`);
    }
    return a / b;
}
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
function calculate(operation, a, b = 1) {
    switch (operation) {
        case "+": add(a, b);
        case "-": substract(a, b);
        case "*": multipy(a, b);
        case "/": divide(a, b);
        case "^": power(a, b);
        default: throw new Error('invalid operation');
    }
}
calculate("+", 10);
