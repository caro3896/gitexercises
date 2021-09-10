"use strict";

window.addEventListener("DOMContentLoaded", getColorInput);

// Listen for color input
function getColorInput(){
    document.querySelector("#color_selector").addEventListener("input", colorValue);
}

// Delegator for showing input color and converting the colorformat
function colorValue(event){
    const hexValue = getHex(event.target.value);
    const rgbObject = hexToRGB(hexValue);
    const hslStr = rgbToHsl(rgbObject.r,rgbObject.g,rgbObject.b);
    showUserColor(event);
    getHarmony();
}

// Get the hexvalue of the input
function getHex(hex){
    return hex;
}

// Convert the hexvalue to rgb object
function hexToRGB(hexStr){
    const r = parseInt(hexStr.substring(1,3),16);
    const g = parseInt(hexStr.substring(3,5),16);
    const b = parseInt(hexStr.substring(5,8),16);
    return {r,g,b};
}

// Convert the rgb object to an hsl string
function rgbToHsl(r,g,b){
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

function getHarmony(){
   const selectedHarmony = document.querySelector("input[name=harmony]:checked").value;
   if (selectedHarmony === "analogus") {
       calculateAnalogus();
   } else if (selectedHarmony === "monochromatic"){
       calculateMonochromatic();
   } else if (selectedHarmony === "triad"){
        calculateTriad();
   } else if (selectedHarmony == "complementary"){
       calculateComplementary();
   } else if (selectedHarmony === "compound"){
       calculateCompound();
   } else {
        calculateShades();
   }
}

function calculateAnalogus(){
    console.log("analog");
}

function calculateMonochromatic(){
    console.log("mono");
}

function calculateTriad(){
    console.log("triad");
}

function calculateComplementary(){
    console.log("triad");
}

function calculateCompound(){
    console.log("compound");
}

function calculateShades(){
    console.log("Shades");
}

// Show the color and the different values for the color input
function showUserColor(e){
    document.querySelector(".color3").style.background = e.target.value;
    document.querySelector(".hex3").innerHTML = e.target.value;
    // document.querySelector(".rgb3").innerHTML = hexToRGB(e.target.value);
    // document.querySelector(".hsl3").innerHTML = e.target.value;
}

