// TODO: Al hacer click en los botones - y + decremente o incremente la cantidad.

const menos = document.querySelector('#menos')
const mas = document.querySelector('#mas')
const cantidad = document.querySelector('#cantidad')

let contador = 0

mas.addEventListener('click', function(event) {
  contador = contador + 1

  if (contador > 10) {
    contador = 10
    return
  }

  cantidad.textContent = contador
})

menos.addEventListener('click', function(event) {
  contador = contador - 1

  if (contador < 0) {
    contador = 0
    return
  }

  cantidad.textContent = contador
})