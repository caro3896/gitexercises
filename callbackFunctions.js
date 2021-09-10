"use strict";

// function greeting(firstName){
//     return `Hello ${firstName}`;
// }

// const sayHi = greeting;

// console.log(sayHi("harry")); // Hello harry
// console.log(greeting("Caro")); // Hello Caro

// function extendedGreeting(name){
//     console.log("Hi " + name);
// }

// setTimeout(extendedGreeting, 1000, "David");


// function hireOrFire(func, param){
//     func(param);
// }

// function setTimeOut(func, time, param){
//     //wait time
//     func(param);
// }

//__________________________

// const person3 = {
//     firstName: "Harry",
//     lastName: "Potter",
//     hired: false
// }

// const person4 = {
//     firstName: "Fred",
//     lastName: "Weasley",
//     hired: false
// }

// console.log("In the beginning");
// console.log(person3);
// console.log(person4);

// function hire(person){
//     person.hired = true;
// }

// function fire(person){
//     person.hired = false;
// }

// function hireOrFire(action, person){
//     action(person);
// }

// hireOrFire(hire,person4);
// hireOrFire(hire,person3);

// console.log("After");
// console.log(person3);
// console.log(person4);

// Example loading JSON with callnack functions

init();

function init() {
    console.log("Init");
    loadJSON("https://petlatkea.dk/2021/hogwarts/students.json", prepareData);
}

async function loadJSON(url, callback){
    const respons = await fetch(url);
    const jsonData = await respons.json();

    callback(jsonData);
}

function prepareData(data){
    console.log("prepare data");

    console.table(data);
}