"use strict";

let firstNumber = document.querySelector("#firstnumber").value;
let secondNumber = document.querySelector("#secondnumber").value;
let operator = document.querySelector("#operator");
let operatorValue = operator.options[operator.selectedIndex].value;
let answer = document.querySelector("#results li");


window.addEventListener("DOMContentLoaded", settingUp);

function settingUp() {
console.log("settingUp");
document.querySelector("#calculate").addEventListener("click", readFirstNumber);
}


function readFirstNumber(){
console.log("First number:", firstNumber);
readSecondNumber();
}

function readSecondNumber() {
console.log("Second number:", secondNumber);
readOperator();
}

function readOperator(){
console.log("Operator:", operatorValue);
// calculatePlus();
if (operatorValue === "add")
    {
    calculatePlus();
} else if (operatorValue === 'sub') {
    calculateMinus();
} else if (operatorValue === 'mul') {
    calculateMultiply();
} else {
    calculateDivide();
}
}

function calculatePlus(){
let plus = parseInt(firstNumber)+parseInt(secondNumber);
answer.innerHTML = plus;
checkRounding();
}

function calculateMinus(){
    console.log("calculateMinus");
    checkRounding();
}

function calculateMultiply(){
    console.log("calculateMultiply");
    checkRounding();
}

function calculateDivide(){
    console.log("calculateDivide");
    checkRounding();
}

function checkRounding(){
    console.log("checkRounding");
    readDecimals();
}

function readDecimals(){
    console.log("readDecimals");
    roundResult();
}

function roundResult(){
    console.log("roundResult");
    writeResult();
}

function writeResult(){
    console.log("writeResult");
    appendResult();
}

function appendResult(){
    console.log("appendResult");
    scroll();
}

function scroll(){
    console.log("scroll");
}