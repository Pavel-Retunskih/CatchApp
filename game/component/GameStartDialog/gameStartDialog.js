import { GAME_STATUSES } from "../../data/gameStatuses/GameStatuses.js";
import { renderGameScore } from "../gameScore/renderGameScore.js";
import { renderSettings } from "../settingsPanel/renderSettings.js";
import { startNewGame } from "../startNewGame.js";

export function GameStartDialog(container) {
    if (GAME_STATUSES.curent == GAME_STATUSES.start) {
        container.innerHTML = '';
        let settingsPanel = renderSettings();
        let gameScorePanel = renderGameScore();

        let gameFieldContainer = document.createElement('div');
        gameFieldContainer.classList.add('game-field-wrap');

        let startButton = document.createElement('button');
        startButton.append('START GAME');

        startButton.addEventListener('click', () => {
            startButton.style.display = 'none'
            startNewGame()
        })


        container.append(settingsPanel);
        container.append(gameScorePanel);
        container.append(startButton);
        container.append(gameFieldContainer);
        console.log(GAME_STATUSES.curent);
        return container;
    }

}