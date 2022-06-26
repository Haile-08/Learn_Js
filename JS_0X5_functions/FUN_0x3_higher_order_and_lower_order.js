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
