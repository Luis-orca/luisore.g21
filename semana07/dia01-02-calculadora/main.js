// console.log('Hola JS')

let numeroActual = '0'
let operador = '' // + * -
let operando = '' // Cualquier número. Ej. 8, 968

const inputDisplay = document.querySelector('.display')
const buttons = document.querySelectorAll('button')

buttons.forEach(function(button) {
  // console.log(button.textContent)

  button.addEventListener('click', function(event) {
    // console.log({ target: event.target })
    const buttonText = event.target.textContent

    // console.log(buttonText) // + 9 8 1 =

    // DONE: Añadiremos la lógica de la calculadora

    if ('+-*'.includes(buttonText)) {
      // console.log('presionaste el operador', buttonText)
      // Asigno el operador actual
      operador = buttonText
      operando = Number(numeroActual)
      numeroActual = '0'
    } else if (buttonText === '=') {
      // console.log('presionaste el signo', buttonText)
      // Aquí realizo las operaciones matemáticas en base al número actual y al operando
      if (operador === '+') {
        numeroActual = Number(operando) + Number(numeroActual)
      } else if (operador === '-') {
        numeroActual = Number(operando) - Number(numeroActual)
      } else if (operador === '*') {
        numeroActual = Number(operando) * Number(numeroActual)
      }
    } else if (buttonText === 'AC') {
      // console.log('presionaste el boton', buttonText)
      numeroActual = '0'
      operador = ''
      operando = ''
    } else {
      // Cuando hemos presionado solo los números
      console.log('presionaste el número', buttonText)
      numeroActual = numeroActual + buttonText
    }

    inputDisplay.value = Number(numeroActual)
  })
})

// console.log(buttons)
// console.log({inputDisplay})
// inputDisplay.value = '9999'