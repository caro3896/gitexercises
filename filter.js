"use strict";

const animals = [
    {
        name: "Mandu",
        type: "cat"
    },
    {
        name: "Mia",
        type: "cat"
    },
    {
        name: "Leeloo",
        type: "dog"
    },
    {
        name: "ScoobyDoo",
        type: "dog"
    },
    {
        name: "Pluto",
        type: "dog"
    }
    
];

function isCat(animal){
    if(animal.type === "cat"){
        return true;
    } 
    return false;
}

console.log("All animals:");
console.log(animals);

const cats = animals.filter(isCat);

console.log("The cats:")
console.log(cats);

const plutos = animals.filter(function(animal){
    if (animal.name === "Pluto"){
        return true;
    }
    return false;
})

console.log("Plutos:");
console.log(plutos);

const startsWithP = animals.filter(function(animal){
    if (animal.name.charAt(0) === "P"){
        return true;
    }
    return false;
});

console.log("Starts with P");
console.log(startsWithP);

console.log("Cats again");
console.log(
    animals.filter( animal => (animal.type === "cat")? true:false)
    );
