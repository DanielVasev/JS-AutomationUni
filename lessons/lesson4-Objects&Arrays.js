//Objects

let customer = {
    firstName: "John",
    lastName: "Smith",
    car: ['volvo', "toyota", "tesla", "vw"]
}


console.log(customer.firstName) // first way of displaying data from object  known as Dot notation 
console.log(customer["firstName"])// different way by using square brackets known as bracket notation

//Hoe to change different valurs to the object properties 
customer.firstName = "Bluey"
console.log(customer.firstName)

customer["firstName"] = "Popeye"
console.log(customer.firstName)

console.log(`Our first customer is ${customer.firstName} ${customer.lastName}`)

//Arrays - list of items 
let cars = ['volvo', "toyota", "tesla", "vw"] // create a array 
console.log(cars[2]) //display array item 
console.log(`Our customer favourite car is ${customer.car[0]}`)

//changing value in array 
customer.car[2] = "MG";

console.log(`Our customer favourite car is ${customer.car[2]}`)
