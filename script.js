function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

let operandOne;
let operandTwo;
let operator;

function operate (operandOne, operandTwo, operator){
    if(operator === "+"){
        return add(operandOne, operandTwo);
    } else if(operator === "-"){
        return subtract(operandOne, operandTwo);
    } else if(operator === "*"){
        return multiply(operandOne, operandTwo);
    } else if(operator === "/"){
        return divide(operandOne, operandTwo);
    }
}
