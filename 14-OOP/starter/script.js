'use strict';
// const Person = function(firstName, birthyear) {
//     // Instance properties
//     this.firstName = firstName;
//     this.birthyear = birthyear;
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// 1. New empty object is created
// 2. Function is called, , this = New empty object
// 3. New empty object linked to prototype
// 4. function automatically return the New empty object but with the propeties that we give to them.

// const matilda = new Person('matilda', 1989);
// const jack = new Person('jack', 1990);

// Prototypes -> Agregar funciones a classes

// Person.prototype.calcAge = function() {
//     console.log(2037 - this.birthyear);
// };

// jonas.calcAge();
// matilda.calcAge();

// No es el prototipo de la clase general, sino  de los objetos que se linkean a ella.

// Person.prototype.Species = 'Homo Sapiens';
// console.log(jonas.Species);

// console.log(jonas.__proto__.__proto__);

///////////
// const arr = [3, 2, 5, 6, 7, 3, 2];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function() {
//     return [...new Set(this)];
// };

// console.log(arr.unique());
// const PersonCl = class {};
///////

// class PersonCl {
//     // Crea las variables
//     constructor(fullName, birth) {
//             this.fullName = fullName;
//             this.birth = birth;
//         }
//         // crea las funciones
//     calcAge2() {
//         console.log(2022 - this.birth);
//     }

//     get Age() {
//         return 2022 - this.birth;
//     }

//     set fullName(name) {
//         if (name.includes(' ')) this._fullname = name;
//         else alert('Please provide a full name');
//     }
// }

// class Student extends PersonCl {
//     constructor(fullName, birth, course) {
//         super(fullName, birth);
//         this.course = course;
//     }
// }

// // se crea el objeto
// const jessica = new PersonCl('Jessica', 1990);
// jessica.calcAge2();

// Object.create

// const PersonProto = {
//     Age() {
//         return 2022 - this.birthYear;
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };

// const kate = Object.create(PersonProto);
// kate.init('kate', 1995);

// console.log(kate.Age());

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    acceletate() {
        this.speed += 10;
    }

    breake() {
        this.speed -= 10;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

// const sebaCar = new Car('BMW', 200);

// sebaCar.acceletate();

// sebaCar.speedUS = 50;

// console.log(sebaCar);

//

// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// const sebaCar = new Car('ford', 150);

// Car.prototype.accelerate = function() {
//     this.speed += 10;
// };

// sebaCar.accelerate();
// sebaCar.accelerate();
// sebaCar.accelerate();

// console.log(sebaCar);

// /////

// const Ev = function(make, speed, battery) {
//     Car.call(this, make, speed);
//     this.battery = battery;
// };

// Ev.prototype = Object.create(Car.prototype);

// const evCar = new Ev('tesla', 100, 50);

// Ev.prototype.chargeBattery = function(chargeTo) {
//     this.battery = chargeTo;
// };

// Ev.prototype.accelerate = function() {
//     this.speed += 20;
//     this.battery -= 1;
// };

// evCar.chargeTo(50);
// evCar.accelerate();

// console.log(evCar);

class Ev extends Car {
    constructor(make, speed, battery) {
        super(make, speed);
        this.battery = battery;
    }

    ChargeTo(chargeTo) {
        this.battery = chargeTo;
        return this;
    }

    acceletate() {
        this.speed += 20;
        this.battery -= 1;
        return this;
    }
}

const Rivian = new Ev('Rivian', 120, 23);
Rivian.acceletate();
Rivian.acceletate();

console.log(Rivian);