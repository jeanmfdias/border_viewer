import { Border } from "./border.js";
const inputTopRight = document.querySelector('#corner_top_right');
const inputTopLeft = document.querySelector('#corner_top_left');
const inputBottomRight = document.querySelector('#corner_bottom_right');
const inputBottomLeft = document.querySelector('#corner_bottom_left');
const divObjectFocus = document.querySelector('.object_focus');
const divClipboard = document.querySelector('.clipboard');
const border = new Border(1, 1, 1, 1);
function apply(event, _this) {
    const value = parseInt(_this.value);
    const local = _this.getAttribute('data-position');
    switch (local) {
        case 'top-left':
            border.setTopLeft(value);
            break;
        case 'top-right':
            border.setTopRight(value);
            break;
        case 'bottom-left':
            border.setBottomLeft(value);
            break;
        case 'bottom-right':
            border.setBottomRight(value);
            break;
    }
    const style = `
        border-top-left-radius: ${border.topLeft}px;
        border-top-right-radius: ${border.topRight}px;
        border-bottom-left-radius: ${border.bottomLeft}px;
        border-bottom-right-radius: ${border.bottomRight}px;
    `;
    divObjectFocus.setAttribute("style", style);
    divClipboard.innerHTML = style;
}
function copyToClipboard(event) {
    const copy = divClipboard.innerHTML;
    navigator.clipboard.writeText(copy);
}
inputTopLeft.addEventListener('change', event => apply(event, inputTopLeft));
inputTopRight.addEventListener('change', event => apply(event, inputTopRight));
inputBottomLeft.addEventListener('change', event => apply(event, inputBottomLeft));
inputBottomRight.addEventListener('change', event => apply(event, inputBottomRight));
divClipboard.addEventListener('click', event => copyToClipboard(event));
