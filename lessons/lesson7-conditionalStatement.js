//Conditional Statement

// If hour is between 6 and 12 we have to print "Good Morning"
// if hour is between 12 and 18 "Good Afternoon"
// Otherwise: Good evening 

var hour = 11

if (hour >= 6 && hour < 12) {
    console.log("Good Morning")
} else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon")
} else {
    console.log("Good evening!")
}