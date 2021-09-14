"use strict";

const people = ["Harry", "Ron", "Hermione", "Neville"]

people.sort();

console.log(people); // Harry, Hermione, Neville, Ron

const number = [1,45,32,1372];

console.log(number);

const animals = [
    {
        name: "Mandu",
        type: "cat"
    },
    {
        name: "Mia",
        type: "cat"
    },
    {
        name: "Leelo",
        type: "dog"
    },
    {
        name: "ScoobyDoo",
        type: "dog"
    },
];

console.log(animals);

function compareName(a,b){
    if (a.name < b.name){
        return -1;
    } else {
        return 1;
    }
}

console.log(animals.sort(compareName));


