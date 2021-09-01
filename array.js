"use strict";
const people = ["Harry","Ron","Hermione"];
let result;

result = people.push("Draco");
console.log(result); // 4
console.log(people); // ["Harry","Ron","Hermione", "Draco"]

result = people.pop();
console.log(result); // Draco
console.log(people); // ["Harry","Ron","Hermione"]

result = people.push("Neville");
console.log(result); // 4
console.log(people); // ["Harry","Ron","Hermione", "Neville"]

result = people.push("Luna");
console.log(result); // 5
console.log(people); // ["Harry","Ron","Hermione", "Neville", "Luna"]

result = people.slice(0,3);
console.log(result); // ["Harry","Ron","Hermione"]
console.log(people); // ["Harry", "Ron", "Hermione", "Neville", "Luna"]

result = people.splice(1,0,"Cho");
console.log(result); // []
console.log(people); // ["Harry", "Cho", "Ron", "Hermione", "Neville", "Luna"]

people[1] = "Ginny";
console.log(people); // ["Harry", "Ginny", "Ron", "Hermione", "Neville", "Luna"]

result = people.push("Fred", "George");
console.log(result); // 8
console.log(people); // ["Harry", "Ginny", "Ron", "Hermione", "Neville", "Luna", "Fred", "George"]

result = people.indexOf("Fred");
console.log(result); // 6
console.log(people); // ["Harry", "Ginny", "Ron", "Hermione", "Neville", "Luna", "Fred", "George"]

result = people.splice(result,1);
console.log(result); // "Fred"
console.log(people); // ["Harry", "Ginny", "Ron", "Hermione", "Neville", "Luna", "George"]