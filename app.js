const grid = document.querySelector('.grid');
const size = document.querySelector('#grid-size');
const okBtn = document.querySelector('#ok');

// default grid is 16 x 16
for (i = 0; i < 256; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel')
    pixel.style.width = '43.75'
    pixel.style.height = '43.75px';
    grid.append(pixel);

}



// need to access grid attributes and change with user input



// when user clicks 'ok' button, a new grid will appear with 
// specified size
okBtn.addEventListener('click', () => {
    // clear the grid (remove children)
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    let newSize = size.value;
    newSize = parseInt(newSize);

    // Pixel size
    let pixelWidth = 700 / newSize;
    let pixelHeight = 700 / newSize;
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

})




