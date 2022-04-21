const grid = document.querySelector('#grid');
const size = document.querySelector('#grid-size');
const okBtn = document.querySelector('#ok');



function makePixels(num) {
    for (i = 0; i < num; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel')
        pixel.style.width = `${width}px`;
        pixel.style.height = `${height}px`;
        grid.append(pixel);
        console.log('pixel added')
    }
}

okBtn.addEventListener('click', () => {
    let newSize = parseInt(size.value);
    console.log(newSize);
    let width = 500 / newSize;
    let height = 500 / newSize;
    makePixels(newSize);

})





