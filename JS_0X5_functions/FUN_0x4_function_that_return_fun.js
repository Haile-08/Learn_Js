// function that returns function
"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greethey = greet("hey");
console.log(greethey("haile"));
