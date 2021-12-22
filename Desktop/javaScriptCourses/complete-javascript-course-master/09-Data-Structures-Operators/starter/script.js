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
    // time, address, mainIndex, starterIndex
    //
  },
};
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
// spread operator
const newArr = [1, 3, ...arr];
console.log(newArr);
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

/*
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
*/
