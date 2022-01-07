'use strict';
/*
abstraction hide details that doesnt matter
Encapsulation
inheritance 
polymorphism
 */

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
const matilda = new Person('Matilta', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

//prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [2, 4, 5, 7, 8, 9, 4, 7, 1];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

//challenge #3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} mph`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} mph`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 150);

bmw.accelerate();
mercedes.accelerate();
bmw.brake();
mercedes.brake();

// es6 classes
//class Expression
// const Person = class {};
// class decleration
class Person_cl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // methods will be added to the prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new Person_cl('Jessica', 1995);
console.log(jessica);

jessica.calcAge();

console.log(jessica.__proto__ === Person_cl.prototype);

Person_cl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();

const account = {
  owner: 'jonas',
  movement: [120, 456, 22, 444],

  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(mov) {
    return this.movement.push(mov);
  },
};

console.log(account.latest);
account.latest = 400;
console.log(account.movement);
// object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 1993;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1972);
sarah.calcAge();

// challenge #2
class Car_cl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} mph`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} mph`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const ford = new Car_cl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

// inheritance between "classes"

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2030 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i'm studying ${this.course}`);
};

const mike = new Student('Mike', 2020, 'computer science');

mike.introduce();
mike.calcAge();

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

class Student extends Person {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.firstName} and i'm studying ${this.course}`);
  }
}

const martha = new Student('Martha', 2000, 'Computer Science');
martha.introduce();
martha.calcAge();
