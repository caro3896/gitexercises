"use strict";

function capitalize(name){
    const result = name[0].toUpperCase() + name.substring(1).toLowerCase();
    return result;
}

const name = "carOLINe";
const cap = capitalize(name);
console.log(cap);