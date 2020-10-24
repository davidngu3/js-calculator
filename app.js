// global variables
let displayValue = "";
let num1 = "";
let num2 = "";
let result = 0;
let operator = null;

// calculator functions
// add
function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

// subtract
function subtract(num1, num2) {
    return num1 - num2;
}

// multiply
function multiply(num1, num2) {
    return num1 * num2;
}

// divide
function divide(num1, num2) {
    if (num2 == 0) {
        alert("Don't even think about it")
        return 404
    }
    return num1 / num2;
}

// operator function
function operate(operator, num1, num2) {
    return window[operator](num1, num2);
}

function enterDisplay(val) {
    if (val.length > 8) {
        display.innerText = "OVERFLOW";
        num1 = "";
        num2 = "";
        result = 0;
        operator = null;
        return;
    }

    if (val == '.') {
        display.innerText = '0.';
        return;
    }
    roundedVal = Math.round(val * Math.pow(10, 8)) / Math.pow(10, 8) // round to 8 decimal places
    if (val[val.length-1] == '.') roundedVal += '.';
    display.innerText = roundedVal;
}

function enterNumber(num) {
    if (result) {
        result = 0;
    }
    if (!operator) {
        num1 += num;
        displayValue = num1;
    }
    // when do we enter number 2? -> after operator
    if (operator) {
        num2 += num;
        displayValue = num2;
    }
    enterDisplay(displayValue);
}

function enterOperator(op) {
    if (!num1) {
        num1 = displayValue.toString();
    }

    if (num1 && num2) {
        calculateResult();
        num1 = result.toString();
        num2 = "";
    }
    operator = op;
}

function calculateResult() {
    if (!operator || (!num1 && !num2)) {
        return;
    }

    if (!num2) {
        num2 = displayValue == "" ? 0 : displayValue;
    }
    result = operate(operator, num1, num2);
    displayValue = result.toString();
    enterDisplay(displayValue);

    num1 = "";
    num2 = "";
    operator = null;
}

// operator button DOM 
var btnEquals = document.getElementById("btnEquals");
var btnMultiply = document.getElementById("btnMultiply");
var btnDivide = document.getElementById("btnDivide");
var btnSubtact = document.getElementById("btnSubtract");
var btnAdd = document.getElementById("btnAdd");

// operator button events 
btnEquals.addEventListener('click', () => {
    calculateResult();
})

btnMultiply.addEventListener('click', () => {
    enterOperator("multiply");
});

btnDivide.addEventListener('click', () => {
    enterOperator("divide");
});

btnAdd.addEventListener('click', () => {
    enterOperator("add");
});

btnSubtact.addEventListener('click', () => {
    enterOperator("subtract");
});

// number button DOM
let btnOne = document.getElementById("btn1");
let btnTwo = document.getElementById("btn2");
let btnThree = document.getElementById("btn3");
let btnFour = document.getElementById("btn4");
let btnFive = document.getElementById("btn5");
let btnSix = document.getElementById("btn6");
let btnSeven = document.getElementById("btn7");
let btnEight = document.getElementById("btn8");
let btnNine = document.getElementById("btn9");
let btnZero = document.getElementById("btn0");
let btnDec = document.getElementById("btnDec");
let btnNeg = document.getElementById("btnNeg");

// number button events
btnDec.addEventListener('click', () => {
    if (!displayValue.includes('.')) {
        enterNumber('.');
    }
});

btnNeg.addEventListener('click', () => {
    if (result) {
        num1 = result;
        num1 = (-parseFloat(num1)).toString();
        displayValue = num1;
        result = 0;
    }
    else if (!operator) {
        num1 = (-parseFloat(num1)).toString();
        displayValue = num1;
    }
    // when do we enter number 2? -> after operator
    else if (operator) {
        num2 = (-parseInt(num2)).toString();
        displayValue = num2;
    }
    enterDisplay(displayValue);
});

btnOne.addEventListener('click', () => {
    enterNumber('1');
});

btnTwo.addEventListener('click', () => {
    enterNumber('2');
});

btnThree.addEventListener('click', () => {
    enterNumber('3');
});

btnFour.addEventListener('click', () => {
    enterNumber('4');
});

btnFive.addEventListener('click', () => {
    enterNumber('5');
});

btnSix.addEventListener('click', () => {
    enterNumber('6');
});

btnSeven.addEventListener('click', () => {
    enterNumber('7');
});

btnEight.addEventListener('click', () => {
    enterNumber('8');
});

btnNine.addEventListener('click', () => {
    enterNumber('9');
});

btnZero.addEventListener('click', () => {
    enterNumber('0');
});

// misc DOM
let clearBtn = document.getElementById("btnClear");
let display = document.getElementById("calcDisplay");
let backspace = document.getElementById("btnBack");

// misc events
clearBtn.addEventListener('click', () => {
    num1 = "";
    num2 = "";
    result = 0;
    operator = null;
    enterDisplay("0");
})

backspace.addEventListener('click', () => {
    if (result) {
        num1 = result.toString();
        num1 = num1.substring(0, num1.length - 1);
        displayValue = num1;
        enterDisplay(num1);
        result = 0;
    }
    else if (!num2) {
        num1 = num1.substring(0, num1.length - 1);
        displayValue = num1;
        enterDisplay(num1);
    }
    else {
        num2 = num2.substring(0, num2.length - 1);
        displayValue = num2;
        enterDisplay(num2);
    }
    
})