let display = document.getElementById('calcScreen');

let operators = document.querySelectorAll(".operator");
operators.forEach(item => {
    item.addEventListener('click', (event) => {
        temp = event.target.innerText;
        // update operandOne or operandTwo
        updateOperands(temp);
        console.log(operandOne);
        console.log(operandTwo);
        // update display
        updateDisplay();

    });
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

let operandOne = "";
let operandTwo = "";
let operatorSet = false;
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

function updateOperands(temp){
    if(!operatorSet){
        operandOne += temp;
    } else {
        operandTwo += temp;
    }
}

function updateDisplay(){
    display.innerText = operandOne;
}
