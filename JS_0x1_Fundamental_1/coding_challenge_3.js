/* gymnastics teams */

let  D1 = prompt("Dolphins 1st score");
let  D2 = prompt("Dolphins 2nd score");
let  D3 = prompt("Dolphins 3rd score");

let  K1 = prompt("Koalas 1st score");
let  K2 = prompt("Koalas 2nd score");
let  K3 = prompt("Koalas 3rd score");

let DolphinsAverage = D1 + D2 + D3 / 3;
let KoalasAverage   = K1 + K2 + K3 / 3;

if(DolphinsAverage > KoalasAverage)
{
    console.log(`Dolphins Average ${DolphinsAverage} is the winners`);
}
else
{
    console.log(`Koalas with avarage of ${KoalasAverage} are the winners`);
}