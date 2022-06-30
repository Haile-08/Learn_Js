const account = {
  owner: "haile",
  movement: [1, 2, 4, 5],

  //getter use the keyword get
  get latest() {
    return this.movement.slice(-1).pop();
  },
  //setter use the keyword set
  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movement);

// used in class

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
}

const haile = new Person("haile melaku", 1991);
console.log(haile.age);
