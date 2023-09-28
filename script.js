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
