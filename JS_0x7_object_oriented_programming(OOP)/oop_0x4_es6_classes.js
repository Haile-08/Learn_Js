//ES6  CLASSES
const Persons = class {};
// class expression

//class decloration
class Person {
  //constractor method
  constructor(firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
  }
  clacage() {
    console.log(2022 - this.birthyear);
  }
}

const haile = new Person("haile", 1991);
//haile has a protoype of calcage
console.log(haile);

//making a prototype greet
Person.prototype.greet = function () {
  console.log(`Hey ${this.firstname}`);
};

haile.greet();

// 1. classes are not hoisted
// 2. classes are first class citizens
// 3, classes are executed in strict mode
