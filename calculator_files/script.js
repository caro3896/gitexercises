"use strict";

window.addEventListener("DOMContentLoaded", settingUp());

function settingUp() {
console.log("settingUp");
clickCalculate();
}

function clickCalculate(){
console.log("clickCalculate");
readFirstNumber();
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