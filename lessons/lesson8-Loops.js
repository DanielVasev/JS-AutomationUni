// Loops - when you need to repead same code multiply times

// FOR loops
/*
for (let i = 0; i < 5; i++) {
    console.log("Hello Daniel " + i)
}

// Print items from arrays in the console by using loop
let cars = ["Volvo", "Lada", "Tesla", "MG", "Tata", "Merc"]

for (i = 0; i < 5; i++) {
    console.log("My list of cars is " + cars[i])
}

// For of loop

for (let car of cars) {
    console.log(car)
    if (car == "Lada") {
        break
    }
}
 */

// FOR each LOOP 

let cars = ["Volvo", "Lada", "Tesla", "MG", "Tata", "Merc"]

cars.forEach(car => {
    console.log(car)
})