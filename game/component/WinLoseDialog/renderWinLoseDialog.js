import { endGameStatistic } from "../../data/gameRules/rules.js";
import { GAME_STATUSES, changeGameStatus } from "../../data/gameStatuses/GameStatuses.js";

export function renderEndGameDialog(container) {
    let isGameStatusWinOrLose = GAME_STATUSES.curent == GAME_STATUSES.win || GAME_STATUSES.curent == GAME_STATUSES.lose
    if (isGameStatusWinOrLose) {
        container.innerHTML='';

        const dialogContainer = document.createElement('div');
        dialogContainer.classList.add('dialog-wrapp')

        let dialogImgContainer = document.createElement('div');
        dialogImgContainer.classList.add('dialog-img-container')
        
        let dialogImg = document.createElement('img');
        dialogImgContainer.append(dialogImg);

        if(GAME_STATUSES.curent == GAME_STATUSES.win){
            dialogImg.src='./game/component/img/win.png'
        }
        if(GAME_STATUSES.curent == GAME_STATUSES.lose){
            dialogImg.src='./game/component/img/lose.png'
        }

        const title = document.createElement('h1');
        title.classList.add('dialog-title')
        title.innerText = endGameStatistic.title

        const subTitle = document.createElement('p');
        subTitle.classList.add('dialog-subtitle')
        subTitle.innerText = endGameStatistic.subtitle

        const resultsContainer = document.createElement('div');
        resultsContainer.classList.add('result-container')

        const catchContainer = document.createElement('div');
        catchContainer.classList.add('dialog-catch-container')
        const catchTitle = document.createElement('p')
        catchTitle.innerText = 'Catch:'
        const catchCount = document.createElement('span')
        catchCount.innerText = endGameStatistic.score.catchCount;
        catchContainer.append(catchTitle, catchCount);

        const missContainer = document.createElement('div');
        missContainer.classList.add('dialog-miss-container')
        const missTitle = document.createElement('p')
        missTitle.innerText = 'Miss:'
        const missCount = document.createElement('span')
        missCount.innerText = endGameStatistic.score.missCount
        missContainer.append(missTitle, missCount);

        const totalTimeContainer = document.createElement('div');
        totalTimeContainer.classList.add('dialog-time-container')
        const totalTimeTitle = document.createElement('p')
        totalTimeTitle.innerText = 'Time:'
        const totalTimeCount = document.createElement('span')
        totalTimeCount.innerText = endGameStatistic.fullGameTime
        totalTimeContainer.append(totalTimeTitle, totalTimeCount)

        const button = document.createElement('button');
        button.classList.add('replay-button')
        button.innerText = 'Play again'


        resultsContainer.append(catchContainer, missContainer, totalTimeContainer)

        dialogContainer.append(dialogImgContainer)
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