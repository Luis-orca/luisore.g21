// console.log('Hola JS')

// TIPOS DE DATOS NO PRIMITIVOS

// ARRAYS

// Un arreglo tiene elementos de cualquier tipo de dato: cadena, números, boolean, null, arrays, objetos, etc.

// DECLARARACIÓN

const arregloVacio = []
let listaDeNumeros = [25, 36, 89, 1560]
const listaDeValores = [1, 2 , 3, 'Victor', 'Villazón', true, null, undefined]

console.log(arregloVacio)
console.log(listaDeNumeros);
console.log(listaDeValores)

// Lectura de la elemento de un arreglo

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[4]) // Villazón
console.log(listaDeValores[5]) // true
console.log(listaDeValores[99]) // undefined

// Escritura en un arreglo

console.log(listaDeValores)

listaDeValores[0] = 'Juan'
listaDeValores[3] = 9999

console.log(listaDeValores)

listaDeNumeros[0] = 'Hola'

console.log(listaDeNumeros)

// Insertar nuevos elementos en un arreglo al final

const listaDeNombres = ['Victor', 'Alessandro', 'Francesca', 'Yesica']

console.log(listaDeNombres)

listaDeNombres.push('Javascript')
listaDeNombres.push('CSS')

console.log(listaDeNombres)

// Remover elementos del final del arreglo

listaDeNombres.pop()
listaDeNombres.pop()

console.log(listaDeNombres)

// Insertar un elemento en una posición determinada

listaDeNombres.splice(0, 0, 'Código')
listaDeNombres.splice(3, 0, 'Tecsup')

console.log(listaDeNombres)

// Eliminar un elemento en un posición determinada

listaDeNombres.splice(3, 1, 'hola') // Eliminamos el elemento en la posición 3 y insertamos el texto 'hola' al mismo tiempo

console.log(listaDeNombres)

// Obtener el tamaño de nuestro arreglo

console.log(listaDeNombres.length)
console.log('bienvenido'.length)

// Obtener el último elemento el arreglo

console.log(listaDeNombres[listaDeNombres.length - 1])
console.log(listaDeNombres.at(0))
console.log(listaDeNombres.at(-2))

// DOC: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// TODO: Otras funciones: slice (Investiguen)

// MÉTODOS DE ARREGLOS

// Método INCLUDES, nos indica is el valor que se pasa como parámetro se encuentra en el arreglo y siempre devuelve un boolean (true o false)

const languages = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

console.log(languages.includes('java')) // true
console.log(languages.includes('cobol')) // false

// Método FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuelve un boolean (true o false)

console.log('HOLA'.toLowerCase())

const resultado = languages.filter(function (item) {
  // return language === 'java'
  // return item === 'python'
  return item.toLowerCase().includes('c')
})

console.log(resultado)

// Método MAP, evalue un arreglo y lo modifica y hay que pasarle una función

const nombresConTitulo = languages.map(function (language) {
  // return 'hola'
  return '*' + language + '*'
})

console.log(nombresConTitulo)
console.log(languages)

// Método SORT, nos ayuda a ordenar un arreglo de elementos. Muta el arreglo original.

const ordenandoLanguages = [...languages].sort() // Mutando el arreglo original

console.log(ordenandoLanguages)
console.log(languages)

// Método FOREACH, nos ayuda a recorrer un arreglo sin tener ningun retorno de datos

const miArreglo = []

languages.forEach(function (language) {
  miArreglo.push('El mejor: ' + language)
})

console.log(miArreglo)

// Método REDUCE, nos ayuda a acumular los valores de un arreglo

const numeros = [3, 40, 100, 7, 50]

// Con un FOR
let suma = 0
for (let i = 0; i < numeros.length; i++) {
  suma = suma + numeros[i]
}
console.log(suma)

// Con Reduce

const sumatoria = numeros.reduce(
  function(acumulador, valorActual) {
    return acumulador + valorActual
  },
  0
)

console.log(sumatoria)



// OBJETOS

/*
  {
    KEY1: VALUE1,
    KEY2: VALUE2,
    KEY3: VALUE3,
  }
*/

const miObjetoVacio = {}

const miObjeto = {
  nombre: 'Victor',
  apellido: 'Villazón',
  colorFavorito: 'azúl',
  'mi edad': 38,
  coloresFavoritos: ['rosado', 'rojo', 'azúl'],
  cursos: [
    {
      id: 1,
      nombre: 'Matemática',
      nota: 13
    },
    {
      id: 2,
      nombre: 'Algoritmos',
      nota: 20
    }
  ],
  devolverCursosAprobados: function() { // Función anónima
    return this.cursos.filter(function (curso) {
      return curso.nota > 13
    })
  }
}

console.log(miObjetoVacio)
console.log(miObjeto)

// LEER LOS CAMPOS DE UN OBJETO (notación de punto y de corchete)

