# Javascript Ejercicios

### [Reto01 - Contando ovejas para dormir](https://2021.adventjs.dev/challenges/01)

```js
/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {
  return ovejas.filter(function(oveja) {
    const nameLowered = oveja.name.toLowerCase()
    
    const isRedColor = oveja.color === 'rojo'
    const hasLetterN = nameLowered.includes('n')
    const hasLetterA = nameLowered.includes('a')
    
    return isRedColor && hasLetterN && hasLetterA
  })
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// Respuesta deseada:

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

### [Reto10 - La  máquina de cambio](https://2021.adventjs.dev/challenges/10)

```js
/*
Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que 
"calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra"
en metálico.

Las monedas para cambio que puedes usar son estas:

coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos

Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.
*/

function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50]
  
  let acc = change
  
  return coins
    .reverse()
    .map(function (coin) {
      let quotient = Math.floor(acc / coin)
    
      if (quotient > 0) {
        acc = acc % coin // rediduo
      }
    
      return quotient
    })
  .reverse()
}

getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
```

* https://adventjs.dev/ (2021)

### [Reto1 (2023) - Primer regalo repetido](https://adventjs.dev/challenges/2023/1)

```js
/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números han sido asignados a más de un juguete.

¡Encuentre el primer número de identificación que se ha repetido, donde la segunda aparición tiene el índice más pequeño !

En otras palabras, si hay más de un número repetido, debe devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelva -1.
*/

// [2, 1, 3, 5, 3, 2].indexOf(99) // -1

// [2, 1, 3, 5, 3, 2].sort(function(a, b) {
//   // return b - a // Sort Asc con números
//   return b - a // Sort Desc con números
// })

function findFirstRepeated(gifts) {
  const repeats = gifts.map(function(id, index) {
    return {
      id,
      firstIndex: index,
      secondIndex: gifts.indexOf(id, index + 1)
    }
  })
  
  const idsAperecenPorSegundaVez = repeats.filter(id => id.secondIndex !== -1)
  
  const ordenadosPorElIndiceDeLaSegundaAparicion = idsAperecenPorSegundaVez.sort(function(a, b) {
    return a.secondIndex - b.secondIndex
  })
  
  const idsResultantes = ordenadosPorElIndiceDeLaSegundaAparicion.map(item => item.id)
  
  if (idsResultantes.length > 0) {
    return idsResultantes[0]
  }

  return -1
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Even though 2 and 3 are repeated
// 3 appears second time first

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// It is -1 since no number is repeated

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
```

### [Reto2 (2023) - Ponemos en marcha la fábrica](https://adventjs.dev/challenges/2023/2)

```js
/*
En el taller de Papá Noel, los elfos tienen una lista de regalos que desean hacer y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres . Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden hacer .
*/

// Método EVERY, devuelve un boolean si todos los elementos del array cumplen una condición

[1, 2, 3, 4, 5].every(numero => numero > 0);

[1, 2, 3, 4, 5, -5].some(numero => numero % 2 === 0);

function manufacture(gifts, materials) {
  return gifts.filter(function (gift) {
    const copyGift = [...gift]

    return copyGift.every(function (giftLetter) {
      return materials.includes(giftLetter)
    })
  })
}

const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'

manufacture(gifts1, materials1) // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

manufacture(gifts2, materials2) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

manufacture(gifts3, materials3) // []
```

### [Reto3 (2023) - El duende travieso](https://adventjs.dev/challenges/2023/3)

```js
/*
En el taller de Papá Noel, un elfo travieso ha estado jugando con la línea de producción de regalos, añadiendo o quitando un paso no planificado.

Tiene la secuencia original de pasos de fabricación originales y la secuencia modificada que puede incluir un paso adicional o faltarle un paso.

Su tarea consiste en escribir una función que identifique y devuelva el primer paso adicional que se agregó o eliminó en la cadena de fabricación . Si no hay diferencia entre las secuencias, devuelva una cadena vacía.
*/

function findNaughtyStep(original, modified) {
  let cadena1, cadena2;
  let cadena3='';

  if (original.length > modified.length){
      cadena1=original;
      cadena2=modified;
  } else {
      cadena1=modified;
      cadena2=original;
  }
  
  for(let i=0;i<cadena1.length;i++){
      if(cadena2.includes(cadena1[i])==false) {
          cadena3+=cadena1[i];
      }
  }
  return cadena3;
}

const original1 = 'abcd'
const modified1 = 'abcde'
findNaughtyStep(original1, modified1) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
findNaughtyStep(original2, modified2) // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
findNaughtyStep(original3, modified3) // ''

/*
Por favor, tenga en cuenta:

* Siempre habrá un paso diferente o ninguno.
* La modificación puede ocurrir en cualquier parte de la cadena.
* Los pasos originales podrían estar vacíos
*/
```

### [Reto03 - El Grinch quiere fastidiar la Navidad](https://2021.adventjs.dev/challenges/03)

```js
/*
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:


"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
*/

function isValid(letter) {
  const hasChar = (word, char) => word.includes(char)
  const gifts = letter.match(/\([^)]*\)/g)
  
  if (!gifts) return false
  
  const invalidGifts = gifts.filter(gift => {
    const criteriaA = hasChar(gift, '{')
    const criteriaB = hasChar(gift, '[')
    const criteriaC = hasChar(gift, '()')
    return criteriaA || criteriaB || criteriaC
  })

  return invalidGifts.length === 0
}

isValid("bici coche (balón) bici coche peluche") // -> ✅
isValid("(muñeca) consola bici") // ✅

isValid("bici coche (balón bici coche") // -> ❌
isValid("peluche (bici [coche) bici coche balón") // -> ❌
isValid("(peluche {) bici") // -> ❌
isValid("() bici") // ❌
```

