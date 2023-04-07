let display = document.getElementById('calcScreen');
let operands = document.querySelectorAll('.operand');
let equals = document.getElementById('equals');
let clear = document.getElementById('clear');
let plusMinus = document.getElementById('plusMinus');
let operators = document.querySelectorAll(".operator");
let dot = document.getElementById('dot');
let percent = document.getElementById('percent');

document.addEventListener('keydown', (event) =>{
    console.log(event.key);
    if(event.key === '=') equals.click();
    if(isNaN(event.key)) return;
    updateOperands(event.key);
    updateDisplay();
}, false);

operators.forEach(item => {
    item.addEventListener('click', (event) => {
        if(!operatorSet) {
            operatorSet = true;
            operator = event.target.innerText;
            updateDisplay();
        } else {
            equals.click();
            operatorSet = true;
            operator = event.target.innerText;
            updateDisplay();
        }
    });
});

operands.forEach(item => {
    item.addEventListener('click', (event) => {
        temp = event.target.innerText;
        // update operandOne or operandTwo
        updateOperands(temp);
        // update display
        updateDisplay();
    });
});

equals.addEventListener('click', () => {
    if(!operandTwo) return;
    if(zeroCheck()) {
        totalReset();
        return;
    }
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

dot.addEventListener('click', (event) => {
    temp = event.target.innerText;
    updateOperands(temp);
    updateDisplay();
});

percent.addEventListener('click', () => {
    if(operatorSet){
        operandTwo = Number(operandTwo)/100;
        updateDisplay();
    } else {
        operandOne = Number(operandOne)/100;
        updateDisplay();
    }
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
        if(isDot(temp) && containsDot(operandOne)) return;
        operandOne += temp;
    } else {
        if(isDot(temp) && containsDot(operandTwo)) return;
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

function zeroCheck(){
    if(operandTwo === "0" && operator === "÷"){
        display.innerText = "can't do that, sorry!";
        return true;
    }
    return false;
}

function isDot(string){
    if(string === ".") return true;

    return false;
}

function containsDot(string){
    if(string.includes(".")){
        return true;
    }
    return false;
}

function handleFirstTab(e) {
    if(e.keyCode === 9){
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
        window.addEventListener('mousedown', handleMouseDown);
    }
}

function handleMouseDown(e) {
    document.body.classList.remove('user-is-tabbing');
    window.removeEventListener('mousedown', handleMouseDown);
    window.addEventListener('keydown', handleFirstTab);
}

window.addEventListener('keydown', handleFirstTab);


