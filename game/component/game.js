import { renderSettings } from './settingsPanel/renderSettings.js'
import { renderGameScore } from './gameScore/renderGameScore.js'
import { startNewGame } from './startNewGame.js';

export function Game() {
    let settingsPanel = renderSettings();
    let gameScorePanel = renderGameScore();
    
    let container = document.createElement('div');
    let gameFieldContainer = document.createElement('div')

let startButton = document.createElement('button');
    startButton.append('START GAME');

    startButton.addEventListener('click', () => {
        gameFieldContainer.innerHTML='';
        gameFieldContainer.append(startNewGame());
    })

    container.classList.add('game-wrapp');
    container.append(settingsPanel);
    container.append(gameScorePanel);
    container.append(startButton);
    container.append(gameFieldContainer);

    return container;
}