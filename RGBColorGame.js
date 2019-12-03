let numberOfSquares = 6;
let colors = [];
let pickedColor;
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
// colorDisplay.textContent = pickedColor;
const squares = document.querySelectorAll('.square')
const h1 = document.querySelector('h1')
const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', resetGame)
const modeButton = document.querySelectorAll('.mode')
initialGame()


function initialGame() {
  for (let i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener('click', function () {
      modeButton[0].classList.remove('selected')
      modeButton[1].classList.remove('selected')
      this.classList.add('selected')
      this.textContent === 'Easy' ? numberOfSquares = 3 : numberOfSquares = 6;
      resetGame()
    })
  }
  // check the clicked color
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
      let clickedColor = this.style.background;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct'
        changeAllSquaresColor(clickedColor)
        h1.style.background = clickedColor
        resetButton.textContent = 'Play Again?'
      } else {
        this.style.background = '#232323'
        messageDisplay.textContent = 'Try It again'
      }
    })
  }
  resetGame()

}











//change all squares' colors to the correct one
function changeAllSquaresColor(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = color
  }
}
//randomly pick a color
function pickColor() {
  let random = Math.floor(Math.random() * colors.length)
  return colors[random]
}
//get numbers randomly from 0 to 255
function randomNum() {
  return Math.floor(Math.random() * 256)
}
//generate random colors
function randomColors(num) {
  let arr = []
  for (let i = 0; i < num; i++) {
    let generatedColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
    arr.push(generatedColor)
  }
  return arr
}
//reset the game
function resetGame() {
  colors = randomColors(numberOfSquares)
  pickedColor = pickColor();
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].classList.remove('hide')
      squares[i].style.background = colors[i]
    } else {
      squares[i].classList.add('hide')
    }
  }
  colorDisplay.textContent = pickedColor;
  h1.style.background = 'steelblue';
  messageDisplay.textContent = '';
  resetButton.textContent = 'New Colors'
}
