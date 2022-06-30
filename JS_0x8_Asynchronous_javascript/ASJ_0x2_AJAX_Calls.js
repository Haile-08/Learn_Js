"use strict ";

//AJAX Calls

//a modern way of handeling async javascript is promises

// old way of Async in AJAX

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/Ethiopia");
request.send();

request.addEventListener("load", function () {
  //console.log(this.responseText);
  const data = JSON.parse(this.responseText);
  console.log(data);
});
