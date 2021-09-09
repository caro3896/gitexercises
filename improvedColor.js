"use strict";

const colorWheel = document.querySelector("#color_selector");

window.addEventListener("DOMContentLoaded", getColor)

// Listen for color input 
function getColor(){
    console.log("Dom is loaded");
    colorWheel.addEventListener("input", showColor);
}

// Call functions to show color i various formats - delegator function
function showColor(event){
    const rgbObject = HexToRgb(event.target.value);
    document.querySelector(".rgb").innerHTML = showRGB(rgbObject);
    const cssColor = rgbToCSS(rgbObject);
    document.querySelector(".color").style.background = showColorBox(cssColor);
    
    const hexStr = rgbToHex(rgbObject);
    document.querySelector(".hex").innerHTML = showHex(hexStr);
   
    const hslStr = RgbToHsl(rgbObject.r,rgbObject.g,rgbObject.b);
    document.querySelector(".hsl").innerHTML = showHSL(hslStr);

}

// Show color in various formats

function showColorBox(css){
    return css;
}

function showHex(hexValue){
    return hexValue;
}

function showRGB(object){
    return `(${object.r}, ${object.g}, ${object.b})`;
}

function showHSL(hslValue){
    return `${hslValue.h}, ${hslValue.s}%, ${hslValue.l}%`;
}

// Calculations and conversions

function HexToRgb(hex){
    const r = parseInt(hex.substring(1,3),16);
    const g = parseInt(hex.substring(3,5),16);
    const b = parseInt(hex.substring(5,8),16);
    return {r,g,b};
}

function RgbToHsl(r, g, b){
    r /= 255;
    g /= 255;
    b /= 255;
 
    let h, s, l;
 
    const min = Math.min(r,g,b);
    const max = Math.max(r,g,b);
  
    if( max === min ) {
        h = 0;
    } else if (max === r) {
        h = 60 * (0 + (g - b) / (max - min) );
    } else if (max === g) {
        h = 60 * (2 + (b - r) / (max - min) );
    } else if (max === b) {
        h = 60 * (4 + (r - g) / (max - min) );
    }
  
    if (h < 0) {h = h + 360; }
  
    l = (min + max) / 2;
  
    if (max === 0 || min === 1 ) {
        s = 0;
    } else {
        s = (max - l) / ( Math.min(l,1-l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    // Rounding to even numbers
    h = Math.round(h);
    s = Math.round(s);
    l = Math.round(l);

    return {h, s, l};
}

function rgbToHex(rgb){
    let r = rgb.r.toString(16);
    let g = rgb.g.toString(16);
    let b = rgb.b.toString(16);

    if (r.length == 1)
    r = "0" + r;
    if (g.length == 1)
    g = "0" + g;
    if (g.length == 1)
    b = "0" + b;

    return "#" + r + g + b;
}

function rgbToCSS(rgbValue){
    return `rgb(${rgbValue.r}, ${rgbValue.g}, ${rgbValue.b})`;
}