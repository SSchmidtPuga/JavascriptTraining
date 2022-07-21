'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const mainMenuCopy = [...restaurant.mainMenu];
// const starterMenu = [...restaurant.starterMenu];

// const mainStarter = [...mainMenuCopy, ...starterMenu];
// console.log(mainStarter);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const [team1, draw, team2] = [game.odds.team1, game.odds.x, game.odds.team2];

let scoreGoals = [];

let printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    scoreGoals.push(players[i]);
  }

  console.log(scoreGoals, players.length);
};

printGoals(...game.scored);

// team1 > team2 || console.log('team 1 wins');

let playerScored = game.scored;

for (let [n, p] of playerScored.entries()) {
  console.log(`Goal${n + 1}: ${p}`);
}

// let odds2 = game.odds;

// console.log((team1 + draw + team2) / 3);
let average = 0;
for (let odds of Object.values(game.odds)) {
  average += odds;
}
console.log(average);
average /= Object.values(game.odds).length;
console.log(average);

for (let [team, odds] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  const final = `Odds of ${teamStr}: ${odds}`;
  console.log(final);
}

for (let [goals] of Object.entries(game.scored)) {
  let goalsArray = [];
  goalsArray.push(goals);
  let counts = {};
  goalsArray.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  console.log(counts);
}
