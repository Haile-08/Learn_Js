"use strict";

let Avarage = (scor1, scor2, scor3) => scor1 + scor2 + scor3 / 3;

let avgDolhins = Avarage(44, 23, 71);
let avgKoalas = Avarage(65, 56, 49);

const checkWinner = function (dol, koa) {
  if (dol > koa) {
    console.log(`Dolhins win (${dol} vs. ${koa})"`);
  } else {
    console.log(`Koalas win (${koa} vs. ${dol})`);
  }
};
