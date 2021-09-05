"use strict";

const person1 = {
    firstName: "Peter",
    age: 29,
    student: false
};

const person2 = person1;

person2.firstName = "other Peter";

console.log(person1.firstName);

let pers1 = {
    firstName: "Peter",
    age: 29,
    student: false
}

let pers2 = {
    firstName: "not Peter",
    age: 28,
    student: false
}

let pers3 = pers1;

console.log("person 1:", pers1); // Peter
console.log("person 2:", pers2); // not Peter
console.log("person 3:", pers3); // Peter

pers3.firstName = "Changed";

console.log("person 1:", pers1); // Peter
console.log("person 2:", pers2); // not Peter
console.log("person 3:", pers3); // Peter