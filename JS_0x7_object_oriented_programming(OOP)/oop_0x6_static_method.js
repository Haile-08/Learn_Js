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

//initating a static method

Person.hey();
