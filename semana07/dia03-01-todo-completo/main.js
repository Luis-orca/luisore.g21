const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

// localStorage.setItem('frutas', 'manzanas, peras, plátanos')
// console.log(localStorage.getItem('frutas'))
// console.log(localStorage.getItem('colores'))
// console.log(localStorage.getItem('keyquenoexiste')) // null

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

// let tasks = [
  // {
  //   title: 'Estudiar Javascript',
  //   completed: true
  // },
  // {
  //   title: 'Salir al receso a las 9:00pm',
  //   completed: false
  // },
  // {
  //   title: 'Realizar el reto del fin de semana',
  //   completed: false
  // }
//]

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

taskClear.addEventListener('click', function(event) {
  // TODO: Al hace click en el botón limpiar debemos remover todas las tareas completadas
  // console.log('Removiendo las tareas completadas')

  const completedTasks = tasks.filter(function (task) {
    return task.completed === false
  })

  tasks = completedTasks

  renderTasks()

  saveTasks(tasks)
})

taskInput.addEventListener('keydown', function(event) {
  // console.log(event.key)

  const value = event.target.value

  if (event.key === 'Enter') {
    console.log('Agregando una nueva tarea', value)

    const newTask = {
      title: value,
      completed: false
    }

    tasks.push(newTask)

    console.log(tasks)

    // event.target.value = ''
    taskInput.value = ''

    renderTasks()

    saveTasks(tasks)
  }
})

function renderTasks() {
  let lista = ''

  // TODO: Añadir el contenido "No hay tareas registradas" si no hay tareas en el array tasks
  if (tasks.length === 0) {
    taskList.innerHTML = `
      <li class="p-4 bg-yellow-100 text-yellow-800 text-sm rounded-lg text-center font-medium border border-yellow-300">
        No hay tareas registradas
      </li>
    `
    return
  }

  tasks.forEach(function(task, index) {
    lista = lista + `
      <li class="flex justify-center items-center gap-4 py-1">
        <input
          type="checkbox"
          onchange="checkTask(${index})"
          ${task.completed ? 'checked' : ''}
        />
        <div
          class="w-full ${task.completed ? 'line-through' : ''}"
        >
          ${task.title}
        </div>
        <button
          class="border border-red-700 font-medium text-sm p-1 px-3 text-red-900 hover:bg-red-700 hover:text-white rounded-lg duration-300"
          onclick="removeTask(${index})"
        >
          Borrar
        </button>
      </li>
    `
  })

  taskList.innerHTML = lista
}

function removeTask(selectedIndex) {
  const newTasks = tasks.filter(function(task, index) {
    return index !== selectedIndex
  })

  // tasks.splice(selectedIndex, 1)

  tasks = newTasks

  renderTasks()

  saveTasks(tasks)
}

function checkTask(selectedIndex) {
  // console.log('completando tarea...', selectedIndex)
  // Devuelve un objeto que tiene title y completed
  const taskSelected = { ...tasks[selectedIndex] }

  taskSelected.completed = !taskSelected.completed

  tasks[selectedIndex] = taskSelected

  renderTasks()

  saveTasks(tasks)
}

renderTasks()