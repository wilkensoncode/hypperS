'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    // console.log(this);
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(time, address, mainIndex, starterIndex);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here's your delicious pizza ${ing1} ${ing2} ${ing3}`);
  },
};

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del solo 31',
  mainIndex: 2,
  starterIndex: 1,
});
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del solo 31',
});
const arr = [7, 8, 9];
//((NOTES)) iterables: aarrays, strings maps , sets . NOT objects
// spread operator
const newArr = [1, 3, ...arr];
console.log(newArr);
// caopy arr
const copy = [...restaurant.mainMenu];
// join 2 rray
const menues = [...restaurant.starterMenu, ...restaurant.mainMenu];
//object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// arr destructuring
const {
  name: restaurantName,
  openingHours: hours,
  categories: cat,
} = restaurant;

console.log(restaurantName, hours, cat);
// default values
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);
// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested Object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr; // distructuring arr , when erry arr is on the right
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// have main be the second item in the category
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);
// using distructuring
// have main be the second item in the category
// [main, secondary] = [secondary, main];

console.log(main, secondary);
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 3, [6, 7]];
// const [i, , j] = nested;
// console.log(i, j);
// nested distructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [9, 9];

console.log(p, q, r); // r will equal 1
 

// p1- destructuring

// array
// rest pattern and rest parameters
// Spread , because ... on right side of =
const arr = [1, 2, ...[3, 4, 8]];

// Rest , because ... on left side of =
// take the unuse values and set it into new array does not include any scape element
const [a, b, ...others] = [2, 4, 6, 8, 10, 9];
console.log(a, b, others);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// p2- function
//rest operator
const add = function (...numbers) {
  console.log(numbers); // compressed put them into an array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
};
add(2, 3);
add(1, 5, 7, 9);
add(8, 9, 1, 3, 4, 7);

console.log(1 || 'will');

// logical operator ES2021

const rest1 = {
  name: 'Gapi',
  numGuest: 0,
};
const rest2 = {
  name: 'la pizza',
  owner: 'will a',
};
// or assignment operator

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// nullsh assignment operator((null or undefined))

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/
// asignment
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
  odds: {
    team1: 1.23,
    x: 3.5,
    team2: 6.5,
  },
};
// 1
const [player1, player2] = game.players;
console.log(player1, player2);
//2
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);
//3
const allPlayers = [...player1, player2];
console.log(allPlayers);
//4
const player1Final = [...player1, 'Tiago', 'Ronaldino', 'caca'];
console.log(player1Final);
//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(draw, team1, team2);
//6
const printgoal = function (...players) {
  console.log(`${players.length} goals were score`);
};
printgoal('Davis', 'Muller', 'Kimich');
//7
team1 < team2 && console.log('team one is more likely to win');

//looping through an array ES6
//for of loop

const menu = [...restaurant.starterMenu, restaurant.mainMenu];
for (const item of menu) console.log(item[0]);
for (const item of menu.entries()) console.log(item);

// optional chaining ((?.))
var sample = [1, 2, 3, '2']; // yeah same array
