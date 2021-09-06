"use strict";

getNameParts("Caroline Juhl");

function getNameParts(fullname){
    // First name
    let firstName = fullname.substring(fullname.indexOf(" "), fullname.substring(fullname.lastIndexOf(" ")));
    console.log(firstName);

// Middle name
    let middleName;
    if (fullname.length > 2){
        middleName = fullname.substring(fullname.indexOf(" ")+1, fullname.lastIndexOf(" "));
    } else {
        middleName = undefined;
    }
    
    console.log(middleName);

// Last name 
    let lastName = fullname.substring(fullname.lastIndexOf(" ")+1);
    console.log(lastName);
}




