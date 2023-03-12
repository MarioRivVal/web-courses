'use strict';

// -----  DESTRUCTURING OBJECTS---- //

// NOTA: destructuracion en practica es extraer datos dentro un objeto y almacernarlos en una variable. en este caso los nombres de las variables coinciden con el nombre de las propiedades al interno del objeto

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // RESP:: Classico Italiano
//{thu: {…}, fri: {…}, sat: {…}}
//['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// o si queremos darle otro nombre a la variable:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); // RESP:: la misma del presedente

// para estableces valores predeterminados a propiedades que no sabemos si existen o no, una buena practica es darles el valor vacio []
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); //RESP:: []
//['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// cambiar el valor de las variables dentro un objeto
// es posible hacerlo muy parecido con los array pero habra que envolver el script entre parentesis redonda ()
let d = 111;
let e = 999;

const obj = { d: 23, e: 7, f: 14 };
({ d, e } = obj);
console.log(d, e); // RESP:: 23 7

// objetos anidados (nested)
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); //RESP:: 11 23
// destructuramos objetos dentro objeto simplemtente abriendo otras parentesis curva '{ fri:{open, close} }'

// si quisieramos tambien podriamos cambiar el nombre de las varibles en tu interior:
const {
  fri: { open: openTime, close: closeTime },
} = openingHours;
console.log(openTime, closeTime); //RESP: 11 23


// EJEMPLO con una funcion:
// cuando trabajamos con una funcion con muchos parametros y no conocemos el orden se puede pasar a la funcion simplemente un objeto como argumento y despues seleccionamos los necesarios:
restaurant.orderDelivery({
  time: '22:30',
  address: 'via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});  // RESP: Order recived! Garlic Bread and Risotto deliver to via del sole, 21 at 22:30

//aqui llamamos la funcion con el valor predeterminado en 'time'
restaurant.orderDelivery({
  address: 'via del sole, 21',
  mainIndex:0,
  starterIndex:1,
}); //RESP:: Order recived! Bruschetta and Pizza deliver to via del sole, 21 at 20:00
