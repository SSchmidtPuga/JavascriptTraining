'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'js',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'jd',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'st',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'ss',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, index, array) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
     </div>
  
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovement(account1.movements);

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  login(accounts);
});

let balance = function (accountBalance) {
  let movementsAccount = accountBalance.movements;
  let Balance1 = movementsAccount.reduce(function (accumulator, value) {
    return Number(accumulator) + Number(value);
  }, 0);
  return Balance1;
};

console.log(account1.movements);
console.log(balance(account1));

let currentAccount = '';

const login = function (account) {
  account.forEach(function (account, index) {
    if (
      Number(inputLoginPin.value) === account.pin &&
      String(inputLoginUsername.value) === account.owner
    ) {
      currentAccount = account;
      console.log(currentAccount.movements);
      labelWelcome.textContent = `Welcome back ${account.owner}`;

      containerApp.style.opacity = 100;

      labelBalance.textContent = `${account.bala}`;

      labelBalance.textContent = `${balance(account)} Euros`;

      labelSumIn.textContent = `${deposits(account)}`;

      labelSumOut.textContent = `${withdrawals(account)}`;

      labelSumInterest.textContent = `${interests(account)}`;
    }
  });
};

const deposits = function (account) {
  let balance = account.movements
    .filter(function (movement) {
      return movement > 0;
    })
    .reduce(function (acc, values) {
      return acc + values;
    });
  return balance;
};

const withdrawals = function (account) {
  let balance = account.movements
    .filter(function (movement) {
      return movement < 0;
    })
    .reduce(function (acc, values) {
      return acc + values;
    });
  return balance;
};

const interests = function (account) {
  let balance = account.movements
    .filter(function (movement) {
      return movement > 0;
    })
    .map(function (mov) {
      return (mov * 1.2) / 100;
    })
    .reduce(function (acc, values) {
      return acc + values;
    });
  return balance;
};

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  console.log();
  const ammountLoan = Number(inputLoanAmount.value);
  if (
    ammountLoan > 0 &&
    currentAccount.movements.some(mov => mov >= ammountLoan * 0.1)
  ) {
    currentAccount.movements.push(ammountLoan);
    displayMovement(currentAccount.movements);
    labelBalance.textContent = `${balance(currentAccount)} Euros`;
    balance(currentAccount);
    labelSumIn.textContent = `${deposits(currentAccount)}`;
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let dogsJulia = [3, 5, 2, 12, 7];
// let dogsKate = [4, 1, 15, 8, 3];

// let checkDogs = function (arr, arr2) {
//   let dogsJulia = arr.slice(1, -2);
//   let bothDogs = dogsJulia.concat(arr2);
//   bothDogs.forEach(function (values, index) {
//     if (values > 3) {
//       console.log(
//         `Dog number ${index + 1} is an adult, and is ${values} years old`
//       );
//     } else {
//       console.log(
//         `Dog number ${index + 1} is a puppy, and is ${values} years old`
//       );
//     }
//   });
// };

// checkDogs(dogsJulia, dogsKate);

// let calcAverageHumanAge = function {
//   let humanAge = arr.map(function (ages) {
//     if (ages <= 2) {
//       return 2 * ages;
//     } else {
//       return 16 + ages * 4;
//     }
//   });
//   console.log(humanAge);
//   let Adults = humanAge.filter(function (ages) {
//     return ages > 18;
//   });
//   console.log(Adults);
//   let average = Adults.reduce(function (acc, val) {
//     return acc + val;
//   }, 0);

//   return average / Adults.length
// }

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
