import {renderSettings} from './settingsPanel/renderSettings.js'
import {renderGameField} from './gameField/renderGameField.js'
import {renderGameScore} from './gameScore/renderGameScore.js'

export function Game() {
    let settingsPanel = renderSettings();
    let gameScorePanel = renderGameScore();
    let gameField = renderGameField();

    let container = document.createElement('div');
    container.classList.add('game-wrapp');
    container.append(settingsPanel);
    container.append(gameScorePanel);
    container.append(gameField);
    return container;
}