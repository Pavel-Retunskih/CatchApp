import { subscribeToGameStatus } from "../data/gameStatuses/GameStatuses.js";
import { GameStartDialog } from "./GameStartDialog/gameStartDialog.js";
import { renderEndGameDialog } from "./WinLoseDialog/renderWinLoseDialog.js";
import { startNewGame } from "./startNewGame.js";

export function playTheGame() {
    subscribeToGameStatus(() => {
        GameStartDialog(container)
        startNewGame()
        renderEndGameDialog(container)
    })
    
    let container = document.createElement('div');
    container.classList.add('game-wrapp');

    GameStartDialog(container);
    return container;
}

