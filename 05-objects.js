//This is object
const cookie = {

    //Creating properties in the object
    name: "Chocolate Chip",
    isGlutenFree: false,

}

console.log(cookie);

//Accesing properties in the onject 

console.log(cookie.name);
console.log(cookie.isGlutenFree);

// Changing object property state 

cookie.name = "Special cookie!"

console.log(cookie.name);

//Using special symbol in the propertie name 

const house = {

    name: "Amalia",
    size: 12,
    colour: "Red",
    //Special symbol name 

    "@houseProperty": "amfas"

}

console.log(house.name);

// we need to use square brakets to display this propertie
console.log(house["@houseProperty"]);