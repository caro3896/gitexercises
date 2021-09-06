"use strict";

let person1 = {
    firstname: "Peter",
    age: 29,
    student: false
};

console.log(person1.lastName);

person1.lastName = "Lind";
console.log(person1.lastName);
console.log(person1);

person1.lastName = undefined;
console.log(person1.lastName);
console.log(person1.middleName);

delete person1.lastName
console.log(person1.lastName);
console.log(person1);

const person2 = {
    firstname: "Peter",
    age: 29,
    student: false
};

person2.age++;

console.log(person2);

const person3 = {
    firstname: "Caroline",
    age: 23,
    student: true
};

person2 = person3;