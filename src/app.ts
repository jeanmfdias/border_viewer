import { Border } from "./border.js";

const inputTopRight: HTMLInputElement = document.querySelector('#corner_top_right');
const inputTopLeft: HTMLInputElement = document.querySelector('#corner_top_left');
const inputBottomRight: HTMLInputElement = document.querySelector('#corner_bottom_right');
const inputBottomLeft: HTMLInputElement = document.querySelector('#corner_bottom_left');
const divObjectFocus: HTMLDivElement = document.querySelector('.object_focus');

const border = new Border(1, 1, 1, 1);

function apply(event: Event, _this: HTMLInputElement) {
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
}

inputTopLeft.addEventListener('change', event => apply(event, inputTopLeft));
inputTopRight.addEventListener('change', event => apply(event, inputTopRight));
inputBottomLeft.addEventListener('change', event => apply(event, inputBottomLeft));
inputBottomRight.addEventListener('change', event => apply(event, inputBottomRight));