import { startGame } from "../../../../main.js";
import { score } from "../../../data/score/score.js";
import { newGameSettings } from "../../../data/settings/newGameSettings.js";

export function winDialogWindow(){
    let root = document.getElementById('root')
    root.innerHTML = '';
    const container = document.createElement('div');

    const title = document.createElement('h1');
    title.innerText = 'You Win!'

    const subTitle = document.createElement('p');
    subTitle.innerText = 'Congratulations';

    const resultsContainer = document.createElement('div');

    const catchContainer = document.createElement('div');
    const catchTitle = document.createElement('p')
    catchTitle.innerText = 'Catch:'
    const catchCount = document.createElement('p')
    catchCount.innerText = score.catchCount;
    catchContainer.append(catchTitle, catchCount);

    const missContainer = document.createElement('div');
    const missTitle = document.createElement('p')
    missTitle.innerText = 'Miss:'
    const missCount = document.createElement('p')
    missCount.innerText = score.missCount
    missContainer.append(missTitle, missCount);

    const totalTimeContainer = document.createElement('div');

    const totalTimeTitle = document.createElement('p')
    totalTimeTitle.innerText = 'Time:'
    const totalTimeCount = document.createElement('p')
    totalTimeCount.innerText = newGameSettings.fullGameTime
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
        startGame()
    })
    return root;
}
export function loseDialogWindow(){
    let root = document.getElementById('root')
    root.innerHTML = '';
    const container = document.createElement('div');

    const title = document.createElement('h1');
    title.innerText = 'You Lose!'

    const subTitle = document.createElement('p');
    subTitle.innerText = 'You\'ll be lucky next time';

    const resultsContainer = document.createElement('div');

    const catchContainer = document.createElement('div');
    const catchTitle = document.createElement('p')
    catchTitle.innerText = 'Catch:'
    const catchCount = document.createElement('p')
    catchCount.innerText = score.catchCount;
    catchContainer.append(catchTitle, catchCount);

    const missContainer = document.createElement('div');
    const missTitle = document.createElement('p')
    missTitle.innerText = 'Miss:'
    const missCount = document.createElement('p')
    missCount.innerText = score.missCount
    missContainer.append(missTitle, missCount);

    const totalTimeContainer = document.createElement('div');

    const totalTimeTitle = document.createElement('p')
    totalTimeTitle.innerText = 'Time:'
    const totalTimeCount = document.createElement('p')
    totalTimeCount.innerText = newGameSettings.fullGameTime
    totalTimeContainer.append(totalTimeTitle, totalTimeCount)
    
    
    resultsContainer.append(catchContainer, missContainer, totalTimeContainer)
    const button = document.createElement('button');
    button.innerText = 'Play again'
    

    container.append(title)
    container.append(subTitle)
    container.append(resultsContainer)
    container.append(button)
    root.append(container)
    button.addEventListener('click', ()=>{
        startGame()
    })
    return root;
}


