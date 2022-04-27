const grid = document.querySelector('.grid');
const size = document.querySelector('#grid-size');
const okBtn = document.querySelector('#ok');
const startOver = document.querySelector('#startOver');
const colors = document.querySelector('.colorOptions');
const black = document.querySelector('#blackButton');
const grey = document.querySelector('#greyButton');
const random = document.querySelector('#randomButton');
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

// get new size from user input
function getNewSize() {
    let newSize = size.value;
    newSize = parseInt(newSize);
    return newSize
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
        console.log(`current color should be ${currentColor}`);
        grid.addEventListener('click', draw);
    }
}

function setToGrey() {
    if (document.getElementById('greyButton')) {
        currentColor = 'grey';
        console.log(`current color should be ${currentColor}`);
        grid.addEventListener('click', draw);

    }
}

function setToRandom() {
    if (document.getElementById('rainbowButton')) {
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        currentColor = `rgb(${r}, ${g}, ${b})`
        console.log(`current color should be ${currentColor}`);
    }

}

function draw() {
    console.log(currentColor)
    grid.addEventListener('mouseover', startDrawing);
    // grid.addEventListener('click', () => {
    //     grid.removeEventListener('mouseover', startDrawing);
    // })
}


function startDrawing(e) {
    console.log('mouseover working');

    if (e.target.classList.contains('pixel')) {
        e.target.style.backgroundColor = currentColor;
    }
}

// listeners for color buttons
black.addEventListener('click', setToBlack);
grey.addEventListener('click', setToGrey);
random.addEventListener('click', setToRandom)

// listener for grid drawing area
// grid.addEventListener('click', draw);



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


