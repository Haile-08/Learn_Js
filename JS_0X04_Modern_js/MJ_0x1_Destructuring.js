"use strict";

//array destructuring ES6

let arry = [1, 2, 3];
//destructuring
const [x, y, z] = arry;

console.log(x, y, z);
// output 1 2 3

// the second argument is going to be skiped
let [t, , e] = arry;

console.log(t, e);
//output 1 2

//switching variables

[t, e] = [e, t];
console.log(t, e);

// nested  destructuring

const nesetd = [2, 7, [5, 7]];
const [o, , [d, c]] = nesetd;

console.log(o, d, c);

// default values

const [q = 1, b = 1, k = 5] = [8, 9];
console.log(q, b, k);
