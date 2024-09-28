const taskInput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuando hagamos click en el botón "Añadir tarea"

  if (taskInput.value.trim() === '') {
    alert('El campo es requerido, ingresa una tarea.')
    return
  }

  const li = document.createElement('li')

  let checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  li.appendChild(checkbox)

  let span = document.createElement('span')
  span.textContent = taskInput.value
  li.appendChild(span)
  // li.textContent = taskInput.value

  // TODO: Añadir un botón al li con el texto 'Borrar'
  const button = document.createElement('button')
  button.textContent = 'Borrar'
  li.appendChild(button)

  taskList.appendChild(li)

  taskInput.value = ''

  // const button = document.createElement('button')
  // button.textContent = '¡Hola soy un botón!'
  // document.body.appendChild(button)
  // TODO: Añadir dinámicamente una etiqueta h1 dentro del body
})

taskList.addEventListener('click', function(event) {
  // console.log('click taskList')
  // console.log(event.target)

  const target = event.target

  console.log({target})

  if (target.tagName === 'BUTTON') {
    target.parentElement.remove()
  }

  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    // target.parentElement.style = 'color: red;'
    target.classList.toggle('checked')
  }
})