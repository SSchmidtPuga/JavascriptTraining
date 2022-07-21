'use strict';

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);
// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));

// const answer = Number(prompt(' Your answer'));

// console.log(
//   answer === question.get('correct') ? question.get(true) : question.get(false)
// );

// // o

// console.log(question.get(question.get('correct') === answer));
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔁 Substitution'],
//   [69, '🔶 Yellow card'],
//   [70, '🔴 Red card'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);

// console.log(
//   `An event happened on average, every ${90 / gameEvents.size} minutes`
// );

// console.log(gameEvents.get);

// for (const [min, vales] of gameEvents) {
//   const half = min <= 45 ? 'First' : 'Second';
//   const goal = console.log(`[${half} HALF] ${min}: ${vales}`);
// // }
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.indexOf('Portugal'));
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  textBox();
  camelCase(textBox());
});

let textBox = function () {
  let text = document.querySelector('textarea').value;
  return text;
};

let camelCase = function (textBox) {
  let textBox1 = String(textBox);
  let words = textBox1.split('\n');
  let listwords = [...words];

  for (let i = 0; i < listwords.length; i++) {
    let [First, Second] = listwords[i].trim().split('_');
    const joint = `${First}${Second.replace(
      Second[0],
      Second[0].toUpperCase()
    )}          `;
    console.log(`${joint.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }

  // for (let word of listwords) {
  //   // finishWords = word.toUpperCase(word.indexOf('_') + 1);

  //   console.log(
  //     word
  //       .trim()
  //       .trim()
  //       .toLowerCase()
  //       .replace(
  //         word[word.lastIndexOf('_') + 1],
  //         word[word.indexOf('_') + 1].toUpperCase()
  //       )
  //   );
  // }
};
