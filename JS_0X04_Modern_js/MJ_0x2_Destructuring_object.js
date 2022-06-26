"use strict";
// in object destructuring order doesnt matter

const obj = {
  name: "haile",
  id: "ugr/17181/11",
  info: {
    doc: "document",
  },
};
//destructuring in object
const { name, id, info } = obj;

console.log(name, id, info);
//output haile ugr/17181/11 Object { doc: "document" }

const { name: n, id: i } = obj;

console.log(n, i);
//output haile ugr/17181/11

//default values

const { moreinfo = [], info: st = [] } = obj;

console.log(obj);

//mutating variables

let a = 100;
let b = 300;

const t = { a: 2, b: 4, c: 7 };

//{a,b}=t; wont workcuz it dont over write it to overwrite use ()

({ a, b } = t);

console.log(a, b);

//nested object
//how to find the nest
//const {fri:{open,lose}} =opeinghour;
