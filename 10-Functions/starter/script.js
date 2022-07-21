'use strict';

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const luftansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//   },
// };

// const book = luftansa.book;

// // DONT WORK , el this no esta apuntando a ningun lado,
// book(23, 'Sara');

// // WORKS
// book.call(luftansa, 23, 'sara');

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answer: new Array(4).fill(0),
// };

// document.querySelector('.poll').addEventListener('click', function () {
//   registerNewAnswer();
// });

// const registerNewAnswer = function () {
//   let answers = Number(
//     prompt(
//       'What is your favourite programming language? 0: JavaScript 1: Python 2: Rust 3: C++ Write option number'
//     )
//   );
//   typeof answers == 'number' &&
//     answers < poll.answer.length &&
//     poll.answer[answers]++;

//   let displayResults = function (type) {
//     if (type === String) {
//       console.log(`Poll result are ${poll.answer}`);
//     } else if (type === Array) {
//       console.log(poll.answer);
//     }
//   };
//   displayResults(Array);
//   displayResults(String);
//   displayResults.call({ answer: [5, 2, 3] });
// };
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
