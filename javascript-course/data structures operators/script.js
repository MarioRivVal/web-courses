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

  // ejemplo 4
  // creamos uns funcion para poder almacenar algun argumento en una variable y el resto en un array con el rest pattern

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// -----  THE REST PATTERN AND PARAMETERS  ---- //

// 1. destructuracion

//--- in arrays--- //
// este es un spread operator porque los tres puntos estan a la derecha del operador de asignacion (=),
const arr2 = [1, 2, ...[3, 4, 5]];
// estando a la izquierzq, osea antes dek operador de asignacion (=), es un rest pattern:
const [k, l, , ...others] = [1, 2, 3, 4, 5];
console.log(k, l, others);

// otro ejemplo: donde en un script pueden estar los dos operadores a la izquierda y derecha

const [primo, , segundo, ...resto] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(primo, segundo, resto);

//--- in objects ---//

const { sat: weekEnd, ...jobDays } = restaurant.openingHours;
console.log(weekEnd, jobDays);

// 2. en functions
// cuando destructuramos un array para pasar los argumentos individualmente en los parametros de una funcion

// en una simple suma:
const add = function (...numbers) {
  // aqui los argumentos vienen almacenados en un array como se ve en console.log(numbers)
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(numbers);
  console.log(sum);
};
add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 7, 9, 12);

// si tuviaremos una variable con los argumentos dentro una array
const u = [23, 5, 7];
add(...u); // aqui los argumentos vienen propagados o metidos afuera del array

// llamamos el ejemplo 4
restaurant.orderPizza('mushroom', 'patatas', 'oil', 'tomate');

// NOTA: spread operator se usa donde escribiriamos valores separados por una coma, el rest pattern se usa donde escribiriamos nombre de variables separados por coma

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