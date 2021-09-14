"use strict";

function addNumbersAndTwo(num1, num2){
    let num3 = 2;
    return num1 + num2 + num3;
}

console.log(addNumbersAndTwo(1,2));

function createAddingFunction(num1, num2){
    let num3 = 2;
    return function(){
        return num1 + num2 + num3;
    };
}

let addingFunction = createAddingFunction(1,2);

console.log(addingFunction());