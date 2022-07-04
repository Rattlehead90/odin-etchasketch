//Create 16x16 grid in the drawing box
const drawingBox = document.querySelector('.drawing-box');

function drawDrawingGrid(rows, cols) {
    drawingBox.style.setProperty('--grid-rows', rows);
    drawingBox.style.setProperty('--grid-cols', cols);
    for (i = 0; i < rows*cols; i++) {
        let drawingPixel = document.createElement('div');
        drawingPixel.innerText = i + 1;
        drawingBox.appendChild(drawingPixel).className = 'drawing-pixel';
    }
}

drawDrawingGrid(16, 16);