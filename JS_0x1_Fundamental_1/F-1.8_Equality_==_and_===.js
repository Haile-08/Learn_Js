//Assigmnet
console.log("Fundamental part-1 equalit == and  ===");
console.log("q.8");

/* 
strict equality === or !==
loss equality   == or !=

tip: always use strict equality when coding
*/

let numNeighbour = Number(prompt('How many neighbour countries does your country have?'));
if(numNeighbour === 1){
    console.log("only 1 border!");
}else if(numNeighbour>1){
    console.log('More than 1 border');
}else{
    console.log("no border");
}