"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const Marcedes = new Car("Marcedes", 95);

console.log(bmw.prototype);
console.log(Marcedes.prototype);
bmw.accelerate();
bmw.break();
Marcedes.accelerate();
Marcedes.break();
