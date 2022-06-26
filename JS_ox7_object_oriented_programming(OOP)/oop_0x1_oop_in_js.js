"use strict";

//function constructor
//arrow fun dont work cuz it doesnt have a this keyword
const Person = function (firstname, birthyear) {
  console.log(this);
  this.firstname = firstname;
  this.birthyear = birthyear;
};

const jhonas = new Person("haile", 1991);
console.log(jhonas);
/*
1. new {} is created
2. function is called, this = {}
3. {} linked to prototype
4. function automaically reruns {}
*/
