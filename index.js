// Hola Mundo

//alert('Hola Mundo');

// Comentarios de línea
/*
Comentarios de más de una línea
*/

// Sentencias
//alert('Hola'); alert('Mundo');

//alert('Hola')
//alert('Mundo')

// Variables

let a = 5;
let b = 6;
let suma = a + b;
//console.log("El resultado de la suma es "+suma)

let nombre = "Roberto"
let nombre_dos = nombre

nombre_dos = "Carlos"
//console.log("El primer nombre es: ", nombre)
//console.log("El segundo nombre es: ",nombre_dos)

// Notaciones de variables

camelCase = 5
snake_case = 5
Pascal_Case = 5


let nombre_completo = "Roberto Morales Ortega"

// No puedes iniciar con número
// No puede tener guión medio


// Constantes

const PI = 3.1416;
const COLOR = "Rojo";

// Tipos de datos

// Tipo de dato Number

let n = 123;
//console.log(n);

// Valores numéricos especiales, Infinity y NaN

//console.log(1 / 0)

// Nan representa un error de cálculo, pero no es un error en javascript

//console.log("texto" / 2);

// NaN es pegajoso. Cualquier operación con NaN devuelve NaN
//console.log("texto" - 2 * 5)

// Tipo String

let t = 'a'
let c = "a"
let d = `a` // Backtiks funcionad extendida
//console.log('Roberto alias "Robert"')
//console.log("I can't do it")
//console.log(`Hola Mundo`)

nombre = "Roberto";
//console.log(`Hola ${nombre}`)
//console.log('Hola ${nombre}')
//console.log("Hola ${nombre}")

// Tipo Booleano
// true y false

let verdadero = true
let falso = false
let mayor = 4 > 5

// Valor null

// Valor especial que NO PERTENECE A NINGUN TIPO DE DATO ANTERIOR.
// Forma un tipo propio separado que contiene sólo el valor de null

let edad = null;
//console.log(edad)

// En JS null NO SIGNIFICA UN OBJETO NO EXISTENTE
// EN JS null es un valor especial que significa nada, vacío o desconocido

// Valor Undefined

// Valor especial que NO PERTENECE A NINGUN TIPO DE DATO ANTERIOR.
// Undefined significa valor no asignado

let valor_no_asignado;
//console.log(valor_no_asignado);

// Operador typeof o función typeof(x)
// devuelte un tipo de dato

console.log(typeof(undefined)) // undefined
console.log(typeof(0)) // number
console.log(typeof(true)) // boolean
console.log(typeof(3.1416)) // number
console.log(typeof('Hola Mundo')) //string

console.log(typeof(alert)) // function
console.log(typeof(null)) // Object - ERROR DE JAVASCRIPT


// CONVERSIÓN DE TIPOS

// Convertir a String
let valor = true;
valor = String(valor); // "true"
valor = String(false) // "false"
valor = String(null) // "null"
valor = String(undefined) //"undefined"

// Conversión a Number

// Conversiones numéricas ocurren automáticamente en funciones 
// matemáticas y expresiones.

console.log('6' / '2') // 3
console.log(1 + '2') // '12' + es concatenación
console.log('1' + 2) // '12' + es concatenación

valor = Number(undefined) // NaN
valor = Number(null) // 0
valor = Number(true) // 1
valor = Number(false) // 0
valor = Number('') // 0
valor = Number('Hola Mundo') //NaN
console.log(valor) 

// Conversión a Boolean

valor = Boolean(undefined) // false
valor = Boolean(null) // false
valor = Boolean('') // false
valor = Boolean(NaN) // false
valor = Boolean(0) // false
valor = Boolean('0') // true
valor = Boolean('hola') // true

/*
TABLA CONVERSIÓN NÚMEROS
undefined -> NaN
null -> 0
true -> 1
false -> 0
string '' -> 0
string 'hola' -> NaN
*/

/*
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false

'0' -> true
'  ' -> true
*/

