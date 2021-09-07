"use strict";

function greeting(firstName){
    return `Hello ${firstName}`;
}

const result = greeting("any name");
const txt = `Greeting is ${greeting("a name")}`;
console.log(result);
console.log(txt);

