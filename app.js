const grid = document.querySelector('.grid');
const size = document.querySelector('#grid-size');
const okBtn = document.querySelector('#ok');
const startOver = document.querySelector('#startOver');
const colors = document.querySelector('.colorOptions');
const black = document.querySelector('#blackButton');
const white = document.querySelector('#whiteButton');
const custom = document.querySelector('#custom');
let currentColor = 'blue';

// default grid is 16 x 16
for (i = 0; i < 256; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel')
    pixel.style.width = '34.375px';
    pixel.style.height = '34.375px';
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

function setToBlack() {
    if (document.getElementById('blackButton')) {
        currentColor = 'pixel-black';
        console.log('current color should be black');
        grid.addEventListener('click', draw);
    }
}

function setToGrey() {
    if (document.getElementById('greyButton')) {
        currentColor = 'pixel-grey';
        console.log('current color should be grey');
        grid.addEventListener('click', draw);
    }
}

function setToWhite() {
    if (document.getElementById('whiteButton')) {
        currentColor = 'pixel-white';
        console.log('current color should be white');
        grid.addEventListener('click', draw);
    }
}

function draw() {
    console.log(currentColor)

    grid.addEventListener('mouseover', startDrawing);
    grid.addEventListener('click', () => {
        grid.removeEventListener('mouseover', startDrawing);
    })
}

function startDrawing(e) {
    console.log('mouseover working');
    if (e.target.classList.contains('pixel')
        || e.target.classList.contains('pixel-black')
        || e.target.classList.contains('pixel-white')) {
        // e.target.classList.add(`${currentColor}`);
        e.target.classList.add(`${currentColor}`);
    }
}

// Add EL for clicking on Black Button
// Should set currentColor to Black 
black.addEventListener('click', setToBlack);
white.addEventListener('click', setToWhite);

grid.addEventListener('click', draw);


// newColor is changed to appropriate color 
// change color of pixel when mouse hovers
// function changeColor(newColor) {
//     grid.addEventListener('mouseover', function (e) {
//         console.log('mouseover added');
//         if (e.target.classList.contains('pixel')) {
//             e.target.classList.add(`${ newColor }`);
//         }
//     });
// }


// // when 'Black' clicked, class will change to .pixel-black
// black.addEventListener('click', () => {
//     let newColor = 'pixel-black';
//     console.log(newColor);
//     // drawing starts once any pixel is clicked in grid
//     grid.addEventListener('click', changeColor)
// });

// // when 'Grey' is clicked, class will change to .pixel-grey
// grey.addEventListener('click', () => {
//     let newColor = 'pixel-grey';
//     console.log(newColor);
//     grid.addEventListener('click', () => {
//         changeColor(newColor);
//     })
// });

// // when white is clicked, class will change to .pixel-white vb 
// white.addEventListener('click', () => {
//     let newColor = 'pixel-white';
//     console.log(newColor);
//     grid.addEventListener('click', () => {
//         changeColor(newColor);
//     })
// });

// when user clicks 'ok' button, a new grid will appear with 
// specified size
okBtn.addEventListener('click', () => {
    // clear the grid (remove children)
    clearGrid();
    // make new grid
    makeGrid(getNewSize());
});

// resets to 16x16 grid
startOver.addEventListener('click', () => {
    resetGrid();
});


