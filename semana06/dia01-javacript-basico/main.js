// COMENTARIOS

// console.log('Hola a todos!')

/*
  Esto
  es 
  un
  comentario
  de múltiples
  líneas
*/

// TIPOS DE DATOS (https://lenguajejs.com/javascript/)

// PRIMITIVOS: Number, String, Boolean (true, false), undefined, null, BigInt, Symbol

// NUMBER

console.log(20);
console.log(15.69)
console.log(0.9999)
console.log(-36)

console.log(typeof 20); // number
console.log(typeof 15.69) // number
console.log(typeof 0.9999) // number
console.log(typeof -36) // number

// STRING

console.log('Claudia')
console.log("Farit")
console.log("200")

console.log(typeof 'Claudia') // string
console.log(typeof "Farit") // string
console.log(typeof "200") // string

// BOOLEAN -> false o true

console.log(true)
console.log(typeof false)

// UNDEFINED

let nombre // Declaración de una variable
console.log(nombre)
console.log(typeof nombre)

// NULL

let apellido = null
console.log(apellido)
console.log(typeof apellido)

// BigInt (Permite almacenar numeros muy grandes)
// Symbol (Ayudan a crear valores únicos e irrepetibles)

// VARIABLES Y CONSTANTES

// ECMASCRIPT 5 === ES5
// ECMASCRIPT 6 === ES6

// var -> ES5 (Forma de declarar una variable pero no es recomendado su uso, la declaración es a nivel de la función) ❌

var minombre = 'hola'

// CONST -> ES6 (El uso de const es lo recomendado) ✅

const edad = 55 // Es obligatorio inicializarlo
const _edad = 25
const edadDeMiHijoMayor = 15
const PI = 3.14
const empresa = 'JS'
const esMayorDeEdad = false

// edad = 90 // Uncaught TypeError: Assignment to constant variable. ❌

console.log(edad)

// LET -> ES6 (El uso de let e lo recomendado) ✅

let edad2 = 35 // No es obligatorio inicializarlo

edad2 = 39 // estamos reasignando un valor numérico/string/boolean/etc
console.log(typeof edad2)
edad2 = "victor"
console.log(typeof edad2)
edad2 = true
console.log(typeof edad2)

console.log('1121' + 15  + 19)

// OPERADORES MATEMÁTICOS

console.log(1 + 2)
console.log(3 - 2)
console.log(2 * 2)
console.log(1 / 2)
console.log(1 % 2) // Residuo
console.log(2 ** 3) // Dos elevado al cubo
console.log(Math.pow(2, 3)) // Hace lo mismo que 2 ** 3

// OPERADOR DE ASIGNACIÓN (=)

const genero = 'femenino'

console.log(genero)

// OPERADORES DE COMPARACIÓN

// Operador de igualdad y desiguadad NO ESTRICTA (==, !=)
// Devuelve un valor booleano (true o false)
// Este operador no toma en cuenta el tipo de dato al comparar sino solo sus valores

console.log(1 == 1) // true
console.log(1 == '1') // true ❓
console.log(1 != '1') // false ❓

// Operado de igualdad y desigualdad ESTRICTA (===, !==) (ES RECOMENDABLE USARLO CASI SIEMPRE)
// Devuelve un valor booleano (true o false)
// Este operado si toma en cuenta el tipo de datos y sus valores al comparar

console.log(1 === 1) // true ✅
console.log(1 === '1') // false ✅ 
console.log(1 !== '1') // true ✅

// OPERADORES DE COMPARACIÓN (siempre devuelven un booleano)

console.log(8 > 5)
console.log(5 < 1)
console.log(8 >= 5)
console.log(5 <= 1)

// OPERADORES LÓGICOS (AND, OR, NEGACIÓN)

console.log(true && false) // AND
console.log(true || false) // OR
console.log(!true) // NEGACIÓN

// OPERADORES DE CADENA (CONCATENACIÓN)

const saludo = 'Hola, '
const nombreCompleto = 'Victor' + ' ' + 'Villazón'
const miEdad = 38

const imprimirSaludo = saludo + nombreCompleto + ". Tengo " + miEdad + ' años'

console.log(nombreCompleto)
console.log(imprimirSaludo)

// EJERCICIOS

// 1. Retorna true si dos strings tienen la misma longitud sino devolver false

const cadena1 = 'codigox'
const cadena2 = 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length)

// 2. (TODO) Retornar true si un numero es menor que 40 sino devolver false
// 3. (TODO) Retornar True si un numero es menor que 60 sino devolver False
// 4. (TODO) Retornar True si un numero es par sino devolver False
// 5. (TODO) Retornar True si un numero es impar sino devolver False
// 6. (TODO) calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%

// CONDICIONALES (IF)

if (true) {
  // El bloque que se ejecuta si la condición es verdadera (true)
}

const numero = 33

const esPar = numero % 2 === 0 // boolean

if (esPar) {
  console.log('Este número es par', numero)
}

