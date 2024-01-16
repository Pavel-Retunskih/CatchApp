import { GAME_STATUSES, changeGameStatus } from "../../data/gameStatuses/GameStatuses.js";
import { renderSettings } from "../settingsPanel/renderSettings.js";

export function GameStartDialog(container) {
    if (GAME_STATUSES.curent == GAME_STATUSES.start) {
        container.innerHTML = '';
        let settingsPanel = renderSettings();
        

        let gameFieldContainer = document.createElement('div');
        gameFieldContainer.setAttribute('id', 'game-field-wrap');

        let startButton = document.createElement('button');
        startButton.classList.add('start-button')
        startButton.append('START GAME');

        startButton.addEventListener('click', () => {
            startButton.style.display = 'none'
            changeGameStatus(GAME_STATUSES.play)
        })


        container.append(settingsPanel);
    
        container.append(startButton);
        container.append(gameFieldContainer);
        return container;
    }

}