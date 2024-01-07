import { createCell } from './createCell/createCell.js'
import { newGameSettings } from '../../data/settings/newGameSettings.js';
export function renderGameField() {
    let container = document.createElement('div');
    container.classList.add('game-field');
    for (let y = 0; y < newGameSettings.grid.y; y++) {
        let row = document.createElement('div')
        row.classList.add('row')
        container.append(row)
        for (let x = 0; x < newGameSettings.grid.x; x++) {
            row.append(createCell())
        }
    }
    return container
}