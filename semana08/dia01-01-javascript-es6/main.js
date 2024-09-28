// console.log('Hola JS')

// FUNCIONES

// Funciones sin parámetros

function nombreDeLaFuncion() { // Estamos declarando la función
  console.log('Hola a todos')
}

nombreDeLaFuncion() // Está ejecutandose la función

// Funciones con parámetros por defecto con retorno y en múltiples líneas

function calculariEsMayorDe18(edad = 1) {
  if (edad > 18) {
    return 'Es mayor de edad'
  } else {
    return 'Es menor de edad'
  }
}

console.log(calculariEsMayorDe18())
console.log(calculariEsMayorDe18(25))

// ARROW FUNCTIONS (Funciones flecha) =>

// function nombreDeLaFuncion() {
//   console.log('Hola a todos')
// }

// Funciones sin parámetros en un línea

const imprimiendoSaludo = () => console.log('Hola a todos nuevamente!')

imprimiendoSaludo()

// Funciones con parámetros en un línea

const suma = (numero1, numero2) => numero1 + numero2

console.log(suma(2, 5))

// Funciones con parámetros y retorno en múltiples líneas

const saludoEnMayusculas = (nombre) => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return 'Hola ' + nombreEnMayusculas + '!'
}

console.log(saludoEnMayusculas('Roger'))

// Funciones con parámetros por defecto con retorno y en múltiples líneas

const otroSaludoEnMayusculas = (nombre='Anónimo') => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return 'Hola ' + nombreEnMayusculas + '!'
}

console.log(otroSaludoEnMayusculas())
console.log(otroSaludoEnMayusculas('Roger'))

// PARÁMETROS REST (operador rest -> ...)

const numeros = [4, 6]

function miSuma(n1, n2) {
  return n1 + n2
}

console.log(miSuma(4, 6))
console.log(miSuma(...numeros))

const listaDeNumeros = [6, 33, 998, 1, -66, 453]

console.log(
  Math.max(25, 8, 65),
  Math.max(...listaDeNumeros)
)

console.log(
  Math.min(25, 8, 65),
  Math.min(...listaDeNumeros)
)


// SPREAD OPERATOR (...)
// Sirve para expandir un arreglo, llamas a funciones, incluso objetos.

const frutas = ['Manzanas', 'Naranjas', 'Plátanos', 'Sandías', 'Duraznos']

const verduras = ['Papas', 'Cebollas']

const frutasYVerduras = [...verduras, ...frutas]

console.log(frutas)
console.log(verduras)
console.log(frutasYVerduras)

const persona = {
  nombre: 'Victor',
  apellido: 'Villazón',
  edad: 38,
  color: 'azul'
}

const stack = {
  javascript: 'React.js',
  python: 'Django',
  nodejs: 'Express.js',
  color: 'rosado'
}

const personaYSuStack = {
  ...persona,
  ...stack
}

console.log(personaYSuStack)

const personaYSuStack2 = {
  persona,
  stack
}

console.log(personaYSuStack2)