console.log(miObjeto.nombre) // Victor
console.log(miObjeto.apellido) // Villazón
console.log(miObjeto.edad) // undefined

// console.log(miObjeto.mi edad) // BAD ❌ - Uncaught SyntaxError: missing ) after argument list
console.log(miObjeto['mi edad']) // OK ✅

console.log(miObjeto.coloresFavoritos)
console.log(miObjeto.coloresFavoritos[2])

console.log(miObjeto.cursos) // Array
console.log(miObjeto.cursos[1]) // {id: 2, nombre: 'Algoritmos', nota: 20}
console.log(miObjeto.cursos[1].nota) // 20
console.log(miObjeto.cursos[1]['nota']) // 20

console.log(miObjeto.devolverCursosAprobados) // ƒ()
const resultadoCursosAprobados = miObjeto.devolverCursosAprobados()
console.log(resultadoCursosAprobados) // [{ id: 2, nombre: 'Algoritmos', nota: 20 }]
console.log(resultadoCursosAprobados[0]['nombre']) // Algoritmos

// ELIMINAR PROPIEDADES DE UN OBJETO

console.log(miObjeto)
// delete miObjeto.cursos
delete miObjeto["mi edad"]
console.log(miObjeto)

// INSERTAR UN NUEVA PROPIEDADE A UN OBJETO

miObjeto.platilloFavorito = 'Ceviche de Conchas Negras'
miObjeto['juegos favoritos'] = ['Crash Team Racing', 'Mario', 'Minecraft']

console.log(miObjeto)

// DESTRUCTURING DE ARREGLOS Y OBJETOS

// Una forma de extraer las elementos/propiedades de un objeto o un arreglo en nuevas variables

// DESTRUCTURING: OBJETOS

const nombreValue = miObjeto.nombre
const apellidoValue = miObjeto.apellido
const colorFavoritoValue = miObjeto.colorFavorito

console.log(nombreValue, apellidoValue, colorFavoritoValue)

const { nombre, apellido, colorFavorito } = miObjeto

console.log(nombre, apellido, colorFavorito)

const {
  nombre: nombreConUnAlias,
  apellido: apellidoConUnAlias,
  cursos: cursosValor
} = miObjeto

console.log(nombreConUnAlias, apellidoConUnAlias, cursosValor)

// DESTRUCTURING: ARRAYS

const amigos = ['leo', 'marcial', 'diego', 'yesica', 'victor']

const [amigo1, amigo2, amigo3, , amigo4] = amigos

console.log(amigo1, amigo2, amigo3, amigo4)

const [a1, a2, ...mejoresAmigos] = amigos

console.log(a1, a2, mejoresAmigos)

// SPREAD OPERATOR (operador ...)

// Extraer las propiedades de un objeto/arreglo para reutilizarlo en otros objetos/arreglos

const producto = {
  nombre: 'Laptop',
  precio: 4890,
  categoria: 'tech'
}

const cliente = {
  nombre: 'Alessandro',
  isVip: true
}

console.log(producto + cliente) // ❌ 💔 [object Object][object Object]

const nuevoObjeto = { ...producto, ...cliente } // ⛔ Cuidado

console.log(nuevoObjeto)

// SPREAD OPERATOR, evitando colisiones de propiedades

const nuevoObjetoSinColisiones = {
  product: { ...producto },
  cliente: { ...cliente }
}

console.log(nuevoObjetoSinColisiones)
console.log(nuevoObjetoSinColisiones.product.nombre) // Laptop
console.log(nuevoObjetoSinColisiones.cliente.nombre) // Alessandro

// OTROS MÉTODOS DE OBJETOS

console.log(Object.keys(producto)) // Obtenemos solo las claves (keys) del objeto dentro de un arreglo de cadenas.
console.log(Object.values(producto)) // Obtenemos solo los values (values) del objeto dentro de un arreglo de cadenas.
console.log(Object.entries(producto)) // Convertimos un objeto en un arreglo

// EJEMPLO FINAL CON OBJETOS

const hero = 'Victor'

if (hero === 'Batman') {
  console.log('Hola soy Bruce')
} else if (hero === 'Spiderman') {
  console.log('Hola soy Peter')
} else if (hero === 'Ironman') {
  console.log('Hola soy Tony')
} else {
  console.log('No soy un heroe 😒')
}

const SUPER_HEROS = {
  'Batman': 'Hola soy Bruce',
  'Spiderman': 'Hola soy Peter',
  'Ironman': 'Hola soy Tony',
}

if (!SUPER_HEROS[hero]) {
  console.log('No soy un heroe 😒')
} else {
  console.log(SUPER_HEROS[hero])
}

console.log(SUPER_HEROS[hero] ?? 'No soy un heroe 😉')



// TODO: Desarrollar 1 reto del siguiente link para mañana
// TODO: Desarrollar 3 retos más del siguiente link para el próximo miércoles

// https://2021.adventjs.dev/challenges