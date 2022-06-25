'use strict';
//Assigmnet
console.log("Fundamental part-2 Dot vs Brackets");
console.log("q.8");

/* two ways to call a value in an object
     to view a poperty

console.log(myCountry.country);
or
console.log(myCountry['country']);

     to add new property
to add name : haile

myCountry['name'] = "haile";
*/
const myCountry = {
    country: "Ethiopia",
    capital: "Addis abeba",
    language: "Amharic",
    population: 120000000,
    neighbours: ["sudan","eriteria","kenya","somalia"]
}
console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
myCountry.population = 2 + myCountry.population;
console.log(myCountry);
myCountry['population']=myCountry['population']-2000000;
console.log(myCountry);