import { subscribeToGameStatus } from "../data/gameStatuses/GameStatuses.js";
import { GameStartDialog } from "./GameStartDialog/gameStartDialog.js";
import { renderEndGameDialog } from "./WinLoseDialog/renderWinLoseDialog.js";
import { renderGameScore } from "./gameScore/renderGameScore.js";
import { startNewGame } from "./startNewGame.js";

export function playTheGame() {
    subscribeToGameStatus(() => {
        GameStartDialog(container)
        renderGameScore(container)
        startNewGame(container)
        renderEndGameDialog(container)
    })
    
    let container = document.createElement('div');
    container.setAttribute('id','game-wrapp');

    GameStartDialog(container);
    return container;
}

