"use strict";

let isToggled = true;

document.querySelector("button").addEventListener("click", btn_click);

function btn_click(){
    // if (isToggled === true){
    //     isToggled = false;
    // } else {
    //     isToggled = true;
    // }
    isToggled = !isToggled;
    view(isToggled);
    console.log("Click:", isToggled);
}

function view(isItToggled){
    if (isToggled){
        document.querySelector("div").style.backgroundColor = "green";
    } else {
    document.querySelector("div").style.backgroundColor = "red";
        
    }

}