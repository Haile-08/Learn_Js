//passing argument by value and refetrance
"use strict";

//passing arguments works value and reference

const j = {
  name: "haile",
  passport: 11111,
};

const cheek = function (data) {
  console.log(`name: ${data.name}`);
  console.log(`passport: ${data.passport}`);
};
cheek(j);

//you can pass objects in a function
