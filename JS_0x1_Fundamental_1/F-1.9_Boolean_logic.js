//Assigmnet
console.log("Fundamental part-1 Boolean logic");
console.log("q.9");

let langauge = "Amharic";
const isIsland = false;
const country = "Ethiopia";
const continent = "africa";
let population = 120000000;
let finland = 6000000;
let averagePopulation = 33000000;

let speak = langauge === "english";
let totalPopulation = population < 55000000;

if(langauge === "english" && population<55000000 && isIsland === false){
    console.log(`You should live in ${country} :)`);
}else{
    console.log(`${country} does not meet your criteria :(`)
}