"use strict";

//the old way of seting default parameters

const fun = function (name, id) {
  name = 1;
  id = 7;
};

//new way ES6

const funx = function (name = 1, id = 7) {};
