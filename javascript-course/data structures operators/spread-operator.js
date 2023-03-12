'use strict';

// -----  THE SPREAD OPERATOR (...) (OPERADOR DE PROPAGACION)---- //

// El operador de propagacion nos ayuda a descomponer un array.

// La siguiente es la manera menos correcta de hacerlo aunque si era la unica usada antes de ES6
const array = [7, 8, 9];
const badNewArray = [1, 2, array[0], array[1], array[2]];
console.log(badNewArray); // RESP::[1, 2, 7, 8, 9]

// Esta es la mas usada ahora despues de ES6
// De esta manera el 'array' se descompone y luego los valores van inseridos el 'goodNewArray'
const goodNewArray = [1, 2, ...array];
console.log(goodNewArray); // RESP::[1, 2, 7, 8, 9]

//Si quisieramos por ejemplo descomponer y mostrar 'goodNewArray':
// sacariamos los valores afuera del array.
console.log(...goodNewArray); // RESP:: 1 2 7 8 9

// ejemplo si quisieramos crear un nuevo menu para el restaurante
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu); // RESP::  ['Pizza', 'Pasta', 'Risotto', 'Gnocchi']
// notar que aqui se crea un nuevo array y no se esta manipulando el original 'restaurant.mainMenu'

//NOTA: el spread operator tambien funciona como destruturador pero no crea nuevas variables y abarca todos los valores/elementos del array, separando los valores por una coma.

// Tambien se puede usar para hacer copia de otras arrays:
const copyMainMenu = [...restaurant.mainMenu];
console.log(copyMainMenu); // RESP:: ['Pizza', 'Pasta', 'Risotto']

// y obviamente a unir dos o mas arrays:

const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu); //RESP:: ['Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// El spread operator funciona en los array asi como en todos los iterables que son: arrays, strings, maps, sets. pero NO abjects
// entonces podemos descomponer una string en elementos individuales

const string = 'Mario';
const lettersString = [...string, '', 'R'];
console.log(lettersString); // RESP:: ['M', 'a', 'r', 'i', 'o', '', 'R']
console.log(...lettersString); // RESP:: M a r i o  R
console.log(...string); // RESP:: M a r i o

//NOTA: recordar que valores multiplos separados por coma solo se esperan cuando pasamos argumentos en una funcion o cuando creamos arrays
// console.log(`${...string} Rivera`); este script por ejemplo no se acepta porque en '${} 'se espera una variable

// Ejemplo con la funcion 'orderPasta' en el objeto 'restaurant'

// const ingredients = [
//   prompt("let's prepare pasta! ingridient 1?"),
//   prompt('ingridient 2?'),
//   prompt('ingridient 3?'),
// ]; // escondemos los prompts, pero seria otra buena opcion de optener los datos.

const ingredients = ['oil', 'mushroom', 'peppers'];
restaurant.orderPasta(...ingredients); //RESP:: here your pasta with oil,mushroom,peppers


// Usemos el spread operator en objetos
// despues de ES6 podemos tambien usar el spread operator en objetos auqnue si no son iterables
// unimos 'restaurant' y agregamos datos a un nuevo objeto 'newRestaurant'
const newRestaurant = {
  foundedYear: '1998',
  ...restaurant,
  founder: 'Mario Rivera',
}; 
console.log(newRestaurant); // RESP:: contiene todos los datos de 'restaurant' mas los valores de 'foundedYear' y 'founder'

// tambien podemos copiar todo un objeto y al mismo tiempo poder cambiar algun dato sin alterar el original
// cambiamos el nombre del restaurante en 'restaurantCopy'
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Restaurante Roma'; 
console.log(restaurant.name, )// RESP:: Classico Italiano
console.log(restaurantCopy.name);// RESP:: Restaurante Roma