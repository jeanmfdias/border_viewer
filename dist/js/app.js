import { Border } from "./border.js";
const inputTopRightX = document.querySelector('#corner_top_right_x');
const inputTopRightY = document.querySelector('#corner_top_right_y');
const inputTopLeftX = document.querySelector('#corner_top_left_x');
const inputTopLeftY = document.querySelector('#corner_top_left_y');
const inputBottomRightX = document.querySelector('#corner_bottom_right_x');
const inputBottomRightY = document.querySelector('#corner_bottom_right_y');
const inputBottomLeftX = document.querySelector('#corner_bottom_left_x');
const inputBottomLeftY = document.querySelector('#corner_bottom_left_y');
const divObjectFocus = document.querySelector('.object_focus');
const divClipboard = document.querySelector('.clipboard');
const border = new Border(1, 1, 1, 1, 1, 1, 1, 1);
function apply(event, _this) {
    const value = parseInt(_this.value);
    const local = _this.getAttribute('data-position');
    switch (local) {
        case 'top-left-x':
            border.setTopLeftX(value);
            break;
        case 'top-left-y':
            border.setTopLeftY(value);
            break;
        case 'top-right-x':
            border.setTopRightX(value);
            break;
        case 'top-right-y':
            border.setTopRightY(value);
            break;
        case 'bottom-left-x':
            border.setBottomLeftX(value);
            break;
        case 'bottom-left-y':
            border.setBottomLeftY(value);
            break;
        case 'bottom-right-x':
            border.setBottomRightX(value);
            break;
        case 'bottom-right-y':
            border.setBottomRightY(value);
            break;
    }
    const style = `
        border-top-left-radius: ${border.topLeftX}px ${border.topLeftY}px;
        border-top-right-radius: ${border.topRightX}px ${border.topRightY}px;
        border-bottom-left-radius: ${border.bottomLeftX}px ${border.bottomLeftY}px;
        border-bottom-right-radius: ${border.bottomRightX}px ${border.bottomRightY}px;
    `;
    divObjectFocus.setAttribute("style", style);
    divClipboard.innerHTML = style;
}
function copyToClipboard(event) {
    const copy = divClipboard.innerHTML;
    navigator.clipboard.writeText(copy);
}
inputTopLeftX.addEventListener('change', event => apply(event, inputTopLeftX));
inputTopLeftY.addEventListener('change', event => apply(event, inputTopLeftY));
inputTopRightX.addEventListener('change', event => apply(event, inputTopRightX));
inputTopRightY.addEventListener('change', event => apply(event, inputTopRightY));
inputBottomLeftX.addEventListener('change', event => apply(event, inputBottomLeftX));
inputBottomLeftY.addEventListener('change', event => apply(event, inputBottomLeftY));
inputBottomRightX.addEventListener('change', event => apply(event, inputBottomRightX));
inputBottomRightY.addEventListener('change', event => apply(event, inputBottomRightY));
divClipboard.addEventListener('click', event => copyToClipboard(event));
