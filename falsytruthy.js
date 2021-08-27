"use strict";

const value = " ";

if (value){
    console.log("Value is truthy");
} else {
    console.log("Value is falsy");
}

// true - true
// false - false
// null - false
// undefined - false 
// 0 - false
// "0" - true
// "" - false
// "true" - true
// "false" - true
// 2 - true
// {} - true
// [] - true
// NaN - false
// Infinity - true
// 3.14 - true
// -0 - false
// " " - true