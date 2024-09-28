// console.log('holajs')

// OBJETIVO: Traer información en formato JSON desde una URL

const url = 'https://jsonplaceholder.typicode.com/posts'

// fetch(url) // Devuelve una promesa (Promise)
//   .then(response => response.json()) // Convertimos la respuesta a un objeto JS
//   .then(data => {
//     console.log(data) // Aquí podemos usar el objeto JS
//     console.log(data[0].title)
//   })

const renderPosts = (posts = []) => {
  const divApp = document.querySelector('#app')

  let postList = ''

  posts.forEach(post => {
    postList += `
      <div>
        <h2>${post.id} - ${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `
  })

  divApp.innerHTML = postList
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    renderPosts(data)
  })
  .catch((error) => {
    console.log('>>>', error)
  })
