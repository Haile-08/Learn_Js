'use strict';
//Assigmnet
console.log("Fundamental part-2 Function Declartion vs Expression");
console.log("q.3");

/* 
         Function Declartion

e.g  function calcage(birth){
        return 2023 - birth;
}
    const age = calcage(1999);
    console.log(age)

hint: can be declared before the functio
    
         Function  Expression

e.g const calcage = function(birth){
    return 2023 - birth;
} 
      const age = calcage(1999);
      console.log(age);
  
hint: can not be declared before the function

*/

function percentageOfWorld1(population){
     console.log(`Ethiopia has ${population} people,so its about ${population*100/7900000000}% of the world population`);
}

percentageOfWorld1(120000000);

const percentageOfWorld1 = function(population){
    console.log(`Ethiopia has ${population} people,so its about ${population*100/7900000000}% of the world population`);
}

percentageOfWorld1(120000000);

