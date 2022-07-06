// importing values
import { totalprice, totalquntity, addtocart } from "./shop";

// importing with d/t name
import { totalprice as tp } from "./shop";

//import all the exports
import * as shoping from "./shop";

addtocart("bread", 5);

console.log(totalprice, totalquntity);
console.log(tp);
console.log(shoping.totalprice);
