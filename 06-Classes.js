const cookie = {
    name: "Bread cookie",
    isGlutenFree: false,
    //adding function to the onject propertie 
    eatCookie: function(){

        console.log("Im eating a cookie " + this.name);
    }

}


//creating first class 
class Cookies {

    constructor(name, isGluetenFree){

        this.name = name;
        this.isGluetenFree = isGluetenFree;
        }
        eatCookie() {
            console.log("Im biting a cookie with name " + this.name);

        }

}
//creating new object on base of the class Cookies 
const myCookie = new Cookies("Chocolate", false);

//display the object function output 
cookie.eatCookie();

myCookie.eatCookie();


