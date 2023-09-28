// Declare input variables and default values

const DEFAULT_COLOR = '#242424';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'color';

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;


// Define functions for setting new values from input variables

function setNewColor(newColor) {
    currentColor = newColor;
};

function setNewSize(newSize) {
    currentSize = newSize;
};

function setMode(newMode) {
    currentMode = newMode;
};

// Create variables for page elements

const colorPicker = document.getElementById('color-picker');
const eraserBtn = document.getElementById('eraser-button');
const resetBtn = document.getElementById('reset-button');
const sizeSlider = document.getAnimations('size-slider');
const grid = document.getElementById('grid');

// Listen for inputs
colorPicker.oninput = (e) => setNewColor(e);
eraserBtn.onclick = () => setMode('erase');
resetBtn.onclick = () =>resetGrid();
sizeSlider.onmousemove = (e) => setNewSize(e.target.value);
sizeSlider.onchange = (e) => setNewSize(e.target.value);

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size, i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseover', changeColor);
        gridSquare.addEventListener('mousedown', changeColor);
        grid.appendChild(gridSquare);
    };
};

window.onload = () => {
    createGrid(DEFAULT_SIZE)
}