// import
// import './shoppingCart.js';
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);

// import { totalPrice, totalQuantity } from './shoppingCart';

import * as ShoppingCart from './shoppingCart.js';
/*
console.log('importing module');
ShoppingCart.addToCart('bread', 10);
ShoppingCart.addToCart('apple', 11);
ShoppingCart.addToCart('beans', 5);
const x = ShoppingCart.totalPrice;
const y = ShoppingCart.totalQuantity;
console.log(x, y);
console.log(ShoppingCart.cart);
*/
// console.log('start fetching');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('something');
/*
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
// Not very clean
lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost);
console.log(lastPost2);
*/
const shoppingCart2 = (function () {
  const _cart = [];
  const _shippingCost = 10;
  const _totalPrice = 900;
  const _totalQuantity = 26;

  const overStock = function (product, quantity) {
    let _item = `${quantity} ${product} ordered from supplier`;
    let _price = ` for $ ${quantity * _totalPrice} `;
    const finalItem = (_item += _price);
    console.log(finalItem);
  };

  const addToCart = function (product, qty) {
    _cart.push({ product, qty });
    console.log(`${product} ${qty}`);
    overStock('mac-OS', 12);
  };

  return {
    addToCart,
  };
})();

shoppingCart2.addToCart('apple', 4);

// console.log(shoppingCart2.totalPrice); //undefined;
import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { product: 'Bread', quantity: 5 },
    { product: 'Bread', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);

const stateDeepClone = cloneDeep(state); // using lodash to deepclone

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
new Person('Jonas');

import 'core-js/stable';
