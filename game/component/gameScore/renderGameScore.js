import { GAME_STATUSES } from '../../data/gameStatuses/GameStatuses.js';
import {score, subscribeToScore} from '../../data/score/score.js';


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
   if(GAME_STATUSES.curent == GAME_STATUSES.start){
    score.catchCount = 0
    score.missCount = 0
   }
   return containerElement.append(`Catch: ${score.catchCount} Miss: ${score.missCount}`);
   
}
    