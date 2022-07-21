'use strict';

// variables
let dice_dictionarie = {
  1: 'dice-1.png',
  2: 'dice-2.png',
  3: 'dice-3.png',
  4: 'dice-4.png',
  5: 'dice-5.png',
  6: 'dice-6.png',
};

let scoreTotal = [0, 0];
let scorePlayer1 = 0;
let scorePlayer2 = 0;

// Rolling the dice
document.querySelector('.btn--roll').addEventListener('click', function () {
  rollingDice();
  console.log(
    document.querySelector('.player--0').classList.contains('.active--active')
  );
  countPoints(rollingDice());
});

let rollingDice = function () {
  const keys = Object.keys(dice_dictionarie);
  var random_dice2 = keys[Math.floor(Math.random() * keys.length)];
  let jpg = dice_dictionarie[random_dice2];
  document.querySelector('.dice').src = jpg;
  return random_dice2;
};

///// Count points

let countPoints = function (random_dice2) {
  if (
    document.querySelector('.player--0').classList.contains('.player--active')
  ) {
    scorePlayer1 += Number(random_dice2);
    console.log(scorePlayer1);
    if (Number(random_dice2 === 1)) {
      scorePlayer1 = 0;
      changePlayer();
    }
  } else if (
    document.querySelector('.player--1').classList.contains('.player--active')
  ) {
    scorePlayer2 += Number(random_dice2);
    if (Number(random_dice2 === 1)) {
      scorePlayer1 = 0;
      changePlayer();
    }
  }
};
//
//change active players

//   let changePlayer = function () {
//     try {
//       document
//         .querySelector('.player--0')
//         .classList.remove('.player--active') &&
//         document.querySelector('.player--1').classList.add('.player--active');
//       console.log('hello');
//     } catch {
//       document
//         .querySelector('.player--1')
//         .classList.remove('.player--active') &&
//         document.querySelector('.player--0').classList.add('.player--active');
//     }
//   };
// };
