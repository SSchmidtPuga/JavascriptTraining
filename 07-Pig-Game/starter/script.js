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

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

/// change player
let changePlayer = function () {
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

// Rolling the dice
document.querySelector('.btn--roll').addEventListener('click', function () {
  rollingDice();
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
    document.querySelector('.player--0').classList.contains('player--active')
  ) {
    scorePlayer1 += Number(random_dice2);

    document.getElementById('score--0').textContent = scorePlayer1;
    if (Number(random_dice2) === 1) {
      scorePlayer1 = 0;
      document.getElementById('score--0').textContent = scorePlayer1;
      changePlayer();
    }
  } else if (
    document.querySelector('.player--1').classList.contains('player--active')
  ) {
    scorePlayer2 += Number(random_dice2);
    console.log(scorePlayer2);
    document.getElementById('score--1').textContent = scorePlayer2;

    if (Number(random_dice2) === 1) {
      scorePlayer2 = 0;
      document.getElementById('score--1').textContent = scorePlayer2;
      changePlayer();
    }
  }
};
// change active players

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    scoreTotal[0] += scorePlayer1;
    document.getElementById('current--0').textContent = scoreTotal[0];
    scorePlayer1 = 0;
    document.getElementById('score--0').textContent = scorePlayer1;

    changePlayer();
  } else {
    scoreTotal[1] += scorePlayer2;
    document.getElementById('current--1').textContent = scoreTotal[1];
    scorePlayer2 = 0;
    document.getElementById('score--1').textContent = scorePlayer2;
    changePlayer();
  }
});

//// Hold
