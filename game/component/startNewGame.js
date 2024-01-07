import {newGame} from "../data/settings/newGameSettings.js";
import { renderGameField } from "./gameField/renderGameField.js";



export function startNewGame(){
    newGame();
    let container = document.createElement('div');
    container.classList.add('game-field-wrap');
    container.append(renderGameField())
    
    return container
}