// CONDICIONALES (IF, ELSE)

if (true) {
  // Se ejecuta este bloque si la condición es verdadera
} else {
  // Se ejecuta este bloque si la condición es falsa
}

if (esPar) { // true, 1, 'hola'
  console.log('Este número es par', numero)
} else {
  console.log('Este número es impar', numero)
}

// CONDICIONALES (IF, ELSE IF, ELSE)

if (false) {
  // Se ejecuta este bloque si la condición es verdadera
} else if (false) {
  // Se ejecuta este bloque si la condición es verdadera
} else if (false) {
  // Se ejecuta este bloque si la condición es verdadera
} else {
  // Se ejecuta este bloque si ninguna condición se cumple
}

let heroe = 'Spiderman'

if (heroe === 'Batman') {
  console.log('Hola soy Bruce')
} else if (heroe === 'Spiderman') {
  console.log('Hola soy Peter')
} else if (heroe === 'Ironman') {
  console.log('Hola soy Tony')
} else {
  console.log('No soy un heroe 😒')
}

// CONDICIONALES (SWITCH)

heroe = 'Ironman'

switch (heroe) {
  case 'Batman':
    console.log('Hola soy Bruce')
    break
  case 'Spiderman':
    console.log('Hola soy Peter')
    break
  case 'Ironman':
    console.log('Hola soy Tony')
    break
  default:
    console.log('No soy un heroe 😒')
}

// ESTRUCTURAS REPETITIVAS

// FOR (Sirve para repetir una o varias instrucciones)

for(let i = 0; i < 10; i++) {
  console.log(i)
}

// WHILE

let j = 0

while (j < 10) {
  console.log('while', j)
  // j = j + 1
  j++
}

// DO WHILE

let k = 0

do {
  console.log('do while', k)
  k = k + 1
  // k++
} while (k < 10)

// EJERCICIOS

// 1. Determinar si la edad de una persona es mayor o menor de edad mostrando 'Mayor de edad' o 'Menor de edad' según corresponda.

const edadPersona = 15

if (edadPersona >= 18) {
  console.log('Mayor de edad')
} else {
  console.log('Menor de edad')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'
// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número
// 4. Retornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10

// FUNCIONES (Son bloques de código que podemos reutlizar)

// Declaración
function nombreDeLaFuncion() {
  // Cuerpo de la función y aquí va la lógica a ejecutar y reutilizar
}

// Ejecutar, aquí estamos llamando a la función
nombreDeLaFuncion()
nombreDeLaFuncion()

// Funciones sin parámetros

function imprimirMiNombre() {
  console.log('Hola soy Victor')
  console.log('Y soy Frontend')
}

imprimirMiNombre()
imprimirMiNombre()

// Funciones con parámetros y valores por defecto

function imprimirUnNombre(nombre = 'Anónimo') {
  // if (nombre === undefined) {
  //   nombre = 'Anónimo'
  // }

  console.log('Hola soy ' + nombre)
}

imprimirUnNombre()
imprimirUnNombre('Victor')

function imprimirNombreYApellido(nombre, apellido, edad) {
  // console.log('Hola soy ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años.')
  console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad} años`)
}

imprimirNombreYApellido() // Hola soy undefined undefined y tengo undefined años.
imprimirNombreYApellido('Victor', 'Villazón', '38')

// EJERCICIOS

// 1. Usando funciones determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad.
// 2. Retornar true si un numero es primo sino devolver false
// Pista: un numero primo es divisible por sí mismo y por 1


// FUNCIONES SIN RETORNO

function esMayorOMenorDeEdad(edad) {
  if (edad >= 18) {
    console.log('Mayor de edad')
  } else {
    console.log('Menor de edad')
  }
}

esMayorOMenorDeEdad(38)
esMayorOMenorDeEdad(8)
esMayorOMenorDeEdad(3)

// FUNCIONES CON RETORNO

function esMayorOMenorDeEdadConRetorno(edad) {
  if (edad >= 18) {
    return 'Mayor de edad'
  } else {
    return 'Menor de edad'
  }
}

const resultado = esMayorOMenorDeEdadConRetorno(15)

console.log('Resultado:', resultado)

console.log(esMayorOMenorDeEdadConRetorno(25)) // 'Mayor de edad'
console.log(esMayorOMenorDeEdadConRetorno(12)) // 'Menor de edad'

// MÉTODOS DE CADENAS

const welcome = ' Hola Javascript '

welcome.length // 10

welcome.toUpperCase() 
welcome.toLowerCase()
welcome.trim() // Remueve los epacios en blanco al inicio y al final de la cadena

const avatar = 'Hola @me'

avatar.concat('victorvzn') // 'Hola @mevictorvzn'
avatar.replace('@me', 'Victor') // 'Hola Victor'
avatar.slice(0, 5) // Retorna una parte de la cadena tomando la posición/índice de inicio y final en los parámetros
welcome.indexOf('script') // 10