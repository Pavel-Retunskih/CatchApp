import { getNewGameSettigs, notifySubscriber } from "../data/settings/newGameSettings.js";
import { renderGameField } from "./gameField/renderGameField.js";



export function startNewGame(){
    getNewGameSettigs()
    let container = document.createElement('div');
    container.classList.add('game-field-wrap')
    container.innerHTML = '';
    
    
    container.append(renderGameField())
    return container
}
