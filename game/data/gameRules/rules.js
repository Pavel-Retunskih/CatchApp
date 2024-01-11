import { GAME_STATUSES, changeGameStatus } from "../gameStatuses/GameStatuses.js";
import { score, subscribeToScore } from "../score/score.js";
import { getFullGameTime, newGameSettings, stopGame, } from "../settings/newGameSettings.js";

export function win() {
    subscribeToScore(() => {
        winlose()
        gameResult(score)
    })
}



function winlose() {
    if (GAME_STATUSES.curent == GAME_STATUSES.win || GAME_STATUSES.curent == GAME_STATUSES.lose) {
        stopGame()
    }

}


function gameResult(score) {
    if (score.catchCount == newGameSettings.winPoints.points) {
        const title = 'You Win!';
        const messadge = 'Congratulations';
        setEndGameStatistic(endGameStatistic, title, messadge)
        changeGameStatus(GAME_STATUSES.win);
    } else if (score.missCount == newGameSettings.misses) {
        const title = 'You Lose!';
        const messadge = 'You\'ll be lucky next time';
        setEndGameStatistic(endGameStatistic, title, messadge)
        changeGameStatus(GAME_STATUSES.lose);
    }
}

export const endGameStatistic = {};

function setEndGameStatistic(obj, title, messadge) {
    obj.fullGameTime = getFullGameTime();
    obj.score = { ...score }
    obj.title = title
    obj.subtitle = messadge
    return obj
}

