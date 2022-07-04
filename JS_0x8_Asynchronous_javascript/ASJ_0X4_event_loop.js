"use strict";

console.log("start 1");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("resolve promise 1").then((res) => console.log(res));
console.log("end 1");
//output
// start 1
// end 1
// resolve promis 1     microtask
// 0 sec timer    normal callback

// micro task are executed before noraml call back
