import {score} from '../../data/score/score.js';
import { newGameSettings, subscribe } from '../../data/settings/newGameSettings.js';


export function renderGameScore(){

    subscribe(()=>{
        container.innerHTML = '';
        update(container)
        
    })
    
    let container = document.createElement('div');
    
    update(container);
   
    return container;
}

function update(containerElement){
   
   return containerElement.append(`Catch:${score.catchCount} Miss: ${score.missCount}`);
   
}
    