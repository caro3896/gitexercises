"use strict";

let firstNumber = document.querySelector("#firstnumber");
let secondNumber = document.querySelector("#secondnumber");

window.addEventListener("DOMContentLoaded", settingUp);

function settingUp() {
console.log("settingUp");
document.querySelector("#calculate").addEventListener("click", clickCalculate);

// document.querySelector("#firstnumber").addEventListener("change", clickCalculate);
// document.querySelector("#secondnumber").addEventListener("change", clickCalculate);
}

function clickCalculate(){
console.log("clickCalculate", firstNumber.value , secondNumber.value);
if (firstNumber === value && secondNumber === value){
    console.log("Der er tal");
} else {
    console.log("Der mangler tal")
}
document.querySelector("#calculate").addEventListener("click", readFirstNumber);
}

function readFirstNumber(){
console.log("readFirstNumber");
readSecondNumber();
}

function readSecondNumber() {
console.log("readSecondNumber");
readOperator();
}

function readOperator(){
console.log("readOperator");
calculatePlus();
}

function calculatePlus(){
console.log("calculatePlus");
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