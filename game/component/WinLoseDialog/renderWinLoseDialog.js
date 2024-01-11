import { endGameStatistic } from "../../data/gameRules/rules.js";
import { GAME_STATUSES, changeGameStatus } from "../../data/gameStatuses/GameStatuses.js";

export function renderEndGameDialog(container) {
    let isGameStatusWinOrLose = GAME_STATUSES.curent == GAME_STATUSES.win || GAME_STATUSES.curent == GAME_STATUSES.lose
    if (isGameStatusWinOrLose) {
        container.innerHTML='';

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
        container.append(dialogContainer)

        button.addEventListener('click', () => {
            changeGameStatus(GAME_STATUSES.start)
        })
        return container;
    }
}