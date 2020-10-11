// calculator functions
// add
function add(num1, num2) {
    return num1 + num2;
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
    return num1 / num2;
}

// operator function
function operate(operator, num1, num2) {
    return operator(num1, num2);
}

var displayValue = "";

function enterDisplay(val) {
    var display = document.getElementById("calcDisplay");
    display.innerText = val;
}


let num1 = "";
let num2 = "";
let result = 0;
let operator = null;

function enterNumber(num) {
    if (!operator) {
        num1 += num;
    }
    // when do we enter number 2? -> after operator
    if (operator) {
        num2 += num;
    }

}

var btnMultiply = document.getElementById("btnMultiply");
var btnDivide = document.getElementById("btnDivide");
var btnSubtact = document.getElementById("btnSubtract");
var btnAdd = document.getElementById("btnAdd");

var btnEquals = document.getElementById("btnEquals");

btnEquals.addEventListener(() => {
    operate(operator, num1, num2);
})

btnMultiply.addEventListener(() => {
    operator = "multiply";
});

btnDivide.addEventListener(() => {
    operator = "divide";
});

btnAdd.addEventListener(() => {
    operator = "add";
});

btnSubtact.addEventListener(() => {
    operator = "subtact";
});

btnOne.addEventListener(() => {
    enterNumber('1');
});

btnTwo.addEventListener(() => {
    enterNumber('2');
});

btnThree.addEventListener(() => {
    enterNumber('3');
});

btnFour.addEventListener(() => {
    enterNumber('4');
});

btnFive.addEventListener(() => {
    enterNumber('5');
});

btnSix.addEventListener(() => {
    enterNumber('6');
});

btnSeven.addEventListener(() => {
    enterNumber('7');
});

btnEight.addEventListener(() => {
    enterNumber('8');
});

btnNine.addEventListener(() => {
    enterNumber('9');
});

btnZero.addEventListener(() => {
    enterNumber('0');
});

