'use strict';
//Assigmnet
console.log("Fundamental part-2 Array looping break and continue");
console.log("q.11");

/* 
   continue and break
*/
const percentageOfWorld3 = (population)=> population*100/7900000000;
const population = new Array(120000000,40000000,50000000);
let percentage =  [];
for(let i = 0;i<population.length;i++){
    percentage[i]=percentageOfWorld3(population[i]);
}
console.log(percentage);