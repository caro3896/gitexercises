"use strict";

let maxNumberOfIterations;
let iterator;

init();

function init(){
    maxNumberOfIterations = 11;
    iterator = 0;
    loop();
}

function loop(){
    console.log("Loop", iterator);
    iterator++;

    if (iterator < maxNumberOfIterations){
        setTimeout(loop,2000);
      
    } else {

    }
}