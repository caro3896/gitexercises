"use strict";

capitalize("caROlINe");

function capitalize(str){
    let newStr = str[0].toUpperCase() + str.substring(1).toLowerCase();
    console.log(newStr);
}



