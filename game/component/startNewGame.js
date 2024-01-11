import { win } from "../data/gameRules/rules.js";
import {newGame} from "../data/settings/newGameSettings.js";
import { renderGameField } from "./gameField/renderGameField.js";


export function startNewGame(){
    win()
    newGame();
    let container = document.querySelector('.game-field-wrap');
    let gameField = renderGameField()
    container.append(gameField)
    
    return container
}
