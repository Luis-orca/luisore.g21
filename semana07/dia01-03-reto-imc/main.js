// console.log('Hola JS')

// const buttonCalcular = document.querySelector('#calcular')
const inputPeso = document.getElementById('peso')
const inputAltura = document.getElementById('altura')
const buttonCalcular = document.getElementById('calcular')
const sectionResultado = document.getElementById('resultado')

buttonCalcular.addEventListener('click', function(event) {
  // console.log('click')

  const peso = Number(inputPeso.value) // parseFloat
  const altura = Number(inputAltura.value) // parseFloat

  // if (peso === 0 || altura === 0) {
  //   sectionResultado.textContent = 'Datos incorrectos'
  // }

  console.log(peso, altura)

  // IMC = peso / altura * altura
  const indiceMasaCorporal = peso / ((altura / 100) ** 2)

  console.log(indiceMasaCorporal)

  let resultado = ''

  if (indiceMasaCorporal < 18.5) {
    resultado = 'Baja'
  } else if (indiceMasaCorporal >= 18.5 && indiceMasaCorporal <= 24.9) {
    resultado = 'Normal'
  } else if (25 < indiceMasaCorporal < 29.9) {
    resultado = 'Sobrepeso'
  } else if (indiceMasaCorporal > 30) {
    resultado = 'Obeso'
  } else {
    resultado = 'Datos incorrectos'
  }

  console.log(resultado)

  // sectionResultado.textContent = 'Tu Indice de Masa Corporal es ' + resultado + ' con ' + indiceMasaCorporal.toFixed(2)

  sectionResultado.textContent = `Tu Indice de Masa Corporal es ${resultado} con ${indiceMasaCorporal.toFixed(2)}`

  inputPeso.value = ''
  inputAltura.value = ''
})


// * Baja: < 18.5
// * Normal: < 18.5 - 24.9
// * Sobrepeso: < 25 - 29.9 
// * Obeso: > 30