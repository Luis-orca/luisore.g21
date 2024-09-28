const url = 'https://jsonplaceholder.typicode.com/posts'

const fetchPostsSinRetorno = async () => {
  const response = await fetch(url)

  const json = await response.json()

  console.log(json)
}

const fetchPostsConRetorno = async () => { // Retorna una promesa (Promise)
  const response = await fetch(url)

  return await response.json()
}

const fetchPostsConManejoDeErrores = async () => {
  try {
    const response = await fetch(url)

    if (!response.ok) { // ok === STATUS CODE 200
      console.log('Tuvimos problemas para cargar el recurso posts')
      throw new Error('ERROR HTTP: ' + response.status)
    }

    return await response.json()
  } catch (error) {
    console.log('>>>', error)
  }
}

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

// fetchPostsSinRetorno()

// console.log(fetchPostsConRetorno()) // Promise {<pending>}

// fetchPostsConRetorno()
//   .then(posts => console.log(posts))

fetchPostsConManejoDeErrores()
  .then(posts => renderPosts(posts))