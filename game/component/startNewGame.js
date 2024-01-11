import {newGame} from "../data/settings/newGameSettings.js";
import { renderGameField } from "./gameField/renderGameField.js";
import { win } from "../data/gameRules/rules.js";


export function startNewGame(){
    newGame();
    win()
    let container = document.querySelector('.game-field-wrap');
    let gameField = renderGameField()
    container.append(gameField)
    
    return container
}
