"use strict";

const lotto = new Promise(function (resolve, reject) {
  console.log("loto is beaing drawen");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("u win");
    } else {
      reject(new Error("u loss"));
    }
  }, 2000);
});
// consuming promise
lotto.then((res) => console.log(rse)).catch((err) => console.log(err));


//promisifying setTimeout

const wait = function(sec){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds * 1000)
    })
}


//consuming promise
wait(2).then(()=>{
    console.log(' i waited for 2 sec')
    return wait(1);
}).then(()=> console.log('i waited for 1 sec'))