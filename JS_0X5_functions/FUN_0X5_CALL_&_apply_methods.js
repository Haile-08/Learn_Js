"use strict";

// call and apply methods

const obj = {
  name: "haile",
  bookings: [],
  // book:function(name){
  //
  // }OR
  book(bname) {
    console.log(`name ${this.name}`);
    this.bookings.push({ flihgt: `${this.name}` });
  },
};

const ero = {
  name: "mela",
  bookings: [],
};

//-----------------------------------
const books = obj.book;
//---------------------------------

//+++++ Function Call Method

books.call(ero, "haikl");
// so call methode use
// call method is used to to stop repeting the method inside the objects for other objects
// and to just use one function inside an object for other objects.

//+++++ Function Apply Method

const flightdata = ["haile"];

books.apply(ero, flightdata);

//not used on modern javascript
//in moder javascript we use it like this

books.call(ero, ...flightdata);

//+++++++ Function Bind Method

const booker = books.bind(er);

booker("hi");

// see bind well
