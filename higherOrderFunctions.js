"use strict";

const people = ["Harry", "Ron", "Hermione", "Neville"];

function sayHello(people){
    console.log(`Hello ${people}`);
}

console.log("Basic, say hello")
people.forEach(sayHello);

function testParams(a,b,c,d){
    console.log(`a:${a}, b:${b}, c:${c}, d:${d}`)
}

console.log("Test params")
people.forEach(testParams);

// Console logs this
    // a:Harry, b:0, c:Harry,Ron,Hermione,Neville, d:undefined 
    // a:Ron, b:1, c:Harry,Ron,Hermione,Neville, d:undefined 
    // a:Hermione, b:2, c:Harry,Ron,Hermione,Neville, d:undefined 
    // a:Neville, b:3, c:Harry,Ron,Hermione,Neville, d:undefined

// BECAUSE
    // a = the element, b = the index, c = the whole array, c = doesn't exist
    // forEach((element, index, array)

function testParamsAndTryingToMakeErrors(person, i, arr){
    console.log(`${person} and ${arr[i + 1]} are enemies`)
}

console.log()
people.forEach(testParamsAndTryingToMakeErrors);