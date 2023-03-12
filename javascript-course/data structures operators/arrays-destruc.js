'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //  For Destructuring object
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

  // For Destructuring arrays
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // For Destructuring objects
  orderDelivery: function ({ starterIndex, mainIndex, time= '20:00', address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} deliver to ${address} at ${time}`
    );
  },
  // como se puede ver podriamos tambien especificar valores predeteminados com en 'time= '20:00'' , si por siacaso en los parametros faltara el valor, llamamos la funcion una segunda vez sin especificar 'time'
};

// -----  DESTRUCTURING ARRAYS---- //

// la manera ma simple
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c); // RESP:: 2 3 4

// la manera para destructuras datos mas grandes
const [x, y, z] = arr;
console.log(x, y, z); // RESP:: 2 3 4
// los datos de arr fueron aseñados a las varibles 'x', 'y', 'z'

// hagamoslo ahora con el objeto restaurant
let [main, , secondary] = restaurant.categories;
// si quisieramos salta algun dato y pasar al siguiente bastara agregar un espacio
console.log(main, secondary); // RESP:: Italian Vegetarian

// si por algun motivo queremos alternar los valores de 'main' y 'secondary' por ejemplo

// creando una variable temporal 'temp', podemos asi alternar los valores, pero no es la mejor manera:
// const temp = main;
// main = secondary
// secondary = temp
// console.log(main, secondary);

// por el contrario la mejor manera es la destructura del array como sigue:
[main, secondary] = [secondary, main];
console.log(main, secondary); // RESP:: Vegetarian Italian

// aqui llamamos a la funcion 'order' y recibimos los dato los cuales podemos destructurar de esta manera:
console.log(restaurant.order(2, 0)); // RESP::  ['Garlic Bread', 'Pizza']
// esta linea solo para poder verlos en consola

const [starter, mainCourse] = restaurant.order(2, 0);
// destruturamos el array guardandolos en las variables 'starter' y 'mainCourse' y asi recibimos 2 valore return
console.log(starter, mainCourse); // RESP:: Garlic Bread Pizza

// ---   destructurando arrays anidadas "nested"  dentro otra array

const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
// elejimos el primer valor saltando un espacio, el siguiente sera el array
console.log(i, j); // RESP:: 2  [5, 6]

// si quisieramos elementos especificos del array aninado '[5,6]'
const nested2 = [2, 4, [5, 6]];
const [f, , [g, h]] = nested2;
// simplemente creamos el array dentro el array
console.log(f, g, h); // RESP::  2 5 6

// dando un valor default (1) cuando no sabemos cuantos valores hay en un array
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // RESP:: 8 9 1
