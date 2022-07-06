console.log("Exporting module");

const shopcost = 10;
const cart = [];

// two types of export named and defualt export

//exporting function
export const addtocart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

//exporting object
const totalprice = 237;
const totalquntity = 24;

export { totalprice, totalquntity };

//ecport d/t things as a single name
export { totalprice, totalquntity as tt };
