import {score, subscribeToScore} from '../../data/score/score.js';
import { subscribe } from '../../data/settings/newGameSettings.js';


export function renderGameScore(){

    subscribeToScore(()=>{
        container.innerHTML = '';
        update(container)
        
    })
    
    let container = document.createElement('div');
    container.classList.add('score-panel')
    
    update(container);
   
    return container;
}

function update(containerElement){
   
   return containerElement.append(`Catch:${score.catchCount} Miss: ${score.missCount}`);
   
}
    