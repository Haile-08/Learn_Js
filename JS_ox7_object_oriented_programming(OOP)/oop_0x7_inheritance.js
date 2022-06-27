"use strict";

// inheritance b/n 2 classes
class Person {
  //constractor method
  constructor(fullname, birthyear) {
    this.fullname = fullname;
    this.birthyear = birthyear;
  }
  clacage() {
    console.log(2014 - this.birthyear);
  }
  get age() {
    return 2014 - this.birthyear;
  }
  set fullNAME(name) {
    if (name.includes(" ")) {
      this._fullNAME = name;
    } else {
      alert(`${name} this is not a full name`);
    }
  }

  // we use the keyword static to create a static method

  static hey() {
    console.log("hey there");
  }
}
// we use keyword extend
class Student extends Person {
  constructor(fullname, birthyear, course) {
    //super is the constructor of the parent fun
    //or super() is equal to Person constructor fun
    super(fullname, birthyear);
    this.course = course;
  }
  intro() {
    console.log(
      `hi my name is ${this.fullname} and i am ${this.birthyear} and am taking ${this.course}`
    );
  }
}

const haile = new Student("HAILE", 1991, "CSE");
haile.intro();
