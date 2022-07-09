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

drawDrawingGrid(64);

function changeSize(size) {
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