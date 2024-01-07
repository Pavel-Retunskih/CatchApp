import { renderSettings } from './settingsPanel/renderSettings.js'
import { renderGameScore } from './gameScore/renderGameScore.js'
import { renderGameField } from './gameField/renderGameField.js'
import { getNewGameSettigs } from '../data/settings/newGameSettings.js';
import {startNewGame} from './startNewGame.js'
export function Game() {
    let settingsPanel = renderSettings();
    let gameScorePanel = renderGameScore();
    let gameField = renderGameField();
    
    let container = document.createElement('div');



let startButton = document.createElement('button');
    startButton.append('START GAME');

    startButton.addEventListener('click', () => {
        let newGameSettings =  getNewGameSettigs()
        startNewGame(newGameSettings)
    })

    container.classList.add('game-wrapp');
    container.append(settingsPanel);
    container.append(gameScorePanel);
    container.append(gameField);
    container.append(startButton);

    return container;
}