"use strict";

window.addEventListener("DOMContentLoaded", randomBackground);

function randomBackground(){
    randomColor();
    rgbToCSS(rgb);
}

function randomColor(){
    let r = Math.floor(Math.random()*255);
    console.log(r);
    let g = Math.floor(Math.random()*255);
    console.log(g);
    let b = Math.floor(Math.random()*255);
    console.log(b);
    return {r,g,b};
}

const rgb = randomColor();
console.log(rgb);

function rgbToCSS(rgb){
    rgb = rgb.toString();
    console.log(rgb);
    return rgb;
 
}