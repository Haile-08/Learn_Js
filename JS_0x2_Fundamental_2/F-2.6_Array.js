'use strict';
//Assigmnet
console.log("Fundamental part-2 Array");
console.log("q.5");
/* 
           ARRAY

const arr = ['haile','biruk'];
const arr = new Array('haile','biruk');

tip: you can put an array inside an array

*/
const percentageOfWorld3 = (population)=> population*100/7900000000;
const population = new Array(120000000,40000000,50000000);
console.log(population);
console.log(population.length);
const persentages = new Array(percentageOfWorld3(population[0]),percentageOfWorld3( population[1]),percentageOfWorld3(population[population.length-1]));
console.log(persentages);