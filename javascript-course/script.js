'use strict';

//------         SCOPING   -------     //

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName},You are a ${age} years old ${job}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // creando una nueva constante con el mismo nombre de otra que esiste afuera, si se puede
      const firstName = 'Ana';
      const str = `you are a millenian, ${firstName}`; // aqui encontrara la constante a¡en su interior , en este caso 'Ana'
      console.log(str);
      console.log(millenial);

      // dando un nuevo valor a la variable con let output sin la palabra const no estamos creando una nueva constante si no solo darle otro valor
      output = 'NEWoutput';

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3)); // accesible porque esta dentro su bloque
    }

    // console.log(add (2, 3)); no accesible porque es una funciones dentro un bloque , amenos que no eliminemos el 'use strict'
    console.log(millenial); // accesible porque usa una constante declarada con var
    // console.log(str);  no accesible, afuera del block scope
    console.log(output); // accesible porque esta dentro y aqui ilustramos ese nuevo valor
  }
  printAge();

  return age;
}

const firstName = 'Mario';
const job = 'Programer';
calcAge(1983);

//------         HOISTING TDZ-------     //

// usamos diferentes variables

//  intentamos llamar las variables antes de ejecutarlas:

console.log(me); // con var resulta undefined
// console.log(newJob); aqui las dos no pueden ser ejecutadas antes de llegar a ellas
// console.log(year); aqui las dos no pueden ser ejecutadas antes de llegar a ellas

var me = 'Mario';
let newJob = 'Programer';
const year = 1983;

// usamos diferentes funciones

//  intentamos llamar las funciones antes de ejecutarlas:

console.log(addDecl(2, 3)); // esta sera sin problema accesible
// console.log(addExpr(2, 3)); pero esta no porque las dos han sido definidas como variables con const
// console.log(addArrow(2, 3)); pero esta no porque las dos han sido definidas como variables con const

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// ejemplo de error

if (!numProducts) {
  deleteShopCart();
}
var numProducts = 10;

function deleteShopCart() {
  console.log(`all products deleted`);
}

// consigue leerse la linea pero resulta que  numProduct ya es undefined por que var es undefined tambien
// resultara que no hay productos cuando efectivamente hay 10

// ejemplo en window

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// variables con var crearan una propiedad en el objeto de ventana global mientras que con let y const no.

//------     THIS (KEY WORD)   -------     //

console.log(this); // la palabra this, llamara la window global

//    en una function declarition o function expresion

function calcAge(birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // aqui esta undefined , no pertenece a ningun objeto
}

calcAge(1983); // resultado undefined

// en una arrow function

const calAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); // aqui por el contrario puntara al global window
};

calAgeArrow(1983);

// como method

const mario = {
  year: 1983,
  calcAge: function () {
    console.log(this); // dentro un method si referira al dueño del objeto, en este caso mario
    console.log(2023 - this.year); // aqui llama a year que esta dentro este (this) object
  },
};
mario.calcAge();

const ana = {
  year: 1987,
};

ana.calcAge = mario.calcAge;
ana.calcAge();

const f = mario.calcAge;
// f()   esta es una funcion normal y la llamada se convierte in undefined
//  y dara un error de no poder leer this.year

//------     REGULAR FUNCTION & ARROW FUNCTION   -------     //

//---------   usar o no usar regural function o arrow function---- //

const marioR = {
  firstName: 'mario',
  year: 1983,
  calcAge: function () {
    console.log(2023 - this.year);
  },

  // greet: function(){
  //   console.log(`hola ${this.firstName}`);
  // }

  // simpre mejor usar una regular function como method para evitar errore de undefined

  // greet: ()=> console.log(`hey ${this.firstName}`),
  // de esta manera, usando un arrow function nos dara un resultado de undefined
  // por eso nunca hay que usar una arrow function como  method
};

//--------    cuando tenemos una function dentro un method ----- //

const anaF = {
  firstName: 'ana',
  year: 1987,
  calcAge: function () {
    console.log(2023 - this.year);

    // las siguientes lineas no podran acceder a la key word this

    // const isMillenial = function(){
    //   console.log(this.year >= 1981 && this.year <=1996);
    // }
    // isMillenial()

    // solucion 1
    // una vieja solucion es crear una nueva variable llamada "that" o "self"
    // afuera de la funcion que cojera le clave this del objeto

    // const self = this
    // const isMillenial = function (){
    //
    // }
    // isMillenial()

    // solucion 2
    // ahora la mas actual y adapta es usar un arrow function

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
};
anaF.calcAge();

//------     ARGUMENT KEY WORD   -------     //

// la palabra clave arguments esta disponible solo para las function expression y declaration

const addExpr2 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr2(2, 5);
addExpr2(2, 5, 8, 10); // esto nos dice que podemos agregar mas argumentos de los
// aunque si los parametros este caso son solo 2, y podriamos usarlos mas adelante

// var addArrow2 = (a, b) => {
//   console.log(arguments); // esta linea dara error
//   return a + b;
// };
// addArrow2(2, 5, 8);

// si intentamos usarlas con la arrow function nos dara error, aunque hay otros modos de modernos para tratar con multiples parametros.
