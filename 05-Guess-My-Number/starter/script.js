'use strict';
console.log(document.querySelector('.message').textContent);

document.querySelector('.guess').value;

// Marcadores
let score = 0;
let highscore = 0;
let randomNum = Math.round(Math.random() * (20 - 1) + 1);

//Marcadores iniciales
document.querySelector('.number').textContent = `?`;
document.querySelector('.score').textContent = `${score}`;
document.querySelector('.highscore').textContent = `${highscore}`;

//funcion de escucha al click-> activador de todo
document.querySelector('.check').addEventListener('click', function () {
  guessFunction();
  checkAnsere(randomNum, guessFunction());
});

//funciones de funcionamiento
const guessFunction = function () {
  let value = Number(document.querySelector('.guess').value);
  return value;
};

let guessAgain = function () {
  randomNum = Math.round(Math.random() * (20 - 1) + 1);
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.message').textContent = 'Guess Again';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  console.log(randomNum);
};

let checkAnsere = function (randomNum, value) {
  if (randomNum === value) {
    document.querySelector('.message').textContent = 'You are right!';
    score += 1;
    document.querySelector('.score').textContent = `${score}`;
    document.querySelector('.highscore').textContent = `${highscore}`;
    document.querySelector('.number').textContent = `${randomNum}`;
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = highscore + (score - highscore);
      document.querySelector('.highscore').textContent = `${highscore}`;
    }
  } else {
    document.querySelector('.message').textContent = 'Continue guessing';
  }
};

console.log(randomNum);
document.querySelector('.again').addEventListener('click', function () {
  guessAgain();
});
