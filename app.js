const grid = document.querySelector('.grid');
const size = document.querySelector('#grid-size');
const okBtn = document.querySelector('#ok');
const startOver = document.querySelector('#startOver');
const colors = document.querySelector('.colorOptions');
const black = document.querySelector('#black');
const grey = document.querySelector('#grey');
const white = document.querySelector('#white');
const custom = document.querySelector('#custom');



// default grid is 16 x 16
for (i = 0; i < 256; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel')
    pixel.style.width = '34.375px';
    pixel.style.height = '34.375px';
    grid.append(pixel);
}

// function for clear all divs out of grid box
function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

// function for resetting grid back to 16x16
function resetGrid() {
    clearGrid();
    makeGrid(16);
}

// function for getting new size from user input
function getNewSize() {
    let newSize = size.value;
    newSize = parseInt(newSize);
    return newSize
}

// make the new grid with newSize
function makeGrid(newSize) {
    // Pixel size
    let pixelWidth = 550 / newSize;
    let pixelHeight = 550 / newSize;
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

// when user clicks 'ok' button, a new grid will appear with 
// specified size
okBtn.addEventListener('click', () => {
    // clear the grid (remove children)
    clearGrid();
    // make new grid
    makeGrid(getNewSize());
});

startOver.addEventListener('click', () => {
    resetGrid();
});


colors.addEventListener('click', () => {

});

const squares = grid.children;
squares[0].addEventListener('click', () => {
    changeColor(black);
});

function changeColor(color) {
    squares[0].style.backgroundColor = `'${color}'`;
}