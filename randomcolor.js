"use strict";

window.addEventListener("DOMContentLoaded", randomBackground);

function randomBackground(){
    const rgb = randomColor();
    document.body.style.backgroundColor = rgbToCSS(rgb);
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


// const test = rgbToCSS(rgb);
// // console.log(rgb);
// console.log(test);

function rgbToCSS(rgbObject){
    const color = `rgb(${rgbObject.r},${rgbObject.g},${rgbObject.b})`;
    return color;
}

// const test = rgbToCSS(rgb);
// console.log(test);