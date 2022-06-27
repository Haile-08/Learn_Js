//function constructor
//arrow fun dont work cuz it doesnt have a this keyword
//construcotr function
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

//prototypes
//contains methods
Person.prototype.calcage = function () {
  console.log(2022 - this.birthyear);
};
//object can access method
jhonas.calcage();
console.log(jhonas.__proto__);

// to cheek if it is the prototype

console.log(Person.prototype.isPrototypeOf(jhonas));
console.log(Person.prototype.isPrototypeOf(Person));
//Explanation
/*
   -we create a constructor function person.
   -then we want to add a function to the constructor fun
   -so we create a a prototype that is accesible through all the objects of the fun
   -well besicaly all the objects of the constructor fun like jonas can have access to the prototyoe fun
*/
//more
Person.prototype.species = "homo sepi";

console.log(jhonas);
console.log(jhonas.species);

//prototype

console.log(jhonas.__proto__);
console.log(jhonas.__proto__.__proto__);
console.log(jhonas.__proto__.__proto__.__proto__);

//a prototype pointing to a constructor gets a function
console.log(jhonas.__proto__.constructor);

//prototype of array

const arr = [1, 2, 3, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
//dont do this the next javascript will have the function
