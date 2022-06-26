// higher order and first class function

//first class
//are considers as values

const g = () => console.log("hi");

//higher order
//recives a function in paramenter or returns a fuction
function count() {
  return function () {
    c++;
  };
}

//accepting another function
const c = function () {
  let x = "haile";
  return x;
};

const account = function (fun) {
  console.log(`${fun}`);
};

account(c);

//first class fuctions
// are just functions that are values and are of typeof object

const ga = () => "hi";

//higher-order function
// are function that recive a fucntion as an argument that returns another funtion

const hof = (g) => console.log(`namf${g}`);
