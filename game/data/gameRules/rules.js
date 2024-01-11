
import { subscribeToScore } from "../score/score.js";
import { GAME_STATUSES, endGameStatistic, newGameSettings,} from "../settings/newGameSettings.js";

export function win(){
    subscribeToScore(()=>{
        winlose()
    })
}

function winlose() {
    if(newGameSettings.gameStatus == GAME_STATUSES.win || newGameSettings.gameStatus == GAME_STATUSES.lose){
        renderEndGameDialog()
    }
    
}
function renderEndGameDialog(){
    let root = document.getElementById('root')
    root.innerHTML = '';
    const container = document.createElement('div');

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

    container.append(title)
    container.append(subTitle)
    container.append(resultsContainer)
    container.append(button)
    root.append(container)

    button.addEventListener('click', ()=>{
        
    })
    return root;
}



