const colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];
const pickedColor = pickColor();
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message')
colorDisplay.textContent = pickedColor;
const squares = document.querySelectorAll('.square')
//check the clicked color
for (let i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i]
  squares[i].addEventListener('click', function () {
    let clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct'
      changeAllSquaresColor(clickedColor)
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

