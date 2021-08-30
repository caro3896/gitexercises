"use strict";

const name = "Caroline";
const animal = "cat";
const animalName = "Loui";

console.log(`My name is ${name}.
I have a ${animal} called ${animalName}.`);


const len = name.length;

console.log(`${name} is ${len} characters long`);

const letter = name[0];

console.log(`The first letter of ${name} is ${letter}`);

const name1 = "Albus Percival Wulfric Brian Dumbledore";

const total = name1.length;

const letter2 = name1[2];
const letter6 = name1[6];

console.log(`The total number of characters is ${total}`);

console.log(`The second character is ${letter2}`);
console.log(`The sixth character is ${letter6}`);

const str1 = "  There is    space here \n  ";
const str2 = str1.trim();

console.log(str2);

const fullName ="Albus Percival Wulfric Brian Dumbledore";

const firstName = fullName.substring(0,5);
console.log(`_${firstName}_`)

const lastName = fullName.substring(29);
console.log(`_${lastName}_`)

const Wulfric1 = fullName.substring(15,22);
console.log(`_${Wulfric1}_`)

const Wulfric2 = fullName.substring(14,23);
console.log(`_${Wulfric2}_`)

const ian = fullName.substring(25,28);
console.log(`_${ian}_`)

const bus = fullName.substring(2,5);
console.log(`_${bus}_`)