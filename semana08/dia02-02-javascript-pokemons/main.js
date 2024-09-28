let page = 1
let count = 0
let totalPages = 0
const LIMIT = 9

let pokemonFavorites = JSON.parse(localStorage.getItem('pokemon-favorites')) ?? []

const fetchPokemons = async (page = 1) => {
  const OFFSET = (page - 1 ) * LIMIT

  const url = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`

  const response = await fetch(url) // Devuelve una promesa

  const data = await response.json() // Convierte la respuesta en formato JSON

  const dataResults = data.results.map(pokemon => {
    // "url": "https://pokeapi.co/api/v2/pokemon/1/"
    const id = pokemon.url.split('/').at(6)
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    const foundFavorite = pokemonFavorites.find(favorite => favorite.id === id)
  
    return {
      ...pokemon,
      id,
      image,
      isFavorite: Boolean(foundFavorite)
    }
  })

  console.log(dataResults)

  return {
    ...data,
    results: dataResults
  }
}

const toggleFavorite = async (id, name, image) => {
  const foundPokemonFavorite = pokemonFavorites.filter(favorite => favorite.id === id)
  const existPokemonFavorite = foundPokemonFavorite.length > 0

  if (existPokemonFavorite) {
    // retirar el pokemon de favoritos
    pokemonFavorites = pokemonFavorites.filter(pokemon => pokemon.id != id)
  } else {
    pokemonFavorites.push({id, name, image})
  }

  localStorage.setItem('pokemon-favorites', JSON.stringify(pokemonFavorites))

  const data = await fetchPokemons(page)
  renderPokemons(data.results)
}

const renderPokemons = (pokemons = []) => {
  const pokemonsList = document.getElementById('pokemonList')

  let elements = ''

  // DONE: Agregar una imagen a cada pokemon

  pokemons.forEach(pokemon => {
    elements += `<article class="pokemon-item">
      <h2>#${pokemon.id} ${pokemon.name}</h2>
      <img src="${pokemon.image}" width="80" height="80" />
      <div class="pokemon-item__buttons">
        <button onclick="toggleFavorite('${pokemon.id}','${pokemon.name}','${pokemon.image}')">
          <svg class='${pokemon.isFavorite ? 'is-favorite' : '' }' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </button>
      </div>
    </article>`
  })

  pokemonsList.innerHTML = elements

  totalPages = Math.ceil(count / LIMIT)

  elCurrentPage.textContent = `${page} de ${totalPages}`
}

const elPrevPage = document.querySelector('#prevPage')
const elCurrentPage = document.querySelector('#currentPage')
const elNextPage = document.querySelector('#nextPage')
// const xPage = document.querySelector('#xPage')

// xPage.addEventListener('click', async () => {
//   page = 140

//   const dataPokemons = await fetchPokemons(page)

//   renderPokemons(dataPokemons.results)
// })

elNextPage.addEventListener('click', async () => {
  page = page + 1

  if (page > totalPages) {
    page = totalPages
    return
  }

  const dataPokemons = await fetchPokemons(page)

  renderPokemons(dataPokemons.results)
})

// DONE: Implementar el botón previous
elPrevPage.addEventListener('click', async () => {
  page = page - 1

  if (page <= 0) {
    page = 1
    return
  }

  const dataPokemons = await fetchPokemons(page)
  
  renderPokemons(dataPokemons.results)
})

fetchPokemons()
  .then(data => {
    count = data.count

    renderPokemons(data.results)
  })

// TODO: Editar el nombre y la imagen solo de los pokemons favoritos.
