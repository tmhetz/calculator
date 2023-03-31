let display = document.getElementById('calcScreen');
let operands = document.querySelectorAll('.operand');
let equals = document.getElementById('equals');
let clear = document.getElementById('clear');
let plusMinus = document.getElementById('plusMinus');

operands.forEach(item => {
    item.addEventListener('click', (event) => {
        if(!operatorSet) operatorSet = true;
        operator = event.target.innerText;
        updateDisplay();
    });
});

let operators = document.querySelectorAll(".operator");
operators.forEach(item => {
    item.addEventListener('click', (event) => {
        temp = event.target.innerText;
        // update operandOne or operandTwo
        updateOperands(temp);
        // update display
        updateDisplay();
    });
});

equals.addEventListener('click', () => {
    operandOne = Number(operandOne);
    operandTwo = Number(operandTwo);
    temp = operate(operandOne, operandTwo, operator);
    display.innerText = Math.round(temp*100)/100;
    operandOne = temp;
    resetNotOne();
});

clear.addEventListener('click', () => {
    totalReset();
    updateDisplay();
});

plusMinus.addEventListener('click', () => {
    if(!operatorSet){
        operandOne = operandOne * -1;
    } else {
        operandTwo = operandTwo * -1;
    }
    updateDisplay();
});

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

function resetNotOne(){
    operandTwo = "";
    operator = "";
    operatorSet = false;
}

function totalReset(){
    operandOne = "";
    operandTwo = "";
    operator = "";
    operatorSet = false;
}

let operandOne = "";
let operandTwo = "";
let operatorSet = false;
let operator = "";

function operate (operandOne, operandTwo, operator){
    if(operator === "+"){
        return add(operandOne, operandTwo);
    } else if(operator === "-"){
        return subtract(operandOne, operandTwo);
    } else if(operator === "x"){
        return multiply(operandOne, operandTwo);
    } else if(operator === "÷"){
        return divide(operandOne, operandTwo);
    }
}

function updateOperands(temp){
    if(!operatorSet){
        operandOne += temp;
    } else {
        operandTwo += temp;
    }
}

function updateDisplay(){
    if(operatorSet){
        display.innerText = operandOne + " " + operator + " " + operandTwo;
    } else {
        display.innerText = operandOne;
    }
}
