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
console.log(typeof(null)) // Object --> ERROR DE JAVASCRIPT

// TABLA DE CONVERSIONES DE TIPO

// Convertir a String
let valor = true
valor = String(valor); // "true"
valor = String(false); // "false"
valor = String(null); // "null"
valor = String(undefined); // "undefined"

// CONVERSION A NUMBER

// Conversiones númericas ocurren automáticamente en funciones matematicas y expresiones

console.log('6'/'2') // 3
console.log(1 + '2') // '12' + --> Concatenación
console.log('1' + 2) // '12' + --> Concatenación

valor = Number(undefined) // NaN
valor = Number(null) // 0
valor = Number(true) // 1
valor = Number(false) // 0 
valor = Number('') // 0
valor = Number('Hola Mundo') // NaN  ---> Error de calculo 

// CONVERSIÓN A BOOLEAN

valor = Boolean(undefined) // false
valor = Boolean(null) // false
valor = Boolean('') // false
valor = Boolean(NaN) // false 
valor = Boolean(0) // false
valor = Boolean('0') // true
valor = Boolean('Hola Mundo') // true

// COMPARACIONES ENTRE DIFERENTES TIPOS
// Primero ocurren las conversiones a entero y luego a boolean
console.log('2' > 1) // true
console.log('01' == 1) // true
console.log(true > 0) // true
console.log(false > 0) // false
console.log('Hola' > 1) // false 
console.log(null == undefined) // true ---> Error JS
console.log(0 == false) // true
console.log('0' == false) // true

// IF
/*
if (condicion){

} else if(){

}else{

}
*/

// IF DE LINEA

// if(condicion) console.log('Mensaje')

if ('45a'/3){
    console.log("Entró") // No entró
}

if ('0'){
    console.log("Entró") // Entró ---> Si no hay expresión matematica no lo conv a entero
}

// Operador Ternario
//resultado = Condicion ? operacion verdadera : operacion falsa;

resultado = 4 > 5 ? 'Es verdadero' : 'Es falso';

// WHILE
/* while(condicion){

} */

// DO WHILE
/*
do {

} while(condicion)
*/

// FOR
/*
for(comienzo; condicion; incremento){

}
*/

for (i = 0; i <= 10; i++){
    console.log(i+1)
}

// SWITCH

/*
switch(valor): {
    case valor1:
        [breack];
    case valor2:
        [break];
    default:
        [break];
}
*/

a = 2 + 2
switch(a){
    case 3:
        console.log('El resultado es 3')
        break;
    case 4:
        console.log('El resultado es 4')
        break;
    default:
        console.log('Ninguno de los valores')

}

// VAR VS LET VS CONST

/*var edad_2 = 10;
var edad_2 = 20;
console.log(edad_2);*/ //No permite modificar el valor de la variable

/*let edad_2 = 10;
let edad_2 = 20;
console.log(edad_2);*/ 

/*const edad_2 = 10;
edad_2 = 20;
console.log(edad_2)*/ //Genera un error

// ESCOPE DE VAR, LET Y CONST

/*var edad_2 = 10;
if(true){
    var edad_2 = 20;
    console.log(edad_2);
}
console.log(edad_2) */

/*let edad_2 = 10;
if(true){
    let edad_2 = 20;
    console.log(edad_2);
}
console.log(edad_2) */

/*const edad_2 = 10;
if(true){
    const edad_2 = 20;
    console.log(edad_2);
}
console.log(edad_2) */

/*let edades = [10, 20, 30]
edades = [20, 40, 50]
edades.push(70) //Agregar un valor a la lista
console.log(edades)*/

/*const edades = [10, 20, 30] 
//edades = [20, 40, 50] //No permite modificar 
edades.push(70) //Permite agregar un valor a la lista
console.log(edades)*/

const persona = {
    nombre: "Jose",
    apellido: "De la hoz",
    edad: 23
}
persona.edad = 20
persona.nombre = "Diego"
persona.apellido = "Ballena"

console.log(persona)

// FUNCIONES

/*function sumar(num_uno, num_dos){
    console.log(num_uno+num_dos)
}

sumar(2,6)*/

// FUNCIÓN FLECHA

const sumar = (num_uno, num_dos) => {
    console.log(num_uno + num_dos)
}

sumar(2,8)

const saludar = () => {
    console.log("Hola Mundo")
}

const cuadrado = base => {
    console.log(base ** 2)
}

cuadrado(5)

const sumar_2 = (num_uno, num_dos) => {
    return(num_uno + num_dos)
}

const suma_3 = (num_uno, num_dos) => num_uno + num_dos

// TEMPLATE STRING

//Backtick
const potencia = (base, exponente) => `El resultado de la potencia es: ${base ** exponente}`

//Destructuring Objects

const mascota ={
    nombre: 'Tom',
    edad_o: 5,
    vivo: true,
    razas: ['Pastor Aleman', 'Pitbull']
}

console.log(mascota.nombre)

const {edad_o, vivo} = mascota  //permite almacenar en una variable los datos que se extraen del objeto

console.log(edad_o)

// PROMESAS

/*const data = [
    {
        title: 'Aprendiendo JavaScript',
        year: '2021',
        isbn: '994-223-4527',
        author: 'Roberto Morales'
    },{
        title: 'Aprendiendo Python',
        year: '2018',
        isbn: '994-223-4527',
        author: 'Jose De la hoz'
    },{
        title: 'Aprendiendo Ruby',
        year: '2019',
        isbn: '994-223-4999',
        author: 'Manuel Castro'
    }
]

function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 5000)
    })
}

getData().then((response)=> console.log(response))*/

// ASYNC & AWAIT (AZÚCAR SINTAGTICO)

/*const data = [
    {
        title: 'Aprendiendo JavaScript',
        year: '2021',
        isbn: '994-223-4527',
        author: 'Roberto Morales'
    },{
        title: 'Aprendiendo Python',
        year: '2018',
        isbn: '994-223-4527',
        author: 'Jose De la hoz'
    },{
        title: 'Aprendiendo Ruby',
        year: '2019',
        isbn: '994-223-4999',
        author: 'Manuel Castro'
    }
]

/*const getData = () => {
    setTimeout(() => {
        return data;
    }, 2000)
}

function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 5000)
    })
}

datos = getData()
console.log(datos)

async function getInformation(){
    const libros = await getData();
    console.log(libros)
}*/


// CONSUMO API PUBLICA (RICK AND MORTY)

const getPersonajes = async () => {
    try{
        const resp = await fetch("https://rickandmortyapi.com/api/character")
        const data = await resp.json()
        const results = data.results
        console.log(results)
    }catch(error){
        console.log(error)
    }
}

getPersonajes()