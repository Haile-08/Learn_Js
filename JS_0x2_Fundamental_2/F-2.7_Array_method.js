'use strict';
//Assigmnet
console.log("Fundamental part-2 Array methods");
console.log("q.6");

const neighbours = ["sudan","eriteria","kenya","somalia"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if(neighbours.includes("Germany")){
    console.log("you have Germany as a neigbour ");
}else{
    console.log("you dont hava Germany as a neigbour ");
}

const index = neighbours.indexOf("kenya");
neighbours[index] = "Ethiopia";
console.log(neighbours);