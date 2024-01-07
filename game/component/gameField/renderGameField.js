import { createCell } from './createCell/createCell.js'
export function renderGameField() {
    let container = document.createElement('div');
    container.classList.add('game-field-wrapp');
    
    return container
}