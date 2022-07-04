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

// Chaining a Promises
// is a way of handling a returned promise that is retruned from a then function

const getinfoo = function (cu) {
  fetch(`https://restcountries.com/v3.1/name/${cu}`)
    .then((re) => re.json())
    .then((da) => {
      console.log(da);
      const ne = da[0].borders[0];
      return fetch(`https://restcountries.com/v3.1/name/${ne}`);
    })
    .then((res) => res.json())
    .then((dat) => console.log(dat));
};

// what not to do
//if u do this u will end up in callback hell
//************************************** */
// const getinfoo = function (cu) {
//     fetch(`https://restcountries.com/v3.1/name/${cu}`)
//       .then((re) => re.json())
//       .then((da) => {
//         console.log(da);
//         const ne = da[0].borders[0];
//##################################################################################33333333
// dont attch then to the fetch inside this function
//         return fetch(`https://restcountries.com/v3.1/name/${ne}`);
//       })
//       .then((res) => res.json())
//       .then((dat) => console.log(dat));
//   };

//Handling Rejection
//handling error loacaly

// const getinfoos = function (cut) {
//   fetch(`https://restcountries.com/v3.1/name/${cut}`)
//     .then(
//       (res) => res.json(),
//       //to handel an error
//       (err) => console.log(err)
//     )
//     .then((dat) => {
//       console.log(dat);
//       const neg = dat[0].borders[0];
//       return fetch(`https://restcountries.com/v3.1/name/${neg}`);
//     })
//     .then(
//       (res) => res.json(),
//       (err) => console.log(err)
//     )
//     .then((dat) => console.log(dat));
// };

//to handel error globaly
// const getinfoos = function (cut) {
//   fetch(`https://restcountries.com/v3.1/name/${cut}`)
//     .then((res) => res.json())
//     .then((dat) => {
//       console.log(dat);
//       const neg = dat[0].borders[0];
//       return fetch(`https://restcountries.com/v3.1/name/${neg}`);
//     })
//     .then((res) => res.json())
//     .then((dat) => console.log(dat))
//     .catch((err) => alert(err));
// };

//Throwing errors manually

const getinfoos = function (cut) {
  fetch(`https://restcountries.com/v3.1/name/${cut}`)
    .then((res) => res.json())
    .then((dat) => {
      console.log(dat);
      const neg = dat[0].borders[0];
      return fetch(`https://restcountries.com/v3.1/name/${neg}`);
    })
    .then((res) => {
      res.json();
      //throwing the error
      if (!res.ok) {
        throw new Error(`country not found ${res.status}`);
      }
    })
    .then((dat) => console.log(dat))
    .catch((err) => alert(err));
};
