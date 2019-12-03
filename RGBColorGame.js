let numberOfSquares = 6
let colors = randomColors(numberOfSquares)
let pickedColor = pickColor();
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message')
colorDisplay.textContent = pickedColor;
const squares = document.querySelectorAll('.square')
const h1 = document.querySelector('h1')
const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', resetGame)
//level button selected
const easyBtn = document.querySelector('#easyBtn')
const hardBtn = document.querySelector('#hardBtn')
easyBtn.addEventListener('click', function () {
  className(easyBtn, hardBtn)
  numberOfSquares = 3
  colors = randomColors(numberOfSquares)
  pickedColor = pickColor()
  h1.style.background = 'steelblue'
  messageDisplay.textContent = ''
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]
  }
  for (let i = 3; i < 6; i++) {
    squares[i].classList.add('hide')
  }
})
hardBtn.addEventListener('click', function () {
  className(hardBtn, easyBtn)
  numberOfSquares = 6
  colors = randomColors(numberOfSquares)
  pickedColor = pickColor()
  h1.style.background = 'steelblue'
  messageDisplay.textContent = ''
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]
  }
  for (let i = 3; i < 6; i++) {
    squares[i].classList.remove('hide')
  }
})
//check the clicked color
for (let i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i]
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
    squares[i].style.background = colors[i]
  }
  colorDisplay.textContent = pickedColor;
  h1.style.background = 'steelblue';
  messageDisplay.textContent = '';
  resetButton.textContent = 'New Colors'
}
//add class name to a button
function className(btn1, btn2) {
  btn1.classList.add('selected')
  btn2.classList.remove('selected')
}