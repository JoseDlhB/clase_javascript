// Hola Mundo

//alert('Hola Mundo');

// COMENTARIOS DE LÍNEA
/*
COMENTARIOS DE MÁS DE UNA LÍNEA
*/

// VARIABLE

let a = 5; //Declarar variables, las variables no son tipadas
let b = 5;
let suma = a + b;
console.log("El resultado de la suma es: "+ suma);

let nombre = "Jose"
let nombre_dos = nombre

nombre_dos = "Carlos"
console.log("El primer nombre es: ",nombre)
console.log("El segundo nombre es: ",nombre_dos)

// NOTACIONES DE VARIABLES

camelCase = 5;
snake_case = 5;
Pascal_Case = 5;

let nombre_completo = "Jose De la hoz"

// No se puede iniciar con números
// No se puede iniciar con signos

// CONSTANTES

const PI = 3.1416;
const COLOR = "Rojo";

// TIPOS DE DATOS

// TIPO DE DATO NUMBER 

let n = 123;
console.log(n);

// VALORES NÚMERICOS ESPECIALES, INFINITY Y NaN (No son errores, son valores númericos de Js)

console.log(1/0); //Infinity  

//NaN representa un error de cálculo, pero no es un error en javascript

console.log("texto"/2) //NaN ---> Error de calculo

//Nan es pegajoso. cualquier operacion con NaN devuelve NaN

console.log("texto" - 2 * 5)

// TIPO String

let t = 'a';
let c = "a";
let d = `a` // Backtiks

console.log('Jose Alfredo alias "Joseth"')
console.log("I can't do it")
console.log(`Hola Mundo`) // Backtik 
console.log(`Hola ${t}`) //Funcionalidad extendida o interpolación

//Tipo Booleano
//true y false

let verdadero = true;
let falso = false;
let mayor = 5 > 3;

// VALOR NULL

//Valor especial que NO PERTENECE A NINGUN TIPO DE DATO ANTERIOR.
//Forma un tipo propio separado que contiene sólo el valor null

let edad = null;
console.log(edad)

// En JS null NO SIGNIFICA UN OBJETO NO EXITENTE 
// EN JS null es un valor especial que significa nada, vacío o desconocido 

// Valor Undefined 

// Valor especial que NO PERTENECE A NINGUN TIPO DE DATO ANTERIOR
// Undefined significa valor no asignado

let valor_no_asignado;
console.log(valor_no_asignado)

// OPERADOR O FUNCIÓN typeof(x)

console.log(typeof(undefined)) // Undefined
console.log(typeof(0)) // Number
console.log(typeof(true)) // Boolean
console.log(typeof(3.1416)) // Number 
console.log(typeof("undefined")) // String
console.log(typeof(alert)) // Funtion
console.log(typeof(null)) // Undefined