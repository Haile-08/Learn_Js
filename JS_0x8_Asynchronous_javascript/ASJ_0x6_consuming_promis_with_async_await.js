"use strict";

const whereami = async function (country) {
  const rest = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await rest.json();

  console.log(data);

  //This is same as

  //   fetch(`https://restcountries.com/v3.1/name/${country}`)
  //     .then(function (response) {
  //       console.log(response);
  //       return response.json();
  //     })
};

whereami("ethiopia");


// error handling with async await catch

const whereamib = async function (country) {
    try{
    const rest = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await rest.json();
  
    console.log(data);
  
    //This is same as
  
    //   fetch(`https://restcountries.com/v3.1/name/${country}`)
    //     .then(function (response) {
    //       console.log(response);
    //       return response.json();
    //     })
    }catch(err){
        console.log(err);
    }
  };