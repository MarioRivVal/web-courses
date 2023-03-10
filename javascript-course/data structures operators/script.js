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

  // aqui agregamos una funcion como metodo
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({obj}){
    console.log(obj);
    // console.log(`Order recived! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered at ${time} to ${address}`);
  }
};

restaurant.orderDelivery({
  time:'22:30',
  address:'via del sole, 21',
  mainIndex:2,
  starterIndex:2
})

// -----  DESTRUCTURING OBJECTS---- //

// simplememte llamando el nombre del dato y variable obtendra el mismo nombre
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// o si queremos darle otro nombre a la variable:

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// para estableces valores predeterminados a propiedades no sabemos si existen o no, una buena practica es darles el valor vacio []

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// cambiando el valor de las variables
// es posible hacerlo muy parecido con los array pero habra que envolver el script entre parentesis redonda ()

let d = 111;
let e = 999;

const obj = { d: 23, e: 7, f: 14 };
({ d, e } = obj);
console.log(d, e);

// objetos anidados (nested)

// const { fri } = openingHours;
// console.log(fri);

// de esta manera podemos ver el objeto con open & close pero necesitamos variables separadas para open & close:

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// si quisieramos tambien podriamos cambiar el nombre:

const {
  fri: { open: s, close: t },
} = openingHours;
console.log(s, t);

// -----  DESTRUCTURING ARRAYS---- //

// la manera ma simple
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// la manera para destructuras datos mas grandes

const [x, y, z] = arr;
console.log(x, y, z); // los datos de arr fueron aseñados a las varibles x, y, z

// hagamoslo ahora con el array restaurant

// const [first, second] = restaurant.categories; // aqui seguimos el orden de los elementos
let [main, , secondary] = restaurant.categories;
// si quisieramos salta algun dato y pasar al siguiente bastara agregar un espacio
console.log(main, secondary);

// si por algun motivo queremos alternar los valores de main y secondary por ejemplo

// const temp = main;
// main = secondary
// secondary = temp
// console.log(main, secondary);

// creando una variable temporal temp, podemos asi alternar lso valores

// pero la mejor manera es la destructura del array de la siguiente manera
[main, secondary] = [secondary, main];
console.log(main, secondary);

// aqui llamamos a esa funcion order y recibimos los dato los cuales podemos destructurar de esta manera:

console.log(restaurant.order(2, 0)); // esta linea solo para poder verlos en consola

const [starter, mainCourse] = restaurant.order(2, 0); // destruturamos el array guardandolos en variables
console.log(starter, mainCourse);

// ---   array anidada "nested"  dentro otra array

const nested = [2, 4, [5, 6]];
const [i, , j] = nested; // elejimos el 2 y el array saltando un espacio, osea el 4
console.log(i, j);

// si quisieramos elementos especificos del array aninado [5,6]

const nested2 = [2, 4, [5, 6]];
const [f, , [g, h]] = nested2;
console.log(f, g, h);

// dando un valor default (1) cuando no sabemos cuantos valores hy en un array

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // en este caso p & q ahora son 8 & 9 pero r se queda en 1 porque no hay otro valor en el array
