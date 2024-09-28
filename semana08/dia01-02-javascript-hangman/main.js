const elMaskedWord = document.querySelector('.hangman__maskedword')
const elButtons = document.querySelector('.hangman__buttons')
const elResult = document.querySelector('.hangman__result')

const ANSWER = 'Javascript'

const word = ANSWER.toUpperCase()

const ALPHABET = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index))

let correctGuesses = ''
let tries = 0

const selectLetter = (letter) => {
  tries++
  console.log(tries)
  // console.log('seleccionando letra', letter)
  correctGuesses = correctGuesses + letter
  
  renderMaskedWord()
}

const renderMaskedWord = () => {
  elMaskedWord.textContent = word
    .split('')
    .map(
      letter => correctGuesses.includes(letter) ? letter : '_'
    )
    .join('')

  // TODO: Si gana el juego hay que agregar la lógica respectiva

  // 'JAVA_CRIPT'.split('').some(letter => letter === '_')

  if (!elMaskedWord.textContent.includes('_')) {
    console.log('YOU WON!')
    elResult.classList.toggle('hidden')
    elResult.textContent = 'YOU WON!'
  } else if (tries > 10) {
    console.log('YOU LOST!')
    elResult.classList.toggle('hidden')
    elResult.textContent = 'YOU LOST!'
  }
}

const renderAlphabet = () => {
  let list = ''

  ALPHABET.forEach((letter) => {
    list += `<button onclick="selectLetter('${letter}')">${letter}</button>`
  })

  elButtons.innerHTML = list
}

renderMaskedWord()
renderAlphabet()