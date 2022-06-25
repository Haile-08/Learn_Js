'use strict';
//Assigmnet
console.log("Fundamental part-2 function calling function");
console.log("q.5");

const percentageOfWorld3 = (population)=> population*100/7900000000;


const describePopulation = (country,population) => console.log(`${country} has ${population} people, 
which is about ${percentageOfWorld3(population)} of the world.`);

describePopulation("Ethiopia",120000000);