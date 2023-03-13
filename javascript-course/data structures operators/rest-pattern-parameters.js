'use strict';

// -----  THE REST PATTERN AND REST PARAMETERS  ---- //

//--- En Arrays---//

// Recapitulando el spread operator sirve per descomponer un array o un objeto
// es un spread oprator si se encuentra despues del operador de asignacion (=) a su derecha
//ejemplo de un spread  operator:
const arr2 = [1, 2, ...[3, 4, 5]];
console.log(arr2); //RESP: [1, 2, 3, 4, 5]

// El rest pattern por de contrario sirve para almacenar en un array o objeto lo valores que sobran
// colocando los puntos antes del (=) sera un rest pattern, a su izquierda
// ejemplo de rest pattern:
const [k, l, , ...others] = [1, 2, 3, 4, 5];
console.log(k, l, others); //RESP:: 1 2 [ 4, 5];

//Tambien podemos tener los dos operadores a los ambos lados del operador de asignacion (=)
const [, , primo, , segundo, ...allOthers] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(primo, segundo, allOthers); // RESP:: Risotto Bruschetta  ['Garlic Bread', 'Caprese Salad']

//NOTA , notar que con un rest pattern creamos variables y con el spread NO

//--- En Objects---//

// Dentro el objeto const podemos llamar directamente en nombre del elemento en este caso 'sat',aunque si despues podemos darle otro nombre a esta variable. 'sat:weekEnd'
const { sat: weekEnd, ...weekDays } = restaurant.openingHours;
console.log(weekEnd, weekDays); //RESP:: {open: 0, close: 24} {thu: {…}, fri: {…}}

//---En funciones--//

//Como el spread operator puede descomponer un array y pasarlo como argumentos a un funcion
// El rest pattern puede hacer tambien el contario, cojer datos singolares y los almacena juntos en un array

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum); // RESP:: 5 17 25 en tres linea diferentes
  console.log(numbers); //RESP:: [2, 3] [5, 3, 7, 2] [8, 2, 5, 3, 2, 1, 4] en tres linea diferentes
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

// extra:
const u = [23, 5, 7]; //RESP:: [23, 5, 7]
add(...u); // RESP:: 35

//Usamos ahora el metodo 'orderPizza' dentro 'restaurant'.
restaurant.orderPizza('peppers', 'onion', 'olives', 'spinach'); //RESP:: peppers ['onion', 'olives', 'spinach']
restaurant.orderPizza('onion');//RESP:: onion []
// el primer ingrediente se al almaceno en 'mainIngredient' y el resto en el array 'othersIngredients'


// NOTA: spread operator se usa donde escribiriamos valores separados por una coma, el rest pattern se usa donde escribiriamos nombre de variables separados por coma