"use strict";

const n1 = 1;
const n2 = 2;

const s1 = "1";
const s2 = "2";

console.log(n1 + n2); // 3 - number (addition)
console.log(s1 + s2); // 12 - string (concatenation)

console.log(n1 + s2); // 12 - string (concatenation)
console.log(s1 + n2); // 12 - string (concatenation)

console.log(""+1+0); // 10 - string
console.log(""-1+0); // -1 - number
console.log(true+false); // 1 - number
console.log(6/"3"); // 2 - number
console.log("2"*"3"); // 6 - number
console.log(4+5+"px"); // 9 - string
console.log("$"+4+5); // $45 - string
console.log("4"-2); // 2 - number
console.log("4px"-2); // NaN - not a number
console.log(7/0); // Infinity - number
console.log("-9"+5); // -95 - string
console.log("-9"-5); // -14 - number
console.log(null+1); // 1 - number
console.log(undefined+1); // NaN - not a number