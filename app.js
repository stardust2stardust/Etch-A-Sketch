const grid = document.querySelector('.grid');
const size = document.querySelector('#grid-size');
const okBtn = document.querySelector('#ok');
const startOver = document.querySelector('#startOver');
const colors = document.querySelector('.colorOptions');
const black = document.querySelector('#blackButton');
const grey = document.querySelector('#greyButton');
const random = document.querySelector('#randomButton');
const erase = document.querySelector('#eraseButton')
let currentColor = '';

// default grid is 16 x 16
for (i = 0; i < 256; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel')
    pixel.style.width = '31.25px';
    pixel.style.height = '31.25px';
    grid.append(pixel);
}

// clear all divs out of grid box
function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

// reset grid back to 16x16
function resetGrid() {
    clearGrid();
    makeGrid(16);
}

// get new size from user input (max is 100)
function getNewSize() {
    let newSize = size.value;
    if (newSize > 100) {
        alert('Please enter a number less than 100.');
        resetGrid();
    }
    else {
        newSize = parseInt(newSize);
        return newSize
    }
}

// make the new grid with newSize
function makeGrid(newSize) {
    // Pixel size
    let pixelWidth = 500 / newSize;
    let pixelHeight = 500 / newSize;
    // Grid size
    grid.style["grid-template-columns"] = `repeat(${newSize}, ${pixelWidth}px)`;
    grid.style["grid-template-rows"] = `repeat(${newSize}, ${pixelHeight}px)`;
    for (i = 0; i < (newSize * newSize); i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel')
        pixel.style.width = `${pixelWidth}px`;
        pixel.style.height = `${pixelHeight}px`;
        grid.append(pixel);
    }
}


function setToBlack() {
    if (document.getElementById('blackButton')) {
        currentColor = 'black';
        draw();
    }
}


function setToGrey() {
    if (document.getElementById('greyButton')) {
        currentColor = 'grey';
        draw()
    }
}


function setToRandom() {
    if (document.getElementById('randomButton')) {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        currentColor = `rgb(${r}, ${g}, ${b})`;
        draw();
    }
}


function setToErase() {
    if (document.getElementById('eraseButton')) {
        currentColor = 'white';
        draw()
    }
}


function draw() {
    grid.addEventListener('mouseover', startDrawing);
}


function startDrawing(e) {
    if (e.target.classList.contains('pixel')) {
        e.target.style.backgroundColor = currentColor;
    }
}


// listeners for color buttons
black.addEventListener('click', setToBlack);
grey.addEventListener('click', setToGrey);
random.addEventListener('click', setToRandom)
erase.addEventListener('click', setToErase)


// when 'ok' button clicked, a new grid will appear with
// specified size
okBtn.addEventListener('click', () => {
    clearGrid();
    makeGrid(getNewSize());
});

// resets to 16x16 grid
startOver.addEventListener('click', () => {
    resetGrid();
    grid.removeEventListener('mouseover', startDrawing);
});


