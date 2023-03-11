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
  // ejemplo 2
  // cuando por ejemplo tenemos una funcion que recibira un objeto pero no sabemos el orden de los parametros simplemente le pasamos un objeto como parametro y la funcion lo destructurara automaticamente: function(obj)

  //   orderDelivery: function(obj){
  //     console.log(obj);
  // }

  //una vez que tenemos el argumento objeto entonces podemos destrurturarla con el nombre de cada elemento:

  // tambien podemos especificar valores predefinidos en algun parametro:
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recived! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered at ${time} to ${address}`
    );
  },

  // ejemplo 3
  // creamos un method que reciva multiples arguments y usamos el spread operator para pasar esos argumentos
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here your pasta with ${ing1},${ing2},${ing3}`);
  },
};

// llamando el ejemplo 2
// aqui llamamos la funcion con sus valores
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//aqui llamamos la funcion con los valores predeterminados

restaurant.orderDelivery({
  address: 'via del sole, 21',
});

// -----  THE SPREAD OPERATOR (...) (operador de propagacion)---- //

// el operador de propagacion nos ayuda a descomponer un array y unir sus elementos uno por uno separados por un coma

const array = [7, 8, 9];
const badNewArray = [1, 2, array[0], array[1], array[2]];
console.log(badNewArray); // funciona pero no es la manera correcta con las nuevas tecnicas

// si no la siguiente
const goodNewArry = [1, 2, ...array];
console.log(goodNewArry);

// otro ejemplo para expandir un array
console.log(...goodNewArry);
// esto seria como escribir esto
console.log(1, 2, 7, 8, 9);

// ejemplo si quisieramos crear un nuevo menu para el restaurante
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);
// tomar nota que aqui se crea un nuevo array y no see es manipulando el original restaurant.mainMenu

//NOTA: el spread operator tambien funciona como destruturador pero no crea nuevas variables y abarca todos los elementos del array.

//---- copying an array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy, restaurant.mainMenu);

// ---uniendo dos array

const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(...fullMenu);

// Iterables: arrays strings, maps, sets. pero NO abjects
// entonces podemos descomponer una string en elementos individuales

const string = 'Mario';
const lettersString = [...string, '', 'R'];
console.log(lettersString);
console.log(...lettersString);
console.log(...string);

//NOTA: recordar que valores multiplos separados por coma solo se esperan cuando pasamos argumentos en una funcion o cuando creamos arrays

// llamamos el ejemplo 3
const ingredients = ['oil', 'zucchini', 'potates'];
// const ingredients = [prompt('ing1?'),prompt('ing2?'),prompt('ing3?')]
// lo ocultamos para no confundir la pagina
restaurant.orderPasta(...ingredients);

// con las nuevas funciones de js podemos tambien usar el spread operator en objetos auqnue si no son iterables
const newRestaurant = {
  foundedYear: '1998',
  ...restaurant,
  founder: 'Mario Rivera',
}; // unimos restaurant y agregamos datos a un nuevo objeto newRestaurant
console.log(newRestaurant);

// tambien podemos copiar todo un objeto y al mismo tiempo poder cambiar algun dato sin alterar el original
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restaurante Roma'; // cambiamos el nombre del restaurante en restaurantCopy
console.log(restaurant.name, restaurantCopy.name);

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
