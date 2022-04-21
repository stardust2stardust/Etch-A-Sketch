const grid = document.querySelector('.grid');
const size = document.querySelector('#grid-size');
const okBtn = document.querySelector('#ok');

// need to access grid attributes and change with user input
grid.style["grid-template-columns"] = "repeat(16, 31.25px)";
grid.style["grid-template-rows"] = "repeat(16, 31.25px)";



okBtn.addEventListener('click', () => {
    let newSize = parseInt(size.value);
    console.log(newSize);
    let width = 500 / newSize;
    let height = 500 / newSize;
    for (i = 0; i < newSize; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel')
        pixel.style.width = `${width}px`;
        pixel.style.height = `${height}px`;
        grid.append(pixel);
        console.log('pixel added')
    }

})




