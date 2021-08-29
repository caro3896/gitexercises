"use strict";

let firstNumber;
let secondNumber;
let operator;
let results = document.querySelector("#results");
let answer;




window.addEventListener("DOMContentLoaded", settingUp);

function settingUp() {
console.log("settingUp");
document.querySelector("#calculate").addEventListener("click", readFirstNumber);
}


function readFirstNumber(){
firstNumber = (document.querySelector("#firstnumber").value);
console.log("First number:", firstNumber);
readSecondNumber();
}

function readSecondNumber() {
secondNumber = document.querySelector("#secondnumber").value;
console.log("Second number:", secondNumber);
readOperator();
}

function readOperator(){
operator = document.querySelector("#operator").value;
console.log("Operator:", operator);
if (operator === 'add') {
    calculatePlus();
} else if (operator === 'sub') {
    calculateMinus();
} else if (operator === 'mul') {
    calculateMultiply();
} else {
    calculateDivide();
}
}

function calculatePlus(){ 
    answer = parseInt(firstNumber)+parseInt(secondNumber);
    console.log("Plus: ", answer);
    checkRounding();
}

function calculateMinus(){
    answer = parseInt(firstNumber)-parseInt(secondNumber);
    console.log("Minus: ", answer);
    checkRounding();
}

function calculateMultiply(){
    answer = parseInt(firstNumber)*parseInt(secondNumber);
    console.log("Multiply: ", answer);
    checkRounding();
}

function calculateDivide(){
    answer = parseInt(firstNumber)/parseInt(secondNumber);
    console.log("Divide: ", answer);
    checkRounding();
}

function checkRounding(){
    console.log("checkRounding");
    if (document.querySelector("#doround").checked = true) {
        readDecimals();
    } else {
        writeResult();
    }
    
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
    firstNumber = answer;
    document.querySelector("#firstnumber").value = answer;
    console.log("Result:", answer);
    appendResult();

}

function appendResult(){
    console.log("appendResult");
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(answer));
    results.appendChild(li);
    scroll();
}

function scroll(){
    console.log("scroll");
    results.scrollTo(0,10000);
}