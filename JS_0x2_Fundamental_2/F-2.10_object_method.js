'use strict';
//Assigmnet
console.log("Fundamental part-2 Object Method");
console.log("q.9");

/* 
    Adding a Function to an object 
    const myCountry = {

    country: "Ethiopia",
    capital: "Addis abeba",
    language: "Amharic",
    population: 120000000,
    neighbours: ["sudan","eriteria","kenya","somalia"]
    calcage: function(birth){
        return 2025 - birth;
    },
    //or
     calcage: function(){
        return 2025 - this.population;
    }
}
 
        Calling a function from an object
        
        myCountry.calcage(1999);
        myCountry['calcage'](1999);
        
*/
const myCountry = {
    country: "Ethiopia",
    capital: "Addis abeba",
    language: "Amharic",
    population: 120000000,
    neighbours: ["sudan","eriteria","kenya","somalia"],
    describe: function(){
        return `${this.country} is my country`;
    }
}

console.log(myCountry['describe']());   