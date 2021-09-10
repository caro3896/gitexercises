"use strict";

// dialog.closeButton.addEventListener("click", closeDialog);

// // THIS
// function closeDialog(){
//     dialog.classList.add("close-animation");
//     dialog.addEventListener("animationend", dialogClosed);
// }

// function dialogClosed(){
//     dialog.remove();
// }

// // Is the same ad THIS
// function closeDialog(){
//     dialog.classList.add("close-animation");
//     dialog.addEventListener("animationend", 
//                             function dialogClosed(){
//                                 dialog.remove(); // ANONYMOUS FUNCTION
//                                  });
// }


function someThing(param){
    console.log(param);
}

console.log("basic:");
someThing(10);

console.log("now with timeout");
setTimeout(someThing, 1000, 10);

// OR with an anonymous function (function within a function)
// Can be useful when the anonymous function (the function inside the function) is very simple

console.log("now with anonymous function ")
setTimeout(function(param){
    console.log(param)
}, 1000, 10);