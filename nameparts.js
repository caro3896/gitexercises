"use strict";
let name = "Caroline Ragnholm Juhl";

// First name
let firstName = name.substring(name.indexOf(" "), name.substring(name.lastIndexOf(" ")));
console.log(firstName);

// Middle name
let middleName = name.substring(name.indexOf(" ")+1, name.lastIndexOf(" "));
console.log(middleName);

// Last name 
let lastName = name.substring(name.lastIndexOf(" ")+1);
console.log(lastName);

