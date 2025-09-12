
//Print age function
function printAge(age) {
    console.log(age)
}

function minus18(age) {
    let result = age - 18
    console.log(result)
}

class CustomerDetails {
    /**
     * This method will print the first name!
     * @param {String} firstName 
     */
    printFirstName(firstName) {
        console.log(firstName)
    }

    /**
     * This methid will print the last name.
     * @param {String} lastName 
     */
    printLastName(lastName) {
        console.log(lastName)
    }
}
// Create a constructor
let customerDetails = new CustomerDetails()



// Exporting all of the functions an classes in the file / making them visible for the other files 
export { printAge, minus18, customerDetails }