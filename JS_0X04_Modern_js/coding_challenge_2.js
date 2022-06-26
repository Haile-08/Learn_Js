// football betting

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
for (i of game.scored) {
  console.log(i);
}
//2.
let sum = 0;
for (k of Object.values(game.odds)) {
  sum = sum + k;
}
console.log(sum);
//3.
for ([ke, va] of Object.entries(game.odds)) {
  if (ke == "team1") {
    console.log(`Odd of victory Bayern Munich: ${va}`);
  } else if (ke == "x") {
    console.log(`Odd of draw: ${va}`);
  } else {
    console.log(`Odd of victory Borrussia Dortmund: ${va}`);
  }
}

//4.
