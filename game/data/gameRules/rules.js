import { score, subscribeToScore } from "../score/score.js";
import { getFullGameTime, newGameSettings, stopGame, } from "../settings/newGameSettings.js";

export function win() {
    subscribeToScore(() => {
        winlose()
        gameResult(score)
    })
}

export const GAME_STATUSES = {
    start: 'start',
    play: 'play',
    lose: 'lose',
    win: 'win',
    curent: 'start'
}

function winlose() {
    if (newGameSettings.gameStatus == GAME_STATUSES.win || newGameSettings.gameStatus == GAME_STATUSES.lose) {
        stopGame()
    }

}


function gameResult(score) {
    if (score.catchCount == newGameSettings.winPoints.points) {
        const title = 'You Win!';
        const messadge = 'Congratulations';
        newGameSettings.gameStatus = GAME_STATUSES.win;
        setEndGameStatistic(endGameStatistic, title, messadge)
        renderEndGameDialog()
    } else if (score.missCount == newGameSettings.misses) {
        const title = 'You Lose!';
        const messadge = 'You\'ll be lucky next time';
        newGameSettings.gameStatus = GAME_STATUSES.lose;
        setEndGameStatistic(endGameStatistic, title, messadge)
        renderEndGameDialog()
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

function renderEndGameDialog() {
    const root = document.getElementById('root')
    root.innerHTML = '';
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-wrapp');

    const dialogContainer = document.createElement('div');
    dialogContainer.classList.add('dialog-wrapp')

    const title = document.createElement('h1');
    title.innerText = endGameStatistic.title

    const subTitle = document.createElement('p');
    subTitle.innerText = endGameStatistic.subtitle

    const resultsContainer = document.createElement('div');

    const catchContainer = document.createElement('div');
    const catchTitle = document.createElement('p')
    catchTitle.innerText = 'Catch:'
    const catchCount = document.createElement('p')
    catchCount.innerText = endGameStatistic.score.catchCount;
    catchContainer.append(catchTitle, catchCount);

    const missContainer = document.createElement('div');
    const missTitle = document.createElement('p')
    missTitle.innerText = 'Miss:'
    const missCount = document.createElement('p')
    missCount.innerText = endGameStatistic.score.missCount
    missContainer.append(missTitle, missCount);

    const totalTimeContainer = document.createElement('div');

    const totalTimeTitle = document.createElement('p')
    totalTimeTitle.innerText = 'Time:'
    const totalTimeCount = document.createElement('p')
    totalTimeCount.innerText = endGameStatistic.fullGameTime
    totalTimeContainer.append(totalTimeTitle, totalTimeCount)

    const button = document.createElement('button');
    button.innerText = 'Play again'


    resultsContainer.append(catchContainer, missContainer, totalTimeContainer)

    dialogContainer.append(title)
    dialogContainer.append(subTitle)
    dialogContainer.append(resultsContainer)
    dialogContainer.append(button)
    gameContainer.append(dialogContainer)
    root.append(gameContainer)

    button.addEventListener('click', () => {
        startNewGame()
    })
    return root;
}