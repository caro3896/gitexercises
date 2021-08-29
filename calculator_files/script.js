"use strict";

let firstNumber = document.querySelector("#firstnumber").value; // 
let secondNumber = document.querySelector("#secondnumber").value;
let operator = document.querySelector("#operator").value;
let results = document.querySelector("#results");
let li = document.createElement("LI");




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
    let plus = parseInt(firstNumber)+parseInt(secondNumber);
    console.log("Plus: ", plus);
    li.appendChild(document.createTextNode(plus));
    results.appendChild(li);
    checkRounding();
}

function calculateMinus(){
    let minus = parseInt(firstNumber)-parseInt(secondNumber);
    console.log("Minus: ", minus);
    li.appendChild(document.createTextNode(minus));
    results.appendChild(li);
    checkRounding();
}

function calculateMultiply(){
    let multi = parseInt(firstNumber)*parseInt(secondNumber);
    console.log("Multiply: ", multi);
    li.appendChild(document.createTextNode(multi));
    results.appendChild(li);
    checkRounding();
}

function calculateDivide(){
    let div = parseInt(firstNumber)/parseInt(secondNumber);
    console.log("Divide: ", div);
    li.appendChild(document.createTextNode(multi));
    results.appendChild(li);
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