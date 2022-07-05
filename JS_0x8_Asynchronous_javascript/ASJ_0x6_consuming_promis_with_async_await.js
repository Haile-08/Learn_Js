"use strict";

// Async  await


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

  //returning values from async awit function


const whereamibi = async function (country) {
    try{
    const rest = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await rest.json();
  
    console.log(data);
    
     return `you are in ${data.city}`
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


  // returning the function

  whereamibi()
    .then((city) => console.log(city))
    .catch((err) => console.log(err))(
    // easier method
    async function () {
      try {
        const city = await whereamibi();
        console.log(`2: ${city}`);
      } catch (error) {
        console.error(`2 : ${error.message}`);
      }
      console.log(`3: Finished getting loaction`);
    }
  );