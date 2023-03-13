'use strict';

// ------- LOGICAL OPERATOR &&   AND  OR || , SHORT CIRCUITING -----  //
// Pueden usar cualquier tipo de dato, regresar cualquier tipo de dato y pueden hacer un short circuiting:

// ------- OR || ----
// Significa que si el primer valor es verdadero, se mostrara ese valor olvidando los suguientes

console.log(3 || 'Mario'); //RESP:: 3
// el primer valor verdadero que se encuntra es '3' y alli para el calculo

console.log('' || 'Mario'); // RESP:: Mario
// el string vacio '' es falso porque es undefined , pasando al siguiente dato que es verdadero 'Mario'

console.log(true || 0); // RESP:: true
// aqui es un boolan verdadero, se muertra y para el calculo

console.log(undefined || null); // RESP:: null
console.log(false || 0); // RESP:: 0
console.log(0 || undefined || false); // RESP:: false
// en los tres ejemplo no se presenta la condición para un short circuiting asi que se mostrara el ultimo elemento

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // RESP:: Hello
// no importa cuando valores se unan, apenas de encuntra un verdadero, ese se mostrara y allí parara el calculo.

// NOTA: Recordar que con el operador OR , el resultado será verdadero si almenos uno de los valores es verdadero

//Verificamos si un valor en el objeto 'restaurant' esiste usando un ternary operator:
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1); //RESP:: 10
// 'restaurant.numGuest' no esiste y es por eso que será 10

// Pero la manera mas corta di verificarlo es usar el operador logico OR
const guest2 = restaurant.numGuest || 15;
console.log(guest2); //RESP:: 15
// asi que se 'guest2' será igual a 'restaurant.numGuest' si es que esiste, al contrario será igual a 15.

// ------- AND &&  ----
// Funciona en la manera contraria, el calculo se detendrá cuando se encontrará un valor falso

console.log(0 && 'Mario'); // RESP:: 0
// encontramos el valor falso en '0'
console.log('Mario' && undefined && 39); //RESP:: undefined
// apenas encuentra un valor falso parará el calculo y se mostrará
console.log(7 && 'Mario' && true); // RESP:: true
// y cuando no se encuentra ni uno falos, se mostrará el ultimo aunque si es verdadero

// Ejemplo practico para verificar si 'orderPizza' en el objeto 'restaurant' esiste:
restaurant.orderPizza && restaurant.orderPizza('cheese', 'garlic', 'salami'); // RESP:: cheese ['garlic', 'salami']

// NOTA : Podemos usar el || para asignar valores predeterminados y el && para ejecutar codigo si el primer valor es verdadero

// ------- NULLISH COALESSCING OPERATOR  ??  -----  //
// Se introdujo en ES2020

//Usando el operador || podriamos encontrarnos con el valor '0' que seria falso pero quisieramos representarlo como un valor numerico de cantidad. Ejem parecido a 'guest2'

restaurant.numSeats = 0;
const seats = restaurant.numSeats || 12;
console.log(seats); // RESP:: 12
// podemos ver que '0' viene calificado como false asi que pasa al siguiente valor '12', pero queremos que efectivamemte se demuestre que no hay seats disponibles.

// Usamos ahora el nuevo operador ??
const seats2 = restaurant.numSeats ?? 12;
console.log(seats2); //RESP:: 0
// NO funciona con la idea de los valore falsos si no con valores  nulos (nullish values): null and undefined, 0 and '' no son icluidos y son considerados como valores reales o verdaderos.

// ------- LOGICAL ASSIGMENT OPERATORS (OPERADORES DE ASIGNACION LOGICA)  -----  //
// Se introdujo en ES2021

//Creamos dos nuevos objetos 'rest'
const rest1 = {
  name: 'Capri',
  numGuest: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;
console.log(rest1) ; // RESP:: {name: 'Capri', numGuest: 20}
console.log(rest2); // RESP:: {name: 'La Piazza', owner: 'Giovanni Rossi', numGuest: 10}

