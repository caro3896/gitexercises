"use strict";

let firstNumber;
let secondNumber;
let operator;
let results = document.querySelector("#results");
let answer;
let decimals;
let rounded;

window.addEventListener("DOMContentLoaded", settingUp);

function settingUp() {
    console.log("settingUp");
    document.querySelector("#calculate").addEventListener("click", readFirstNumber);
}


function readFirstNumber(){
    firstNumber = parseFloat(document.querySelector("#firstnumber").value);
    console.log("First number:", firstNumber);
    readSecondNumber();
}

function readSecondNumber() {
    secondNumber = parseFloat(document.querySelector("#secondnumber").value);
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
    answer = firstNumber+secondNumber;
    console.log("Plus: ", answer);
    checkRounding();
}

function calculateMinus(){
    answer = firstNumber-secondNumber;
    console.log("Minus: ", answer);
    checkRounding();
}

function calculateMultiply(){
    answer = firstNumber*secondNumber;
    console.log("Multiply: ", answer);
    checkRounding();
}

function calculateDivide(){
    answer = firstNumber/secondNumber;
    console.log("Divide: ", answer);
    checkRounding();
}

function checkRounding(){
    console.log("checkRounding");
    if (document.querySelector("#doround").checked) {
        readDecimals();
    } else {
        
        writeResult();
    } 
}

function readDecimals(){
    console.log("readDecimals");
    decimals = document.querySelector("#decimals").value;
    console.log("Decimaler:", decimals);
    rounded = answer.toFixed(decimals);
    console.log(rounded);
    roundResult();
}

function roundResult(){
    console.log("roundResult");
    answer = rounded;
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