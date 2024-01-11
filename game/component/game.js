import { renderSettings } from './settingsPanel/renderSettings.js'
import { renderGameScore } from './gameScore/renderGameScore.js'
import { startNewGame } from './startNewGame.js';

export function Game() {
    let settingsPanel = renderSettings();
    let gameScorePanel = renderGameScore();
    
    let container = document.createElement('div');
    container.classList.add('game-wrapp');
    let gameFieldContainer = document.createElement('div');
    gameFieldContainer.classList.add('game-field-wrap');

let startButton = document.createElement('button');
    startButton.append('START GAME');

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none'
        startNewGame();
    })

    
    container.append(settingsPanel);
    container.append(gameScorePanel);
    container.append(startButton);
    container.append(gameFieldContainer);

    return container;
}