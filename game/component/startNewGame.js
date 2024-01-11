import { win } from "../data/gameRules/rules.js";
import { GAME_STATUSES } from "../data/gameStatuses/GameStatuses.js";
import { newGame } from "../data/settings/newGameSettings.js";
import { renderGameField } from "./gameField/renderGameField.js";


export function startNewGame(container) {
    if (GAME_STATUSES.curent == GAME_STATUSES.play) {
        let container = document.getElementById('game-field-wrap')
        container.innerHTML = ''
        win()
        newGame();
        let gameField = renderGameField()
        return container.append(gameField)
    }
}
