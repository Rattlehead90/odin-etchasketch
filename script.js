//Create 16x16 grid in the drawing box
const drawingBox = document.querySelector('.drawing-box');

function drawDrawingGrid(size) {
    drawingBox.style.setProperty('--grid-rows', size);
    drawingBox.style.setProperty('--grid-cols', size);
    for (i = 0; i < size**2; i++) {
        let drawingPixel = document.createElement('div');
        drawingBox.appendChild(drawingPixel).className = 'drawing-pixel';
    }
}

drawDrawingGrid(16);

function changeSize(size) {
  const drawingPixels = document.querySelectorAll('.drawing-pixel');
  for (let i = 0; i < drawingPixels.length; i++) {
    drawingBox.removeChild(drawingPixels[i]);
  }
  drawDrawingGrid(size);
} 

//Left button dropdown logic

function chooseColor() {
    document.getElementById('colors').classList.toggle('show');
}

//Hide the menu if the user clicks outside the dropdown menu

window.onclick = function(event) {
    if (!event.target.matches('.left-button')) {
      var dropdownLeft = document.getElementsByClassName("left-dropdown-content");
      var i;
      for (i = 0; i < dropdownLeft.length; i++) {
        var openDropdown = dropdownLeft[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//Painting logic

function paint(color) {
  console.log(color)
  const drawingPixels = document.querySelectorAll('.drawing-pixel');
  if (color === 'rainbow') {

    for (let i = 0; i < drawingPixels.length; i++) {
      let rgb1 = Math.floor(Math.random()*256);
      let rgb2 = Math.floor(Math.random()*256);
      let rgb3 = Math.floor(Math.random()*256);
      drawingPixels[i].addEventListener('mouseover', () => {
          console.log(`rgb(${rgb1}, ${rgb2}, ${rgb3})`);
          drawingPixels[i].style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
        })
      }
  } else {
    for (let i = 0; i < drawingPixels.length; i++) {
      drawingPixels[i].addEventListener('mouseover', () => {
          drawingPixels[i].style.backgroundColor = color;
        })
    }
  }


}

paint('black');

//Color picking logic

const blueOption = document.getElementById('blue');
blueOption.onclick = () => paint('blue');
const redOption = document.getElementById('red');
redOption.onclick = () => paint('red');
const blackOption = document.getElementById('black');
blackOption.onclick = () => paint('black');
const rainbowOption = document.getElementById('rainbow');
rainbowOption.onclick = () => paint('rainbow');

//Reset logic

function resetDrawingBox() {
  const drawingPixels = document.querySelectorAll('.drawing-pixel');
  for (let i = 0; i < drawingPixels.length; i++) {
    drawingPixels[i].style.backgroundColor = 'white';
  }
}

const resetButton = document.querySelector('.right-button');
resetButton.addEventListener('click', () => resetDrawingBox());

//Slider logic

const slider = document.getElementById('box-size');
const output = document.getElementById('demo');
output.innerHTML = '10x10';
slider.oninput = function() {
  output.innerHTML = `${this.value}x${this.value}`;
  resetDrawingBox();
  changeSize(this.value);
  paint('black');
}

