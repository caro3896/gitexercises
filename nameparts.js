"use strict";

// getNameParts("Caroline Juhl");

// function getNameParts(fullname){
//     // First name
//     let firstName = fullname.substring(fullname.indexOf(" "), fullname.substring(fullname.lastIndexOf(" ")));
//     // console.log(firstName);

// // Middle name
//     let middleName;
//     if (fullname.length > 2){
//         middleName = fullname.substring(fullname.indexOf(" ")+1, fullname.lastIndexOf(" "));
//     } else {
//         middleName = undefined;
//     }
    
//     // console.log(middleName);

// // Last name 
//     let lastName = fullname.substring(fullname.lastIndexOf(" ")+1);
//     // console.log(lastName);
// }

// fullName("Juhl", "Caroline");

// function fullName(lastName, firstName, middleName){
//     if (middleName == undefined){
//         console.log(`${firstName} ${lastName}`);
//     } else {
//         console.log(`${firstName} ${middleName} ${lastName}`);
//     }
// }


// With return

// function fullName(lastName, firstName, middleName){
//     if (middleName == undefined){
//         return `${firstName} ${lastName}`;
//     } 
//     return `${firstName} ${middleName} ${lastName}`;
// }

// let lastName = "Juhl", firstName = "Caroline", middleName = "Ragnholm";
// const full = fullName(lastName, firstName, middleName);
// console.log(full);


// With multiple return values and capitalized names

function getNameParts(fullname){
    // First name
    let firstName = capitalize(fullname.substring(fullname.indexOf(" "), fullname.substring(fullname.lastIndexOf(" "))));
    // Middle name
    let middleName;
    middleName = fullname.split(" ");
    if (middleName.length > 2){
        middleName = middleName[1].toString();
        middleName = capitalize(fullname.substring(fullname.indexOf(" ")+1, fullname.lastIndexOf(" ")));
    } else{
        middleName = undefined;
    }
    // Last name 
    let lastName = capitalize(fullname.substring(fullname.lastIndexOf(" ")+1));
    
    return {firstName, middleName, lastName};
    
}

const fullname = "caroline ragnholm juhl";
console.log(fullname);
const getNames = getNameParts(fullname);
console.log(getNames);

// capitalization

function capitalize(name){
    const result = name[0].toUpperCase() + name.substring(1).toLowerCase();
    return result;
}