// Comparaciones entre diferente tipos
console.log('2'>1) // true
console.log('01' == 1) // true
console.log(true > 0) // true
console.log(false > 0) //false
console.log('hola'>1) // false
console.log(null == undefined) // true Error de JavaScript
console.log(0 == false) // true
console.log('0' == false) // true

// if

/*
if (condicion){

}else if(condicion){

}else{

}
*/

// if de linea

// if(condicion) console.log('Mensaje')

// Operador Ternario
// condicion ? operacion verdadera : operacion falsa;

resultado = 4 > 5 ? 'es verdadero': 'es falso'
console.log(resultado)

// WHILE
/* while(condicion){

}*/

// DO WHILE
/*
do {

}while(condicion)
*/

// FOR
/*
for (conmienzo; condicion; incremento){

}
*/ 

for (i = 0; i<=10; i++){
    console.log(i+1)
}

//SWITCH

/*
switch(valor):{
    case valor1:
        [break];
    case valor2:
        [break];
    default:
        [break];
    
}
*/

a = 2 + 3
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

// var vs let vs const

/*
var edad_2 = 10;
var edad_2 = 20;
console.log(edad_2);*/

/*let edad2 = 10;
edad2 = 20;*/

/*const edad_2 = 10;
edad_2 = 20;*/

//Escope de var, let y const

/*var edad_2 = 10;
if (true){
    var edad_2 = 20;
    console.log(edad_2);
}
console.log(edad_2)*/
/*
let edad_2 = 10;
if (true){
    let edad_2 = 20;
    console.log(edad_2);
}
console.log(edad_2)

const edad_2 = 10;
if (true){
    const edad_2 = 20;
    console.log(edad_2);
}
console.log(edad_2)*/

/*let edades = [10, 20, 30]
edades = [20, 40, 50]
edades.push(70)
console.log(edades)*/

/*const edades = [10, 20, 30]
edades.push(70)
console.log(edades)*/

/*
const persona = {
    nombre: "Roberto",
    apellido: "Morales",
    edad : 33
}
persona.nombre = "Carlos"
persona.apellido = "Mejía"
persona.edad = "12"

console.log(persona)*/

// Funciones
/*
function sumar(num_uno, num_dos){
    console.log(num_uno + num_dos)
}

sumar(4, 5)*/

// Función Flecha

const sumar = (num_uno, num_dos) => {
    console.log(num_uno + num_dos)
}

const saludar = () =>{
    console.log('Hola Mundo')
}

const cuadrado = base =>{
    console.log(base ** cuadrado)
}

const sumar_dos = (num_uno, num_dos) => {
    return num_uno + num_dos;
}

const sumar_tres = (num_uno, num_dos) => num_uno + num_dos;

// Template String

//backtick
const potencia = (base, exponente) => `El resultado de la potencia es ${base ** exponente}`

// Destructuring Objects

const mascota = {
    nombre: 'Tom',
    edad: 5,
    vivo: true,
    razas: ['Pastor Alemán', 'Pitbul']
}

console.log(mascota.nombre)
const {edad, vivo} = mascota


// PROMESAS

const data = [
    {
      title: 'Aprendiendo JavaScript',
      year: '2021',
      isbn: '994-223-4527',
      author: 'Roberto Morales'
    },{
      title: 'Aprendiendo Python',
      year: '2018',
      isbn: '994-555-4527',
      author: 'Manuel Castro'
    },{
      title: 'Aprendiendo Ruby',
      year: '2019',
      isbn: '994-223-3333',
      author: 'Carlos Mejía'
    }
  ]
  //const getData = () => data;
  /*const getData = () => {
    setTimeout(() => {
      return data;
    }, 1000)
  }*/
  
  function getData(){
    return new Promise((resolve, reject)=> {
      setTimeout(()=>{
        resolve(data);
      }, 5000)
    })
  }
  
  /*datos = getData()
  console.log(datos)*/
  
  getData().then((response)=> console.log(response))

// Async & await (azúcar sintáctico)

/*
const obtenerPersonajes = async () => {
  try{
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()
    const results = data.results
    console.log(results)
  }catch(error){
    console.log(error)
  }
}


obtenerPersonajes()

*/