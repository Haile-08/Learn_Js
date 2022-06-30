"use strict";

//fetch api

const data = fetch("https://restcountries.com/v3.1/name/Ethiopia");
console.log(data);
// data returns a promises
//promise is an object that is used as a placeholder for the futur results. es6 future

//consuming a promise
//then function runs as soon as the fetch promise gets the promise
// response.json() will return a promis so we need to handle that with then

const getcountrydata = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};

getcountrydata("Ethiopia");

// a more simplifed way

const getinfo = function (c) {
  fetch(`https://restcountries.com/v3.1/name/${c}`)
    .then((r) => r.json())
    .then((d) => console.log(d));
};

getinfo("sudan");
