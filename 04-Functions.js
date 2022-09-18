//Sum two integers 
function sum(a, b) {
    return a+b;
}

console.log(sum(10, 10)); // should be 20

// Multiply two integers  
function multiply(a, b){

    return a * b;
}

console.log(multiply(6, 5)); // should multily 30

console.log(multiply(4324234, 522535));

// Anonymous function 

setTimeout(function(){
console.log("Hey ! You rock!!!");
}, 3000);


//Arrow function (same as tge above Anonymous, but skipping the word function).

setTimeout(() =>{
    console.log("Hey you rock!!!");

}, 1000);