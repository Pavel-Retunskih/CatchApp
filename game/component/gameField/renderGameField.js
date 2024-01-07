import { createCell } from './createCell/createCell.js'
import { newGameSettings } from '../../data/settings/newGameSettings.js';
export function renderGameField() {
    let container = document.createElement('div');
    container.classList.add('game-field-wrapp');
    for (let y = 0; y < newGameSettings.grid.y; y++) {
        let row = document.createElement('div')
        container.append(row)
        for (let x = 0; x < newGameSettings.grid.x; y++) {
            row.append(createCell())
        }
    }
    return container
}