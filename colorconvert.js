"use strict";

const colorWell = document.querySelector("#color_selector");

window.addEventListener("DOMContentLoaded", start)


function start(){
    console.log("Dom is loaded");
    colorWell.addEventListener("input", showColor);
}


function showColor(event){
    document.querySelector(".color").style.background = event.target.value;
    showHex(event);
}

function showHex(event){
    document.querySelector(".hex").innerHTML = event.target.value;
    let hex = getValueOf(event.target.value);
}

function getValueOf(hexNumber){
    let r = hexNumber.substring(1,3);
    let g = hexNumber.substring(3,5);
    let b = hexNumber.substring(5,8);
    calculateRGB(r, g, b);
}

// Calculate RGB value from HSL value
// ParseInt parses (analyserer) a string and returns an integer (helt tal) of the specified radix
function calculateRGB(red, green, blue){
    red = parseInt(red, 16); //the string is red, the hexnumber for the red color
    green = parseInt(green, 16); //the radix is 16, which is the radix for the hexadecimalsystem
    blue = parseInt(blue, 16);
    showRGB(red,green,blue);
}

// Showin the RGB value - writing output to HTML
function showRGB(R,G,B){
    document.querySelector(".rgb").innerHTML = `${R}, ${G}, ${B}`;
    calculateHSL(R,G,B);
}

// Calculate HSL values from RGB values - BLACK BOX - unknown code
function calculateHSL(r,g,b){
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

    showHSL(h, s, l);
}

function showHSL(hue, sat, lum){
    document.querySelector(".hsl").innerHTML = `${hue}, ${sat}%, ${lum}%`;
}