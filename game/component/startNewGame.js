import { win } from "../data/gameRules/rules.js";
import { GAME_STATUSES } from "../data/gameStatuses/GameStatuses.js";
import { newGame } from "../data/settings/newGameSettings.js";
import { renderGameField } from "./gameField/renderGameField.js";
import { renderGameScore } from "./gameScore/renderGameScore.js";


export function startNewGame() {
    if (GAME_STATUSES.curent == GAME_STATUSES.play) {
        let gameFieldContainer = document.getElementById('game-field-wrap')
        let score = renderGameScore()

        gameFieldContainer.innerHTML = ''
        gameFieldContainer.append(score)
        win()
        newGame();
        let gameField = renderGameField()
        return gameFieldContainer.append(gameField)
    }
}
